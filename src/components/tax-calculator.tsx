"use client";
import React, { useState } from "react";
import { taxExemptionTiers } from "@/data/site";
import { ShieldCheck, ArrowRight, HelpCircle, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function TaxCalculator({ variant = "standard" }: { variant?: "standard" | "warm" | "minimal" }) {
  const [selectedRating, setSelectedRating] = useState<number>(100);
  const [homeValue, setHomeValue] = useState<number>(350000);

  const getTier = (rating: number) => {
    if (rating === 100) return taxExemptionTiers[0];
    if (rating >= 70) return taxExemptionTiers[1];
    if (rating >= 50) return taxExemptionTiers[2];
    if (rating >= 30) return taxExemptionTiers[3];
    return taxExemptionTiers[4];
  };

  const currentTier = getTier(selectedRating);

  // Approximate average Texas property tax rate ~2.1%
  const estimatedTaxSavings = () => {
    if (selectedRating === 100) {
      return Math.round(homeValue * 0.021);
    }
    const deduction =
      selectedRating >= 70 ? 12000 : selectedRating >= 50 ? 10000 : selectedRating >= 30 ? 7500 : 5000;
    return Math.round(deduction * 0.021);
  };

  const isWarm = variant === "warm";

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 transition-all border shadow-lg ${
        isWarm
          ? "bg-[#FCFAF7] border-amber-200 text-slate-900"
          : "bg-white border-slate-200/90 text-slate-900"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6 mb-6 border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-100 text-amber-900 mb-2">
            <ShieldCheck className="w-4 h-4 text-amber-700" /> Texas Veteran Property Tax Exemption
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold font-serif text-slate-950">
            Texas Homestead Tax Relief Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-sans">
            Texas Tax Code Section 11.131 &amp; Form 50-114 filing eligibility guide
          </p>
        </div>
        <div className="sm:text-right sm:border-l sm:pl-6 border-slate-200">
          <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
            Estimated Annual Savings
          </span>
          <span className="text-3xl sm:text-4xl font-extrabold text-amber-600 font-serif">
            ${estimatedTaxSavings().toLocaleString()}
            <span className="text-xs font-normal text-slate-500 font-sans"> / year*</span>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Select Your VA Disability Rating:{" "}
              <span className="text-amber-700 font-extrabold text-sm font-mono">
                {selectedRating === 100 ? "100% P&T" : `${selectedRating}%`}
              </span>
            </label>
            <div className="grid grid-cols-5 gap-2">
              {[10, 30, 50, 70, 100].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => setSelectedRating(rating)}
                  className={`py-2 px-2 text-xs font-bold rounded-xl transition-all ${
                    selectedRating === rating
                      ? "bg-slate-900 text-white shadow-md scale-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {rating === 100 ? "100% P&T" : `${rating}%`}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                2. Approximate Home Market Value:
              </label>
              <span className="text-sm font-extrabold text-slate-900 font-mono">
                ${homeValue.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="100000"
              max="1200000"
              step="25000"
              value={homeValue}
              onChange={(e) => setHomeValue(Number(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
              <span>$100,000</span>
              <span>$500,000</span>
              <span>$1,200,000+</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1">
            <p className="font-bold flex items-center gap-1.5 text-amber-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" /> Texas Law Protects You
            </p>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              Form 50-114 must be filed with your local County Appraisal District (e.g. Dallas CAD, Tarrant CAD). BZ Homefront assists with the entire filing packet for free.
            </p>
          </div>
        </div>

        <div className="rounded-xl p-5 border border-slate-200 bg-slate-50/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                Qualifying Benefit Tier
              </span>
              {selectedRating === 100 && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  FULL 100% HOMESTEAD WAIVER
                </span>
              )}
            </div>
            <h4 className="text-base sm:text-lg font-bold text-slate-950 font-serif">
              {currentTier.exemption}
            </h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{currentTier.note}</p>

            <div className="mt-4 pt-3 border-t border-slate-200 space-y-2 text-xs text-slate-700">
              <p className="flex items-start gap-2">
                <FileText className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                <span>Required: VA Disability Rating Letter + Texas Form 50-114</span>
              </p>
              <p className="flex items-start gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                <span>Surviving spouses of qualifying veterans also maintain 100% exemption eligibility.</span>
              </p>
            </div>
          </div>

          <div className="mt-5 pt-3">
            <Link
              href="/contact?subject=PropertyTaxExemptionAssistance"
              className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white transition-colors shadow-sm"
            >
              <span>Get Free Filing Assistance</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

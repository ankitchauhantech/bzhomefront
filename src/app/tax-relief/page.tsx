"use client";
import React from "react";
import Link from "next/link";
import { useLayout } from "@/context/layout-context";
import { site, taxExemptionTiers } from "@/data/site";
import {
  Home,
  ShieldCheck,
  Check,
  ArrowRight,
  PhoneCall,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
} from "lucide-react";

export default function TaxReliefPage() {
  const { activeLayout } = useLayout();

  /* ========================================================
     LAYOUT 3 VARIATION (Heritage Legal Chronicle - Property Tax Code)
     ======================================================== */
  if (activeLayout === 3) {
    return (
      <div className="bg-[#FAF7F2] text-slate-900 min-h-screen py-16 font-serif">
        <div className="container px-4 max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-3 border-b-2 border-stone-800 pb-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-red-900">
              Statutory Benefits Publication • Layout 3
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-stone-950 uppercase tracking-tight">
              Texas Tax Code § 11.131
            </h1>
            <p className="text-stone-700 italic text-sm sm:text-base max-w-2xl mx-auto">
              100% Homestead Property Tax Exemption Guidelines for Disabled Servicemembers and Surviving Spouses.
            </p>
          </div>

          {/* Tiers Breakdown Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {taxExemptionTiers.map((tier, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border-2 border-stone-300 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-red-900 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                    {tier.rating}
                  </span>
                  <h3 className="text-lg font-bold font-serif text-stone-950">{tier.exemption}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{tier.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Filing Instructions Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-stone-300 shadow-sm space-y-6 font-sans">
            <h3 className="text-2xl font-bold font-serif text-stone-950">
              How To File Under Texas Comptroller Form 50-114
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-xs text-stone-700">
              <div className="space-y-2 p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-bold text-stone-900 block text-sm">Step 1: VA Summary Letter</span>
                <p>Download your official VA Benefits Summary letter showing 100% P&amp;T or Individual Unemployability.</p>
              </div>
              <div className="space-y-2 p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-bold text-stone-900 block text-sm">Step 2: Complete Form 50-114</span>
                <p>Attach your Texas driver license matching the primary homestead physical address.</p>
              </div>
              <div className="space-y-2 p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-bold text-stone-900 block text-sm">Step 3: Submit to County</span>
                <p>Submit to Dallas County Appraisal District (DCAD) or local county by April 30th deadline.</p>
              </div>
            </div>
            <div className="pt-2 text-center">
              <Link
                href="/contact?subject=PropertyTaxForm50114"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-stone-950 text-white hover:bg-stone-800 transition-colors shadow"
              >
                <span>Request BZ Advocate for Tax Filing Assistance</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ========================================================
     LAYOUT 2 VARIATION (Vanguard Editorial Tax Relief Guide)
     ======================================================== */
  if (activeLayout === 2) {
    return (
      <div className="bg-white text-slate-900 min-h-screen py-16 font-sans">
        <div className="container px-4 max-w-6xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 inline-flex items-center gap-2">
              <Home className="w-4 h-4 text-amber-700" /> Texas Law • Form 50-114 Guidance
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-serif text-slate-950 leading-tight">
              100% Texas Disabled Veteran Homestead Tax Exemption
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Under Texas Tax Code Section 11.131, veterans awarded a 100% disability rating by the VA (or receiving 100% compensation due to individual unemployability) are entitled to a total exemption from all property taxes on their primary residence.
            </p>
          </div>

          {/* Tiers Breakdown Table / Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {taxExemptionTiers.map((tier, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded">
                    {tier.rating}
                  </span>
                  <h3 className="text-lg font-bold font-serif text-slate-950">
                    {tier.exemption}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tier.note}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 text-xs font-bold text-amber-800">
                  Texas Tax Code Verified ✓
                </div>
              </div>
            ))}
          </div>

          {/* Step-by-Step Filing Procedure */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
            <h2 className="text-2xl font-bold font-serif text-slate-950">
              How Bravo Zulu Assists Your County Appraisal Filing:
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-xs text-slate-700">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                <span className="w-7 h-7 rounded-full bg-slate-950 text-white font-bold flex items-center justify-center">1</span>
                <h4 className="font-bold text-sm text-slate-900">VA Summary Letter Verification</h4>
                <p className="text-slate-600 leading-relaxed">
                  We help retrieve your official VA commissary and disability rating summary letters verifying 100% P&amp;T or unemployability status.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                <span className="w-7 h-7 rounded-full bg-slate-950 text-white font-bold flex items-center justify-center">2</span>
                <h4 className="font-bold text-sm text-slate-900">Texas Form 50-114 Preparation</h4>
                <p className="text-slate-600 leading-relaxed">
                  Our intake officers review and complete the Texas Comptroller Residence Homestead Exemption Application (Form 50-114) with accuracy.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                <span className="w-7 h-7 rounded-full bg-slate-950 text-white font-bold flex items-center justify-center">3</span>
                <h4 className="font-bold text-sm text-slate-900">Appraisal District Submission</h4>
                <p className="text-slate-600 leading-relaxed">
                  We submit or accompany you to the Dallas, Tarrant, Collin, or Denton County appraisal district office to ensure approval.
                </p>
              </div>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white space-y-4 shadow-xl">
            <h3 className="text-2xl font-bold font-serif text-white">
              Questions Regarding Your Primary Residence in Texas?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Connect with our veteran officers at 3225 Martin Luther King Jr. Blvd, Suite 130 in Dallas, TX. Services are 100% free of charge.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact?subject=PropertyTaxForm50114"
                className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950"
              >
                Request Free Tax Intake
              </Link>
              <a
                href="tel:4692684147"
                className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                Call Hotline: (469) 268-4147
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ========================================================
     LAYOUT 1 VARIATION (Classic Showcase Tax Relief Guide)
     ======================================================== */
  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen py-16 font-sans">
      <div className="container px-4 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Home className="w-4 h-4 text-amber-700" /> Texas Law Exemption Portal
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-slate-950">
            Texas Veteran Property Tax Exemptions
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Guidance on Texas Comptroller Form 50-114 for 100% disabled veteran homestead exemptions, partial percentage assessed value waivers, and surviving spouse protections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {taxExemptionTiers.map((tier, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                  {tier.rating}
                </span>
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-950">
                {tier.exemption}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {tier.note}
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-800">
                <span>Free Filing Assistance</span>
                <Link href="/contact?subject=PropertyTax" className="hover:underline">
                  Apply with BZ Officer →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Free Intake Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold font-serif text-slate-950">
            Need Direct Help with County Appraisal Districts?
          </h3>
          <p className="text-sm text-slate-600">
            Our officers handle Dallas, Tarrant, Collin, and Denton County filings regularly.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?subject=PropertyTaxForm50114"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-950 text-white hover:bg-slate-800 transition-colors shadow"
            >
              <span>Schedule Free Exemption Intake</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


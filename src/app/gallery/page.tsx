"use client";
import React, { useState } from "react";
import { galleryImages } from "@/data/site";
import { Camera, ArrowRight, ShieldCheck, Sparkles, Filter, Film } from "lucide-react";
import Link from "next/link";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { useLayout } from "@/context/layout-context";

export default function Gallery() {
  const { activeLayout } = useLayout();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Heritage", "Community", "Youth", "Welfare"];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  /* ========================================================
     LAYOUT 2 VARIATION (Vanguard Editorial Gallery)
     ======================================================== */
  if (activeLayout === 2) {
    return (
      <div className="bg-white text-slate-900 min-h-screen py-16 font-sans">
        <div className="container px-4 max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 inline-flex items-center gap-2">
              <Camera className="w-4 h-4 text-amber-700" /> Layout 2 Community Archive
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-serif text-slate-950 leading-tight">
              Living History &amp; Field Operations Photo Archive
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Official photographic documentation of Bravo Zulu Homefront Alliance programs: honoring fallen heroes, mentoring youth cadets at Camp Fort 24th, and riding with the Dallas County Buffalo Soldiers.
            </p>
          </div>

          {/* 4-Column Lightbox Gallery (no title on hover, opens popup on click) */}
          <div className="pt-2">
            <LightboxGallery images={galleryImages} columns={4} />
          </div>

          {/* Media Liaison Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white space-y-4 shadow-xl">
            <div className="max-w-2xl space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded">
                Alliance Media Archive
              </span>
              <h3 className="text-2xl font-bold font-serif text-white">
                Contribute Photos or Historical Records
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Do you have historical photographs of Dallas-area veterans, Buffalo Soldiers exhibitions, or Camp Fort 24th cadets? We welcome submissions to preserve for future generations.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all inline-flex items-center gap-2"
              >
                <span>Submit Archival Photos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ========================================================
     LAYOUT 1 VARIATION (Classic Showcase Gallery)
     ======================================================== */
  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen py-16 font-sans">
      <div className="container px-4 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Camera className="w-4 h-4 text-amber-700" /> Living History &amp; Community Archives
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-slate-950">
            Moments of Service &amp; Community Impact
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            From the historic Bill Pickett Rodeo with Dallas County Buffalo Soldiers to caretaking the resting place of 600 fallen heroes and nourishing South Dallas.
          </p>

          {/* Category Filter Tabs for Layout 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Lightbox Gallery (no title on hover, opens popup on click) */}
        <LightboxGallery images={filteredImages} columns={4} />

        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm text-center max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-amber-700">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-serif text-slate-950">
            Have Photos or Memories From a Past BZ Alliance Event?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Reach out to our media liaison to contribute to our permanent North Texas living history archive.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Submit Community Photos</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

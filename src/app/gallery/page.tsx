"use client";
import React, { useState } from "react";
import { galleryImages } from "@/data/site";
import { Camera, ArrowRight, ShieldCheck, Filter, Landmark, Users } from "lucide-react";
import Link from "next/link";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { useLayout } from "@/context/layout-context";

export default function Gallery() {
  const { activeLayout } = useLayout();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Living History",
    "Community",
    "Youth",
    "Honoring Fallen",
    "Benefits",
  ];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) =>
          img.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  /* ========================================================
     LAYOUT 3 VARIATION (Heritage Archival Gallery)
     ======================================================== */
  if (activeLayout === 3) {
    return (
      <div className="bg-[#FAF7F2] text-slate-900 min-h-screen py-16 font-serif">
        <div className="container px-4 max-w-6xl mx-auto space-y-12">
          {/* Masthead Header */}
          <div className="text-center space-y-3 border-b-2 border-stone-800 pb-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-red-900">
              Official Media Archive • Layout 3 Heritage Edition
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-stone-950 uppercase tracking-tight">
              Living History Photographic Archive
            </h1>
            <p className="text-stone-700 italic text-sm sm:text-base max-w-2xl mx-auto">
              Preserved photographic plates documenting field operations, Buffalo Soldiers living history, and cemetery restoration in North Texas.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4 font-sans">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-red-950 text-white shadow-md"
                      : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Lightbox Gallery Grid */}
          <LightboxGallery images={filteredImages} columns={4} />

          {/* Archival Contribution Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-stone-300 shadow-sm text-center max-w-2xl mx-auto space-y-4 font-sans">
            <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center mx-auto text-amber-800">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-serif text-stone-950">
              Submit Historic Photographs or Artifacts
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Have family records, historical photographs of North Texas veterans, or Buffalo Soldiers memorabilia? Contribute to our permanent digital repository.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-stone-950 text-white hover:bg-stone-800 transition-colors shadow-sm"
              >
                <span>Contact Archival Desk</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ========================================================
     LAYOUT 2 VARIATION (Vanguard Editorial Gallery)
     ======================================================== */
  if (activeLayout === 2) {
    return (
      <div className="bg-white text-slate-900 min-h-screen py-16 font-sans">
        <div className="container px-4 max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 inline-flex items-center gap-2">
              <Camera className="w-4 h-4 text-amber-700" /> Living History &amp; Field Archive
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-serif text-slate-950 leading-tight">
              Official Bravo Zulu Gallery Archive
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Official photographic documentation from <strong>bzhomefront.com/Gallery/</strong>: honoring fallen military heroes at Peoples&apos; Memorial Cemetery, youth cadets at Camp Fort 24th, street feedings in South Dallas, and cavalry heritage with the Dallas County Buffalo Soldiers.
            </p>
          </div>

          {/* Quick Archival Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-2xl font-black font-serif text-amber-700">12 Documents</p>
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5">Authentic Gallery Photos</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-2xl font-black font-serif text-amber-700">600+ Heroes</p>
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5">Cemetery Restoration</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-2xl font-black font-serif text-amber-700">Camp Fort 24th</p>
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5">Youth Horsemanship</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-2xl font-black font-serif text-amber-700">Street Feeding</p>
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5">Direct Hunger Relief</p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-slate-950 text-white shadow-md"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* 4-Column Lightbox Gallery - Hover has NO text overlay, Click opens popup */}
            <div className="pt-2">
              <LightboxGallery images={filteredImages} columns={4} />
            </div>
          </div>

          {/* Featured Field Stories from bzhomefront.com/Gallery */}
          <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-slate-200">
            {/* Story 1: Peoples' Memorial Cemetery */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-amber-800">
                <Landmark className="w-5 h-5 text-amber-700" />
                <span className="text-xs font-bold uppercase tracking-wider">Perpetual Care Project</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-slate-950">
                Peoples&apos; Memorial Cemetery Restoration
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bravo Zulu Homefront Alliance leads perpetual restoration and maintenance of this historic African American resting place in Dallas, containing almost 600 graves of decorated wartime veterans from the Civil War to Vietnam.
              </p>
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1"
                >
                  <span>Volunteer for Next Cemetery Clean-Up</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Story 2: Buffalo Soldiers & Camp Fort 24th */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-amber-800">
                <Users className="w-5 h-5 text-amber-700" />
                <span className="text-xs font-bold uppercase tracking-wider">Youth &amp; Cavalry Heritage</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-slate-950">
                Dallas County Buffalo Soldiers &amp; Camp Fort 24th
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Alongside Lancaster Chapter President Paul Allen, our veterans mentor young boys and girls in horsemanship, equine grooming, outdoor wilderness survival, and the distinguished legacy of the Buffalo Soldiers.
              </p>
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1"
                >
                  <span>Enroll in Summer Youth Camp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
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
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Camera className="w-4 h-4 text-amber-700" /> Living History &amp; Community Archives
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-slate-950">
            Moments of Service &amp; Community Impact
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            All authentic photographic moments from <strong>bzhomefront.com/Gallery/</strong>: from the historic Bill Pickett Rodeo with Dallas County Buffalo Soldiers to caretaking the resting place of 600 fallen heroes and nourishing South Dallas.
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

        {/* 4-Column Lightbox Gallery (Hover is clean with NO text overlay; Click opens full-screen popup) */}
        <LightboxGallery images={filteredImages} columns={4} />

        {/* Community Submission Box */}
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

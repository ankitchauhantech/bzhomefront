"use client";
import React from "react";
import Link from "next/link";
import { EventItem, galleryImages } from "@/data/site";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { useLayout } from "@/context/layout-context";
import {
  Calendar,
  MapPin,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  PhoneCall,
  Clock,
  Sparkles,
  Award,
  Check,
} from "lucide-react";

interface EventDetailViewProps {
  event: EventItem;
}

export function EventDetailView({ event }: EventDetailViewProps) {
  const { activeLayout } = useLayout();
  const isCurrent = event.tag === "Current" || event.tag === "Featured";

  const handleImageFallback = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80";
  };

  /* ========================================================
     DESIGN VARIATION FOR LAYOUT 3 (Heritage Chronicle Style)
     ======================================================== */
  if (activeLayout === 3) {
    return (
      <div className="bg-[#FAF7F2] text-slate-900 min-h-screen py-12 md:py-16 font-serif">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          {/* Top Back Link & Status */}
          <div className="flex items-center justify-between border-b-2 border-stone-800 pb-4 font-sans">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-red-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Layout 3 Homepage</span>
            </Link>
            <span
              className={`px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider ${
                isCurrent
                  ? "bg-red-900 text-white"
                  : "bg-stone-300 text-stone-800"
              }`}
            >
              {event.tag} Chronicle
            </span>
          </div>

          {/* Event Title Block */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-stone-950 uppercase tracking-tight">
              {event.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-xs text-stone-700 font-sans border-b border-stone-300 pb-4">
              {event.date && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-700" />
                  <span>{event.date}</span>
                </div>
              )}
              {event.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-700" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Main Visual & Content */}
          <div className="grid lg:grid-cols-12 gap-10 items-start font-sans">
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-2xl overflow-hidden border-2 border-stone-300 shadow-sm bg-white">
                <img
                  src={event.image}
                  alt={event.title}
                  onError={handleImageFallback}
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              <p className="text-base text-stone-800 leading-relaxed font-sans first-letter:float-left first-letter:text-5xl first-letter:pr-2 first-letter:font-bold first-letter:font-serif first-letter:text-red-950">
                {event.summary}
              </p>

              {event.highlights && event.highlights.length > 0 && (
                <div className="p-6 bg-white rounded-2xl border border-stone-300 space-y-3">
                  <h3 className="font-serif font-bold text-lg text-stone-950">Event Highlights &amp; Field Impact</h3>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    {event.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-red-900 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border-2 border-stone-300 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-lg text-stone-950">Inquire About This Operation</h3>
              <p className="text-xs text-stone-600">Contact our Dallas intake desk for event participation or volunteer inquiries.</p>
              <Link
                href="/contact"
                className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-stone-950 hover:bg-stone-800 text-white flex items-center justify-center gap-2 shadow"
              >
                <span>Connect With Event Officer</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ========================================================
     DESIGN VARIATION FOR LAYOUT 2 (Editorial / Vanguard Style)
     ======================================================== */
  if (activeLayout === 2) {
    return (
      <div className="bg-white text-slate-900 min-h-screen py-12 md:py-16 font-sans">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          {/* Top Back Link & Status */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <Link
              href="/#events"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-amber-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Layout 2 Homepage</span>
            </Link>
            <span
              className={`px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${
                isCurrent
                  ? "bg-amber-500 text-slate-950 border border-amber-300 shadow-sm"
                  : "bg-slate-950 text-white"
              }`}
            >
              {isCurrent ? "Current Initiative" : "Past Mission Archive"}
            </span>
          </div>

          {/* Split Hero: Left Text & Right Photo */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                <span>Bravo Zulu Homefront Alliance • Dallas, TX</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black font-serif text-slate-950 leading-[1.14]">
                {event.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-600">
                {event.date && (
                  <span className="flex items-center gap-1.5 text-amber-900 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                    <Calendar className="w-3.5 h-3.5 text-amber-700" />
                    <span>{event.date}</span>
                  </span>
                )}
                {event.location && (
                  <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{event.location}</span>
                  </span>
                )}
              </div>

              <p className="text-base text-slate-700 leading-relaxed pt-2">
                {event.summary}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-100 relative group">
                <img
                  src={event.image}
                  alt={event.title}
                  onError={handleImageFallback}
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Program Highlights & Dallas HQ Intake */}
          <div className="grid lg:grid-cols-12 gap-10 pt-6 border-t border-slate-200">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl font-bold font-serif text-slate-950">
                Mission Execution &amp; Community Scope
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                In close collaboration with the Dallas County Buffalo Soldiers (Lancaster Chapter) and local civic leadership, Bravo Zulu Homefront Alliance continues to honor historical service and mentor young minds across North Texas.
              </p>

              {event.highlights && event.highlights.length > 0 && (
                <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-700" /> Key Program Highlights:
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
                    {event.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-slate-200/80">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dallas HQ Sidebar Card */}
            <div className="lg:col-span-4 p-7 rounded-3xl bg-slate-950 text-white space-y-5 shadow-xl">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded">
                  Alliance Dispatch
                </span>
                <h3 className="text-xl font-bold font-serif text-white mt-2">Volunteer or Inquire</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Want to participate in upcoming operations or register youth in Camp Fort 24th?
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <Link
                  href="/contact"
                  className="w-full py-3.5 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all block shadow"
                >
                  Connect With Officer
                </Link>
                <a
                  href="tel:4692684147"
                  className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold text-white hover:bg-white/10 border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call (469) 268-4147</span>
                </a>
              </div>
            </div>
          </div>

          {/* Dedicated Event Lightbox Gallery (4 per row, no title on hover) */}
          <div className="space-y-6 pt-10 border-t border-slate-200">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Photo Documentation</span>
                <h2 className="text-2xl font-bold font-serif text-slate-950 mt-0.5">Event Gallery</h2>
              </div>
              <p className="text-xs text-slate-500">Click any image to view in full-screen Lightbox</p>
            </div>
            <LightboxGallery images={galleryImages.slice(0, 4)} columns={4} />
          </div>
        </div>
      </div>
    );
  }

  /* ========================================================
     DESIGN VARIATION FOR LAYOUT 1 (Showcase Style)
     ======================================================== */
  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen py-12 md:py-16 font-sans">
      <div className="container mx-auto px-4 max-w-5xl space-y-10">
        {/* Breadcrumb / Back Link */}
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
          <Link
            href="/#events"
            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-amber-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Layout 1 Homepage</span>
          </Link>
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-black ${
              isCurrent ? "bg-amber-100 text-amber-900 border border-amber-300" : "bg-slate-200 text-slate-700"
            }`}
          >
            {isCurrent ? "Current Activity" : "Past Event Archive"}
          </span>
        </div>

        {/* Event Main Header */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black font-serif text-slate-950 leading-tight">
            {event.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
            {event.date && (
              <span className="flex items-center gap-1.5 text-amber-800">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </span>
            )}
            {event.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{event.location}</span>
              </span>
            )}
            <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Bravo Zulu Homefront Alliance Initiative</span>
            </span>
          </div>
        </div>

        {/* Feature Image Banner */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950">
          <img
            src={event.image}
            alt={event.title}
            onError={handleImageFallback}
            className="w-full h-80 sm:h-[460px] object-cover"
          />
        </div>

        {/* Event Description & Highlights Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl font-bold font-serif text-slate-950">Overview &amp; Community Impact</h2>
            <p className="text-base text-slate-700 leading-relaxed">{event.summary}</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              In collaboration with the Dallas County Buffalo Soldiers (Lancaster Chapter) and local civic leadership, Bravo Zulu Homefront Alliance continues to honor historical service and mentor young minds.
            </p>

            {/* Highlights List */}
            {event.highlights && event.highlights.length > 0 && (
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Program Highlights:</h3>
                <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {event.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA Card */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block mb-1">
                Alliance Dispatch
              </span>
              <h3 className="text-lg font-bold font-serif text-slate-950">Participate or Volunteer</h3>
              <p className="text-xs text-slate-600 mt-1">
                Want to volunteer for upcoming community initiatives or enroll a cadet in Camp Fort 24th?
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                href="/contact"
                className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider bg-slate-950 hover:bg-slate-800 text-white transition-colors block shadow"
              >
                Connect With Event Coordinator
              </Link>
              <a
                href="tel:4692684147"
                className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold text-slate-800 hover:bg-slate-50 border border-slate-300 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                <span>Call (469) 268-4147</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dedicated Event Lightbox Gallery (no title on hover) */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Photo Documentation</span>
            <h2 className="text-2xl font-bold font-serif text-slate-950">Event Lightbox Gallery</h2>
            <p className="text-xs text-slate-500">Click any image to view in full-screen lightbox preview.</p>
          </div>
          <LightboxGallery images={galleryImages.slice(0, 4)} columns={4} />
        </div>
      </div>
    </div>
  );
}


"use client";
import React from "react";
import Link from "next/link";
import { site, stats } from "@/data/site";
import { useLayout } from "@/context/layout-context";
import {
  ShieldCheck,
  HeartHandshake,
  Award,
  Users,
  MapPin,
  ArrowRight,
  Star,
  Check,
  PhoneCall,
  Clock,
} from "lucide-react";

export default function About() {
  const { activeLayout } = useLayout();

  const handleImageFallback = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80";
  };

  /* ========================================================
     LAYOUT 2 VARIATION (Vanguard Editorial Design)
     ======================================================== */
  if (activeLayout === 2) {
    return (
      <div className="bg-white text-slate-900 min-h-screen py-16 font-sans">
        <div className="container px-4 max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
              <ShieldCheck className="w-4 h-4 text-amber-700" /> IRS 501(c)(19) Official Veterans Organization
            </div>
            <h1 className="text-4xl sm:text-5xl font-black font-serif text-slate-950 leading-tight">
              About Bravo Zulu Homefront Alliance
            </h1>
            <p className="text-lg text-amber-800 font-serif italic font-bold">
              “{site.motto}”
            </p>
          </div>

          {/* 50/50 Split Section */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left 4 Images */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden h-48 sm:h-56 border border-slate-200 shadow-sm bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80"
                  alt="Veterans Dallas"
                  onError={handleImageFallback}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 sm:h-56 border border-slate-200 shadow-sm bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=800&q=80"
                  alt="Buffalo Soldiers"
                  onError={handleImageFallback}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 sm:h-56 border border-slate-200 shadow-sm bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                  alt="Direct Relief"
                  onError={handleImageFallback}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 sm:h-56 border border-slate-200 shadow-sm bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
                  alt="Youth Horsemanship"
                  onError={handleImageFallback}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-950">
                Founded By Veterans, Operated By Veterans
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Bravo Zulu Homefront Alliance is dedicated to easing the civilian adjustment challenges faced by transitioning servicemembers. From securing 100% Texas property tax exemptions to mentoring youth with the Dallas County Buffalo Soldiers, we continue the mission of service.
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-200 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong>Naval Expression:</strong> “Bravo Zulu” (BZ) stands for “Well Done.”</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong>Direct Benefits:</strong> Full support for Form 50-114 homestead tax relief.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong>Living History:</strong> Camp Fort 24th youth equestrian training and character building.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-950 hover:bg-slate-800 text-white transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                <p className="text-3xl font-black text-amber-700 font-serif">{s.value}</p>
                <p className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wider">{s.label}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{s.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ========================================================
     LAYOUT 1 VARIATION (Flagship Classic Showcase)
     ======================================================== */
  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen py-16 font-sans">
      <div className="container px-4 max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <ShieldCheck className="w-4 h-4 text-amber-700" /> IRS 501(c)(19) Non-Profit Veterans Alliance
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-slate-950">
            About Bravo Zulu Homefront Alliance
          </h1>
          <p className="text-lg text-amber-800 font-serif italic">
            “{site.motto}”
          </p>
        </div>

        {/* The Meaning of Bravo Zulu */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
          <div className="flex items-center gap-3 text-amber-800">
            <Award className="w-6 h-6 text-amber-700" />
            <h2 className="text-2xl font-bold font-serif text-slate-950">The Naval Signal: “Bravo Zulu” (BZ)</h2>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            In United States naval signaling, hoisting the signal flags <strong className="text-slate-950">“Bravo” and “Zulu”</strong> conveys a singular, revered message: <strong className="text-amber-800">“Well Done.”</strong> It is an honor bestowed only upon the completion of a challenging mission executed with precision, sacrifice, and valor.
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            At Bravo Zulu Homefront Alliance, we believe that when a military servicemember returns to civilian society, their mission does not end—and neither does our duty to ensure they hear <strong className="text-amber-800">“Well Done”</strong> through earned VA disability compensation, Texas property tax relief, employment dignity, and family support.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-lg font-bold font-serif text-slate-950 flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-700" />
              Veteran Founded &amp; Operated
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Founded by U.S. military veterans who experienced the bureaucratic hurdles of military transition firsthand. We offer peer-to-peer advocacy without delays or corporate red tape.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-lg font-bold font-serif text-slate-950 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-amber-700" />
              Historic Community Alliances
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We proudly partner with the Dallas County Buffalo Soldiers (Lancaster Chapter), local civic leaders, and the Honor Flight Network to bridge generations of service and teach youth horsemanship.
            </p>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-800 font-serif">{s.value}</p>
              <p className="text-xs font-bold text-slate-900 mt-1">{s.label}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">{s.subtext}</p>
            </div>
          ))}
        </div>

        {/* Visit Us */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-center space-y-4 shadow-xl">
          <MapPin className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-2xl font-bold font-serif text-white">Visit Our Dallas Headquarters</h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            {site.headquarters} • Open Monday through Friday from 9:00 AM to 5:00 PM CST.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950"
            >
              <span>Connect With A Veteran Officer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

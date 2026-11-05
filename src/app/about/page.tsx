"use client";
import React from "react";
import Link from "next/link";
import { site, stats, aboutImages } from "@/data/site";
import { useLayout } from "@/context/layout-context";
import {
  ShieldCheck,
  HeartHandshake,
  Award,
  Users,
  MapPin,
  ArrowRight,
  Check,
  Plane,
  FileText,
  UserCheck,
  Landmark,
  Camera,
} from "lucide-react";

export default function About() {
  const { activeLayout } = useLayout();

  const handleImageFallback = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackUrl?: string) => {
    if (fallbackUrl && e.currentTarget.src !== fallbackUrl) {
      e.currentTarget.src = fallbackUrl;
    } else {
      e.currentTarget.src =
        "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80";
    }
  };

  /* ========================================================
     LAYOUT 2 VARIATION (Vanguard Editorial Design)
     ======================================================== */
  if (activeLayout === 2) {
    return (
      <div className="bg-white text-slate-900 min-h-screen py-16 font-sans">
        <div className="container px-4 max-w-6xl mx-auto space-y-20">
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
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Bravo Zulu Homefront Alliance is a Dallas-based nonprofit veterans organization founded and operated by U.S. military veterans. We are dedicated to ensuring that when our nation&apos;s heroes leave uniform, their sacrifices are honored with practical civilian support, dignity, earned benefits, and continuing purpose.
            </p>
          </div>

          {/* 50/50 Split Section using real images from bzhomefront.com/About-us/ */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left 4 Images from bzhomefront.com/About-us/ (NO floating emblem or text overlays) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden h-48 sm:h-56 border border-slate-200 shadow-sm bg-slate-100">
                <img
                  src={aboutImages[0].url}
                  alt={aboutImages[0].title}
                  onError={(e) => handleImageFallback(e, aboutImages[0].fallbackUrl)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 sm:h-56 border border-slate-200 shadow-sm bg-slate-100">
                <img
                  src={aboutImages[1].url}
                  alt={aboutImages[1].title}
                  onError={(e) => handleImageFallback(e, aboutImages[1].fallbackUrl)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 sm:h-56 border border-slate-200 shadow-sm bg-slate-100">
                <img
                  src={aboutImages[2].url}
                  alt={aboutImages[2].title}
                  onError={(e) => handleImageFallback(e, aboutImages[2].fallbackUrl)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 sm:h-56 border border-slate-200 shadow-sm bg-slate-100">
                <img
                  src={aboutImages[3].url}
                  alt={aboutImages[3].title}
                  onError={(e) => handleImageFallback(e, aboutImages[3].fallbackUrl)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Founders&apos; Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-950">
                Founded By Veterans, Operated By Veterans
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Navigating post-military life shouldn&apos;t be an uphill battle. Having navigated the complex administrative barriers of the VA and civilian employment ourselves, our veteran officers stand side-by-side with every returning servicemember.
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-200 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong>The Naval Signal:</strong> “Bravo Zulu” (BZ) stands for “Well Done.” Hoisted across naval vessels to recognize exceptional mission execution.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong>Zero Bureaucratic Delay:</strong> Hands-on assistance ordering DD-214 records, submitting VA disability rating paperwork, and securing Texas tax exemptions.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong>Second Chances:</strong> Comprehensive re-entry support for incarcerated veterans returning home to Dallas.</span>
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

          {/* 4 Core Pillars from bzhomefront.com/About-us/ with actual photos */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Alliance Initiatives
              </span>
              <h2 className="text-3xl font-extrabold font-serif text-slate-950">
                Four Pillars of Veteran Impact
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Authentic programs designed by veterans to solve real challenges in our Dallas communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1: Help Center */}
              <div className="rounded-3xl bg-slate-50 border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="h-40 w-full overflow-hidden bg-slate-200">
                  <img
                    src={aboutImages[2].url}
                    alt={aboutImages[2].title}
                    onError={(e) => handleImageFallback(e, aboutImages[2].fallbackUrl)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      01 • Claims &amp; Records
                    </span>
                    <h3 className="text-lg font-bold font-serif text-slate-950">Veteran Help Center</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Assisting veterans with ordering military records (DD-214), filing VA disability rating paperwork, healthcare enrollment, career transition, and financial budgeting.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-amber-800 pt-2 border-t border-slate-200">
                    Direct Claims Assistance
                  </div>
                </div>
              </div>

              {/* Pillar 2: Incarcerated Veterans Re-Entry */}
              <div className="rounded-3xl bg-slate-50 border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="h-40 w-full overflow-hidden bg-slate-200">
                  <img
                    src={aboutImages[6].url}
                    alt={aboutImages[6].title}
                    onError={(e) => handleImageFallback(e, aboutImages[6].fallbackUrl)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      02 • Re-Entry Support
                    </span>
                    <h3 className="text-lg font-bold font-serif text-slate-950">Justice &amp; Re-Entry</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Dedicated post-release support: securing state IDs and Social Security cards, opening bank accounts, job placement, and transitional housing stability.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-emerald-700 pt-2 border-t border-slate-200">
                    Dignity &amp; Reintegration
                  </div>
                </div>
              </div>

              {/* Pillar 3: Honor Flights */}
              <div className="rounded-3xl bg-slate-50 border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="h-40 w-full overflow-hidden bg-slate-200">
                  <img
                    src={aboutImages[1].url}
                    alt={aboutImages[1].title}
                    onError={(e) => handleImageFallback(e, aboutImages[1].fallbackUrl)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                      03 • Senior Honors
                    </span>
                    <h3 className="text-lg font-bold font-serif text-slate-950">Honor Flights Network</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Coordinating all-expenses-paid trips for WWII, Korean War, Vietnam War, and terminally ill veterans to visit their national memorials in Washington, D.C.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-blue-700 pt-2 border-t border-slate-200">
                    All-Expenses-Paid Flights
                  </div>
                </div>
              </div>

              {/* Pillar 4: Buffalo Soldiers Living History */}
              <div className="rounded-3xl bg-slate-50 border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="h-40 w-full overflow-hidden bg-slate-200">
                  <img
                    src={aboutImages[5].url}
                    alt={aboutImages[5].title}
                    onError={(e) => handleImageFallback(e, aboutImages[5].fallbackUrl)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      04 • Living History
                    </span>
                    <h3 className="text-lg font-bold font-serif text-slate-950">Buffalo Soldiers &amp; Youth</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mentoring youth through Camp Fort 24th equestrian camps with the Dallas County Buffalo Soldiers (Lancaster Chapter) and perpetual care for 600 fallen heroes.
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-amber-800 pt-2 border-t border-slate-200">
                    Horsemanship &amp; Heritage
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Authentic Photo Archive Strip from bzhomefront.com/About-us/ */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Field Documentation
                </span>
                <h3 className="text-2xl font-bold font-serif text-slate-950 mt-1">
                  Living History &amp; Community Operations
                </h3>
                <p className="text-xs text-slate-500">
                  Original photographic archive from bzhomefront.com/About-us/
                </p>
              </div>
              <Link
                href="/gallery"
                className="text-xs font-bold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1.5"
              >
                <span>View Full 12-Photo Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {aboutImages.slice(4).map((img, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 shadow-sm"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    onError={(e) => handleImageFallback(e, img.fallbackUrl)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Spotlight on Incarcerated Veterans Re-Entry */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                Featured Program from BZ Homefront
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
                Incarcerated Veterans Stabilization &amp; Re-Entry Support
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Veterans who have completed court-mandated sentences face immense hurdles when re-entering society. Without basic identification or a bank account, securing housing or legal employment is nearly impossible. Bravo Zulu Homefront Alliance provides hands-on case management to ensure our brothers and sisters transition with dignity.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                <p className="text-amber-400 font-bold text-sm">1. Official IDs</p>
                <p className="text-xs text-slate-400">Securing Texas state driver licenses &amp; replacement SS cards.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                <p className="text-amber-400 font-bold text-sm">2. Banking Setup</p>
                <p className="text-xs text-slate-400">Opening active checking &amp; savings accounts with zero penalty fees.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                <p className="text-amber-400 font-bold text-sm">3. Job Placement</p>
                <p className="text-xs text-slate-400">Connecting veterans to fair-chance employers across North Texas.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                <p className="text-amber-400 font-bold text-sm">4. Housing Stability</p>
                <p className="text-xs text-slate-400">Transitional housing vouchers and peer accountability mentorship.</p>
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

          {/* Headquarters Strip */}
          <div className="p-8 sm:p-10 rounded-3xl bg-amber-500 text-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[11px] font-black uppercase tracking-wider bg-slate-950 text-white px-2.5 py-0.5 rounded">
                Dallas Headquarters
              </span>
              <h3 className="text-2xl font-black font-serif text-slate-950">
                {site.headquarters}
              </h3>
              <p className="text-xs font-bold text-slate-900">
                Call {site.phones[0]} or {site.phones[1]} • {site.hours}
              </p>
            </div>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider bg-slate-950 text-white hover:bg-slate-800 transition-all shadow-md shrink-0 inline-flex items-center gap-2"
            >
              <span>Schedule An Appointment</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
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
      <div className="container px-4 max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <ShieldCheck className="w-4 h-4 text-amber-700" /> IRS 501(c)(19) Official Veterans Organization
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-slate-950">
            About Bravo Zulu Homefront Alliance
          </h1>
          <p className="text-lg text-amber-800 font-serif italic">
            “{site.motto}”
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Founded and operated by U.S. military veterans in Dallas, Texas. We bridge the gap between military service and civilian achievement through benefits advocacy, justice re-entry assistance, Honor Flights, and living history education.
          </p>
        </div>

        {/* Feature Hero with Real Leadership Photo from bzhomefront.com/About-us/ */}
        <div className="grid md:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
          <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 border border-slate-200 shadow-sm">
            <img
              src={aboutImages[0].url}
              alt={aboutImages[0].title}
              onError={(e) => handleImageFallback(e, aboutImages[0].fallbackUrl)}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-700" />
              <span>Veterans Leadership &amp; Advocacy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-950">
              The Naval Signal: “Bravo Zulu” (BZ)
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              In United States naval signaling, hoisting the signal flags <strong className="text-slate-950">“Bravo” and “Zulu”</strong> conveys a singular, revered message: <strong className="text-amber-800">“Well Done.”</strong> It is an honor bestowed only upon the completion of a challenging mission executed with precision, sacrifice, and valor.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              At Bravo Zulu Homefront Alliance, we believe that when a military servicemember returns to civilian society, their mission does not end—and neither does our duty to ensure they hear <strong className="text-amber-800">“Well Done”</strong> through earned VA disability compensation, Texas property tax relief, employment dignity, and family support.
            </p>
          </div>
        </div>

        {/* Mission & Help Center Deep Dive with Authentic Photos */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Help Center */}
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="h-48 w-full overflow-hidden bg-slate-100">
              <img
                src={aboutImages[2].url}
                alt={aboutImages[2].title}
                onError={(e) => handleImageFallback(e, aboutImages[2].fallbackUrl)}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-4 flex-1">
              <div className="flex items-center gap-2 text-amber-800">
                <FileText className="w-5 h-5 text-amber-700" />
                <h3 className="text-xl font-bold font-serif text-slate-950">Veteran Help Center</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We provide free, one-on-one administrative guidance to veterans navigating paperwork and benefits.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-3">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Assistance ordering official military records (DD-214)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Filing for VA disability compensation &amp; rating appeals</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>VA Healthcare enrollment and civilian doctor coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Personal financial budgeting and housing stabilization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Incarcerated Veterans Re-Entry */}
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="h-48 w-full overflow-hidden bg-slate-100">
              <img
                src={aboutImages[6].url}
                alt={aboutImages[6].title}
                onError={(e) => handleImageFallback(e, aboutImages[6].fallbackUrl)}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-4 flex-1">
              <div className="flex items-center gap-2 text-emerald-800">
                <UserCheck className="w-5 h-5 text-emerald-700" />
                <h3 className="text-xl font-bold font-serif text-slate-950">Incarcerated Veterans Re-Entry</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Targeted assistance to help justice-involved veterans successfully reintegrate into society.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-3">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Obtaining replacement Social Security cards &amp; Texas state IDs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Assistance opening clean personal checking/savings accounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fair-chance employment placement and resume guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transitional housing support to eliminate homelessness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Honor Flights & Living History Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Honor Flights */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-serif text-slate-950">Honor Flights Network</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We help coordinate all-expenses-paid journeys for World War II, Korean War, Vietnam War, and terminally ill veterans to travel to Washington, D.C. to visit the national memorials built in honor of their sacrifice.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="text-xs font-bold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1.5"
              >
                <span>Nominate a Senior Veteran</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Buffalo Soldiers & Youth Camps */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-bold">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-serif text-slate-950">Buffalo Soldiers &amp; Camp Fort 24th</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In alliance with the Dallas County Buffalo Soldiers (Lancaster Chapter, President Paul Allen), we engage youth with horseback riding, equine therapy, discipline, and historical preservation including Peoples&apos; Memorial Cemetery.
            </p>
            <div className="pt-2">
              <Link
                href="/gallery"
                className="text-xs font-bold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1.5"
              >
                <span>View Living History Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Real Field Photographs Archive from bzhomefront.com/About-us */}
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              Community Gallery
            </span>
            <h3 className="text-2xl font-bold font-serif text-slate-950">
              Field Operations &amp; Outreach Moments
            </h3>
            <p className="text-xs text-slate-600">
              Authentic photographs from bzhomefront.com/About-us/
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {aboutImages.slice(4, 8).map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-white border border-slate-200 shadow-sm"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  onError={(e) => handleImageFallback(e, img.fallbackUrl)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
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

        {/* Visit Dallas Headquarters Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-center space-y-4 shadow-xl">
          <MapPin className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-2xl font-bold font-serif text-white">Visit Our Dallas Headquarters</h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            {site.headquarters} • Open Monday through Friday from 9:00 AM to 5:00 PM CST.
          </p>
          <p className="text-xs text-amber-300 font-mono">
            Direct Helpline: {site.phones[0]} | Alternate: {site.phones[1]}
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md"
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

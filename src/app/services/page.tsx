"use client";
import React from "react";
import Link from "next/link";
import { services, site } from "@/data/site";
import { useLayout } from "@/context/layout-context";
import {
  ShieldCheck,
  Home,
  Briefcase,
  UserCheck,
  Plane,
  Compass,
  ArrowRight,
  Check,
  PhoneCall,
  Sparkles,
  Calendar,
  CheckCircle2,
} from "lucide-react";

export default function ServicesPage() {
  const { activeLayout } = useLayout();

  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-600" />,
    Home: <Home className="w-6 h-6 text-amber-600" />,
    Briefcase: <Briefcase className="w-6 h-6 text-amber-600" />,
    UserCheck: <UserCheck className="w-6 h-6 text-amber-600" />,
    Plane: <Plane className="w-6 h-6 text-amber-600" />,
    Compass: <Compass className="w-6 h-6 text-amber-600" />,
  };

  /* ========================================================
     LAYOUT 2 VARIATION (Vanguard Editorial Services Layout)
     ======================================================== */
  if (activeLayout === 2) {
    return (
      <div className="bg-white text-slate-900 min-h-screen py-16 font-sans">
        <div className="container px-4 max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-700" /> Layout 2 Service Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-serif text-slate-950 leading-tight">
              Frontline Programs &amp; Veteran Assistance
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every service provided by Bravo Zulu Homefront Alliance is 100% free of charge to U.S. military veterans, surviving spouses, and registered youth cadets.
            </p>
          </div>

          {/* 6 Comprehensive Service Dossier Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      {iconMap[svc.iconName] || <ShieldCheck className="w-6 h-6 text-amber-600" />}
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-2.5 py-1 rounded-full">
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-slate-950 group-hover:text-amber-800 transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {svc.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-200 text-xs text-slate-700">
                    {svc.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200">
                  <Link
                    href={`/contact?service=${svc.id}`}
                    className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider bg-slate-950 hover:bg-slate-800 text-white transition-colors block shadow"
                  >
                    Request Free Assistance →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Dallas HQ Intake Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white space-y-4 shadow-xl">
            <h3 className="text-2xl font-bold font-serif text-white">
              Need In-Person Consultation at Dallas HQ?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Visit our offices at 3225 Martin Luther King Jr. Blvd, Suite 130 in Dallas, TX. Veteran officers are available Monday through Friday from 9:00 AM to 5:00 PM CST.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950"
              >
                Submit Online Intake Form
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
     LAYOUT 1 VARIATION (Classic Showcase Services Layout)
     ======================================================== */
  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen py-16 font-sans">
      <div className="container px-4 max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <ShieldCheck className="w-4 h-4 text-amber-700" /> Dedicated Service Pillars
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-slate-950">
            Programs Designed by Veterans, For Veterans
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            From navigating complex VA disability ratings to 100% Texas property tax exemptions and youth equestrian horsemanship with the Dallas County Buffalo Soldiers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                    {iconMap[svc.iconName] || <ShieldCheck className="w-6 h-6 text-amber-700" />}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {svc.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-serif text-slate-950 group-hover:text-amber-800 transition-colors">
                  {svc.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {svc.shortDesc}
                </p>

                <ul className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-3">
                  {svc.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <Link
                  href={svc.link}
                  className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>{svc.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


"use client";
import React from "react";
import Link from "next/link";
import { Sparkles, Layout, Compass, CheckCircle2 } from "lucide-react";

interface DesignSwitcherProps {
  activeDesign: 1 | 2 | 3;
  onSelectDesign?: (design: 1 | 2 | 3) => void;
  isStandaloneRoute?: boolean;
}

export function DesignSwitcher({
  activeDesign,
  onSelectDesign,
  isStandaloneRoute = false,
}: DesignSwitcherProps) {
  const designs = [
    {
      id: 1 as const,
      name: "Design 1: Vanguard Prestige",
      tagline: "Patriotic • Navy & Gold • High-Energy Veteran Pride",
      path: "/design-1",
      icon: Sparkles,
      color: "from-blue-900 to-indigo-950",
      accent: "border-amber-400 text-amber-300",
    },
    {
      id: 2 as const,
      name: "Design 2: Modern Impact",
      tagline: "Contemporary NGO • Clean Glass Cards • Role Navigator",
      path: "/design-2",
      icon: Layout,
      color: "from-slate-900 to-teal-950",
      accent: "border-teal-400 text-teal-300",
    },
    {
      id: 3 as const,
      name: "Design 3: Heritage Editorial",
      tagline: "Classic Magazine • Archival Cream • Buffalo Soldiers Tribute",
      path: "/design-3",
      icon: Compass,
      color: "from-amber-950 to-stone-900",
      accent: "border-amber-300 text-amber-200",
    },
  ];

  return (
    <aside aria-label="Design switcher" className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md text-white border-b border-amber-500/30 shadow-xl">
      <div className="container py-2.5 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              3 Professional Designs Ready:
            </span>
            <span className="hidden sm:inline text-xs text-slate-300">
              Click below to switch themes or test full routes
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {designs.map((d) => {
              const Icon = d.icon;
              const isActive = activeDesign === d.id;

              if (onSelectDesign) {
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => onSelectDesign(d.id)}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20 scale-105 ring-2 ring-amber-300"
                        : "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{d.name.split(":")[1] || d.name}</span>
                    {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />}
                  </button>
                );
              }

              return (
                <Link
                  key={d.id}
                  href={d.path}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20 ring-2 ring-amber-300"
                      : "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{d.name.split(":")[1] || d.name}</span>
                  {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />}
                </Link>
              );
            })}

            {isStandaloneRoute && (
              <Link
                href="/"
                className="text-xs text-amber-400 hover:underline ml-2 hidden lg:inline font-medium"
              >
                ← Back to Unified View
              </Link>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}


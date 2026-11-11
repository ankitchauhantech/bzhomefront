"use client";
import React from "react";
import { Layout, Sparkles, Check, BookOpen } from "lucide-react";

interface BottomLayoutSwitcherProps {
  activeLayout: 1 | 2 | 3;
  onSelectLayout: (layout: 1 | 2 | 3) => void;
}

export function BottomLayoutSwitcher({
  activeLayout,
  onSelectLayout,
}: BottomLayoutSwitcherProps) {
  const layouts = [
    {
      id: 1 as const,
      label: "Layout 1",
      subtitle: "Flagship Portal",
      icon: Sparkles,
    },
    {
      id: 2 as const,
      label: "Layout 2",
      subtitle: "Vanguard Video & News",
      icon: Layout,
    },
    {
      id: 3 as const,
      label: "Layout 3",
      subtitle: "Heritage & Legal Archive",
      icon: BookOpen,
    },
  ];

  return (
    <aside
      aria-label="Bottom Layout Switcher"
      className="fixed bottom-4 sm:bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-3"
    >
      <div className="pointer-events-auto bg-slate-950/95 backdrop-blur-xl text-white border border-slate-800 rounded-2xl shadow-2xl p-2 sm:p-2.5 px-3 sm:px-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 ring-1 ring-white/10 transition-all">
        {/* Dock Label */}
        <div className="flex items-center gap-2 pr-1 sm:pr-2 border-r border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-400">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="hidden sm:inline">Select Demo Design:</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {layouts.map((item) => {
            const Icon = item.icon;
            const isActive = activeLayout === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectLayout(item.id)}
                className={`relative group inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105"
                    : "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? "text-slate-950" : "text-amber-400"}`} />
                <span>{item.label}</span>
                <span className={`hidden md:inline text-[10px] opacity-75 font-normal ${isActive ? "text-slate-900" : "text-slate-400"}`}>
                  • {item.subtitle}
                </span>
                {isActive && <Check className="w-3.5 h-3.5 text-slate-950 stroke-[3]" />}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

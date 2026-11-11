"use client";
import React from "react";
import { Sparkles, Layout, Check, BookOpen } from "lucide-react";
import { useLayout } from "@/context/layout-context";

export function TopLayoutSwitcher() {
  const { activeLayout, setActiveLayout } = useLayout();

  return (
    <aside
      aria-label="Demo Layout Selector"
      className="sticky top-0 z-50 w-full bg-slate-950 text-white border-b border-slate-800 shadow-md backdrop-blur-md"
    >
      <div className="container mx-auto px-4 h-11 flex items-center justify-between">
        {/* Left: Title */}
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-black uppercase tracking-wider text-amber-400">
            Select Demo Design
          </span>
          <span className="hidden sm:inline text-xs text-slate-400 border-l border-slate-800 pl-2.5">
            Compare 3 Unique Layouts for Bravo Zulu Homefront Alliance
          </span>
        </div>

        {/* Right: Small Buttons for Layout 1, Layout 2 & Layout 3 */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setActiveLayout(1)}
            className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              activeLayout === 1
                ? "bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-300 scale-105"
                : "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Layout 1</span>
            {activeLayout === 1 && <Check className="w-3 h-3 stroke-[3]" />}
          </button>

          <button
            type="button"
            onClick={() => setActiveLayout(2)}
            className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              activeLayout === 2
                ? "bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-300 scale-105"
                : "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>Layout 2</span>
            {activeLayout === 2 && <Check className="w-3 h-3 stroke-[3]" />}
          </button>

          <button
            type="button"
            onClick={() => setActiveLayout(3)}
            className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              activeLayout === 3
                ? "bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-300 scale-105"
                : "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Layout 3</span>
            {activeLayout === 3 && <Check className="w-3 h-3 stroke-[3]" />}
          </button>
        </div>
      </div>
    </aside>
  );
}

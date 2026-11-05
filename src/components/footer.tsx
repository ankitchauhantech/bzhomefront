"use client";
import React from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand & Status */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-950 flex items-center justify-center text-amber-400 font-extrabold text-base border border-amber-500/30">
                BZ
              </div>
              <div>
                <span className="font-serif text-base font-bold text-white block leading-tight">
                  {site.name}
                </span>
                <span className="text-[10px] font-sans text-teal-400 font-bold uppercase tracking-wider block">
                  Impact Beyond Service
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Veteran-founded 501(c)(19) tax-exempt organization dedicated to serving Texas military veterans, surviving spouses, and youth through earned benefits advocacy and living history.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>IRS 501(c)(19) Certified Veterans Alliance</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <p className="font-bold text-sm text-white uppercase tracking-wider">Navigation</p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About the Alliance
                </Link>
              </li>
              <li>
                <Link href="/about#services" className="hover:text-amber-400 transition-colors">
                  Core Veteran Programs
                </Link>
              </li>
              <li>
                <Link href="/contact?subject=PropertyTax" className="hover:text-amber-400 transition-colors">
                  Texas Property Tax Relief (Form 50-114)
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-400 transition-colors">
                  Living History &amp; Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Confidential Intake &amp; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Programs */}
          <div className="space-y-3">
            <p className="font-bold text-sm text-white uppercase tracking-wider">Advocacy &amp; Mission</p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>100% Disabled Veteran Property Tax Exemptions</li>
              <li>VA Disability Rating Review &amp; DD-214 Retrieval</li>
              <li>Buffalo Soldiers Living History (Dallas County)</li>
              <li>Camp Fort 24th Youth Horsemanship Encampment</li>
              <li>Honor Flight Washington D.C. Memorial Journeys</li>
              <li>Peoples' Memorial Cemetery Perpetual Restoration</li>
            </ul>
          </div>

          {/* Col 4: Dallas HQ */}
          <div className="space-y-3">
            <p className="font-bold text-sm text-white uppercase tracking-wider">Dallas Headquarters</p>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{site.headquarters}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:4692684147" className="hover:text-amber-400 text-white font-mono">
                  (469) 268-4147
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:info@bzhomefront.org" className="hover:text-amber-400 text-white font-mono">
                  {site.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors"
              >
                <span>Request Assistance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="text-[11px]">
            Reference: <a href="https://bzhomefront.com" target="_blank" rel="noreferrer" className="underline hover:text-amber-400">bzhomefront.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

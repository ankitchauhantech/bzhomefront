"use client";
import React, { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import {
  PhoneCall,
  Mail,
  MapPin,
  Menu,
  X,
  Shield,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top Bar - Finix Style */}
      <div className="hidden lg:block bg-slate-950 text-slate-300 py-2 border-b border-slate-800 text-xs">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>3225 Martin Luther King Jr. Blvd, Suite 130, Dallas, TX</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <a href="mailto:info@bzhomefront.org" className="hover:text-amber-400 transition-colors">
                info@bzhomefront.org
              </a>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Mon - Fri: 9:00 AM - 5:00 PM CST</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Shield className="w-3 h-3" /> IRS 501(c)(19) Certified Veterans Alliance
            </span>
            <span className="h-3 w-px bg-slate-700" />
            <a
              href="tel:4692684147"
              className="text-amber-400 font-bold hover:underline flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" /> (469) 268-4147
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-950 flex items-center justify-center text-amber-400 font-extrabold text-lg shadow-md border border-amber-500/30 group-hover:scale-105 transition-transform">
            BZ
          </div>
          <div>
            <span className="font-serif text-lg md:text-xl font-extrabold text-slate-950 block leading-tight tracking-tight">
              {site.name}
            </span>
            <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-teal-700 block">
              Impact Beyond Service
            </span>
          </div>
        </Link>

        {/* Desktop Menu - Clean Standard Finix WordPress Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <Link href="/" className="hover:text-teal-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-teal-600 transition-colors">
            About Us
          </Link>
          <Link href="/services" className="hover:text-teal-600 transition-colors">
            Services
          </Link>
          <Link href="/tax-relief" className="hover:text-teal-600 transition-colors">
            Tax Relief
          </Link>
          <Link href="/gallery" className="hover:text-teal-600 transition-colors">
            Gallery
          </Link>
          <Link href="/contact" className="hover:text-teal-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white hover:from-blue-800 hover:to-indigo-900 shadow-md transition-all hover:scale-[1.02] flex items-center gap-2 border border-blue-800/50"
          >
            <span>Get Free Support</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            About Us
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Services &amp; Programs
          </Link>
          <Link
            href="/tax-relief"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Texas Tax Exemptions
          </Link>
          <Link
            href="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Community Gallery
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Contact
          </Link>

          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-xl text-center font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex items-center justify-center gap-2"
            >
              <span>Get Free Support</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
            <a
              href="tel:4692684147"
              className="mt-2 block text-center text-xs font-bold text-amber-600 py-1"
            >
              📞 Call: (469) 268-4147
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

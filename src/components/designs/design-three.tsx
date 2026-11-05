"use client";
import React, { useState } from "react";
import Link from "next/link";
import { site, events } from "@/data/site";
import {
  Compass,
  Star,
  ChevronDown,
  ArrowRight,
  MapPin,
  Calendar,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Award,
  Scroll,
} from "lucide-react";

export function DesignThree() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const heritageStories = [
    {
      year: "1866 – Present",
      title: "The Buffalo Soldiers Living Heritage",
      desc: "Partnering with the Dallas County Buffalo Soldiers (Lancaster Chapter), we preserve and teach the history of the 9th and 10th Cavalry Regiments—African American soldiers who served with distinguished valor.",
      image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=1000&q=80",
    },
    {
      year: "Peoples' Memorial",
      title: "Restoring the Resting Place of 600 Veterans",
      desc: "Nearly 600 veterans rest at Peoples' Memorial Park Cemetery in Dallas. BZ Homefront conducts grounds restoration, headstone preservation, and perpetual honor care.",
      image: "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=1000&q=80",
    },
    {
      year: "Camp Fort 24th",
      title: "Youth Leadership, Horsemanship & Resilience",
      desc: "Through equestrian training, survival encampments, and emotional intelligence mentoring, veteran instructors instill discipline and heritage into future generations.",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const benefitsFaq = [
    {
      q: "How does the Texas 100% Disabled Veteran Homestead Exemption work?",
      a: "Under Texas Tax Code Section 11.131, veterans with a 100% service-connected disability rating (or receiving 100% disability compensation due to individual unemployability) are entitled to a complete 100% property tax exemption on their primary residence. We assist you with Form 50-114 and county appraisal district filing.",
    },
    {
      q: "What if my VA disability rating is between 10% and 90%?",
      a: "Texas law provides tiered exemptions from $5,000 up to $12,000 off your property's assessed value depending on your disability rating. Additionally, veterans aged 65 or older with a disability rating receive the maximum $12,000 exemption regardless of rating tier.",
    },
    {
      q: "Can BZ Homefront help me locate my DD-214 or military discharge paperwork?",
      a: "Yes. Many veterans struggle to obtain their official service records from the National Personnel Records Center (NPRC) in St. Louis. Our veteran intake team expedites electronic and written standard Form 180 requests to get your paperwork fast.",
    },
    {
      q: "What are the Honor Flights and who is eligible?",
      a: "Honor Flights provide all-expenses-paid journeys for senior veterans (WWII, Korea, Vietnam, and terminally ill veterans of any conflict) to visit the national memorials in Washington D.C. BZ Homefront assists veterans and their family guardians with application and travel coordination.",
    },
  ];

  return (
    <div className="bg-[#FAF7F2] text-slate-900 min-h-screen font-serif pb-28 selection:bg-amber-900 selection:text-white">
      {/* Light Masthead Top Bar */}
      <div className="bg-[#F0ECE1] border-b border-stone-300 py-2.5 px-4 text-xs font-sans text-stone-700">
        <div className="container mx-auto flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-900 uppercase tracking-wider text-[11px] bg-stone-300 px-2 py-0.5 rounded">
              Layout 3 • Heritage Foundation
            </span>
            <span className="hidden sm:inline">Official Commemorative Publication &amp; Legal Archive</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span>Dallas, Texas • Vol. I</span>
            <span className="text-red-900 font-bold">IRS 501(c)(19) Registry</span>
          </div>
        </div>
      </div>

      {/* Editorial Masthead Header */}
      <header className="border-b-2 border-stone-900 pt-10 pb-8 container mx-auto px-4 text-center max-w-6xl">
        <div className="flex items-center justify-between text-[11px] font-sans tracking-widest uppercase text-stone-600 border-b border-stone-300 pb-3 mb-6">
          <span>Dallas, Texas • Est. by U.S. Military Veterans</span>
          <span className="font-bold text-red-900">Bravo Zulu Homefront Alliance</span>
          <span>Non-Profit Foundation Archive</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-stone-950 uppercase font-serif">
          Bravo Zulu Homefront
        </h1>

        <div className="flex items-center justify-center gap-3 mt-3 text-stone-700 italic text-sm sm:text-base">
          <span>“Veterans Unite: Impact Beyond Service”</span>
          <span>•</span>
          <span>Duty • Honor • Community Restoration</span>
        </div>
      </header>

      {/* Main Editorial Hero Story */}
      <section className="py-12 md:py-16 container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="border-l-4 border-red-900 pl-4 py-1">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block">
                Founders' Chronicle
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 mt-1 leading-tight">
                From the Frontlines to the Homefront: Continuing the Mission in North Texas
              </h2>
            </div>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans first-letter:float-left first-letter:text-6xl first-letter:pr-3 first-letter:font-bold first-letter:font-serif first-letter:text-red-950">
              When military service concludes, the sacred oath to support and defend one another does not end. 
              Bravo Zulu Homefront Alliance was founded in Dallas by combat and career veterans who recognized that navigating civilian life—from 
              VA disability red tape and skyrocketing property taxes to post-service trauma—requires a disciplined, brotherhood-driven support structure.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 pt-2 font-sans">
              <div className="p-5 bg-white rounded-2xl border border-stone-300 shadow-sm">
                <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2 mb-2 font-serif">
                  <Star className="w-4 h-4 text-red-900 fill-red-900" />
                  Securing Earned Rights
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  We walk side-by-side with veterans through DD-214 recovery, VA disability rating filings, and county tax appraisal hearings under Texas Form 50-114.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-stone-300 shadow-sm">
                <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2 mb-2 font-serif">
                  <Star className="w-4 h-4 text-red-900 fill-red-900" />
                  Buffalo Soldiers Living History
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  In partnership with the Dallas County Buffalo Soldiers, we bring historic valor to schools, Juneteenth rodeos, and youth equestrian camps at Fort 24th.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 font-sans">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-red-950 hover:bg-red-900 text-white transition-colors inline-flex items-center gap-2 shadow"
              >
                <span>Request Veteran Assistance</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </Link>
              <Link
                href="/about"
                className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-white hover:bg-stone-100 text-stone-900 border border-stone-400 transition-colors"
              >
                Read Full Alliance History
              </Link>
            </div>
          </div>

          {/* Official Registry Dispatch Card */}
          <aside className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border-2 border-stone-300 shadow-md space-y-6 font-sans">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                Official Organization Dispatch
              </span>
              <h3 className="text-xl font-bold font-serif text-stone-950">Bravo Zulu Alliance</h3>
              <p className="text-xs text-stone-600 mt-1">
                3225 Martin Luther King Jr. Blvd, Suite 130, Dallas, TX 75210
              </p>
            </div>

            <div className="space-y-3 border-t border-stone-200 pt-4 text-xs text-stone-700">
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="font-semibold">Classification:</span>
                <span className="font-mono font-bold text-red-900">IRS 501(c)(19)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="font-semibold">Veterans Assisted:</span>
                <span className="font-mono font-bold text-stone-900">500+ in Texas</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="font-semibold">Hotline:</span>
                <span className="font-mono font-bold text-stone-900">(469) 268-4147</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="font-semibold">Official Email:</span>
                <span className="font-mono text-stone-800">info@bzhomefront.org</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
              <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider block">
                Texas Property Tax Code § 11.131
              </span>
              <p className="text-xs text-stone-700 leading-relaxed">
                Are you a 100% disabled veteran or surviving spouse? You may owe $0 in annual property taxes.
              </p>
              <Link
                href="/contact?subject=TaxCode11131"
                className="text-xs font-bold text-red-900 hover:underline inline-flex items-center gap-1"
              >
                <span>Get Free Filing Packet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Living History & Heritage Section */}
      <section className="py-16 bg-[#F3EDE2] border-t-2 border-b-2 border-stone-300">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900">
              Living History In Action
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-950 font-serif">
              Preserving Valor, Educating the Next Generation
            </h2>
            <p className="text-stone-600 text-sm font-sans max-w-xl mx-auto">
              Our mission carries forward the storied legacy of the Buffalo Soldiers and honors those laid to rest in sacred Texas soil.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {heritageStories.map((h, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-stone-300 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-stone-100 border-b border-stone-200">
                    <img
                      src={h.image}
                      alt={h.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-2 left-2 px-2.5 py-1 bg-stone-950 text-white text-[10px] font-sans font-bold rounded">
                      {h.year}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-stone-950 mb-2 font-serif">{h.title}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">{h.desc}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 font-sans">
                  <Link
                    href="/gallery"
                    className="text-xs font-bold text-red-900 hover:underline inline-flex items-center gap-1"
                  >
                    <span>View photo documentation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veterans Benefits Knowledgebase & FAQs */}
      <section className="py-16 md:py-20 container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900">
            Benefits Knowledgebase
          </span>
          <h2 className="text-3xl font-extrabold text-stone-950 font-serif">
            Texas Veterans Legal Rights &amp; FAQs
          </h2>
          <p className="text-stone-600 text-sm font-sans">
            Essential facts regarding homestead property tax exemptions, DD-214 records, and Honor Flight nominations.
          </p>
        </div>

        <div className="space-y-3 font-sans">
          {benefitsFaq.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-300 bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-stone-900 hover:bg-stone-50"
                >
                  <span className="font-serif">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-red-900" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center font-sans">
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-stone-950 hover:bg-stone-800 text-white inline-flex items-center gap-2 shadow"
          >
            <span>Contact Intake Officer for Confidential Review</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
}

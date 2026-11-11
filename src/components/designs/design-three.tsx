"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { site, events, galleryImages } from "@/data/site";
import {
  Star,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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
  HeartHandshake,
  FileText,
  UserCheck,
  Plane,
  Landmark,
  Clock,
  Send,
  Headphones,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { LightboxGallery } from "@/components/lightbox-gallery";

export function DesignThree() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [heritageIndex, setHeritageIndex] = useState(0);
  const [heritagePerView, setHeritagePerView] = useState(3);

  useEffect(() => {
    const updateHeritagePerView = () => {
      if (window.innerWidth < 640) setHeritagePerView(1);
      else if (window.innerWidth < 1024) setHeritagePerView(2);
      else setHeritagePerView(3);
    };
    updateHeritagePerView();
    window.addEventListener("resize", updateHeritagePerView);
    return () => window.removeEventListener("resize", updateHeritagePerView);
  }, []);

  const heritageStories = [
    {
      year: "1866 – Present",
      title: "The Buffalo Soldiers Living Heritage",
      desc: "Partnering with the Dallas County Buffalo Soldiers (Lancaster Chapter), we preserve and teach the history of the 9th and 10th Cavalry Regiments—African American soldiers who served with distinguished valor.",
      image: "/images/site-images/06cde236fbe9febdbd1d6855caaadbe9_676x902_fit.jpeg",
      fallback: "https://bzhomefront.com/gallery_gen/06cde236fbe9febdbd1d6855caaadbe9_676x902_fit.jpeg",
    },
    {
      year: "600 Fallen Heroes",
      title: "Restoring Peoples' Memorial Cemetery",
      desc: "Nearly 600 veterans rest at Peoples' Memorial Park Cemetery in Dallas. BZ Homefront conducts perpetual caretaking, grave identification, and headstone preservation.",
      image: "/images/site-images/c244df8cfdbb33e4fdef4ec593f61b4b_674x898_fit.jpeg",
      fallback: "https://bzhomefront.com/gallery_gen/c244df8cfdbb33e4fdef4ec593f61b4b_674x898_fit.jpeg",
    },
    {
      year: "Camp Fort 24th",
      title: "Youth Leadership, Horsemanship & Resilience",
      desc: "Through equestrian training, survival encampments, and emotional intelligence mentoring, veteran instructors instill discipline and pride into future generations.",
      image: "/images/site-images/fc9f4e3b8f62ff60107c59b8277760e7_fit.jpeg",
      fallback: "https://bzhomefront.com/gallery_gen/fc9f4e3b8f62ff60107c59b8277760e7_fit.jpeg",
    },
    {
      year: "Honor Flight Network",
      title: "Veterans Honor Flight Pilgrimage",
      desc: "Nominating and escorting WWII, Korean War, and Vietnam veterans to Washington, D.C. national memorials at zero cost to the veteran, honoring their sacred service.",
      image: "/images/site-images/image18-ts1756167481.jpeg",
      fallback: "https://bzhomefront.com/gallery/image18-ts1756167481.jpeg",
    },
    {
      year: "South Dallas Outreach",
      title: "Veterans Food Security & Street Feeding",
      desc: "Direct mobile feeding missions delivering hot meals, winter coats, hygiene packs, and VA claims navigation directly to homeless veterans across Dallas.",
      image: "/images/site-images/2c492f741fa6e529f70ab92cfafca3aa_898x898_fit.jpeg",
      fallback: "https://bzhomefront.com/gallery_gen/2c492f741fa6e529f70ab92cfafca3aa_898x898_fit.jpeg",
    },
  ];

  const maxHeritageIndex = Math.max(0, heritageStories.length - heritagePerView);

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
      q: "What re-entry assistance is available for incarcerated veterans?",
      a: "Our justice-involved veterans program helps post-release servicemembers obtain valid Texas state IDs, replacement Social Security cards, active checking/savings accounts, fair-chance job placement, and transitional housing referrals.",
    },
    {
      q: "What are the Honor Flights and who is eligible?",
      a: "Honor Flights provide all-expenses-paid journeys for senior veterans (WWII, Korea, Vietnam, and terminally ill veterans of any conflict) to visit the national memorials in Washington D.C. BZ Homefront assists veterans and their family guardians with application and travel coordination.",
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#FAF7F2] text-slate-900 min-h-screen font-serif pb-0 selection:bg-amber-900 selection:text-white">
      {/* 1. Light Masthead Top Bar */}
      <div className="bg-[#F0ECE1] border-b border-stone-300 py-2.5 px-4 text-xs font-sans text-stone-700">
        <div className="container mx-auto flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-900 uppercase tracking-wider text-[11px] bg-stone-300 px-2 py-0.5 rounded">
              Layout 3 • Heritage Foundation
            </span>
            <span className="hidden sm:inline">Official Commemorative Publication &amp; Legal Archive</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span>Dallas, Texas • Vol. III</span>
            <span className="text-red-900 font-bold">IRS 501(c)(19) Registry</span>
          </div>
        </div>
      </div>

      {/* 2. Editorial Top Banner with Background Image & Black Color Opacity Overlay */}
      <header className="relative overflow-hidden w-full bg-black text-white py-14 sm:py-20 md:py-24 border-b-4 border-amber-600 shadow-2xl">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=2000&q=80"
            alt="Bravo Zulu Homefront Alliance Heritage Banner"
            onError={(e) => {
              e.currentTarget.src = "/images/site-images/48b2b89ba633dfbd50093fc837fcfbb4_1045x853_235x0_1280x853_crop.jpg";
            }}
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Black Color Opacity Overlay */}
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
        </div>

        {/* Banner Content Over Image - All in Crisp White Text */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-6xl">
          {/* Top metadata strip in White / Amber */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-sans tracking-widest uppercase text-white/80 border-b border-white/20 pb-3 mb-6 sm:mb-8 max-w-4xl mx-auto">
            <span>Dallas, Texas • Est. by U.S. Military Veterans</span>
            <span className="font-bold text-amber-400">Bravo Zulu Homefront Alliance</span>
            <span>Non-Profit Foundation Archive</span>
          </div>

          {/* Center Official Logo Emblem */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5 rounded-full overflow-hidden border-2 border-amber-400 shadow-2xl bg-white p-1 transition-transform hover:scale-105">
            <img
              src="/logo.png"
              alt={site.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Headline in Bold White Text */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-serif drop-shadow-lg">
            Bravo Zulu Homefront
          </h1>

          {/* Subtitle in White with Gold Accents */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 text-white/90 italic text-sm sm:text-base font-serif">
            <span className="text-white drop-shadow">“Veterans Unite: Impact Beyond Service”</span>
            <span className="text-amber-400 not-italic">•</span>
            <span className="text-amber-300 font-bold not-italic drop-shadow">Strength • Unity • Service</span>
            <span className="text-amber-400 not-italic">•</span>
            <span className="text-white drop-shadow">Naval Signal: “Well Done”</span>
          </div>

          {/* Ornamental Divider */}
          <div className="mt-6 mx-auto w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </div>
      </header>

      {/* 3. Main Editorial Hero Story */}
      <section className="py-12 md:py-16 container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="border-l-4 border-red-900 pl-4 py-1">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block">
                Founders&apos; Chronicle
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 mt-1 leading-tight">
                From the Frontlines to the Homefront: Continuing the Mission in North Texas
              </h2>
            </div>

            {/* Leadership Portrait & Story */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-md bg-stone-100 max-h-96">
              <img
                src="/images/site-images/291dc655cf052cf37f875d1849678e8c_983x1025_0x0_983x1280_crop.jpg"
                alt="Bravo Zulu Veterans Leadership"
                className="w-full h-80 object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-stone-950/80 backdrop-blur-sm p-3 text-white text-xs font-sans flex items-center justify-between">
                <span>Official Leadership Delegation • Dallas Headquarters</span>
                <span className="text-amber-400 font-bold">100% Veteran Led</span>
              </div>
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
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="font-semibold">Hours:</span>
                <span className="font-mono text-stone-800">Mon - Fri: 9am - 5pm</span>
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
                href="/tax-relief"
                className="text-xs font-bold text-red-900 hover:underline inline-flex items-center gap-1"
              >
                <span>Check Eligibility &amp; Filing Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* 4. Four Core Pillars of Impact */}
      <section className="py-16 bg-[#F3EDE2] border-t-2 border-b-2 border-stone-300">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900">
              Pillars of Veteran Service
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-950 font-serif">
              Four Core Commitments to Our Veterans
            </h2>
            <p className="text-stone-600 text-sm font-sans max-w-xl mx-auto">
              Authentic programs designed by veterans to solve real challenges in our Dallas communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
            <div className="p-6 bg-white rounded-2xl border border-stone-300 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-950 font-serif text-lg">Veteran Help Center</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Hands-on assistance ordering DD-214 records, filing for VA disability ratings, and health enrollment.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-300 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-950 font-serif text-lg">Justice Re-Entry</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Helping post-release veterans obtain state IDs, Social Security cards, bank accounts, and fair-chance jobs.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-300 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-950 font-serif text-lg">Honor Flights</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                All-expenses-paid memorial tours to Washington D.C. for WWII, Korean War, and Vietnam War veterans.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-300 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-950 font-serif text-lg">Buffalo Soldiers</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Camp Fort 24th youth horsemanship encampments and caretaking 600 fallen heroes at Peoples&apos; Memorial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Living History & Heritage Section (5 Cards Slider - Scrolls 1 by 1) */}
      <section className="py-16 container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900">
              Living History In Action
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-950 font-serif">
              Preserving Valor, Educating the Next Generation
            </h2>
            <p className="text-stone-600 text-sm font-sans max-w-xl">
              Our mission carries forward the storied legacy of the Buffalo Soldiers, honors those laid to rest in sacred Texas soil, and uplifts veterans across the state.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-bold text-stone-600 font-sans">
              {heritageIndex + 1} - {Math.min(heritageIndex + heritagePerView, heritageStories.length)} of {heritageStories.length}
            </span>
            <button
              type="button"
              onClick={() => setHeritageIndex((prev) => (prev > 0 ? prev - 1 : maxHeritageIndex))}
              aria-label="Previous card"
              className="w-10 h-10 rounded-full bg-white border border-stone-300 shadow-sm hover:bg-stone-100 active:scale-95 flex items-center justify-center text-stone-800 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setHeritageIndex((prev) => (prev < maxHeritageIndex ? prev + 1 : 0))}
              aria-label="Next card"
              className="w-10 h-10 rounded-full bg-white border border-stone-300 shadow-sm hover:bg-stone-100 active:scale-95 flex items-center justify-center text-stone-800 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 5-Card Slider Viewport & Track */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-out -mx-3"
            style={{
              transform: `translateX(-${heritageIndex * (100 / heritagePerView)}%)`,
            }}
          >
            {heritageStories.map((h, i) => (
              <div
                key={i}
                style={{ width: `${100 / heritagePerView}%` }}
                className="shrink-0 px-3"
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-stone-300 shadow-sm flex flex-col justify-between h-full group hover:shadow-md transition-shadow">
                  <div>
                    <div className="relative h-48 overflow-hidden bg-stone-100 border-b border-stone-200">
                      <img
                        src={h.image}
                        alt={h.title}
                        onError={(e) => {
                          if (h.fallback && e.currentTarget.src !== h.fallback) {
                            e.currentTarget.src = h.fallback;
                          }
                        }}
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
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {Array.from({ length: maxHeritageIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setHeritageIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                heritageIndex === idx ? "w-6 bg-red-900" : "w-2 bg-stone-300 hover:bg-stone-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 6. Living History Photo Gallery Grid (with Lightbox Slider: 4 at a time, scroll 1 by 1) */}
      <section className="py-16 bg-[#F3EDE2] border-t-2 border-b-2 border-stone-300">
        <div className="container mx-auto px-4 max-w-6xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900">
                Official Media Archive
              </span>
              <h2 className="text-3xl font-extrabold text-stone-950 font-serif mt-1">
                Field Documentation &amp; Living History
              </h2>
              <p className="text-stone-600 text-xs font-sans">
                Authentic photographic moments from bzhomefront.com/Gallery/ • 4 photos per view, scroll 1 by 1
              </p>
            </div>
            <Link
              href="/gallery"
              className="text-xs font-sans font-bold text-red-900 hover:underline inline-flex items-center gap-1.5"
            >
              <span>View All 12 Archive Photos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Lightbox Gallery Slider */}
          <LightboxGallery images={galleryImages} slider={true} />
        </div>
      </section>

      {/* 7. Veterans Benefits Knowledgebase & FAQs */}
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
      </section>

      {/* 8. Contact Intake Desk Section - Custom #223788 Layout */}
      <section className="py-16 md:py-24 bg-[#223788] text-white font-sans relative overflow-hidden">
        {/* Subtle dot matrix pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)`,
            backgroundSize: "24px 24px"
          }}
        />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Info & Socials */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-amber-300">
                  <span className="text-[10px]">▲</span> CONTACT US
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Need a Quick Query?
                </h2>
              </div>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Have questions regarding Texas property tax exemptions (Form 50-114), VA disability claims, DD-214 records, or our Buffalo Soldiers youth camps? Reach out directly to our Dallas veteran service team.
              </p>

              {/* Contact rows with dividers */}
              <div className="space-y-5 pt-2">
                {/* 1. Contact Number */}
                <div className="flex items-start gap-4 pb-4 border-b border-white/20">
                  <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-white">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-white tracking-wide">Contact Number</p>
                    <p className="text-xs sm:text-sm text-white/85 font-medium">
                      +1 (469) 268-4147 / +1 (682) 882-0508
                    </p>
                  </div>
                </div>

                {/* 2. Our Emails */}
                <div className="flex items-start gap-4 pb-4 border-b border-white/20">
                  <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-white tracking-wide">Our Emails</p>
                    <p className="text-xs sm:text-sm text-white/85 font-medium">
                      info@bzhomefront.org - support@bzhomefront.org
                    </p>
                  </div>
                </div>

                {/* 3. Our Location */}
                <div className="flex items-start gap-4 pb-4 border-b border-white/20">
                  <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-white tracking-wide">Our Location</p>
                    <p className="text-xs sm:text-sm text-white/85 font-medium leading-relaxed">
                      3225 Martin Luther King Jr. Blvd, Suite 130, Dallas, TX 75210
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Pills */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all transform hover:scale-105"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 fill-current" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all transform hover:scale-105"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4 fill-current" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all transform hover:scale-105"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all transform hover:scale-105"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Floating Crisp White Form Card */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/20">
              <div className="text-center space-y-2 mb-8">
                <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-[#223788]">
                  <span className="text-[10px]">▲</span> GET TO KNOW US
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  How May We Help You!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                  Submit your request directly to our veteran desk for immediate assistance with benefits, claims, memorial honors, and youth programs.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-black text-emerald-950 text-lg">Inquiry Submitted Successfully</h4>
                  <p className="text-xs sm:text-sm text-emerald-700">
                    A BZ Alliance veteran intake officer will review your request and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. John Miller"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="(469) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Program of Interest</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none">
                        <option>Texas Property Tax Exemption (Form 50-114)</option>
                        <option>VA Disability Claims &amp; Rating Filing</option>
                        <option>Camp Fort 24th Youth Horsemanship</option>
                        <option>Honor Flight Application</option>
                        <option>General Support / Volunteer</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Your Message or Inquiry</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can our veteran officers assist you or your family?"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-950 hover:bg-slate-800 text-white transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Submit Confidential Request</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 9. Commemorative Donate Strip */}
      <section className="bg-amber-600 text-slate-950 py-10 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-wider bg-slate-950 text-white px-2 py-0.5 rounded">
              Support Our Heroes
            </span>
            <h3 className="text-2xl font-black font-serif text-slate-950">
              Strength • Unity • Service — Bravo Zulu
            </h3>
            <p className="text-xs font-bold text-amber-950">
              Tax-deductible contributions directly fund emergency food relief, grave care, and youth horsemanship.
            </p>
          </div>
          <Link
            href="/contact?donate=true"
            className="px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider bg-slate-950 text-white hover:bg-slate-800 shadow-lg transition-all shrink-0 inline-flex items-center gap-2"
          >
            <span>Donate to the Alliance</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { site, services, events, stats, galleryImages } from "@/data/site";
import { LightboxGallery } from "@/components/lightbox-gallery";
import {
  Shield,
  Heart,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Award,
  Star,
  MapPin,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  Send,
  Check,
  TrendingUp,
  Play,
  X,
} from "lucide-react";

export function DesignTwo() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      eyebrow: "IRS 501(c)(19) Non-Profit Veterans Alliance",
      title: "Want to know how YOU can make a difference in the world?",
      subtitle:
        "Veteran-founded and operated. We are continuing the mission of service across North Texas by easing civilian adjustment, protecting earned benefits, and mentoring youth.",
      primaryCta: "Request Veteran Assistance",
      primaryLink: "#contact",
      secondaryCta: "Learn About Our Mission",
      secondaryLink: "#about",
      image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=1400&q=80",
      tag: "Flagship Mission",
    },
    {
      eyebrow: "Our Core Motto",
      title: "“Veterans Unite: Impact Beyond Service.”",
      subtitle:
        "Assisting Texas military veterans and surviving spouses with VA disability claims, DD-214 records retrieval, and 100% Texas property tax homestead exemptions under Form 50-114.",
      primaryCta: "Explore Veteran Services",
      primaryLink: "#about-pillars",
      secondaryCta: "Call Hotline: (469) 268-4147",
      secondaryLink: "tel:4692684147",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1400&q=80",
      tag: "Earned Benefits",
    },
    {
      eyebrow: "Youth Leadership & Heritage",
      title: "Buffalo Soldiers Camp Fort 24th & Living History",
      subtitle:
        "Partnering with the Dallas County Buffalo Soldiers (Lancaster Chapter) to teach young cadets horsemanship, encampment survival, emotional intelligence, and 19th-century military heritage.",
      primaryCta: "Explore Community Events",
      primaryLink: "#events",
      secondaryCta: "View Photo Documentation",
      secondaryLink: "#gallery",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1400&q=80",
      tag: "Living History",
    },
  ];

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Events Filter: All | Current | Past
  const [eventTab, setEventTab] = useState<"all" | "current" | "past">("all");
  const filteredEvents = events.filter((e) => {
    if (eventTab === "all") return true;
    if (eventTab === "current") return e.tag === "Current" || e.tag === "Featured";
    if (eventTab === "past") return e.tag === "Past";
    return true;
  });

  // Contact form state
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "Army",
    interest: "Texas Property Tax Exemption",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  // Donation state
  const [donationSuccess, setDonationSuccess] = useState(false);

  // Logo marquee partners
  const partners = [
    { name: "Dallas County Buffalo Soldiers", desc: "Lancaster Chapter Partner" },
    { name: "IRS 501(c)(19) Non-Profit", desc: "Tax-Exempt Veterans Org" },
    { name: "Honor Flight Network", desc: "Washington D.C. Memorials" },
    { name: "Peoples' Memorial Cemetery", desc: "600 Resting Heroes" },
    { name: "Texas Veterans Commission", desc: "Benefits & CAD Liaison" },
    { name: "City of Fort Worth Commemoration", desc: "Civic Honorees" },
    { name: "South Dallas Community Outreach", desc: "Hunger & Care Alliance" },
  ];

  const handleImageFallback = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80";
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans pb-0 selection:bg-amber-100 selection:text-amber-900">
      {/* ========================================================
          1. HERO SLIDER SECTION WITH TEXT & REALISTIC IMAGERY
          ======================================================== */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[580px] sm:min-h-[640px] flex items-center">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Dark Vignette */}
            <img
              src={slide.image}
              alt={slide.title}
              onError={handleImageFallback}
              className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.42]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/30" />

            {/* Slide Content */}
            <div className="container mx-auto px-4 h-full flex items-center relative z-20 py-20">
              <div className="max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{slide.eyebrow}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-[1.12]">
                  {slide.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
                  {slide.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={slide.primaryLink}
                    className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/25 transition-all inline-flex items-center gap-2"
                  >
                    <span>{slide.primaryCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setVideoModalOpen(true)}
                    className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-900/80 hover:bg-slate-900 text-white border border-amber-500/40 hover:border-amber-400 transition-all inline-flex items-center gap-2 backdrop-blur-sm shadow"
                  >
                    <Play className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>Watch Video</span>
                  </button>

                  <a
                    href={slide.secondaryLink}
                    className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all inline-flex items-center gap-2 backdrop-blur-sm"
                  >
                    <span>{slide.secondaryCta}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3">
          <button
            type="button"
            onClick={prevSlide}
            className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white border border-white/20 flex items-center justify-center transition-all backdrop-blur-sm"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-1.5 px-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === currentSlide ? "w-8 bg-amber-400" : "w-2.5 bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={nextSlide}
            className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white border border-white/20 flex items-center justify-center transition-all backdrop-blur-sm"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ========================================================
          2. ABOUT US SECTION (Left Image + Right Heading, Content, Buttons)
          ======================================================== */}
      <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Clean Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80"
                  alt="Bravo Zulu Homefront Alliance Veterans"
                  onError={handleImageFallback}
                  loading="lazy"
                  className="w-full h-[460px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Column: Heading, Content, Points, Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 shadow-sm">
                <Shield className="w-3.5 h-3.5 text-amber-700" />
                <span>About Bravo Zulu Alliance</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-slate-950 leading-[1.14]">
                  Continuing The Sacred Mission of Service in North Texas
                </h2>
                <p className="text-base sm:text-lg font-serif italic text-amber-800 font-semibold pt-1">
                  “{site.motto}”
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Founded and operated by U.S. military veterans, <strong>Bravo Zulu Homefront Alliance</strong> is an officially recognized IRS 501(c)(19) tax-exempt non-profit organization based in Dallas, Texas. We dedicate ourselves to easing the civilian adjustment challenges faced by transitioning servicemembers and their families.
              </p>

              {/* Core Points with Icons */}
              <div className="space-y-3 pt-1 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">Naval Expression of Honor</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      In naval signaling, the hoist of the flags <em>“Bravo”</em> and <em>“Zulu”</em> conveys a singular, revered message: <strong>“Well Done.”</strong> We ensure every veteran receives the honor and support they earned.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">Earned Benefits &amp; Property Tax Relief</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Free, hands-on assistance securing 100% Texas property tax exemptions (Form 50-114) and navigating VA disability compensation claims with county appraisal districts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">Youth Mentorship &amp; Living History</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Partnering with the Dallas County Buffalo Soldiers to teach equestrian horsemanship, discipline, and emotional resilience through Camp Fort 24th.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/about"
                  className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-950 hover:bg-slate-800 text-white shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>

                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 transition-all inline-flex items-center gap-2 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Contact Dallas HQ</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FULL-WIDTH VERIFIED COMMUNITY IMPACT STATS BANNER
          (Full width from end to end left to right)
          ======================================================== */}
      <section className="w-full bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-14 px-4 border-t-2 border-b-2 border-amber-500/30 shadow-2xl">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Verified Community Impact
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
              Results Delivered Across North Texas
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Direct assistance for wartime veterans, surviving spouses, and local youth since inception.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md space-y-1 hover:border-amber-400/50 transition-all hover:bg-white/15"
              >
                <p className="text-3xl sm:text-4xl font-black text-amber-400 font-serif">{s.value}</p>
                <p className="text-xs font-bold text-white mt-1 uppercase tracking-wider">{s.label}</p>
                <p className="text-[11px] text-slate-300 mt-0.5">{s.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. EVENTS SECTION: CURRENT & PAST EVENTS
          (User: "CURRENT EVENTS or PAST EVENTS bhi sjhow hoge, 1 row me 3 card aey ge, click krke inner page open hoge")
          ======================================================== */}
      <section id="events" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Activities &amp; Programs</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-950 mt-1">
                Community Events: Current &amp; Past
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Click on any event card below to open its dedicated event story and photo gallery.
              </p>
            </div>

            {/* Event Tabs: All | Current | Past */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-slate-200 shadow-sm">
              {[
                { id: "all" as const, label: "All Events" },
                { id: "current" as const, label: "Current Events" },
                { id: "past" as const, label: "Past Events" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setEventTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    eventTab === tab.id
                      ? "bg-slate-900 text-white shadow"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 1 Row of 3 Cards Grid (lg:grid-cols-3) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((evt) => {
              const isCurrent = evt.tag === "Current" || evt.tag === "Featured";

              return (
                <Link
                  key={evt.id}
                  href={`/events/${evt.id}`}
                  className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <img
                        src={evt.image}
                        alt={evt.title}
                        onError={handleImageFallback}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow ${
                            isCurrent
                              ? "bg-amber-500 text-slate-950 border border-amber-300"
                              : "bg-slate-950 text-white border border-slate-800"
                          }`}
                        >
                          {isCurrent ? "Current Event" : "Past Event"}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs text-amber-800 font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{evt.date || "Community Activity"}</span>
                      </div>
                      <h3 className="text-lg font-bold font-serif text-slate-950 leading-snug group-hover:text-amber-700 transition-colors">
                        {evt.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{evt.summary}</p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-800">
                    <span>View Event Story &amp; Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. RICH SECTION FROM ABOUT US PAGE (Pillars & Focus)
          ======================================================== */}
      <section id="about-pillars" className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Dedicated Service Areas</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-950">
              Core Pillars of the BZ Alliance
            </h2>
            <p className="text-sm text-slate-600">
              Direct guidance for military veterans, surviving spouses, and local youth across North Texas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 px-2.5 py-1 rounded bg-amber-100">
                      {svc.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-serif text-slate-950">{svc.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{svc.shortDesc}</p>
                  <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-200">
                    {svc.bullets.slice(0, 3).map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-2">
                  <a
                    href="#contact"
                    className="text-xs font-bold text-slate-900 hover:text-amber-700 inline-flex items-center gap-1"
                  >
                    <span>Request Free Guidance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. GALLERY SECTION: LIGHTBOX POPUP WITH 1 ROW OF 4 IMAGES
          (User: "ius me gallery hoge light box ki trha or gallery me bs image do 1 row me 4 or lighty boc bhii do clcik krke pr popup me open ho erse")
          ======================================================== */}
      <section id="gallery" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Photo Documentation</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-950 mt-1">
                Community Lightbox Gallery
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              Click on any photo below to view in full-screen Lightbox popup with high-res zoom.
            </p>
          </div>

          {/* 1 Row of 4 Images with Lightbox Popup */}
          <LightboxGallery images={galleryImages.slice(0, 4)} columns={4} />

          <div className="text-center pt-2">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
            >
              <span>View Full 8-Photo Archive</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. LOGO AUTO-PLAY / MARQUEE TICKER SLIDER
          ======================================================== */}
      <section className="py-12 bg-white border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl mb-6 text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
            Trusted Community Collaborations &amp; Affiliations
          </span>
        </div>

        {/* Marquee Ticker */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-pulse w-max">
            {[...partners, ...partners].map((p, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-800 flex items-center justify-center font-bold text-xs">
                  ★
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{p.name}</p>
                  <p className="text-[10px] text-slate-500">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. CONTACT US SECTION (Embedded Form & Location)
          ======================================================== */}
      <section id="contact" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Connect With Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-950">
              Direct Veteran Intake &amp; Inquiry
            </h2>
            <p className="text-sm text-slate-600">
              Reach out for VA claims assistance, Texas property tax guidance, youth camp registration, or volunteering.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Contact Details Left */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-bold font-serif text-slate-950">Dallas Headquarters</h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Address:</span>
                      <span>3225 Martin Luther King Jr. Blvd, Suite 130, Dallas, TX 75210</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Hotline:</span>
                      <a href="tel:4692684147" className="font-bold text-amber-800 hover:underline">
                        (469) 268-4147
                      </a>{" "}
                      • (682) 882-0508
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Email:</span>
                      <a href="mailto:info@bzhomefront.org" className="text-slate-800 hover:text-amber-800">
                        {site.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">Intake Hours:</span>
                      <span>Monday – Friday: 9:00 AM – 5:00 PM CST</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                <p className="font-bold flex items-center gap-1.5 text-amber-900">
                  <CheckCircle2 className="w-4 h-4 text-amber-700" /> Free &amp; Confidential Consultation
                </p>
                <p className="text-[11px] text-slate-700 leading-relaxed">
                  All personal identifying information, medical records, and discharge papers submitted are handled with strict military-grade privacy.
                </p>
              </div>
            </div>

            {/* Form Right */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
                {contactSubmitted ? (
                  <div className="py-10 text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto font-bold text-xl">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold font-serif text-slate-950">Inquiry Received</h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                      Thank you. A Bravo Zulu veteran intake representative will reach out to you within 24–48 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setContactSubmitted(false)}
                      className="mt-3 px-5 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold font-serif text-slate-950 mb-1">
                      Request Consultation or Information
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={contactData.name}
                          onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={contactData.phone}
                          onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                          placeholder="(469) 000-0000"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={contactData.email}
                          onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">How Can We Assist?</label>
                        <select
                          value={contactData.interest}
                          onChange={(e) => setContactData({ ...contactData, interest: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
                        >
                          <option value="Texas Property Tax Exemption">Texas Property Tax Exemption (Form 50-114)</option>
                          <option value="VA Disability & DD-214 Records">VA Disability Claims &amp; DD-214 Records</option>
                          <option value="Buffalo Soldiers Youth Camp Fort 24th">Buffalo Soldiers Camp Fort 24th Enrollment</option>
                          <option value="Honor Flight Nomination">Honor Flight Nomination for Senior Veteran</option>
                          <option value="Volunteer or Partner">Volunteer With Alliance / Community Partner</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Brief Situation / Message</label>
                      <textarea
                        rows={3}
                        value={contactData.message}
                        onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                        placeholder="Please share any relevant details (e.g., Texas county, disability percentage, urgent deadlines)..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-950 hover:bg-slate-800 text-white transition-colors shadow-md inline-flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Submit Confidential Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. DONATE CALLOUT STRIP RIGHT ABOVE FOOTER
          (Clean text + direct Donate Now button, seamlessly meeting footer)
          ======================================================== */}
      <section className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 py-10 px-4 shadow-xl border-t-2 border-amber-400">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-slate-950 text-white">
                <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> IRS 501(c)(19) Tax-Deductible
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-950">
                Support Texas Military Veterans &amp; Youth Programs
              </h2>
              <p className="text-xs sm:text-sm text-amber-950 max-w-xl font-medium">
                Your generosity directly funds hot meals in South Dallas, perpetual caretaking of 600 fallen heroes' graves, and equipment for youth cadets at Camp Fort 24th.
              </p>
            </div>

            {/* Direct Donate Button */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setDonationSuccess(true)}
                className="px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider bg-slate-950 hover:bg-slate-800 text-white transition-all shadow-xl hover:scale-105 inline-flex items-center gap-2.5"
              >
                <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Donate Now (501(c)(19) Tax-Deductible)</span>
              </button>
            </div>
          </div>

          {donationSuccess && (
            <div className="mt-4 p-4 rounded-xl bg-slate-950 text-white text-center text-xs font-semibold animate-in fade-in">
              🙏 Thank you for your generous support of Bravo Zulu Homefront Alliance! We are an officially recognized IRS 501(c)(19) non-profit veterans organization. A tax receipt will be issued for all contributions.
            </div>
          )}
        </div>
      </section>

      {/* Video Lightbox Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/90 text-white hover:bg-slate-800 flex items-center justify-center border border-white/20 transition-all shadow-lg"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src="https://www.youtube-nocookie.com/embed/9No-FiEInLA?autoplay=1&rel=0"
              title="Bravo Zulu Homefront Alliance Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

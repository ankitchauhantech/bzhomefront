"use client";
import React, { useState } from "react";
import Link from "next/link";
import { site, stats, services, events, galleryImages } from "@/data/site";
import {
  ShieldCheck,
  Star,
  Award,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Calendar,
  MapPin,
  HeartHandshake,
  FileText,
  Home,
  Briefcase,
  UserCheck,
  Plane,
  Compass,
  Check,
  TrendingUp,
  Quote,
  Shield,
  Clock,
  Heart,
  Mail,
  Send,
} from "lucide-react";

export function DesignOne() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(false);

  const handleImageFallback = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80";
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  // Current Events (1 row of 3 cards)
  const currentEventsList = [
    {
      id: "rodeo-buffalo",
      title: "The Bill Pickett Invitational Rodeo & Buffalo Soldiers Tribute",
      tag: "Current Event",
      date: "Juneteenth Celebration • Dallas-Fort Worth",
      summary:
        "Partnering with the Dallas County Buffalo Soldiers for an iconic Juneteenth cultural celebration, featuring a living history exhibition of Black cowboys and military riders.",
      image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "fort-worth-history",
      title: "City of Fort Worth Black History City Council Commemoration",
      tag: "Current Event",
      date: "Annual Civic Program • Fort Worth City Hall",
      summary:
        "Recognized as special honored guests at the Fort Worth City Council meeting, celebrating the lasting service and contributions of African American service members.",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "camp-fort-24",
      title: "Camp Fort 24th Youth Horsemanship & Leadership Encampment",
      tag: "Current Event",
      date: "Youth Mentorship • Outdoor Encampment",
      summary:
        "Immersing local youth in outdoor horsemanship, emotional discipline, and character development in partnership with the historic Buffalo Soldiers.",
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  // Past Events (1 row of 3 cards)
  const pastEventsList = [
    {
      id: "peoples-memorial",
      title: "Peoples' Memorial Cemetery Veterans Caretaking & Restoration",
      tag: "Past Event",
      date: "Memorial Mission • Dallas, TX",
      summary:
        "Caretaking and perpetual maintenance of the resting place of over 600 military veterans, including 23 Union and 19 Confederate servicemen.",
      image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "feeding-unhoused",
      title: "Honoring Lance Corporal Jordan Haerter: South Dallas Community Feeding",
      tag: "Past Event",
      date: "Community Outreach • South Dallas",
      summary:
        "Cooking hot gourmet meals on-site and distributing durable hygiene backpacks containing thermal socks, toiletries, and resource cards in honor of fallen heroes.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "community-garden",
      title: "Urban Veteran Victory Garden & Neighborhood Harvest",
      tag: "Past Event",
      date: "Harvest Initiative • South Dallas",
      summary:
        "Transforming an abandoned vacant city lot into a lush organic agricultural hub, harvesting fresh collard greens, tomatoes, and herbs for neighborhood elders and veterans.",
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  // Latest News Articles with Images
  const newsArticles = [
    {
      category: "Texas Tax Advisory",
      title: "How Texas Veterans Can Claim 100% Homestead Property Tax Exemption Under Form 50-114",
      excerpt:
        "Step-by-step guidance on securing total city, county, and school district property tax waivers for 100% disabled veterans and surviving spouses.",
      date: "March 2025 Update",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      link: "/contact?subject=PropertyTaxForm50114",
    },
    {
      category: "VA Benefits Ruling",
      title: "PACT Act Presumptive Conditions: Filing Supplemental Claims in Dallas-Fort Worth",
      excerpt:
        "New toxic exposure presumptions allow thousands of Gulf War and post-9/11 veterans to receive retroactive disability ratings and monthly compensation.",
      date: "February 2025 Update",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      link: "/contact?service=va-claims",
    },
    {
      category: "Community Honor",
      title: "Honor Flight Network 2025 Schedule: Free Washington, D.C. Memorial Journeys",
      excerpt:
        "Fully escorted, all-expenses-paid memorial trips honoring WWII, Korean War, and Vietnam War veterans. Learn how to nominate a local Texas veteran.",
      date: "January 2025 Update",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
      link: "/contact?service=honor-flight",
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans pb-0 selection:bg-amber-100 selection:text-amber-900">
      {/* ========================================================
          1. SECTION: VIDEO DIRECTLY IN BACKGROUND WITH CONTENT OVER IT
          (User: "1 section me video or us ke uper content, koi video ka button nhi rahega")
          ======================================================== */}
      <section className="relative overflow-hidden min-h-[600px] sm:min-h-[680px] flex items-center bg-slate-950 text-white">
        {/* Directly Embedded Video Background (Autoplaying, looping, muted, no click needed) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <iframe
            src="https://www.youtube-nocookie.com/embed/9No-FiEInLA?autoplay=1&mute=1&controls=0&loop=1&playlist=9No-FiEInLA&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1"
            title="Bravo Zulu Homefront Alliance Ambient Video"
            allow="autoplay; encrypted-media"
            className="w-full h-full object-cover scale-150 pointer-events-none brightness-[0.34] contrast-125"
          />
          {/* Dual High-Contrast Vignettes for 100% text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>

        {/* Content Over Video */}
        <div className="container mx-auto px-4 relative z-10 py-20 sm:py-24">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>IRS 501(c)(19) Official Veterans Alliance • Dallas, Texas</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-[1.12]">
              Want to know how{" "}
              <span className="text-amber-400 underline decoration-amber-500/50 underline-offset-4">
                YOU
              </span>{" "}
              can make a difference in the world?
            </h1>

            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
              Founded by U.S. military veterans, <strong>Bravo Zulu Homefront Alliance</strong> is dedicated to easing civilian adjustment challenges, securing 100% Texas property tax exemptions, and continuing the mission of selfless service across Dallas-Fort Worth.
            </p>

            {/* Quick Service Tags */}
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
              <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15">
                #TexasHomesteadForm50114
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15">
                #VADisabilityClaims
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15">
                #BuffaloSoldiersYouthCamp
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15">
                #HonorFlights
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xl shadow-amber-500/25 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-slate-950" />
                <span>Request Veteran Assistance</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:4692684147"
                className="px-7 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/25 transition-all inline-flex items-center gap-2 backdrop-blur-md"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Call (469) 268-4147</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-white/10">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>IRS 501(c)(19) Tax-Exempt Status</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Free Veteran Intake &amp; Guidance</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Dallas HQ: 3225 MLK Jr. Blvd</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. ABOUT US: 50% LEFT 4 IMAGES DESIGN + 50% RIGHT HEADING, CONTENT & BUTTON
          (User: "about us kaki left me 4 imaeg 50% me desgine me or 50% me headung contentr or button")
          ======================================================== */}
      <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* 50% Left: 4 Images Mosaic Grid */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Image 1: Dallas Veterans Leadership */}
                <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 h-48 sm:h-60 group relative bg-slate-100">
                  <img
                    src="/images/site-images/291dc655cf052cf37f875d1849678e8c_983x1025_0x0_983x1280_crop.jpg"
                    alt="Bravo Zulu Veterans Leadership in Dallas"
                    onError={(e) => {
                      e.currentTarget.src = "https://bzhomefront.com/gallery_gen/291dc655cf052cf37f875d1849678e8c_983x1025_0x0_983x1280_crop.jpg";
                    }}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                </div>

                {/* Image 2: Buffalo Soldiers */}
                <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 h-48 sm:h-60 group relative bg-slate-100">
                  <img
                    src="/images/site-images/06cde236fbe9febdbd1d6855caaadbe9_676x902_fit.jpeg"
                    alt="Dallas County Buffalo Soldiers"
                    onError={(e) => {
                      e.currentTarget.src = "https://bzhomefront.com/gallery_gen/06cde236fbe9febdbd1d6855caaadbe9_676x902_fit.jpeg";
                    }}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                </div>

                {/* Image 3: Direct Relief & Help Center */}
                <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 h-48 sm:h-60 group relative bg-slate-100">
                  <img
                    src="/images/site-images/56166a2dcf2cea021b78db9216473a71.jpg"
                    alt="Veteran Help Center & Advocacy"
                    onError={(e) => {
                      e.currentTarget.src = "https://bzhomefront.com/gallery/56166a2dcf2cea021b78db9216473a71.jpg";
                    }}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                </div>

                {/* Image 4: Youth Horsemanship */}
                <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 h-48 sm:h-60 group relative bg-slate-100">
                  <img
                    src="/images/site-images/fc9f4e3b8f62ff60107c59b8277760e7_fit.jpeg"
                    alt="Camp Fort 24th Youth Horsemanship"
                    onError={(e) => {
                      e.currentTarget.src = "https://bzhomefront.com/gallery_gen/fc9f4e3b8f62ff60107c59b8277760e7_fit.jpeg";
                    }}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* 50% Right: Heading, Content & Action Button */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                <span>About Bravo Zulu Homefront Alliance</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-slate-950 leading-[1.15]">
                  Continuing The Sacred Mission of Service in North Texas
                </h2>
                <p className="text-base sm:text-lg font-serif italic text-amber-800 font-semibold">
                  “{site.motto}”
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Founded and operated by U.S. military veterans, <strong>Bravo Zulu Homefront Alliance</strong> is an officially recognized IRS 501(c)(19) tax-exempt non-profit organization based in Dallas, Texas. We dedicate ourselves to easing the complex adjustment challenges faced by transitioning servicemembers and their families.
              </p>

              {/* Core Values Checklist */}
              <div className="space-y-3.5 pt-1 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">Naval Expression of Honor: “Bravo Zulu”</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      In naval signaling, the hoist of the flags <em>“Bravo”</em> and <em>“Zulu”</em> conveys a singular, revered message: <strong>“Well Done.”</strong> We ensure every servicemember hears “Well Done” upon returning home.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">Texas Property Tax Exemptions &amp; VA Claims</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Free guidance securing 100% Texas homestead exemptions (Form 50-114), retrieving military records (DD-214), and securing earned disability ratings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">Youth Mentorship &amp; Buffalo Soldiers Heritage</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Partnering with the Dallas County Buffalo Soldiers to teach equestrian horsemanship, emotional discipline, and pride at Camp Fort 24th.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/about"
                  className="px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider bg-slate-950 hover:bg-slate-800 text-white shadow-xl shadow-slate-950/10 transition-all inline-flex items-center gap-2"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>

                <a
                  href="tel:4692684147"
                  className="px-7 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 transition-all inline-flex items-center gap-2 shadow-sm"
                >
                  <PhoneCall className="w-4 h-4 text-amber-600" />
                  <span>Call: (469) 268-4147</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. CURRENT EVENTS: 1 ROW ME 3 BOX / CARDS
          (User: "CURRENT EVENTS aaey ge 1 roew merr 3 boix ne")
          ======================================================== */}
      <section id="current-events" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Active Programs</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-950 mt-1">
                Current Events
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Upcoming and currently active community initiatives across North Texas.
              </p>
            </div>
            <Link
              href="/events/rodeo-buffalo"
              className="text-xs font-bold text-slate-900 hover:text-amber-800 uppercase tracking-wider inline-flex items-center gap-1.5"
            >
              <span>View Full Schedule</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Exactly 1 Row of 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {currentEventsList.map((evt) => (
              <Link
                key={evt.id}
                href={`/events/${evt.id}`}
                className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group cursor-pointer"
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
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 border border-amber-300 shadow">
                      Current Event
                    </span>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-amber-800 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{evt.date}</span>
                    </div>
                    <h3 className="text-lg font-bold font-serif text-slate-950 leading-snug group-hover:text-amber-700 transition-colors">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{evt.summary}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-800">
                  <span>View Event Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. LATEST NEWS: MODERN PROFESSIONAL DESIGN
          (User: "fir latesyt newq ka acha sa desgien")
          ======================================================== */}
      <section id="news" className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Alliance Advisories</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-950">
              Latest News &amp; Benefits Insights
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Important updates regarding Texas property tax exemptions, VA claims rulings, and community achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {newsArticles.map((article, idx) => (
              <article
                key={idx}
                className="rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      onError={handleImageFallback}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 border border-amber-300 shadow">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold font-serif text-slate-950 group-hover:text-amber-800 transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-amber-800">
                  <span>Read Full Advisory</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. PAST EVENTS: 1 ROW ME 3 GRID CARDS
          (User: "fri PAST EVENTS aaye ge 1 rowe me 3 grtid me")
          ======================================================== */}
      <section id="past-events" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Frontline Mission Archive</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-950 mt-1">
                Past Events
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Completed missions of service, remembrance, and community relief across Dallas.
              </p>
            </div>
            <Link
              href="/gallery"
              className="text-xs font-bold text-slate-900 hover:text-amber-800 uppercase tracking-wider inline-flex items-center gap-1.5"
            >
              <span>View Full Photo Archive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Exactly 1 Row of 3 Grid Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {pastEventsList.map((evt) => (
              <Link
                key={evt.id}
                href={`/events/${evt.id}`}
                className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-400 transition-all flex flex-col justify-between group cursor-pointer"
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
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-950 text-white border border-slate-800 shadow">
                      Past Event
                    </span>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{evt.date}</span>
                    </div>
                    <h3 className="text-lg font-bold font-serif text-slate-950 leading-snug group-hover:text-amber-700 transition-colors">
                      {evt.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{evt.summary}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-amber-800">
                  <span>View Event Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. CONTACT US: FORM & DETAILS IN CLEAN UI
          (User: "for contect us ka foerm or detiles achje se ui me")
          ======================================================== */}
      <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Dallas Headquarters</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-950">
              Connect With Our Veteran Officers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Whether you need assistance with Texas property taxes, VA disability compensation, or enrolling a cadet in Camp Fort 24th, we are here to serve.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left 5 Cols: HQ Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-950 text-white space-y-6 shadow-xl">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950">
                    IRS 501(c)(19) Official Alliance
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-white mt-3">Dallas Headquarters</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Open for walk-ins and scheduled appointments.
                  </p>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Physical Address:</p>
                      <p>3225 Martin Luther King Jr. Blvd, Suite 130</p>
                      <p>Dallas, TX 75210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneCall className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Direct Phone Lines:</p>
                      <p><a href="tel:4692684147" className="hover:text-amber-400">(469) 268-4147</a></p>
                      <p><a href="tel:6828820508" className="hover:text-amber-400">(682) 882-0508</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Email Address:</p>
                      <p><a href="mailto:info@bzhomefront.org" className="hover:text-amber-400">info@bzhomefront.org</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Operating Hours:</p>
                      <p>Monday – Friday: 9:00 AM – 5:00 PM CST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Clean Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Miller"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
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

                {contactSubmitted && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold text-center animate-in fade-in">
                    ✓ Thank you! Your request has been securely submitted to our Dallas intake officers. We will contact you within 24 business hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. DONATE STRIP: LEFT TEXT + RIGHT DONATE NOW BUTTON
          (User: "fir micg 1 puttoin jsi pr lefty me tedxxt hoge or right me donet neow ka button aeyge")
          ======================================================== */}
      <section className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 py-10 px-4 border-t border-amber-600/30">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Text */}
          <div className="space-y-1.5 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-slate-950 text-white">
              <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> IRS 501(c)(19) Official Tax-Deductible Contribution
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-950">
              Support Texas Military Veterans, Surviving Spouses &amp; Youth Programs
            </h2>
            <p className="text-xs sm:text-sm text-amber-950 max-w-2xl font-medium">
              Your tax-deductible donation directly funds hot meals in South Dallas, caretaking 600 graves at Peoples' Memorial, and equipment for youth cadets at Camp Fort 24th.
            </p>
          </div>

          {/* Right: Donate Now Button */}
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
          <div className="container mx-auto max-w-6xl mt-4 p-4 rounded-xl bg-slate-950 text-white text-center text-xs font-semibold animate-in fade-in">
            🙏 Thank you for your generous support of Bravo Zulu Homefront Alliance! We are an officially recognized IRS 501(c)(19) non-profit veterans organization. A tax receipt will be issued for all contributions.
          </div>
        )}
      </section>
    </div>
  );
}

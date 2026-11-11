"use client";
import React, { useState } from "react";
import { site } from "@/data/site";
import { useLayout } from "@/context/layout-context";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock, ArrowRight, Headphones, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Contact() {
  const { activeLayout } = useLayout();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceBranch: "Army",
    interest: "Texas Property Tax Exemption",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  /* ========================================================
     LAYOUT 3 VARIATION (Heritage Commemorative Registry & Intake)
     ======================================================== */
  if (activeLayout === 3) {
    return (
      <div className="bg-[#223788] text-white min-h-screen py-16 md:py-24 font-sans relative overflow-hidden">
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)`,
            backgroundSize: "24px 24px"
          }}
        />

        <div className="container px-4 max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Organization Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-amber-300">
                  <span className="text-[10px]">▲</span> CONTACT US
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Need a Quick Query?
                </h1>
              </div>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Have questions regarding Texas property tax exemptions (Form 50-114), VA disability claims, DD-214 records, or our Buffalo Soldiers youth camps? Reach out directly to our Dallas veteran service team.
              </p>

              {/* Contact rows with dividers */}
              <div className="space-y-5 pt-2">
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

            {/* Right Column: Confidential Intake Form Card */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/20">
              <div className="text-center space-y-2 mb-8">
                <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-[#223788]">
                  <span className="text-[10px]">▲</span> GET TO KNOW US
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  How May We Help You!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                  Submit your inquiry directly to our Dallas veteran desk. We assist with Texas property tax forms, VA claims, cemetery records, and youth programs.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-black text-emerald-950 text-lg">Inquiry Submitted Successfully</h4>
                  <p className="text-xs sm:text-sm text-emerald-700">
                    A BZ Alliance veteran intake officer will review your request and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Name*"
                        className="w-full px-4 py-3.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#223788] focus:ring-1 focus:ring-[#223788] transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email*"
                        className="w-full px-4 py-3.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#223788] focus:ring-1 focus:ring-[#223788] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Subject*"
                      className="w-full px-4 py-3.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#223788] focus:ring-1 focus:ring-[#223788] transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      required
                      className="w-full px-4 py-3.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#223788] focus:ring-1 focus:ring-[#223788] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg font-black text-xs sm:text-sm uppercase tracking-wider bg-[#FF5E14] hover:bg-[#e05210] active:scale-[0.99] text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>SEND A MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ========================================================
     LAYOUT 2 VARIATION (Vanguard Editorial Contact Design)
     ======================================================== */
  if (activeLayout === 2) {
    return (
      <div className="bg-white text-slate-900 min-h-screen py-16 font-sans">
        <div className="container px-4 max-w-6xl mx-auto space-y-12">
          <div className="space-y-3">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-700" /> Layout 2 Contact Dispatch
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-serif text-slate-950">
              Connect With Bravo Zulu Intake Officers
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              Physical offices located at 3225 Martin Luther King Jr. Blvd in Dallas. Walk-ins and scheduled appointments welcome.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Dark HQ Box */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-950 text-white space-y-6 shadow-xl">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950">
                  IRS 501(c)(19) Alliance
                </span>
                <h3 className="text-2xl font-bold font-serif text-white mt-3">Dallas Headquarters</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Serving wartime veterans and families across North Texas.
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
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Hotline &amp; Alternate Line:</p>
                    <p><a href="tel:4692684147" className="hover:text-amber-400">(469) 268-4147</a></p>
                    <p><a href="tel:6828820508" className="hover:text-amber-400">(682) 882-0508</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Direct Email:</p>
                    <p><a href="mailto:info@bzhomefront.org" className="hover:text-amber-400">info@bzhomefront.org</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Office Hours:</p>
                    <p>Monday – Friday: 9:00 AM – 5:00 PM CST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-slate-950">Intake Request Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you. A Bravo Zulu veteran intake representative will review your information and reach out within 24–48 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-950 text-white hover:bg-slate-800"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold font-serif text-slate-950 mb-2">
                    Request Confidential Assistance
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Miller"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(469) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Assistance Needed</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      >
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
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
      </div>
    );
  }

  /* ========================================================
     LAYOUT 1 VARIATION (Classic Card Showcase)
     ======================================================== */
  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen py-16 font-sans">
      <div className="container px-4 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <ShieldCheck className="w-4 h-4 text-amber-700" /> Veteran Assistance &amp; Intake
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-slate-950">
            Connect With Bravo Zulu Homefront Alliance
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Whether you are a veteran seeking VA disability claim or Texas property tax assistance, a parent enrolling a cadet in Camp Fort 24th, or a community volunteer, our officers are ready to assist.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
              <h3 className="text-xl font-bold font-serif text-slate-950">Direct Intake &amp; Headquarters</h3>

              <div className="space-y-5 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-900">Veteran Hotline:</span>
                    <a href="tel:4692684147" className="hover:text-amber-700 block font-mono text-base font-bold text-slate-950">
                      (469) 268-4147
                    </a>
                    <a href="tel:6828820508" className="hover:text-amber-700 block font-mono text-xs text-slate-500">
                      Alternate: (682) 882-0508
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-900">Official Email:</span>
                    <a href="mailto:info@bzhomefront.org" className="hover:text-amber-700 block text-slate-900 font-medium">
                      info@bzhomefront.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-900">Headquarters Address:</span>
                    <p className="text-slate-600 leading-snug">
                      3225 Martin Luther King Jr. Blvd<br />
                      Suite 130, Dallas, TX 75210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-900">Intake Hours:</span>
                    <p className="text-slate-600 leading-snug">
                      Monday – Friday<br />
                      9:00 AM – 5:00 PM CST
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Free Veteran Services
                </span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-lg">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-slate-950">Intake Request Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you. A Bravo Zulu veteran intake representative will review your information and reach out within 24–48 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-2xl font-bold font-serif text-slate-950 mb-2">
                    Request Assistance or Consultation
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(469) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service Branch / Affiliation</label>
                      <select
                        value={formData.serviceBranch}
                        onChange={(e) => setFormData({ ...formData, serviceBranch: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-600 focus:bg-white"
                      >
                        <option value="Army">U.S. Army</option>
                        <option value="Navy">U.S. Navy</option>
                        <option value="Air Force">U.S. Air Force</option>
                        <option value="Marines">U.S. Marine Corps</option>
                        <option value="Coast Guard">U.S. Coast Guard</option>
                        <option value="Space Force">U.S. Space Force</option>
                        <option value="Spouse/Family">Surviving Spouse / Dependent</option>
                        <option value="Community">Community Member / Supporter</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Primary Area of Need</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-600 focus:bg-white"
                    >
                      <option value="Texas Property Tax Exemption">Texas Property Tax Exemption (Form 50-114)</option>
                      <option value="VA Claims & Disability">VA Claims &amp; Disability Paperwork</option>
                      <option value="DD-214 & Records">DD-214 Retrieval &amp; Military Records</option>
                      <option value="Civilian Transition">Civilian Transition &amp; Employment</option>
                      <option value="Youth Mentorship">Youth Mentorship (Camp Fort 24th)</option>
                      <option value="Honor Flight">Honor Flight Nomination</option>
                      <option value="General Inquiry">General Inquiry / Volunteer Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Brief Message or Details (Confidential)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know your specific situation or how our veteran officers can assist you..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-600 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-950 text-white hover:bg-slate-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Submit Confidential Intake</span>
                    <Send className="w-4 h-4 text-amber-400" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center pt-2">
                    🔒 All submissions are kept strictly confidential by Bravo Zulu Homefront Alliance veteran officers.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const Icon = {
  Mail: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4 4h16v16H4z"/>
      <path d="m22 6-10 7L2 6"/>
    </svg>
  ),
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  ),
  Check: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m20 6-11 11-5-5"/>
    </svg>
  ),
  X: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  ),
  Instagram: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  // Logo Triangle Icon
  Triangle: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M 50 20 L 30 60 L 70 60 Z" fill="none" />
      <path d="M 20 70 Q 50 80 80 70" fill="none" />
    </svg>
  ),
};

export default function AirleteLanding() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2A2529]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#C4A4B7]/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.jpg" 
              alt="AirLete Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-light tracking-wide text-[#6B4D61]">AirLete</span>
          </div>
          <div className="hidden items-center gap-10 md:flex">
            <a href="#story" className="text-sm tracking-wide hover:text-[#8B6B7F] transition-colors">Our Story</a>
            <a href="#solution" className="text-sm tracking-wide hover:text-[#8B6B7F] transition-colors">Solution</a>
            <a href="#help" className="text-sm tracking-wide hover:text-[#8B6B7F] transition-colors">Join Early Access</a>
          </div>
          <a 
            href="#help" 
            className="rounded-full bg-gradient-to-r from-[#8B6B7F] to-[#6B4D61] px-6 py-2.5 text-sm text-white hover:from-[#6B4D61] hover:to-[#4A3447] transition-all duration-300 tracking-wide"
          >
            Join Early Access
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF8F5] to-[#F5EEE8]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="fade-in-section text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-[#2A2529]">
                Activewear that<br/>
                <span className="text-[#8B6B7F] font-normal">moves with you</span>
              </h2>
              <p className="text-lg text-[#6B4D61] leading-relaxed mb-8 max-w-xl">
                AirLete designs training focused garments that adapt in real time to changes in movement and intensity, combining function with a clean, polished aesthetic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#help" 
                  className="rounded-full bg-gradient-to-r from-[#8B6B7F] to-[#6B4D61] px-8 py-4 text-base text-white hover:from-[#6B4D61] hover:to-[#4A3447] transition-all duration-300 text-center font-medium tracking-wide shadow-lg"
                >
                  Join Early Access
                </a>
                <a 
                  href="#solution" 
                  className="rounded-full border-2 border-[#8B6B7F] px-8 py-4 text-base hover:bg-[#8B6B7F] hover:text-white transition-all duration-300 text-center font-medium tracking-wide"
                >
                  See How It Works
                </a>
              </div>
            </div>

            {/* Right Side - Hero Images (Before & After) */}
            <div className="fade-in-section relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Image 1 - Full Coverage */}
                <div className="relative group">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-xl ring-2 ring-[#C4A4B7]/20">
                    <img
                      src="/sleeveplum.jpg"
                      alt="AirLete full coverage style with sleeves"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg p-2">
                    <p className="text-[#2A2529] font-semibold text-xs">With Sleeves</p>
                  </div>
                </div>
                
                {/* Image 2 - Modified Style */}
                <div className="relative group mt-8">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-xl ring-2 ring-[#C4A4B7]/20">
                    <img
                      src="/nosleeveplum.jpg"
                      alt="AirLete sleeveless style"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg p-2">
                    <p className="text-[#2A2529] font-semibold text-xs">Sleeveless</p>
                  </div>
                </div>
              </div>
              
              {/* Arrow indicator showing transformation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-[#8B6B7F] text-white rounded-full p-3 shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#8B6B7F]/10 to-transparent pointer-events-none"></div>
      </section>

      {/* How It All Started */}
      <section id="story" className="py-20 bg-gradient-to-br from-[#8B6B7F] to-[#6B4D61] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-5xl font-light mb-16 text-center fade-in-section">How It All Started</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="fade-in-section">
              <p className="text-lg leading-relaxed text-center italic">
                "AirLete began with a simple realization: workouts are dynamic, but activewear is designed for static use. During training, athletes constantly adjust their clothing to find comfort, from rolling up sleeves to other temporary fixes that come undone with even the slightest movement. These interruptions break focus mid-session and highlight a core design gap in other performance apparel. AirLete was created to provide users with garments that adapt to the body in real time throughout a workout."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The AirLete Solution */}
      <section id="solution" className="py-20 bg-[#F5EEE8]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-5xl font-light mb-4 text-[#8B6B7F]">Adaptive Sleeve System</h2>
            <p className="text-lg text-[#6B4D61] max-w-3xl mx-auto">
              Convertible sleeves that can be worn or removed in seconds, without changing outfits or interrupting training.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            {/* Real-Time Adaptability */}
            <div className="text-center fade-in-section">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full text-[#8B6B7F]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Adjustable slider/levels */}
                  <line x1="12" y1="20" x2="52" y2="20"/>
                  <circle cx="38" cy="20" r="4" fill="currentColor"/>
                  <line x1="12" y1="32" x2="52" y2="32"/>
                  <circle cx="26" cy="32" r="4" fill="currentColor"/>
                  <line x1="12" y1="44" x2="52" y2="44"/>
                  <circle cx="42" cy="44" r="4" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[#6B4D61]">Real-Time Adaptability</h3>
              <p className="text-[#8B6B7F] leading-relaxed text-sm">
                Garments adjust your body's movement
              </p>
            </div>

            {/* Performance Fabric */}
            <div className="text-center fade-in-section">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full text-[#8B6B7F]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Wind/air flow lines showing breathability */}
                  <path d="M 12 20 Q 20 20 24 16 Q 28 12 32 12 Q 36 12 40 16"/>
                  <path d="M 12 32 Q 24 32 28 28 Q 32 24 38 24 Q 44 24 48 28"/>
                  <path d="M 12 44 Q 20 44 26 40 Q 30 36 36 36 Q 42 36 46 40"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[#6B4D61]">Performance Fabric</h3>
              <p className="text-[#8B6B7F] leading-relaxed text-sm">
                Breathable, sweat-wicking, and flexible
              </p>
            </div>

            {/* Sleek Design */}
            <div className="text-center fade-in-section">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-full h-full text-[#8B6B7F]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Elegant feather */}
                  <path d="M 32 12 Q 28 28 26 32 Q 24 38 24 48"/>
                  <path d="M 26 18 Q 18 20 16 22"/>
                  <path d="M 26 24 Q 18 26 16 28"/>
                  <path d="M 26 30 Q 20 32 18 34"/>
                  <path d="M 26 36 Q 22 38 20 40"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[#6B4D61]">Sleek Design</h3>
              <p className="text-[#8B6B7F] leading-relaxed text-sm">
                Combines function with a clean aesthetic
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section id="help" className="py-24 bg-[#2A2529] text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Join Early Access */}
            <div className="text-center fade-in-section">
              <div className="w-24 h-24 bg-gradient-to-br from-[#8B6B7F] to-[#6B4D61] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Icon.Check className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Join Early Access</h3>
              <p className="text-[#C4A4B7] leading-relaxed mb-6">
                Be the first to receive product updates and launch announcements
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfr5wWmQFO2nNLUOXoGbFFEGLo64Xu2eP_iFE5Wx2zLlcL-uA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-gradient-to-r from-[#8B6B7F] to-[#6B4D61] px-8 py-3 font-semibold hover:from-[#6B4D61] hover:to-[#4A3447] transition-all duration-300"
              >
                Sign Up
              </a>
            </div>

            {/* Stay Connected */}
            <div className="text-center fade-in-section">
              <div className="w-24 h-24 bg-gradient-to-br from-[#9D7B8E] to-[#8B6B7F] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Icon.Instagram className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Follow us on Instagram</h3>
              <p className="text-[#C4A4B7] leading-relaxed mb-6">
                See our latest products and updates
              </p>
              <a
                href="https://instagram.com/airletewear"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg border-2 border-white/30 px-8 py-3 font-semibold hover:bg-white/10 transition-all duration-300"
              >
                @airletewear
              </a>
            </div>

            {/* Contact Us */}
            <div className="text-center fade-in-section">
              <div className="w-24 h-24 bg-gradient-to-br from-[#6B4D61] to-[#4A3447] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Icon.Mail className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-[#C4A4B7] text-sm mb-1">Email</p>
                  <a href="mailto:info@airletewear.com" className="text-white font-semibold hover:text-[#C4A4B7] transition-colors">
                    info@airletewear.com
                  </a>
                </div>
                
                <div>
                  <p className="text-[#C4A4B7] text-sm mb-1">Founder Contact</p>
                  <a href="mailto:BhatiaI26@darden.virginia.edu" className="text-white font-semibold hover:text-[#C4A4B7] transition-colors break-all">
                    BhatiaI26@darden.virginia.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1517] text-[#C4A4B7] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.jpg" 
                alt="AirLete Logo" 
                className="h-8 w-8 object-contain opacity-80"
              />
              <span className="text-xl font-light tracking-wide">AirLete</span>
              <span className="text-sm">© 2024</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#story" className="hover:text-white transition-colors">Our Story</a>
              <a href="#solution" className="hover:text-white transition-colors">Solution</a>
              <a href="#help" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/airletewear" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Icon.Instagram className="w-6 h-6" />
              </a>
              <a href="mailto:info@airletewear.com" className="hover:text-white transition-colors">
                <Icon.Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

"use client";
import React, { useEffect } from "react";

// Simplified React version with plain HTML elements and Tailwind.

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
};

export default function AirleteLandingPlain() {
  useEffect(() => {
    const anchors = ["#product", "#tech", "#story", "#faq", "#waitlist"];
    const results = anchors.map((sel) => [sel, !!document.querySelector(sel)]);
    console.group("[Airlete] Smoke tests");
    results.forEach(([sel, ok]) => console.log(`${sel} present:`, ok));
    console.groupEnd();
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "").trim();
    if (!email) {
      alert("Please enter an email.");
      return;
    }
    alert("Thanks! You’re on the list.");
    e.currentTarget.reset();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold tracking-tight">Airlete</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#product" className="hover:opacity-70">Product</a>
            <a href="#tech" className="hover:opacity-70">Fabric Tech</a>
            <a href="#story" className="hover:opacity-70">Story</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#waitlist" className="rounded-2xl bg-slate-900 px-4 py-2 text-white hover:opacity-90">Join the waitlist</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm">Modifiable performance tops</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Modifiable tops that adapt to your day</h1>
            <p className="mt-4 max-w-lg text-slate-600">
              Designed for women who move. Secure during high‑impact training, effortless to cool down, and elegant enough for coffee after class.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#waitlist" className="rounded-2xl bg-slate-900 px-6 py-4 text-center text-base text-white hover:opacity-90">Get early access</a>
              <a href="#product" className="flex items-center justify-center gap-2 rounded-2xl border px-6 py-3 text-base hover:bg-slate-50">
                See the product <Icon.ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2"><Icon.Check className="h-4 w-4" />30‑day returns</div>
              <div className="flex items-center gap-2"><Icon.Check className="h-4 w-4" />Fast shipping</div>
              <div className="flex items-center gap-2"><Icon.Check className="h-4 w-4" />Made in USA</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-slate-100">
              <img
                src="/airlete-olive.png"
                alt="Airlete modifiable top"
                className="h-full w-full object-cover"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  // inline neutral placeholder if the file is missing in preview
                  el.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='20'%3EAdd /public/hero-olive-zip.png%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Our Story</h2>
            <p className="mt-3 text-slate-600">Why we’re building Airlete—and what we believe performance wear should do for the people who wear it.</p>
            <div className="mt-8 space-y-6">
              <div className="rounded-3xl border p-6">
                <h3 className="text-xl font-semibold leading-snug">Empowering women<br/>with clothes that<br/>adapt to their bodies,<br/>on their terms</h3>
                <p className="mt-3 text-sm text-slate-600">Your day has modes—train, transition, and chill. Your clothes should keep up without compromises, pinches, or workarounds. Our modifiable system adjusts instantly so you control support, ventilation, and coverage—no outfit change required.</p>
              </div>
              <div className="rounded-3xl border p-6">
                <h3 className="text-xl font-semibold leading-snug">Reducing<br/>overconsumption<br/>and waste through<br/>multifunctional garments</h3>
                <p className="mt-3 text-sm text-slate-600">One top that replaces three. Fewer purchases, fewer returns, fewer unused pieces. Thoughtful design, durable fabrics, and timeless lines so you can wear it longer and style it broader.</p>
              </div>
            </div>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100">
            <img src="/story-hero.jpg" alt="Airlete story" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="border-y bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-20">
          <h2 className="text-3xl font-semibold md:text-4xl">Be first in line</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">Join the waitlist for early access, sizing drops, and founder pricing on our first run.</p>
          <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={onSubmit}>
            <div className="relative flex-1">
              <Icon.Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
              <input name="email" type="email" placeholder="you@name.com" required className="h-11 w-full rounded-md border px-3 pl-9 outline-none ring-0 focus:border-slate-400" />
            </div>
            <button type="submit" className="rounded-2xl bg-slate-900 px-6 py-3 text-white hover:opacity-90">Notify me</button>
          </form>
          <p className="mt-2 text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </main>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA(): JSX.Element {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600/20 via-sky-600/10 to-violet-600/10 border border-white/6 backdrop-blur-md shadow-2xl">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500 to-sky-500 opacity-5" />
          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                  Ready to Grow Your Business?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-2xl">
                  Start using SAFEWAY POS today and simplify billing, inventory,
                  accounting, and business management.
                </p>
              </div>

              <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/request-demo"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold shadow-md transition"
                  aria-label="Book Free Demo"
                >
                  Book Free Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/8 bg-transparent text-white/90 hover:bg-white/6 transition text-sm font-medium"
                  aria-label="Contact Us"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Subtle footer note */}
            <div className="mt-6 text-xs text-slate-300/80 text-center lg:text-left">
              No credit card required • Secure cloud backup • 30-day free trial
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
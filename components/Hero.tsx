'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white pt-28 md:pt-24 lg:pt-8"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/60 to-transparent pointer-events-none z-0" />
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#dbe4ee_0.8px,transparent_1px)] bg-[length:22px_22px] opacity-40" />

      {/* Premium Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(at_20%_20%,rgba(37,99,235,0.10)_0%,transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_80%_80%,rgba(59,130,246,0.08)_0%,transparent_60%)]" />

      {/* White Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-8 lg:py-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="lg:col-span-6">

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-[-2px] text-slate-900">

              Complete POS & ERP Solution

              <br />

              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                for Growing Businesses
              </span>

            </h1>

            <p className="mt-7 max-w-[540px] text-lg lg:text-xl leading-9 text-slate-600">

              Powerful POS & ERP software to manage billing,
              inventory, accounting, payroll, cloud synchronization,
              mobile applications and business reporting —
              all from one intelligent platform.

            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-[0_20px_40px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
              >
                Book Free Demo

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById('demo-video')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-4 font-medium text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50"
              >
                <Play className="h-4 w-4" />
                Watch Demo
              </button>

            </div>

            {/* Feature Badges */}

            <div className="mt-8 flex flex-wrap gap-3">

              {[
                'VAT Ready',
                'Inventory',
                'Accounting',
                'Cloud Ready',
                'Mobile App',
              ].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <span className="text-blue-600">✓</span>
                  {item}
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="lg:col-span-6 flex justify-center lg:justify-end mt-10 lg:mt-0">

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[500px] xl:max-w-[540px] ml-auto"
            >

              <div className="absolute -inset-6 -z-10 rounded-[40px] bg-blue-500/10 blur-3xl" />
<div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
              

                <Image
  src="/office-reception.png"
  alt="SAFEWAY TECHNOLOGIES"
  width={1400}
  height={900}
  priority
  className="w-full max-w-sm sm:max-w-md lg:max-w-none h-auto rounded-3xl object-cover"
/>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
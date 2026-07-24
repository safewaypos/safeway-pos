'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Zap, 
  Clock, 
  Shield, 
  FileText, 
  Headset, 
  DollarSign, 
  Check, 
  X 
} from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: "Easy to Use",
    description: "Intuitive interface designed for speed. Get your team productive in minutes, not weeks.",
  },
  {
    icon: Clock,
    title: "Fast Performance",
    description: "Lightning-fast transactions and instant sync across all devices and locations.",
  },
  {
    icon: Shield,
    title: "Secure Data",
    description: "Bank-level encryption and automatic daily backups with 99.99% uptime guarantee.",
  },
  {
    icon: FileText,
    title: "VAT Ready",
    description: "Built-in GCC VAT compliance with automated filings and audit-ready reports.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description: "Real human support from our expert team with dedicated account managers.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Transparent, scalable plans designed for growing retailers without hidden fees.",
  },
];

const comparisonData = [
  { feature: "Easy Setup", safeway: true, traditional: false },
  { feature: "Local Support", safeway: true, traditional: false },
  { feature: "Regular Updates", safeway: true, traditional: false },
  { feature: "VAT Ready", safeway: true, traditional: false },
  { feature: "Secure Backup", safeway: true, traditional: false },
  { feature: "Affordable Pricing", safeway: true, traditional: false },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_0.7px,transparent_1px)] bg-[length:4px_4px]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_25%_25%,rgba(16,185,129,0.07)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_75%_75%,rgba(16,185,129,0.06)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-transparent to-zinc-950/90" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-sm text-emerald-400">
            Why Retailers Choose Us
          </div>
          <h2 className="text-6xl lg:text-7xl font-semibold tracking-[-3.5px] text-white mb-6">
            Built differently.<br />Built <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">better</span>.
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-zinc-400 tracking-[-0.3px]">
            Every detail is crafted to give you an unfair advantage over traditional POS systems.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Content */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <h3 className="text-5xl font-semibold tracking-[-2.5px] text-white leading-tight mb-6">
                The modern standard<br />for retail operations.
              </h3>
              <p className="text-lg text-zinc-400 mb-8">
                We built SAFEWAY POS from the ground up to solve the real problems retailers face every day.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:shadow-[0_0_30px_rgb(16,185,129,0.4)] active:scale-[0.985]"
              >
                Book Free Demo
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </div>
          </div>

          {/* Right - 6 Premium Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="group relative rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-3xl p-8 hover:bg-zinc-900/80 transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(300px_circle_at_50%_50%,rgba(16,185,129,0.06),transparent)]" />

                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.2 }}
                        className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] group-hover:border-emerald-500/30"
                      >
                        <Icon className="h-7 w-7 text-emerald-400" />
                      </motion.div>

                      <h4 className="text-2xl font-semibold tracking-[-1px] text-white mb-3">
                        {benefit.title}
                      </h4>
                      <p className="text-[15px] leading-relaxed text-zinc-400">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Premium Comparison Table */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-semibold tracking-[-2px] text-white mb-3">
              How we compare
            </h3>
            <p className="text-zinc-400">See why leading retailers are switching to SAFEWAY POS.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-3xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-6 px-8 text-sm font-medium text-zinc-400">Feature</th>
                  <th className="text-center py-6 px-8 text-sm font-medium text-emerald-400">SAFEWAY POS</th>
                  <th className="text-center py-6 px-8 text-sm font-medium text-zinc-400">Traditional Software</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-white/10 last:border-0 hover:bg-white/[0.015] transition-colors">
                    <td className="py-5 px-8 text-white font-medium">{row.feature}</td>
                    <td className="py-5 px-8 text-center">
                      {row.safeway && <Check className="inline h-5 w-5 text-emerald-500" />}
                    </td>
                    <td className="py-5 px-8 text-center">
                      {row.traditional ? (
                        <Check className="inline h-5 w-5 text-emerald-500" />
                      ) : (
                        <X className="inline h-5 w-5 text-red-500/70" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="flex justify-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-2xl px-10 py-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-semibold tracking-tight text-white">Ready to simplify your business?</div>
              <div className="text-zinc-400 mt-1 text-sm">Experience the difference with a personalized demo.</div>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:shadow-[0_0_30px_rgb(16,185,129,0.4)] active:scale-[0.985]"
            >
              Book Free Demo
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
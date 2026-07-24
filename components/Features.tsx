'use client';

import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import { 
  Package, 
  TrendingUp, 
  Users, 
  CreditCard, 
  BarChart3, 
  Smartphone, 
  Shield, 
  Zap 
} from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Package,
    title: "Real-time Inventory",
    description: "Track stock levels across all locations with automatic low-stock alerts and intelligent reordering.",
  },
  {
    icon: TrendingUp,
    title: "AI Sales Forecasting",
    description: "Predict demand and optimize pricing with machine learning models trained on your sales data.",
  },
  {
    icon: Users,
    title: "Customer Intelligence",
    description: "Build rich customer profiles with purchase history, preferences, and personalized engagement tools.",
  },
  {
    icon: CreditCard,
    title: "Unified Payments",
    description: "Accept every payment method with instant reconciliation and automated VAT calculations.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep business insights with customizable dashboards and automated performance reports.",
  },
  {
    icon: Smartphone,
    title: "Mobile POS",
    description: "Full-featured point of sale on any device with offline support and real-time sync.",
  },
  {
    icon: Shield,
    title: "VAT & Compliance",
    description: "Built-in tax compliance for GCC markets with automatic filings and audit-ready records.",
  },
  {
    icon: Zap,
    title: "Lightning Integrations",
    description: "Connect seamlessly with accounting, e-commerce, and ERP systems in seconds.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut"
  },
},
};

const iconVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1, 
    transition: { duration: 0.3, ease: "easeOut" } 
  },
};

const Features = () => {
  return (
    <section id="features" className="relative py-24 bg-zinc-950 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_0.7px,transparent_1px)] bg-[length:4px_4px]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_25%_30%,rgba(16,185,129,0.07)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_75%_70%,rgba(16,185,129,0.06)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950/90" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-sm text-emerald-400">
            Enterprise Capabilities
          </div>
          <h2 className="text-6xl lg:text-7xl font-semibold tracking-[-3.5px] text-white mb-6">
            Built for the <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">most demanding</span> retailers
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-zinc-400 tracking-[-0.3px]">
            Every feature is designed to reduce friction, increase revenue, and give you complete control.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -6, 
                  transition: { duration: 0.2 } 
                }}
                className="group relative rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-3xl p-8 hover:bg-zinc-900/80 transition-all duration-300 overflow-hidden"
              >
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:via-emerald-500/5 group-hover:to-emerald-500/10 transition-all duration-500" />

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_circle_at_var(--x)_var(--y),rgba(16,185,129,0.08),transparent)]" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] group-hover:border-emerald-500/30 transition-colors"
                  >
                    <Icon className="h-7 w-7 text-emerald-400" />
                  </motion.div>

                  <h3 className="text-2xl font-semibold tracking-[-1px] text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Premium CTA Strip */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-2xl px-10 py-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-semibold tracking-tight text-white">Ready to modernize your retail operations?</div>
              <div className="text-zinc-400 mt-1 text-sm">Join 2,400+ retailers already using SAFEWAY POS.</div>
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

export default Features;
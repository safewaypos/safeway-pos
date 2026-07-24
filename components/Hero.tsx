'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Users, Package, DollarSign, Clock } from 'lucide-react';

const Hero = () => {
  const floatingCards = [
    { label: "Today's Sales", value: "$48,920", icon: DollarSign, delay: 0 },
    { label: "Inventory", value: "12.4k", icon: Package, delay: 0.8 },
    { label: "Cloud Sync", value: "Live", icon: Clock, delay: 1.6 },
    { label: "AI Reports", value: "Ready", icon: TrendingUp, delay: 2.4 },
  ];

  const latestSales = [
    { id: 1, customer: "ABC Traders", amount: "$2,840", time: "2m ago" },
    { id: 2, customer: "City Mart", amount: "$1,650", time: "14m ago" },
    { id: 3, customer: "Modern Stores", amount: "$3,210", time: "31m ago" },
  ];

  return (
    <section
  id="home"
  className="relative min-h-[100dvh] flex items-center overflow-hidden bg-zinc-950 pt-20"
>
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_0.8px,transparent_1px)] bg-[length:4px_4px]" />
      
      {/* Gradient Mesh + Aurora */}
      <div className="absolute inset-0 bg-[radial-gradient(at_30%_20%,rgba(16,185,129,0.12)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_70%_80%,rgba(16,185,129,0.08)_0%,transparent_60%)]" />
      
      {/* Glass Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950/80" />

      <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-zinc-400">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Trusted by 1,000+ retailers
              </div>

              <h1 className="text-6xl lg:text-7xl xl:text-[76px] leading-[1.05] font-semibold tracking-[-3.2px] text-white">
                Complete POS<br />& ERP<br />
                <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
                  Solution for Growing Businesses
                </span>
              </h1>

              <p className="max-w-lg text-xl text-zinc-400 tracking-[-0.2px]">
                Enterprise-grade point of sale with real-time inventory, 
                automated accounting, and Powerful reporting and business insights.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-[15px] font-semibold tracking-[-0.2px] shadow-[0_0_25px_rgb(16,185,129,0.35)] hover:shadow-[0_0_40px_rgb(16,185,129,0.5)] hover:-translate-y-0.5 active:scale-[0.985] transition-all duration-200"
              >
                Book Free Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button 
                onClick={() => document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-3 px-7 py-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-white text-[15px] font-medium tracking-[-0.2px] transition-all duration-200 hover:-translate-y-0.5"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['VAT Ready', 'Inventory Management', 'Accounting', 'Cloud Ready', 'Mobile App'].map((badge, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1 text-sm text-zinc-400"
                >
                  <span className="text-emerald-500">✓</span> {badge}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - PREMIUM DASHBOARD */}
          <div className="lg:col-span-5 xl:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative z-10">
              {/* Main Glass Dashboard */}
              <div className="relative rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-zinc-500">Business Dashboard</div>
                    <div className="text-2xl font-semibold tracking-tight">
                      Retail Performance
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" /> Real-time
                  </div>
                </div>

                {/* Revenue Card */}
                <div className="mb-6 rounded-2xl border border-white/10 bg-zinc-950/70 p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm text-zinc-500">Today's Sales</div>
                      <div className="text-4xl font-semibold tracking-[-1.5px] mt-1">
                        LKR 184K
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-400 text-sm flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" /> +12.8%
                      </div>
                      <div className="text-xs text-zinc-500 mt-0.5">vs Yesterday</div>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Orders", value: "1,284", icon: Package },
                    { label: "Customers", value: "892", icon: Users },
                    { label: "Today's Sales", value: "LKR 184K", icon: DollarSign },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4"
                    >
                      <stat.icon className="w-4 h-4 text-emerald-500 mb-3" />
                      <div className="text-2xl font-semibold tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs text-zinc-500 mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Demo Notice */}
                <div className="mt-3 text-center text-[11px] text-zinc-500">
                  *Dashboard values shown are for demonstration purposes only.
                </div>

                {/* Latest Sales */}
                <div>
                  <div className="text-xs text-zinc-500 mb-3 px-1">Recent Transactions</div>
                  <div className="space-y-2">
                    {latestSales.map((sale, index) => (
                      <div key={index} className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm">
                        <div>
                          <div className="font-medium text-white">{sale.customer}</div>
                          <div className="text-xs text-zinc-500">{sale.time}</div>
                        </div>
                        <div className="font-medium text-emerald-400">{sale.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              {floatingCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: [0, -6, 0],
                  }}
                  transition={{ 
                    delay: card.delay, 
                    duration: 4.5, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="absolute -right-6 top-12 hidden xl:block rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-2xl px-5 py-3 shadow-xl"
                  style={{ 
                    transform: `translateY(${index * 18}px)`,
                    zIndex: 20 - index 
                  }}
                >
                  <div className="flex items-center gap-3">
                    <card.icon className="w-4 h-4 text-emerald-500" />
                    <div>
                      <div className="text-xs text-zinc-400">{card.label}</div>
                      <div className="font-semibold tracking-tight text-sm">{card.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Award, Calendar, Cloud, Headset } from 'lucide-react';

interface PricingPlan {
  icon: React.ElementType;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    icon: Award,
    name: "Lifetime License",
    price: "LKR 120,000",
    period: "One Time Payment",
    description: "Own the software forever with full access to all core modules.",
    features: ["All core ERP modules", "VAT & Tax compliance", "Lifetime software license", "Free installation"],
    cta: "Get Lifetime License",
  },
  {
    icon: Calendar,
    name: "Annual Subscription",
    price: "LKR 60,000",
    period: "/ Year",
    description: "Flexible annual plan with continuous updates and support.",
    features: ["All core ERP modules", "VAT & Tax compliance", "Annual updates included", "Priority support"],
    cta: "Start Annual Plan",
    popular: true,
  },
  {
    icon: Cloud,
    name: "Cloud ERP",
    price: "Contact for Quote",
    period: "",
    description: "Fully managed cloud solution with hosting and maintenance.",
    features: ["Cloud hosting included", "All ERP modules", "Automated backups", "Scalable infrastructure"],
    cta: "Contact Sales",
  },
  {
    icon: Headset,
    name: "AMC Support",
    price: "LKR 20,000",
    period: "/ Year",
    description: "Annual Maintenance Contract with dedicated support.",
    features: ["Priority technical support", "Remote troubleshooting", "Regular health checks", "Sri Lanka local support"],
    cta: "Get AMC Support",
  },
];

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const cardVariants: Variants = {
  hover: { y: -6 },
};

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const Icon = plan.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className={`group relative flex flex-col rounded-3xl border p-8 backdrop-blur-3xl transition-all duration-300 ${
        plan.popular
          ? 'border-emerald-500/50 bg-zinc-900/70 scale-[1.02] shadow-[0_0_40px_rgb(16,185,129,0.15)]'
          : 'border-white/10 bg-zinc-900/60 hover:bg-zinc-900/80'
      }`}
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_circle_at_50%_50%,rgba(16,185,129,0.08),transparent)]" />

      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold text-white">
          Most Popular
        </div>
      )}

      <div className="relative z-10 flex flex-col flex-1">
        <div className="mb-8">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
            <Icon className="h-7 w-7 text-emerald-400" />
          </div>
        </div>

        <h3 className="text-2xl font-semibold tracking-[-1px] text-white mb-2">{plan.name}</h3>

        <div className="mb-6 flex items-baseline gap-1">
          <span className="text-5xl font-semibold tracking-[-2px] text-white">{plan.price}</span>
          {plan.period && <span className="text-lg text-zinc-400">{plan.period}</span>}
        </div>

        <p className="text-[15px] text-zinc-400 mb-8 leading-relaxed">{plan.description}</p>

        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={scrollToContact}
          className={`mt-auto w-full rounded-2xl py-3.5 text-sm font-semibold active:scale-[0.985] transition-all ${
            plan.popular
              ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
              : 'border border-white/10 bg-white/[0.02] text-white hover:bg-white/[0.06]'
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </motion.div>
  );
};

const Pricing = () => (
  <section id="pricing" className="relative py-24 bg-zinc-950 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(#27272a_0.7px,transparent_1px)] bg-[length:4px_4px]" />
    <div className="absolute inset-0 bg-[radial-gradient(at_25%_30%,rgba(16,185,129,0.07)_0%,transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(at_75%_70%,rgba(16,185,129,0.06)_0%,transparent_55%)]" />
    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-transparent to-zinc-950/90" />

    <div className="relative max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-sm text-emerald-400">
          Transparent Pricing
        </div>
        <h2 className="text-6xl lg:text-7xl font-semibold tracking-[-3.5px] text-white mb-6">
          Simple, <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">flexible</span> pricing
        </h2>
        <p className="max-w-2xl mx-auto text-xl text-zinc-400 tracking-[-0.3px]">
          Choose the right licensing option for your business with flexible plans and local support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, i) => (
          <PricingCard key={i} plan={plan} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-2xl px-8 py-5 text-sm text-zinc-400">
          {["30 Days Free Demo", "Free Installation", "Basic Training Included", "Sri Lanka Local Support"].map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="inline-flex flex-col lg:flex-row items-center gap-8 rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-3xl px-10 py-8 text-center lg:text-left">
          <div>
            <div className="text-2xl font-semibold tracking-tight text-white mb-1">Need help choosing the right plan?</div>
            <p className="text-zinc-400">Our experts can recommend the best solution for your business.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={scrollToContact}
              className="rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3.5 text-sm font-semibold text-white active:scale-[0.985]"
            >
              Book Free Demo
            </button>
            <button
              onClick={scrollToContact}
              className="rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-3.5 text-sm font-semibold text-white active:scale-[0.985]"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;

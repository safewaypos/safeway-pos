'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Store,
  BriefcaseBusiness,
  Cloud,
  MonitorSmartphone,
} from 'lucide-react';

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
    icon: Store,
    name: "Retail & POS Solution",
    price: "Custom Quote",
    period: "",
    description:
      "Complete billing and inventory solution for retail stores, supermarkets, and growing businesses.",
    features: [
      "POS Software",
      "Inventory Management",
      "Barcode Integration",
      "Installation & Training",
    ],
    cta: "Request Consultation",
  },

  {
    icon: BriefcaseBusiness,
    name: "ERP & Accounting",
    price: "Custom Quote",
    period: "",
    description:
      "Powerful ERP solution to manage accounting, inventory, finance, purchasing and business operations.",
    features: [
      "Accounting",
      "Inventory",
      "VAT Compliance",
      "Local Support",
    ],
    cta: "Find the Right ERP",
    popular: true,
  },

  {
    icon: Cloud,
    name: "Cloud Business",
    price: "Custom Quote",
    period: "",
    description:
      "Secure cloud hosting with remote access, daily backup and managed infrastructure.",
    features: [
      "Cloud Hosting",
      "Daily Backup",
      "Remote Access",
      "Server Maintenance",
    ],
    cta: "Explore Cloud",
  },

  {
    icon: MonitorSmartphone,
    name: "Complete Business Package",
    price: "Let's Talk",
    period: "",
    description:
      "Software, hardware, installation, training and dedicated support—all in one solution.",
    features: [
      "POS Hardware",
      "Barcode Scanner",
      "Receipt Printer",
      "Business Consultation",
    ],
    cta: "Book Free Consultation",
  },
];

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({
    behavior: 'smooth',
  });
};

const cardVariants: Variants = {
  hover: {
    y: -6,
  },
};
const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const Icon = plan.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className={`group relative flex flex-col rounded-3xl border p-6 sm:p-8 backdrop-blur-3xl transition-all duration-300 ${
        plan.popular
          ? "border-emerald-500/50 bg-zinc-900/70 lg:scale-[1.02] shadow-[0_0_40px_rgb(16,185,129,0.15)]"
          : "border-white/10 bg-zinc-900/60 hover:bg-zinc-900/80"
      }`}
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_circle_at_50%_50%,rgba(16,185,129,0.08),transparent)]" />

      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold text-white">
          Recommended
        </div>
      )}

      <div className="relative z-10 flex flex-col flex-1">
        <div className="mb-8">
          <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
            <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400" />
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2">
          {plan.name}
        </h3>

        <div className="mb-6 flex items-baseline gap-2">
          <span className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            {plan.price}
          </span>

          {plan.period && (
            <span className="text-lg text-zinc-400">
              {plan.period}
            </span>
          )}
        </div>

        <p className="text-sm sm:text-[15px] text-zinc-400 mb-6 sm:mb-8 leading-7">
          {plan.description}
        </p>

        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-sm text-zinc-300"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={scrollToContact}
          className={`mt-auto w-full rounded-2xl py-3.5 text-sm font-semibold transition-all active:scale-[0.98] ${
            plan.popular
              ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
              : "border border-white/10 bg-white/[0.02] text-white hover:bg-white/[0.06]"
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </motion.div>
  );
};

const Pricing = () => (
  <section
    id="pricing"
    className="relative overflow-hidden bg-zinc-950 py-16 sm:py-20 lg:py-24"
  >
    <div className="absolute inset-0 bg-[radial-gradient(#27272a_0.7px,transparent_1px)] bg-[length:4px_4px]" />
    <div className="absolute inset-0 bg-[radial-gradient(at_25%_30%,rgba(16,185,129,0.07)_0%,transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(at_75%_70%,rgba(16,185,129,0.06)_0%,transparent_55%)]" />
    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-transparent to-zinc-950/90" />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="mb-16 text-center">

        <div className="inline-block rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-sm text-emerald-400">
          Business Solutions
        </div>

        <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-1.5px] text-white sm:text-5xl lg:text-7xl lg:tracking-[-3.5px]">
          Find the{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
            Right Solution
          </span>{" "}
          for Your Business
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg lg:text-xl">
          Every business is different. We recommend the right combination
          of ERP software, POS systems, cloud solutions, hardware,
          installation, training, and dedicated local support based on
          your business requirements.
        </p>

      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
            <div className="mt-16 sm:mt-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-950 p-8 sm:p-12 text-center">

          <h3 className="text-3xl sm:text-4xl font-semibold text-white">
            Not Sure Which Solution Fits Your Business?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg leading-8 text-zinc-400">
            Don't worry. We don't believe in selling random software.
            We first understand your business process, then recommend
            the most suitable solution that saves time, reduces errors,
            and helps your business grow.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button
              onClick={scrollToContact}
              className="rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:scale-105"
            >
              Book FREE Consultation
            </button>

            <a
              href="https://wa.me/94764692329"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/5"
            >
              WhatsApp Us
            </a>

          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">

            <div>
              <h4 className="text-3xl font-bold text-emerald-400">
                150+
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                Businesses Served
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-emerald-400">
                12+
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                Years Experience
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-emerald-400">
                24/7
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                Local Support
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Pricing;
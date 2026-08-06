'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Store,
  Cloud,
  ShieldCheck,
  Check,
  Sparkles,
  Star,
} from 'lucide-react';

interface Plan {
  icon: React.ElementType;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  button: string;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    icon: Store,
    title: 'Lifetime License',
    price: 'LKR 120,000',
    period: 'One Time',
    description:
      'Perfect for businesses looking for a one-time investment with lifetime software ownership.',
    features: [
      'Lifetime POS License',
      'Inventory Management',
      'Accounting Module',
      'Free Installation',
      'Free Staff Training',
      'Offline Software',
    ],
    button: 'Get Started',
  },
  {
    icon: Cloud,
    title: 'Cloud Subscription',
    price: 'LKR 60,000',
    period: '/ Year',
    description:
      'Run your business securely in the cloud with automatic updates and remote access.',
    features: [
      'Cloud Hosting',
      'Automatic Updates',
      'Daily Backup',
      'Remote Access',
      'Mobile App',
      'Priority Support',
    ],
    button: 'Choose Cloud',
    popular: true,
  },
  {
    icon: ShieldCheck,
    title: 'Annual Maintenance',
    price: 'LKR 20,000',
    period: '/ Year',
    description:
      'Keep your software updated with technical support, bug fixes and maintenance.',
    features: [
      'Software Updates',
      'Technical Support',
      'Remote Assistance',
      'Bug Fixes',
      'Performance Improvements',
      'Priority Service',
    ],
    button: 'Renew AMC',
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb10,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#06b6d410,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <motion.div variants={fadeUp}>

            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">

              <Sparkles className="mr-2 h-4 w-4" />

              Simple & Transparent Pricing

            </span>

          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"
          >
            Choose The Plan
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              That's Right For You
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            Flexible pricing designed for businesses of every size.
            Start today and grow with SAFEWAY POS.
          </motion.p>

        </motion.div>

        {/* Pricing Cards */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid gap-8 lg:grid-cols-3"
        >

          {plans.map((plan) => {

            const Icon = plan.icon;

            return (

              <motion.div
                key={plan.title}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                }}
                className={`relative overflow-hidden rounded-[32px] border p-8 shadow-sm transition hover:shadow-2xl ${
                  plan.popular
                    ? 'border-blue-500 bg-gradient-to-b from-blue-50 to-white'
                    : 'border-slate-200 bg-white'
                }`}
              >

                                {plan.popular && (
                  <div className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                    <Star className="h-3.5 w-3.5 fill-white" />
                    Most Popular
                  </div>
                )}

                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

                  <Icon className="h-8 w-8" />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {plan.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {plan.description}
                </p>

                <div className="mt-8 flex items-end gap-2">

                  <span className="text-5xl font-extrabold text-slate-900">
                    {plan.price}
                  </span>

                  <span className="pb-2 text-lg text-slate-500">
                    {plan.period}
                  </span>

                </div>

                <div className="my-8 h-px bg-slate-200"></div>

                <div className="space-y-4">

                  {plan.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100">

                        <Check className="h-4 w-4 text-blue-600" />

                      </div>

                      <span className="text-slate-700">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className={`mt-10 w-full rounded-full px-6 py-4 font-semibold transition ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-105'
                      : 'border border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  {plan.button}
                </button>

              </motion.div>

            );

          })}

        </motion.div>

        {/* Bottom CTA */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-10 shadow-2xl md:p-14"
        >

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                Need a Custom Business Solution?
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-100">
                We can recommend the perfect combination of POS, ERP,
                cloud hosting and business services based on your
                requirements.
              </p>

            </div>

            <div className="flex flex-col gap-4 sm:flex-row">

                            <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
              >
                Book Free Demo
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Sales
              </button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;
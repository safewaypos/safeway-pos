'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Zap,
  ShieldCheck,
  Clock3,
  Headphones,
  Wallet,
  FileCheck2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Complete billing, inventory updates and accounting in seconds without slowing down your business.',
  },
  {
    icon: ShieldCheck,
    title: 'Highly Secure',
    description:
      'Role-based access, automatic backups and secure database protection keep your business safe.',
  },
  {
    icon: Clock3,
    title: 'Save Time',
    description:
      'Automate daily operations and reduce manual work with smart workflows.',
  },
  {
    icon: FileCheck2,
    title: 'Accurate Reports',
    description:
      'Generate sales, profit, stock and financial reports instantly with one click.',
  },
  {
    icon: Headphones,
    title: 'Local Support',
    description:
      'Our experienced support team is always ready to help with installation, training and technical assistance.',
  },
  {
    icon: Wallet,
    title: 'Affordable',
    description:
      'Powerful enterprise features at a price designed for growing businesses.',
  },
];

const comparison = [
  {
    feature: 'Easy Installation',
    safeway: '5 Minutes',
    other: 'Several Hours',
  },
  {
    feature: 'Training',
    safeway: 'Included',
    other: 'Extra Cost',
  },
  {
    feature: 'Customer Support',
    safeway: '24/7',
    other: 'Limited',
  },
  {
    feature: 'Software Updates',
    safeway: 'Free',
    other: 'Paid',
  },
  {
    feature: 'Data Backup',
    safeway: 'Automatic',
    other: 'Manual',
  },
  {
    feature: 'Performance',
    safeway: 'Very Fast',
    other: 'Average',
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

const WhyChooseUs = () => {
  return (
    <section
      id="why"
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

              Why Businesses Choose SAFEWAY

            </span>

          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"
          >
            Built For
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Speed, Simplicity & Growth
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            SAFEWAY POS combines powerful technology with a simple user
            experience, helping businesses save time, increase productivity
            and make better decisions every day.
          </motion.p>

        </motion.div>

        {/* Main Grid */}

        <div className="mt-20 grid gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >

            {benefits.map((item) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
                >

                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

                    <Icon className="h-7 w-7" />

                  </div>

                  <h3 className="text-xl font-bold text-slate-900">

                    {item.title}

                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">

                    {item.description}

                  </p>

                </motion.div>

              );

            })}

          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-2xl font-bold text-slate-900">
                  SAFEWAY vs Traditional Software
                </h3>

                <p className="mt-2 text-slate-600">
                  See the difference.
                </p>

              </div>

              <div className="rounded-2xl bg-blue-100 p-4">

                <CheckCircle2 className="h-7 w-7 text-blue-600" />

              </div>

            </div>

            <div className="mt-8 space-y-5">

                            {comparison.map((item) => (
                <div
                  key={item.feature}
                  className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-md"
                >
                  <div className="mb-5">
                    <h4 className="text-lg font-semibold text-slate-900">
                      {item.feature}
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    {/* SAFEWAY */}

                    <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white">

                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-100">
                        SAFEWAY POS
                      </p>

                      <div className="mt-4 flex items-center gap-3">

                        <CheckCircle2 className="h-6 w-6" />

                        <span className="text-lg font-bold">
                          {item.safeway}
                        </span>

                      </div>

                    </div>

                    {/* Traditional */}

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Traditional
                      </p>

                      <div className="mt-4 flex items-center gap-3">

                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-300">
                          <span className="text-xs font-bold text-white">
                            ×
                          </span>
                        </div>

                        <span className="text-lg font-semibold text-slate-700">
                          {item.other}
                        </span>

                      </div>

                    </div>

                  </div>
                </div>
              ))}

            </div>

          </motion.div>

        </div>

        {/* Feature Strip */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 rounded-[32px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-10 text-white shadow-2xl"
        >

          <div className="grid gap-8 md:grid-cols-4">

            <div>
              <h3 className="text-4xl font-extrabold">
                1500+
              </h3>

              <p className="mt-2 text-blue-100">
                Businesses Trust SAFEWAY
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold">
                99.9%
              </h3>

              <p className="mt-2 text-blue-100">
                Reliable Performance
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold">
                24/7
              </h3>

              <p className="mt-2 text-blue-100">
                Technical Support
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold">
                12+
              </h3>

              <p className="mt-2 text-blue-100">
                Years of Experience
              </p>
            </div>

          </div>

        </motion.div>

                {/* CTA */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white p-10 shadow-xl md:p-14">

            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

              <div>

                <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
                  Ready to Experience the Difference?
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  Discover how SAFEWAY POS can simplify your billing,
                  inventory, accounting, reporting, and day-to-day business
                  operations with one powerful platform.
                </p>

              </div>

              <div className="flex flex-col gap-4 sm:flex-row">

                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
                >
                  Book Free Demo
                  <ArrowRight className="h-5 w-5" />
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById('features')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
                >
                  Explore Features
                </button>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
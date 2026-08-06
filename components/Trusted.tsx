'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Building2,
  Users,
  ShieldCheck,
  Headphones,
  TrendingUp,
  Globe2,
  Sparkles,
  BadgeCheck,
} from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '150+',
    label: 'Businesses Served',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Users,
    value: '12+',
    label: 'Years Experience',
    color: 'from-cyan-500 to-sky-500',
  },
  {
    icon: Headphones,
    value: '24/7',
    label: 'Technical Support',
    color: 'from-indigo-600 to-blue-500',
  },
  {
    icon: ShieldCheck,
    value: '99.9%',
    label: 'System Reliability',
    color: 'from-sky-500 to-blue-600',
  },
];

const highlights = [
  'Trusted by Retail Stores',
  'Supermarkets & Hypermarkets',
  'Wholesale & Distribution',
  'Pharmacies',
  'Restaurants & Cafes',
  'Cloud Ready Solution',
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
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const Trusted = () => {
  return (
    <section
      id="trusted"
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

              Trusted Across Sri Lanka

            </span>

          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"
          >
            Businesses Grow With
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              SAFEWAY POS
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            From retail stores and supermarkets to pharmacies,
            restaurants and wholesale distributors, businesses rely on
            SAFEWAY POS every day to manage billing, inventory,
            accounting and business growth.
          </motion.p>

        </motion.div>

        {/* Statistics */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
              >

                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white`}
                >

                  <Icon className="h-8 w-8" />

                </div>

                <h3 className="mt-6 text-4xl font-extrabold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.label}
                </p>

              </motion.div>

            );

          })}

        </motion.div>

        {/* Main Content */}

        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

              Why Businesses Trust Us

            </div>

            <h3 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900">

              Your Complete
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Business Technology Partner
              </span>

            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              We don't just provide software.
              We help businesses improve operations,
              increase productivity and achieve sustainable growth with
              reliable technology and dedicated local support.

            </p>

            <div className="mt-10 space-y-5">

                            {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                    <BadgeCheck className="h-6 w-6 text-blue-600" />
                  </div>

                  <span className="text-lg font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-10 text-white shadow-[0_35px_90px_rgba(37,99,235,0.25)]"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">

                <Globe2 className="h-8 w-8" />

              </div>

              <div>

                <h3 className="text-3xl font-extrabold">
                  Growing Together
                </h3>

                <p className="mt-1 text-blue-100">
                  Empowering businesses with modern technology.
                </p>

              </div>

            </div>

            <div className="mt-10 space-y-6">

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                <div className="flex items-center justify-between">

                  <span className="font-medium">
                    Customer Satisfaction
                  </span>

                  <span className="font-bold">
                    98%
                  </span>

                </div>

                <div className="mt-4 h-2 rounded-full bg-white/20">

                  <div className="h-2 w-[98%] rounded-full bg-white"></div>

                </div>

              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                <div className="flex items-center justify-between">

                  <span className="font-medium">
                    System Performance
                  </span>

                  <span className="font-bold">
                    99.9%
                  </span>

                </div>

                <div className="mt-4 h-2 rounded-full bg-white/20">

                  <div className="h-2 w-[99%] rounded-full bg-white"></div>

                </div>

              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                <div className="flex items-center justify-between">

                  <span className="font-medium">
                    Business Growth
                  </span>

                  <span className="font-bold">
                    +45%
                  </span>

                </div>

                <div className="mt-4 h-2 rounded-full bg-white/20">

                  <div className="h-2 w-[45%] rounded-full bg-white"></div>

                </div>

              </div>

            </div>

            <div className="mt-10 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">

                  <TrendingUp className="h-7 w-7" />

                </div>

                <div>

                  <h4 className="text-xl font-bold">
                    Helping Businesses Scale Faster
                  </h4>

                  <p className="mt-2 text-blue-100">
                    Powerful software backed by experienced local support.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

                {/* Bottom CTA */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-10 shadow-2xl md:p-14">

            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

              <div>

                <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                  Ready to Grow Your Business?
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-100">
                  Join hundreds of businesses that trust SAFEWAY POS to
                  simplify billing, inventory, accounting and business
                  management with one powerful solution.
                </p>

              </div>

              <div className="flex flex-col gap-4 sm:flex-row">

                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
                >
                  Request Free Demo
                  <TrendingUp className="h-5 w-5" />
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById('features')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
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

export default Trusted;
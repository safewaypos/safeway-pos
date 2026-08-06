'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  TrendingUp,
  ShoppingCart,
  Package,
  DollarSign,
  Users,
  Activity,
  CheckCircle2,
  BarChart3,
  PieChart,
  MonitorSmartphone,
  ShieldCheck,
} from 'lucide-react';

const stats = [
  {
    title: 'Today Sales',
    value: 'Rs. 248,750',
    growth: '+18.4%',
    icon: DollarSign,
  },
  {
    title: 'Orders',
    value: '186',
    growth: '+12%',
    icon: ShoppingCart,
  },
  {
    title: 'Products',
    value: '12,540',
    growth: '+8%',
    icon: Package,
  },
  {
    title: 'Customers',
    value: '4,285',
    growth: '+15%',
    icon: Users,
  },
];

const sales = [
  { month: 'Jan', value: 45 },
  { month: 'Feb', value: 62 },
  { month: 'Mar', value: 55 },
  { month: 'Apr', value: 74 },
  { month: 'May', value: 88 },
  { month: 'Jun', value: 96 },
];

const features = [
  'Real-Time Business Dashboard',
  'Live Inventory Tracking',
  'Accounting & Financial Reports',
  'Fast POS Billing',
  'Cloud Ready',
  'Multi User Access',
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const DashboardShowcase = () => {
  return (
    <section
      id="dashboard"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb10,transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#06b6d410,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid items-center gap-20 lg:grid-cols-2"
        >

          {/* LEFT */}

          <motion.div variants={fadeUp}>

            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
              Live Dashboard
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Manage Your Entire Business
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                From One Dashboard
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              SAFEWAY POS gives you complete visibility over sales,
              inventory, accounting, customer management, and business
              performance in one beautiful dashboard.
            </p>

            <div className="mt-10 grid gap-5">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>

                  <span className="text-base font-medium text-slate-700">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-12 flex flex-wrap gap-4">

              <button
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white transition hover:scale-105"
              >
                Request Demo
                <ArrowRight className="h-5 w-5" />
              </button>

              <button
                className="rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
              >
                View Features
              </button>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeUp}
            className="relative"
          >

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -left-10 top-8 z-20 hidden rounded-2xl bg-white p-5 shadow-2xl lg:block"
            >

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-green-100 p-3">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>

                <div>

                  <p className="text-xs text-slate-500">
                    Monthly Growth
                  </p>

                  <h4 className="text-xl font-bold text-slate-900">
                    +24.8%
                  </h4>

                </div>

              </div>

            </motion.div>

            {/* Laptop */}

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_40px_100px_rgba(37,99,235,0.18)]">

              {/* Top Bar */}

              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">

                <div className="flex items-center gap-2">

                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>

                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">

                  <MonitorSmartphone className="h-4 w-4" />

                  SAFEWAY Dashboard

                </div>

              </div>

              {/* Dashboard Content Starts Here */}

              <div className="bg-slate-50 p-6">

                {/* Stats Grid */}

                <div className="grid grid-cols-2 gap-4">

                  {stats.map((item) => {

                    const Icon = item.icon;

                    return (

                      <div
                        key={item.title}
                        className="rounded-2xl bg-white p-5 shadow-sm"
                      >

                        <div className="mb-4 flex items-center justify-between">

                          <div className="rounded-xl bg-blue-100 p-3">
                            <Icon className="h-5 w-5 text-blue-600" />
                          </div>

                          <span className="text-sm font-semibold text-green-600">
                            {item.growth}
                          </span>

                        </div>

                        <p className="text-sm text-slate-500">
                          {item.title}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-slate-900">
                          {item.value}
                        </h3>

                      </div>

                    );

                  })}

                </div>

                              {/* Sales Analytics */}

                <div className="mt-6 grid gap-6 lg:grid-cols-3">

                  {/* Revenue Chart */}

                  <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">

                    <div className="mb-6 flex items-center justify-between">

                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          Sales Analytics
                        </h3>

                        <p className="text-sm text-slate-500">
                          Last 6 Months Performance
                        </p>
                      </div>

                      <div className="rounded-xl bg-blue-100 p-3">
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                      </div>

                    </div>

                    <div className="flex h-56 items-end justify-between gap-4">

                      {sales.map((item) => (

                        <div
                          key={item.month}
                          className="flex flex-1 flex-col items-center"
                        >

                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{
                              height: `${item.value}%`,
                            }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.8,
                            }}
                            className="w-full rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400"
                          />

                          <span className="mt-3 text-sm font-medium text-slate-500">
                            {item.month}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* Business Overview */}

                  <div className="rounded-2xl bg-white p-6 shadow-sm">

                    <div className="mb-6 flex items-center justify-between">

                      <h3 className="text-lg font-bold text-slate-900">
                        Overview
                      </h3>

                      <PieChart className="h-5 w-5 text-blue-600" />

                    </div>

                    <div className="space-y-5">

                      <div>

                        <div className="mb-2 flex justify-between">

                          <span className="text-sm text-slate-600">
                            Sales
                          </span>

                          <span className="font-semibold text-slate-900">
                            92%
                          </span>

                        </div>

                        <div className="h-2 rounded-full bg-slate-200">

                          <div className="h-2 w-[92%] rounded-full bg-blue-600"></div>

                        </div>

                      </div>

                      <div>

                        <div className="mb-2 flex justify-between">

                          <span className="text-sm text-slate-600">
                            Inventory
                          </span>

                          <span className="font-semibold text-slate-900">
                            81%
                          </span>

                        </div>

                        <div className="h-2 rounded-full bg-slate-200">

                          <div className="h-2 w-[81%] rounded-full bg-cyan-500"></div>

                        </div>

                      </div>

                      <div>

                        <div className="mb-2 flex justify-between">

                          <span className="text-sm text-slate-600">
                            Accounting
                          </span>

                          <span className="font-semibold text-slate-900">
                            96%
                          </span>

                        </div>

                        <div className="h-2 rounded-full bg-slate-200">

                          <div className="h-2 w-[96%] rounded-full bg-emerald-500"></div>

                        </div>

                      </div>

                      <div>

                        <div className="mb-2 flex justify-between">

                          <span className="text-sm text-slate-600">
                            Customers
                          </span>

                          <span className="font-semibold text-slate-900">
                            88%
                          </span>

                        </div>

                        <div className="h-2 rounded-full bg-slate-200">

                          <div className="h-2 w-[88%] rounded-full bg-violet-500"></div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Floating Card Right */}

            <motion.div
              animate={{
                y: [10, -10, 10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute -right-10 bottom-10 hidden rounded-2xl bg-white p-5 shadow-2xl lg:block"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-100 p-3">

                  <ShieldCheck className="h-6 w-6 text-blue-600" />

                </div>

                <div>

                  <p className="text-xs text-slate-500">
                    System Status
                  </p>

                  <h4 className="font-bold text-green-600">
                    All Systems Online
                  </h4>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </motion.div>

                {/* Bottom Stats */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 grid gap-6 md:grid-cols-4"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <Activity className="mx-auto mb-4 h-10 w-10 text-blue-600" />
            <h3 className="text-4xl font-extrabold text-slate-900">99.9%</h3>
            <p className="mt-2 text-slate-600">System Uptime</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <ShoppingCart className="mx-auto mb-4 h-10 w-10 text-blue-600" />
            <h3 className="text-4xl font-extrabold text-slate-900">1500+</h3>
            <p className="mt-2 text-slate-600">Businesses Served</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <Package className="mx-auto mb-4 h-10 w-10 text-blue-600" />
            <h3 className="text-4xl font-extrabold text-slate-900">1M+</h3>
            <p className="mt-2 text-slate-600">Invoices Generated</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <Users className="mx-auto mb-4 h-10 w-10 text-blue-600" />
            <h3 className="text-4xl font-extrabold text-slate-900">24/7</h3>
            <p className="mt-2 text-slate-600">Technical Support</p>
          </div>
        </motion.div>

        {/* CTA */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-10 shadow-2xl md:p-14"
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                Ready to Transform Your Business?
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-100">
                Join hundreds of businesses using SAFEWAY POS to manage
                billing, inventory, accounting, reporting, and business
                growth from one powerful platform.
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
                    .getElementById('pricing')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                View Pricing
              </button>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DashboardShowcase;

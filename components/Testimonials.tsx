'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Star,
  Quote,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface Testimonial {
  name: string;
  company: string;
  location: string;
  review: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'N. Kumar',
    company: 'City Super Market',
    location: 'Jaffna',
    avatar: 'NK',
    rating: 5,
    review:
      'SAFEWAY POS completely changed the way we manage billing and inventory. The software is fast, reliable and very easy for our staff to learn.',
  },
  {
    name: 'S. Mohamed',
    company: 'Modern Pharmacy',
    location: 'Colombo',
    avatar: 'SM',
    rating: 5,
    review:
      'Real-time stock control and accounting reports have helped us reduce errors and improve daily operations.',
  },
  {
    name: 'R. Fernando',
    company: 'Royal Distributors',
    location: 'Kandy',
    avatar: 'RF',
    rating: 5,
    review:
      'Excellent support team and a powerful distribution solution. We can manage sales reps, customers and inventory from one system.',
  },
  {
    name: 'A. Perera',
    company: 'Fresh Mart',
    location: 'Negombo',
    avatar: 'AP',
    rating: 5,
    review:
      'Billing is incredibly fast and our staff adapted within a single day. Highly recommended for retail businesses.',
  },
  {
    name: 'M. Silva',
    company: 'Blue Ocean Restaurant',
    location: 'Galle',
    avatar: 'MS',
    rating: 5,
    review:
      'Orders, billing and reports are much easier now. SAFEWAY POS saves us hours every week.',
  },
  {
    name: 'K. Raj',
    company: 'Raj Electronics',
    location: 'Batticaloa',
    avatar: 'KR',
    rating: 5,
    review:
      'Professional software backed by excellent customer support. One of the best investments for our business.',
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

const Testimonials = () => {
  return (
    <section
      id="testimonials"
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

              Customer Success Stories

            </span>

          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"
          >
            Loved By
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Businesses Across Sri Lanka
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            Hundreds of businesses trust SAFEWAY POS every day to manage
            billing, inventory, accounting and business operations with
            confidence.
          </motion.p>

        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >

          {testimonials.map((item) => (

            <motion.div
              key={item.name}
              variants={fadeUp}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
            >

                            <div className="flex items-center justify-between">

                <Quote className="h-9 w-9 text-blue-200" />

                <div className="flex items-center gap-1">

                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}

                </div>

              </div>

              <p className="mt-8 leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8 border-t border-slate-200 pt-6">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-bold text-white">

                    {item.avatar}

                  </div>

                  <div className="flex-1">

                    <h4 className="font-bold text-slate-900">
                      {item.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {item.company}
                    </p>

                    <p className="mt-1 text-xs font-medium text-blue-600">
                      {item.location}
                    </p>

                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1">

                    <CheckCircle2 className="h-4 w-4 text-green-600" />

                    <span className="text-xs font-semibold text-green-700">
                      Verified
                    </span>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

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
                Join Hundreds of Happy Businesses
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-100">
                Experience the same speed, simplicity and reliability that
                businesses across Sri Lanka enjoy with SAFEWAY POS.
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
                Book Free Demo
                <ArrowRight className="h-5 w-5" />
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

export default Testimonials;
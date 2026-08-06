'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ChevronDown,
  HelpCircle,
  Sparkles,
  Phone,
  MessageCircle,
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Is SAFEWAY POS suitable for my business?',
    answer:
      'Yes. SAFEWAY POS is designed for retail stores, supermarkets, pharmacies, restaurants, wholesale distributors, service businesses and many other industries.',
  },
  {
    question: 'Can I use SAFEWAY POS without an internet connection?',
    answer:
      'Absolutely. SAFEWAY POS works offline, allowing you to continue billing and managing your business even when the internet is unavailable.',
  },
  {
    question: 'Does SAFEWAY POS support barcode scanners and receipt printers?',
    answer:
      'Yes. SAFEWAY POS supports barcode scanners, receipt printers, cash drawers, barcode label printers and many popular POS devices.',
  },
  {
    question: 'Can multiple users work at the same time?',
    answer:
      'Yes. Multiple users can access the system simultaneously with role-based permissions and activity tracking.',
  },
  {
    question: 'Is installation and staff training included?',
    answer:
      'Yes. Our team provides installation, configuration, data setup and complete staff training to ensure a smooth start.',
  },
  {
    question: 'Can I access reports remotely?',
    answer:
      'Yes. With our cloud-ready solution, you can securely access business reports from anywhere.',
  },
  {
    question: 'How secure is my business data?',
    answer:
      'Your data is protected using secure databases, user permissions and regular backup options to keep your business information safe.',
  },
  {
    question: 'Do you provide technical support after installation?',
    answer:
      'Yes. We provide ongoing technical support, software updates and maintenance to keep your business running smoothly.',
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb10,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#06b6d410,transparent_45%)]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">

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

              Frequently Asked Questions

            </span>

          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"
          >
            Got Questions?
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            Everything you need to know before choosing SAFEWAY POS
            for your business.
          </motion.p>

        </motion.div>

        {/* FAQ List */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 space-y-5"
        >

          {faqs.map((item, index) => (

            <motion.div
              key={item.question}
              variants={fadeUp}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >

                            <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left transition hover:bg-blue-50"
              >
                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition ${
                      openIndex === index
                        ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white'
                        : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    <HelpCircle className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {item.question}
                  </h3>

                </div>

                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="rounded-full bg-slate-100 p-2"
                >
                  <ChevronDown className="h-5 w-5 text-slate-700" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>

                {openIndex === index && (

                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >

                    <div className="border-t border-slate-200 bg-slate-50 px-8 py-6">

                      <p className="leading-8 text-slate-600">
                        {item.answer}
                      </p>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </motion.div>

        {/* Contact CTA */}

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
                Still Have Questions?
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-100">
                Our team is ready to help you choose the right solution
                for your business.
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
                <Phone className="h-5 w-5" />
                Contact Us
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                <MessageCircle className="h-5 w-5" />
                Book Free Demo
              </button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
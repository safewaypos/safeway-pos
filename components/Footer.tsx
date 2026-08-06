'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowUp,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from 'lucide-react';

import {
  FaFacebookF,
  FaWhatsapp,
  FaGithub,
} from 'react-icons/fa';

const quickLinks = [
  { title: 'Home', href: '#home' },
  { title: 'Features', href: '#features' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'FAQ', href: '#faq' },
  { title: 'Contact', href: '#contact' },
];

const solutions = [
  'Retail POS',
  'ERP Software',
  'Inventory Management',
  'Accounting',
  'Distribution',
  'Cloud ERP',
];

const socials = [
  {
    icon: FaFacebookF,
    href: 'https://www.facebook.com/safewayPOS',
  },
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/94764692329',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/safewaypos',
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const scrollToSection = (id: string) => {
  document.querySelector(id)?.scrollIntoView({
    behavior: 'smooth',
  });
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb08,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#06b6d408,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20">

        {/* CTA */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-10 shadow-2xl lg:p-14"
        >

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white">

                <Sparkles className="mr-2 h-4 w-4" />

                Let's Work Together

              </div>

              <h2 className="mt-5 text-4xl font-extrabold text-white">

                Ready To Transform
                <br />
                Your Business?

              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">

                Talk with our experts and discover the perfect POS,
                ERP and Cloud solution for your business.

              </p>

            </div>

            <button
              onClick={() => scrollToSection('#contact')}
              className="rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              Book Free Demo
            </button>

          </div>

        </motion.div>

        {/* Main Footer */}

        <div className="grid gap-12 border-b border-slate-200 py-20 lg:grid-cols-12">

                  <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4"
          >

            <div className="text-4xl font-extrabold tracking-tight">

              <span className="text-slate-900">
                SAFEWAY
              </span>

              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {" "}POS
              </span>

            </div>

            <p className="mt-6 max-w-sm leading-8 text-slate-600">
              Premium ERP & POS software for retailers,
              wholesalers, supermarkets, pharmacies,
              restaurants and growing businesses across
              Sri Lanka.
            </p>

            <div className="mt-8 flex gap-4">

              {socials.map((social, index) => {

                const Icon = social.icon;

                return (

                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg"
                  >
                    <Icon className="h-5 w-5" />
                  </a>

                );

              })}

            </div>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >

            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Quick Links
            </h3>

            <div className="space-y-4">

              {quickLinks.map((link) => (

                <button
                  key={link.title}
                  onClick={() => scrollToSection(link.href)}
                  className="flex items-center gap-2 text-slate-600 transition hover:text-blue-600"
                >

                  <ChevronRight className="h-4 w-4" />

                  {link.title}

                </button>

              ))}

            </div>

          </motion.div>

          {/* Solutions */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >

            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Solutions
            </h3>

            <div className="space-y-4">

              {solutions.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-2 text-slate-600"
                >

                  <ChevronRight className="h-4 w-4 text-blue-500" />

                  {item}

                </div>

              ))}

            </div>

          </motion.div>

          {/* Contact */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >

            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-3">

                <Phone className="mt-1 h-5 w-5 text-blue-600" />

                <div>

                  <div className="font-semibold text-slate-900">
                    +94 76 469 2329
                  </div>

                  <div className="text-sm text-slate-500">
                    Call Anytime
                  </div>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <Mail className="mt-1 h-5 w-5 text-blue-600" />

                <div>

                  <div className="font-semibold text-slate-900">
                    info@safewayerp.lk
                  </div>

                  <div className="text-sm text-slate-500">
                    Email Support
                  </div>

                </div>

              </div>

                            <div className="flex items-start gap-3">

                <MapPin className="mt-1 h-5 w-5 text-blue-600" />

                <div>

                  <div className="font-semibold text-slate-900">
                    Jaffna, Sri Lanka
                  </div>

                  <div className="text-sm text-slate-500">
                    Visit Our Office
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom Bar */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-6 py-8 text-center md:flex-row"
        >

          <div>

            <p className="font-medium text-slate-700">
              © {new Date().getFullYear()} SAFEWAY TECHNOLOGIES (PVT) LTD.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              All Rights Reserved. Built with ❤️ by SAFEWAY TECHNOLOGIES.
            </p>

          </div>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-medium text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg"
          >
            Back To Top
            <ArrowUp className="h-4 w-4" />
          </button>

        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;

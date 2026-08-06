'use client';

import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  User,
  Building2,
  Send,
  Sparkles,
} from 'lucide-react';

const contactCards = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+94 76 469 2329',
    href: 'tel:+94764692329',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+94 76 469 2329',
    href: 'https://wa.me/94764692329',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@safewayerp.lk',
    href: 'mailto:info@safewayerp.lk',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: 'Jaffna, Sri Lanka',
    href: '#',
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

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    business: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hello SAFEWAY POS,

Name : ${form.name}
Phone : ${form.phone}
Business : ${form.business}

Message :
${form.message}`;

    window.open(
      `https://wa.me/94764692329?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section
      id="contact"
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
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <motion.div variants={fadeUp}>

            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">

              <Sparkles className="mr-2 h-4 w-4" />

              Contact SAFEWAY

            </span>

          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"
          >
            Let's Build Your
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Business Together
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            Tell us about your business requirements and we'll recommend
            the best software solution for your business.
          </motion.p>

        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Form */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl"
          >

            <h3 className="text-3xl font-bold text-slate-900">
              Request Free Consultation
            </h3>

            <p className="mt-3 text-slate-600">
              Fill out the form below and we'll contact you shortly.
            </p>

            <form
              onSubmit={submitForm}
              className="mt-8 space-y-6"
            >

                          <div className="relative">

                <User className="absolute left-5 top-4 h-5 w-5 text-blue-500" />

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-14 pr-5 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />

              </div>

              <div className="relative">

                <Phone className="absolute left-5 top-4 h-5 w-5 text-blue-500" />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-14 pr-5 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />

              </div>

              <div className="relative">

                <Building2 className="absolute left-5 top-4 h-5 w-5 text-blue-500" />

                <input
                  type="text"
                  name="business"
                  placeholder="Business Name"
                  value={form.business}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-14 pr-5 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />

              </div>

              <textarea
                rows={5}
                name="message"
                placeholder="Tell us about your business requirements..."
                required
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02]"
              >
                <Send className="h-5 w-5" />
                Request Free Consultation
              </button>

            </form>

          </motion.div>

          {/* Contact Details */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >

            {contactCards.map((item) => {

              const Icon = item.icon;

              return (

                <motion.a
                  key={item.title}
                  variants={fadeUp}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -6,
                  }}
                  className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

                    <Icon className="h-8 w-8" />

                  </div>

                  <div>

                    <h4 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-slate-600">
                      {item.value}
                    </p>

                  </div>

                </motion.a>

              );

            })}

          </motion.div>

        </div>

                {/* Google Map */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl"
        >

          <div className="border-b border-slate-200 p-8">

            <h3 className="text-3xl font-bold text-slate-900">
              Visit Our Office
            </h3>

            <p className="mt-3 text-slate-600">
              We'd love to meet you. Visit our office or contact us anytime.
            </p>

          </div>

          <iframe
            src="YOUR_GOOGLE_MAPS_EMBED_LINK"
            width="100%"
            height="420"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />

        </motion.div>

        {/* Bottom CTA */}

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
                Ready to Grow Your Business?
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-100">
                Let's discuss the perfect POS, ERP or Cloud solution for
                your business. Our team is ready to help you every step
                of the way.
              </p>

            </div>

            <div className="flex flex-col gap-4 sm:flex-row">

              <button
                onClick={() =>
                  window.open('https://wa.me/94764692329', '_blank')
                }
                className="rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
              >
                Chat on WhatsApp
              </button>

              <button
                onClick={() =>
                  window.open('tel:+94764692329')
                }
                className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Call Now
              </button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
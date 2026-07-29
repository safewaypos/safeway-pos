'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Building2,
  User,
  Send,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+94 XX XXX XXXX',
    link: 'tel:+94XXXXXXXXX',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+94 XX XXX XXXX',
    link: 'https://wa.me/94XXXXXXXXX',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@safewayerp.lk',
    link: 'mailto:info@safewayerp.lk',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: 'Jaffna, Sri Lanka',
    link: '#',
  },
];

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hello SAFEWAY POS,

Name : ${form.name}
Phone : ${form.phone}
Business : ${form.business}

Message :
${form.message}`;

    window.open(
      `https://wa.me/94XXXXXXXXX?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 py-20 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_0.8px,transparent_1px)] bg-[length:4px_4px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-6xl">
            Let's Build Your
            <span className="block bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Business Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Tell us about your business requirements.
            We'll recommend the best software and hardware solution
            for your business.
          </p>
        </motion.div>
                <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="mb-8 text-3xl font-semibold text-white">
              Request FREE Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="relative">
                <User className="absolute left-4 top-4 h-5 w-5 text-zinc-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-zinc-900/70 py-4 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-4 h-5 w-5 text-zinc-500" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-zinc-900/70 py-4 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500"
                />
              </div>

              <div className="relative">
                <Building2 className="absolute left-4 top-4 h-5 w-5 text-zinc-500" />
                <input
                  type="text"
                  name="business"
                  placeholder="Business Name"
                  value={form.business}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-zinc-900/70 py-4 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500"
                />
              </div>

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your business requirements..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-zinc-900/70 p-4 text-white outline-none transition focus:border-emerald-500"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-4 font-semibold text-white transition hover:scale-[1.02]"
              >
                <Send className="h-5 w-5" />
                Request FREE Consultation
              </button>

            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:bg-white/10"
                >
                  <div className="flex items-center gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                      <Icon className="h-7 w-7 text-emerald-400" />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-zinc-400 group-hover:text-white transition">
                        {item.value}
                      </p>
                    </div>

                  </div>
                </a>
              );
            })}
          </motion.div>

        </div>
                {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

            <div className="border-b border-white/10 p-6">
              <h3 className="text-2xl font-semibold text-white">
                Visit Our Office
              </h3>

              <p className="mt-2 text-zinc-400">
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
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-zinc-900 to-emerald-500/10 p-10 text-center">

            <h3 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Grow Your Business?
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
              From billing software and ERP systems to cloud hosting,
              barcode solutions, hardware, installation, training, and
              ongoing support — SAFEWAY is your complete business
              technology partner.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/94764692329",
                    "_blank"
                  )
                }
                className="rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Chat on WhatsApp
              </button>

              <button
                onClick={() =>
                  window.open(
                    "tel:+94764692329"
                  )
                }
                className="rounded-2xl border border-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/5"
              >
                Call Now
              </button>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, MessageCircle, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+94 76 469 2329", href: "tel:+94764692329" },
  { icon: Mail, label: "Email", value: "info@safewayerp.lk", href: "mailto:info@safewayerp.lk" },
  { icon: Globe, label: "Website", value: "safewayerp.lk", href: "https://www.safewayerp.lk", external: true },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/94764692329", external: true },
  { icon: Clock, label: "Business Hours", value: "Mon–Fri: 8:30 AM – 5:30 PM", href: null },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert(result.error || "Failed to send message.");
    }
  } catch (error) {
    alert("Something went wrong.");
    console.error(error);
  }
};

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative py-24 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_0.7px,transparent_1px)] bg-[length:4px_4px]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_25%_30%,rgba(16,185,129,0.07)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_75%_70%,rgba(16,185,129,0.06)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-transparent to-zinc-950/90" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-sm text-emerald-400">Get In Touch</div>
          <h2 className="text-6xl lg:text-7xl font-semibold tracking-[-3.5px] text-white mb-6">Let's <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">connect</span></h2>
          <p className="max-w-2xl mx-auto text-xl text-zinc-400 tracking-[-0.3px]">Have questions? Our team is ready to help you find the right solution.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-3xl p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-5 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50" required />
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-5 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50" required />
                </div>
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 px-5 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50" />
                <textarea name="message" placeholder="How can we help you?" value={formData.message} onChange={handleChange} rows={5} className="w-full rounded-3xl border border-white/10 bg-zinc-950/70 px-5 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50 resize-y" required />
                <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-4 text-sm font-semibold text-white active:scale-[0.985]">Send Message</button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-3xl p-8">
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <Icon className="mt-1 h-5 w-5 text-emerald-400" />
                      <div>
                        <div className="text-sm text-zinc-400">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} target={item.external ? "_blank" : undefined} className="text-white hover:text-emerald-400 transition-colors">{item.value}</a>
                        ) : (
                          <div className="text-white">{item.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-3xl overflow-hidden h-[240px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456!2d80.0!3d9.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe4b1e8f0e0e0e%3A0x0!2zOcKwMzknMzYuMCJOIDgwwrAwMCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex flex-col lg:flex-row items-center gap-8 rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-3xl px-10 py-8 text-center lg:text-left">
            <div>
              <div className="text-2xl font-semibold tracking-tight text-white mb-1">Need help choosing the right solution?</div>
              <p className="text-zinc-400">Our experts are ready to help.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={scrollToContact} className="rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3.5 text-sm font-semibold text-white active:scale-[0.985]">Book Free Demo</button>
              <button onClick={scrollToContact} className="rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-3.5 text-sm font-semibold text-white active:scale-[0.985]">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { FaFacebookF, FaWhatsapp, FaGithub } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'ERP Modules', href: '#modules' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const solutions = [
  'Retail POS', 'Wholesale ERP', 'Distribution ERP', 'Accounting', 'Inventory', 'VAT', 'Cloud ERP',
];

const contactItems = [
  { label: 'Phone', value: '+94 76 469 2329', href: 'tel:+94764692329' },
  { label: 'Email', value: 'info@safewayerp.lk', href: 'mailto:info@safewayerp.lk' },
 {
  label: 'Website',
  value: 'www.safewayerp.lk',
  href: 'https://www.safewayerp.lk',
},
  { label: 'Location', value: 'Jaffna, Sri Lanka', href: null },
  { label: 'Hours', value: 'Mon–Sat: 9:00 AM – 6:00 PM', href: null },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: 'https://www.facebook.com/safewayPOS',
    label: 'Facebook',
  },
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/94764692329',
    label: 'WhatsApp',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/safewaypos',
    label: 'GitHub',
  },
];

const scrollToSection = (href: string) => {
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: 'smooth' });
};

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const Footer = () => {
  return (
    <footer className="relative bg-zinc-950 border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_0.6px,transparent_1px)] bg-[length:4px_4px]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_30%_20%,rgba(16,185,129,0.05)_0%,transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-semibold tracking-[-0.5px] text-white">SAFEWAY</span>
              <span className="text-2xl font-semibold tracking-[-0.5px] bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">POS</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-[280px]">
              Premium ERP & POS Software for Retail, Wholesale, Distribution, Supermarkets, Restaurants and Modern Businesses.
            </p>
            <p className="mt-3 text-xs text-emerald-400/80">Our Business. Our Solution.</p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <div className="text-sm font-medium text-white mb-4">Quick Links</div>
            <div className="space-y-2.5 text-sm">
              {quickLinks.map((link, i) => (
                <button key={i} onClick={() => scrollToSection(link.href)} className="block text-zinc-400 hover:text-white transition-colors">{link.label}</button>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <div className="text-sm font-medium text-white mb-4">Solutions</div>
            <div className="grid grid-cols-1 gap-y-2 text-sm">
              {solutions.map((item, i) => (
                <div key={i} className="text-zinc-400 hover:text-white transition-colors cursor-pointer">{item}</div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <div className="text-sm font-medium text-white mb-4">Contact</div>
            <div className="space-y-3 text-sm">
              {contactItems.map((item, i) => (
                <div key={i}>
                  <div className="text-zinc-400 text-xs">{item.label}</div>
                  {item.href ? (
                   <a
  href={item.href}
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-emerald-400 transition-colors"
>
  {item.value}
</a>
                  ) : (
                    <div className="text-white">{item.value}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social & Back to Top */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
  key={i}
  href={social.href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={social.label}
  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
>
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <button onClick={scrollToTop} aria-label="Back to top" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group">
            Back to top <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          © {new Date().getFullYear()} SAFEWAY TECHNOLOGIES (PVT) LTD. All Rights Reserved.
          <div>Designed & Developed by SAFEWAY TECHNOLOGIES</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
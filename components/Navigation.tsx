'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Modules', href: '#modules' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Mobile menu controls
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

 const Logo = () => (
  <div className="flex items-center gap-3">
    {/* Premium Logo Icon */}
    <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/25">
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 sm:h-9 sm:w-9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Receipt */}
        <path
          d="M7 4H17V20L15.5 19L14 20L12.5 19L11 20L9.5 19L8 20L7 19V4Z"
          fill="white"
          opacity="0.95"
        />

        {/* POS Lines */}
        <path
          d="M10 8H14"
          stroke="#10B981"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M10 11H14"
          stroke="#10B981"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Check */}
        <path
          d="M10.3 15L11.8 16.5L14.8 13.5"
          stroke="#10B981"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    {/* Brand Name */}
    <div className="leading-none">
      <div className="text-[18px] sm:text-[22px] font-bold tracking-tight">
        <span className="text-white">SAFEWAY</span>
        <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
          POS
        </span>
      </div>
    </div>
  </div>
);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-20 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/80 backdrop-blur-2xl border-b border-white/10'
            : 'bg-zinc-950/60 backdrop-blur-2xl'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center">
            <Logo />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  aria-label={item.label}
                  className={`relative px-5 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => {
                // Trigger demo modal or scroll to contact
                scrollToSection('#contact');
              }}
              className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-semibold tracking-[-0.01em] shadow-[0_0_20px_rgb(16,185,129,0.3)] hover:shadow-[0_0_30px_rgb(16,185,129,0.5)] hover:-translate-y-px transition-all duration-200 active:scale-[0.985]"
            >
              Book Free Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
  initial={{ opacity: 0, x: "100%" }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: "100%" }}
  transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] md:hidden bg-zinc-950/95 backdrop-blur-3xl"
            onClick={closeMobileMenu}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left px-4 py-4 rounded-xl text-lg font-semibold border-b border-white/10 transition-all duration-200 ${
  activeSection === item.href.replace('#', '')
    ? 'bg-emerald-500/15 text-emerald-400'
    : 'text-white hover:bg-white/5 hover:text-emerald-400'
}`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto pb-12">
                <button
                  onClick={() => {
                    scrollToSection('#contact');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-lg font-semibold shadow-[0_0_25px_rgb(16,185,129,0.35)] active:scale-[0.985] transition-all"
                >
                  Book Free Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
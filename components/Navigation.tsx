'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from "next/image";

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
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-80px 0px -40% 0px',
      }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth Scroll
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

  // Mobile Controls
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Escape Key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () =>
      document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Disable body scroll
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen
      ? 'hidden'
      : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const Logo = () => (
  <Image
    src="/logo.png"
    alt="SAFEWAY TECHNOLOGIES"
    width={500}
    height={120}
    priority
    className="h-12 sm:h-14 lg:h-[142px] w-auto object-contain transition-all duration-300"
  />
);

  return (
    <>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 lg:h-20 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
            : 'bg-white/90 backdrop-blur-xl'
        }`}
      >

        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between py-1 lg:py-0">

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center mr-3 lg:mr-10"
          >
            <Logo />
          </a>
                    {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');

              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-5 py-2 text-[17px] font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-blue-700'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-blue-100 -z-10"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#contact')}
              className="group flex items-center gap-1.5 px-6 py-2.5 rounded-2xl rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[15px] font-semibold tracking-[-0.01em] shadow-[0_10px_30px_rgba(37,99,235,0.25)] hover:shadow-[0_18px_40px_rgba(37,99,235,0.35)] hover:-translate-y-px transition-all duration-200 active:scale-[0.985]"
            >
              Book Free Demo

              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2.5 text-slate-800 transition-colors hover:text-blue-600"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{
              duration: 0.25,
              ease: 'easeInOut',
            }}
            className="fixed inset-0 z-[60] md:hidden bg-white/95 backdrop-blur-3xl"
            onClick={closeMobileMenu}
          >
            <div className="flex flex-col h-full pt-20 lg:pt-7">
                            <div className="flex flex-col gap-1">

                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.03,
                    }}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left px-4 py-4 rounded-xl text-lg font-semibold border-b border-slate-100 transition-all duration-200 ${
                      activeSection === item.href.replace('#', '')
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}

              </div>

              {/* Mobile CTA */}
              <div className="mt-auto pb-12">

                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold shadow-[0_10px_30px_rgba(37,99,235,0.30)] hover:shadow-[0_18px_40px_rgba(37,99,235,0.40)] transition-all duration-200 active:scale-[0.985]"
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
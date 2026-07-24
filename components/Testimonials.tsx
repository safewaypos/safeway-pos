'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Quote, CheckCircle } from 'lucide-react';

interface Testimonial {
  name: string;
  businessType: string;
  review: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ahmed Al-Mansoori",
    businessType: "Retail Chain Owner",
    review: "SAFEWAY POS has transformed how we manage daily operations. The system is fast, reliable, and the support team is always responsive.",
    avatar: "AM",
  },
  {
    name: "Fatima Al-Rashid",
    businessType: "Restaurant Manager",
    review: "The inventory and sales modules work seamlessly together. We’ve seen a noticeable improvement in efficiency since implementation.",
    avatar: "FR",
  },
  {
    name: "Khalid Al-Sayed",
    businessType: "Wholesale Distributor",
    review: "The VAT compliance features and real-time reporting have made our financial processes much more manageable and accurate.",
    avatar: "KS",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-zinc-950 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_0.7px,transparent_1px)] bg-[length:4px_4px]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_25%_30%,rgba(16,185,129,0.07)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_75%_70%,rgba(16,185,129,0.06)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-transparent to-zinc-950/90" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-sm text-emerald-400">
            Customer Stories
          </div>
          <h2 className="text-6xl lg:text-7xl font-semibold tracking-[-3.5px] text-white mb-6">
            Trusted by <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">businesses</span> like yours
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-zinc-400 tracking-[-0.3px]">
            See how leading retailers are using SAFEWAY POS to streamline their operations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-3xl p-8 transition-all duration-300 hover:bg-zinc-900/80 flex flex-col"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(350px_circle_at_50%_50%,rgba(16,185,129,0.07),transparent)]" />

              <div className="relative z-10 flex flex-col flex-1">
                {/* Quote Icon */}
                <div className="mb-8">
                  <Quote className="h-8 w-8 text-emerald-500/60" />
                </div>

                {/* Review */}
                <p className="text-[15px] leading-relaxed text-zinc-300 flex-1 mb-8">
                  {testimonial.review}
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm font-medium text-emerald-400">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white tracking-tight">{testimonial.name}</div>
                    <div className="text-sm text-zinc-400">{testimonial.businessType}</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <CheckCircle className="h-4 w-4" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex flex-col lg:flex-row items-center gap-8 rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-3xl px-10 py-8">
            <div className="text-center lg:text-left max-w-md">
              <div className="text-2xl font-semibold tracking-tight text-white mb-2">
                Ready to become our next success story?
              </div>
              <p className="text-zinc-400">
                Request a Free Demo today and see how SAFEWAY POS can simplify your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:shadow-[0_0_30px_rgb(16,185,129,0.4)] active:scale-[0.985]"
              >
                Book Free Demo
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/[0.06] hover:-translate-y-px active:scale-[0.985]"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

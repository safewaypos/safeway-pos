'use client';

import React from 'react';
import { motion, type Variants } from "framer-motion";
import { 
  BookOpen, Package, CreditCard, ShoppingCart, FileText, 
  Users, UserCheck, Factory, UtensilsCrossed, Cloud 
} from 'lucide-react';

interface Module {
  icon: React.ElementType;
  title: string;
  description: string;
  category: string;
}

const modules: Module[] = [
  {
    icon: BookOpen,
    title: "Accounting",
    description: "Full double-entry accounting with automated journal entries and real-time financial reporting.",
    category: "Finance",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Multi-location inventory control with automated reorder points and batch tracking.",
    category: "Operations",
  },
  {
    icon: CreditCard,
    title: "Sales & Billing",
    description: "Complete sales workflow from quotation to invoice with recurring billing support.",
    category: "Sales",
  },
  {
    icon: ShoppingCart,
    title: "Purchase Management",
    description: "End-to-end procurement with purchase orders, goods receipt, and vendor management.",
    category: "Operations",
  },
  {
    icon: FileText,
    title: "VAT & Tax",
    description: "Automated VAT calculation, e-invoicing, and compliance reporting for GCC markets.",
    category: "Tax",
  },
  {
    icon: Users,
    title: "Payroll",
    description: "Comprehensive payroll processing with salary structures, deductions, and payslips.",
    category: "HR",
  },
  {
    icon: UserCheck,
    title: "CRM",
    description: "Customer relationship management with lead tracking, pipeline, and communication history.",
    category: "Sales",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Production planning, BOM management, work orders, and cost tracking.",
    category: "Manufacturing",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant POS",
    description: "Table management, kitchen display, order taking, and menu engineering tools.",
    category: "Restaurant",
  },
  {
    icon: Cloud,
    title: "Cloud ERP",
    description: "Centralized cloud platform with real-time synchronization across all modules and devices.",
    category: "Cloud",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const ERPModules = () => {
  return (
    <section id="modules" className="relative py-16 sm:py-20 lg:py-24 bg-zinc-950 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_0.7px,transparent_1px)] bg-[length:4px_4px]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_20%_30%,rgba(16,185,129,0.07)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(at_80%_70%,rgba(16,185,129,0.06)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-transparent to-zinc-950/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-sm text-emerald-400">
            Complete Platform
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight tracking-[-1.5px] lg:tracking-[-3.5px] text-white mb-5">
            Complete <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">ERP Modules</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-7 text-zinc-400">
            One integrated platform covering every aspect of your business operations.
          </p>
        </div>

        {/* Modules Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6"
        >
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
               className="group relative rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-3xl p-6 sm:p-8 transition-all duration-300 hover:bg-zinc-900/80 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(350px_circle_at_50%_50%,rgba(16,185,129,0.07),transparent)]" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-8">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] group-hover:border-emerald-500/30"
                    >
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                        {module.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-[15px] leading-7 text-zinc-400 mb-5 sm:mb-6">
                      {module.description}
                    </p>
                  </div>

                  {/* Category Badge & Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-emerald-400">
                      {module.category}
                    </span>

                    <button className="group/link flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                      Learn more
                      <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Strip */}
        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-6 rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-3xl px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
            <div className="text-center lg:text-left">
              <div className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2">
                Ready to Transform Your Business?
              </div>
              <p className="text-sm sm:text-base text-zinc-400 max-w-md leading-7">
                Manage your accounting, inventory, billing, VAT, payroll and more with one powerful ERP platform.
              </p>
            </div>

            <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 w-full sm:w-auto px-6 sm:px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:shadow-[0_0_30px_rgb(16,185,129,0.4)] active:scale-[0.985]"
              >
                Book Free Demo
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] w-full sm:w-auto px-6 sm:px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/[0.06] hover:-translate-y-px active:scale-[0.985]"
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

export default ERPModules;
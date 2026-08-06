"use client";

import {
  BarChart3,
  BadgeDollarSign,
  Building2,
  Cloud,
  CreditCard,
  Database,
  FileBarChart2,
  Globe,
  Headphones,
  Lock,
  Package,
  Receipt,
  RefreshCw,
  ScanLine,
  ShoppingCart,
  Smartphone,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";

const features = [
  {
    title: "Fast POS Billing",
    description:
      "Generate invoices within seconds using barcode scanning, touch-friendly billing, shortcuts, and instant receipt printing.",
    icon: ShoppingCart,
  },
  {
    title: "Inventory Management",
    description:
      "Track stock in real time with purchase, sales, stock transfer, adjustments, expiry monitoring, and reorder alerts.",
    icon: Package,
  },
  {
    title: "Accounting",
    description:
      "Complete accounting with ledgers, vouchers, bank reconciliation, receivables, payables, GST/VAT support, and financial reports.",
    icon: BadgeDollarSign,
  },
  {
    title: "Sales Analytics",
    description:
      "Visual dashboards showing sales trends, profit analysis, top products, customer insights, and business performance.",
    icon: BarChart3,
  },
  {
    title: "Credit Management",
    description:
      "Monitor customer credit limits, outstanding balances, due dates, reminders, and payment history.",
    icon: CreditCard,
  },
  {
    title: "Barcode Support",
    description:
      "Supports barcode generation, barcode scanning, label printing, and high-speed checkout.",
    icon: ScanLine,
  },
  {
    title: "Multi-User Access",
    description:
      "Create unlimited staff accounts with permissions, activity logs, and secure role-based access.",
    icon: Users,
  },
  {
    title: "Warehouse Management",
    description:
      "Manage multiple warehouses, stock transfers, location-wise inventory, and branch-level reporting.",
    icon: Warehouse,
  },
  {
    title: "Purchase Management",
    description:
      "Handle suppliers, purchase orders, GRNs, returns, and purchase analytics effortlessly.",
    icon: Truck,
  },
  {
    title: "Reports & Insights",
    description:
      "Access 300+ business reports including sales, inventory, profit, customer, supplier, and taxation reports.",
    icon: FileBarChart2,
  },
  {
    title: "Cloud Ready",
    description:
      "Run locally today and migrate to cloud anytime with secure synchronization and remote access.",
    icon: Cloud,
  },
  {
    title: "Mobile Sales App",
    description:
      "Sales representatives can create invoices, collect payments, view customer balances, and sync instantly.",
    icon: Smartphone,
  },
  {
    title: "Customer Management",
    description:
      "Maintain customer profiles, purchase history, loyalty information, and communication records.",
    icon: Building2,
  },
  {
    title: "Data Security",
    description:
      "Automatic backups, user permissions, encryption, audit trails, and secure database protection.",
    icon: Lock,
  },
  {
    title: "Database Backup",
    description:
      "Automatic scheduled backups with quick restore options to keep your business protected.",
    icon: Database,
  },
  {
    title: "Online & Offline",
    description:
      "Continue working even without internet. Sync your data when the connection becomes available.",
    icon: Globe,
  },
  {
    title: "Invoice & Receipts",
    description:
      "Professional invoices with logo, thermal printing, A4 formats, quotations, delivery notes, and returns.",
    icon: Receipt,
  },
  {
    title: "Free Updates",
    description:
      "Receive continuous software improvements, new features, performance enhancements, and bug fixes.",
    icon: RefreshCw,
  },
];

export default function FeaturesV2() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb10,transparent_45%),radial-gradient(circle_at_bottom_left,#14b8a610,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
            Powerful Features
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Everything Your Business Needs
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            SAFEWAY POS provides a complete business management solution with
            billing, accounting, inventory, reporting, cloud readiness, and
            mobile sales—all in one powerful platform.
          </p>
        </div>

        <div className="mt-20 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-10 text-white shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-3xl font-bold">
                One Software. Complete Business Control.
              </h3>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                Whether you run a supermarket, pharmacy, wholesale business,
                retail shop, restaurant, or distribution company, SAFEWAY POS
                helps you manage every aspect of your business efficiently.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Offline First",
                "Cloud Ready",
                "Multi Branch",
                "300+ Reports",
                "Mobile App",
                "24/7 Support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 px-5 py-4 text-center font-semibold backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Request Free Demo
          </a>

          <a
            href="https://wa.me/94770000000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
          >
            WhatsApp Us
          </a>

          <a
            href="tel:+94770000000"
            className="rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
          >
            Call Now
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-3 text-slate-500">
          <Headphones className="h-5 w-5 text-blue-600" />
          <span className="font-medium">
            Installation • Training • Data Migration • Ongoing Support
          </span>
        </div>
      </div>
    </section>
  );
}
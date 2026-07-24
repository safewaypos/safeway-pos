"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, CheckSquare, Mail, Phone } from "lucide-react";

type QA = {
  id: string;
  q: string;
  a: string;
};

const FAQS: QA[] = [
  {
    id: "q1",
    q: "Is SAFEWAY POS suitable for small businesses?",
    a: "Yes — SAFEWAY POS is built for businesses of all sizes. Our modular design lets small retailers start with core POS features and scale into full ERP capabilities as they grow.",
  },
  {
    id: "q2",
    q: "Does SAFEWAY POS support VAT?",
    a: "Absolutely. The platform includes VAT & tax management, configurable rate groups, and reporting/export features to help with compliance and filing.",
  },
  {
    id: "q3",
    q: "Can I use SAFEWAY POS on multiple computers?",
    a: "Yes. SAFEWAY POS supports multi-user access across terminals. Role-based permissions and session controls let you safely run multiple checkout points and admin consoles.",
  },
  {
    id: "q4",
    q: "Is cloud hosting available?",
    a: "We offer both on-premise and cloud hosting options. The Cloud ERP plan includes daily backups, automatic updates, and secure remote access.",
  },
  {
    id: "q5",
    q: "Do you provide installation and training?",
    a: "Yes. Our professional services include installation, initial configuration, and on-site or remote training to ensure a smooth go-live.",
  },
  {
    id: "q6",
    q: "Do you offer technical support after purchase?",
    a: "We provide local Sri Lanka support with 24/7 options available. AMC and priority plans include SLAs and dedicated assistance.",
  },
  {
    id: "q7",
    q: "Can I migrate data from my existing software?",
    a: "Data migration is supported. Our team will assist with mapping and importing customers, products, and opening balances to minimize downtime.",
  },
  {
    id: "q8",
    q: "How do I request a free demo?",
    a: "Click 'Book Free Demo' on our site or contact our sales team. We'll schedule a personalized demo and walk you through features relevant to your business.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(FAQS[0].id);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [heights, setHeights] = useState<Record<string, number>>({});

  useEffect(() => {
    const newHeights: Record<string, number> = {};
    FAQS.forEach((f) => {
      const el = contentRefs.current[f.id];
      newHeights[f.id] = el ? el.scrollHeight : 0;
    });
    setHeights(newHeights);

    const onResize = () => {
      const h: Record<string, number> = {};
      FAQS.forEach((f) => {
        const el = contentRefs.current[f.id];
        h[f.id] = el ? el.scrollHeight : 0;
      });
      setHeights(h);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section id="faq" className="py-16 bg-slate-900/40">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Everything you need to know before choosing SAFEWAY POS.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((item) => {
            const isOpen = open === item.id;
            return (
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-white/6 bg-gradient-to-b from-white/3 to-transparent backdrop-blur-md shadow transition"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-500/10 text-emerald-300">
                        <CheckSquare className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-medium text-white">
                        {item.q}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`flex items-center justify-center w-9 h-9 rounded-md text-white/80 bg-white/4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  className="px-5 pb-5 transition-[max-height,opacity] duration-300 ease-[cubic-bezier(.2,.9,.2,1)]"
                  style={{
                    maxHeight: isOpen ? `${heights[item.id] ?? 0}px` : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                  aria-hidden={!isOpen}
                >
                  <div
                    ref={(el) => {
                      contentRefs.current[item.id] = el;
                    }}
                    className="text-sm text-slate-300 leading-relaxed"
                  >
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA box */}
        <div className="mt-10 rounded-3xl bg-white/4 border border-white/6 backdrop-blur-md p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold text-white">Still have questions?</h4>
            <p className="mt-1 text-sm text-slate-300">
              Contact our team today for a free consultation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/6 transition"
            >
              <Mail className="w-4 h-4" /> Contact Us
            </Link>

            <Link
              href="/request-demo"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition"
            >
              <Phone className="w-4 h-4" /> Book Free Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
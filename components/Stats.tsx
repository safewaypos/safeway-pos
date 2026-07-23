"use client";

import React, { useEffect, useRef, useState } from "react";
import { Users, Clock, MessageSquare, Server } from "lucide-react";

type StatItem = {
  id: string;
  label: string;
  target: number;
  suffix?: string;
  icon: React.ReactNode;
  decimals?: number;
};

const STATS: StatItem[] = [
  {
    id: "businesses",
    label: "Businesses",
    target: 1500,
    suffix: "+",
    icon: <Users className="w-7 h-7" />,
  },
  {
    id: "experience",
    label: "Years Experience",
    target: 12,
    suffix: "+",
    icon: <Clock className="w-7 h-7" />,
  },
  {
    id: "support",
    label: "Customer Support",
    target: 24,
    suffix: "/7",
    icon: <MessageSquare className="w-7 h-7" />,
  },
  {
    id: "uptime",
    label: "Uptime",
    target: 99.9,
    suffix: "%",
    decimals: 1,
    icon: <Server className="w-7 h-7" />,
  },
];

export default function Stats() {
  const [values, setValues] = useState<number[]>(
    STATS.map(() => 0)
  );
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const duration = 1200; // ms

  useEffect(() => {
    const startValues = STATS.map(() => 0);
    const endValues = STATS.map((s) => s.target);
    setValues(startValues);

    const step = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      const next = endValues.map((end, i) => {
        const val = startValues[i] + (end - startValues[i]) * ease;
        const decimals = STATS[i].decimals ?? 0;
        return Number(val.toFixed(decimals));
      });

      setValues(next);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-12 bg-gradient-to-b from-slate-900/20 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-slate-800/40 border border-white/6 rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, idx) => (
              <div
                key={s.id}
                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-b from-white/3 to-transparent hover:from-white/5 transition transform hover:-translate-y-1"
                aria-hidden={false}
              >
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-slate-700/60 to-slate-800/40 border border-white/6 text-emerald-300 shadow-inner"
                  title={s.label}
                >
                  {s.icon}
                </div>

                <div className="flex-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white leading-none flex items-baseline gap-2">
                    <span
                      className="inline-block"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      {s.decimals ? values[idx].toFixed(s.decimals) : Math.round(values[idx])}
                    </span>
                    <span className="text-2xl text-emerald-300 font-semibold">
                      {s.suffix ?? ""}
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-slate-300">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
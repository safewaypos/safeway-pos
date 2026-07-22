"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground(): JSX.Element {
  const floatVariant = (x: number, y: number, scale = 1) => ({
    animate: {
      x: [0, x, 0, -x, 0],
      y: [0, y, -y, 0, 0],
      scale: [1, scale, 1, scale, 1],
      transition: {
        duration: 22 + Math.abs(x + y),
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  });

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden"
      role="presentation"
    >
      {/* Subtle gradient overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          background:
            "radial-gradient(50% 40% at 10% 20%, rgba(16,185,129,0.06), transparent 10%), radial-gradient(50% 40% at 85% 80%, rgba(14,165,233,0.04), transparent 12%), linear-gradient(180deg, rgba(15,23,42,0.45), rgba(2,6,23,0.6))",
          willChange: "opacity",
        }}
      />

      {/* Floating blurred circle 1 - emerald */}
      <motion.div
        className="absolute rounded-full blur-3xl opacity-30 mix-blend-screen"
        style={{
          width: 520,
          height: 520,
          left: "-8%",
          top: "-6%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(16,185,129,0.18), rgba(16,185,129,0.08) 30%, transparent 60%)",
          willChange: "transform",
          transform: "translate3d(0,0,0)",
        }}
        {...floatVariant(40, 18, 1.02).animate}
      />

      {/* Floating blurred circle 2 - cyan */}
      <motion.div
        className="absolute rounded-full blur-3xl opacity-24 mix-blend-screen"
        style={{
          width: 420,
          height: 420,
          right: "-6%",
          top: "18%",
          background:
            "radial-gradient(circle at 70% 40%, rgba(14,165,233,0.14), rgba(14,165,233,0.06) 30%, transparent 60%)",
          willChange: "transform",
          transform: "translate3d(0,0,0)",
        }}
        {...floatVariant(-36, 26, 1.01).animate}
      />

      {/* Floating blurred circle 3 - deep emerald/cyan mix */}
      <motion.div
        className="absolute rounded-full blur-3xl opacity-18 mix-blend-screen"
        style={{
          width: 680,
          height: 680,
          left: "10%",
          bottom: "-20%",
          background:
            "radial-gradient(circle at 60% 60%, rgba(6,95,70,0.12), rgba(6,95,70,0.06) 30%, rgba(14,165,233,0.03) 60%, transparent 75%)",
          willChange: "transform",
          transform: "translate3d(0,0,0)",
        }}
        {...floatVariant(28, -34, 0.995).animate}
      />

      {/* Slow drifting linear sheen for aurora-style movement */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0.06 }}
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(90deg, rgba(6,95,70,0.02) 0%, rgba(14,165,233,0.02) 50%, rgba(6,95,70,0.02) 100%)",
          mixBlendMode: "overlay",
          willChange: "opacity",
        }}
      />
    </div>
  );
}
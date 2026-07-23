"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[9999]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="relative group">
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: showTooltip ? 1 : 0, x: showTooltip ? 0 : 10 }}
          transition={{ duration: 0.2 }}
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900/95 backdrop-blur-md border border-white/10 px-4 py-2 text-sm font-medium text-white shadow-xl pointer-events-none"
        >
          Chat with us on WhatsApp
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-slate-900/95" />
          </div>
        </motion.div>

        {/* Button */}
        <motion.a
          href="https://wa.me/94764692329"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg transition-colors duration-200"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            y: {
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            boxShadow: "0 8px 32px rgba(16,185,129,0.32)",
          }}
        >
          {/* Pulse rings */}
          <motion.span
            className="absolute inset-0 rounded-full bg-emerald-500"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.span
            className="absolute inset-0 rounded-full bg-emerald-400"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3.6,
              delay: 0.4,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          {/* Icon */}
          <MessageCircle className="relative w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2} />
        </motion.a>
      </div>
    </motion.div>
  );
}
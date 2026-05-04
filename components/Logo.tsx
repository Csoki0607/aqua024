'use client';

import { motion } from "framer-motion";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative flex items-center justify-center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
        >
          <defs>
            <linearGradient id="m-clean-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <filter id="m-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Base Shadow Path (for substance) */}
          <motion.path
            d="M10 34V14L24 28L38 14V34"
            stroke="#e2e8f0"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          />

          {/* Main "M" Path - Clean & Bold */}
          <motion.path
            d="M10 34V14L24 28L38 14V34"
            stroke="url(#m-clean-gradient)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#m-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Highlight "Laser" Tip */}
          <motion.path
            d="M10 34V14L24 28L38 14V34"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
          />
        </svg>
      </div>

      <div className="flex flex-col -space-y-1">
        <span className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none">
          Merion<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Digital</span>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          Marketing & Tech
        </span>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Hero({
  onFinished,
}: {
  onFinished: () => void;
}) {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#080509] px-6">

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[130px]"
      />

      {/* Floating Hearts */}
      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [-20, 20, -20],
            x: [-5, 5, -5],
            opacity: [0.1, 0.5, 0.1],
            rotate: [-10, 10, -10],
          }}
          transition={{
            duration: 4 + (index % 3),
            delay: index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute text-pink-200/30"
          style={{
            left: `${(index * 31) % 95}%`,
            top: `${(index * 47) % 90}%`,
            fontSize: `${14 + (index % 3) * 6}px`,
          }}
        >
          ♡
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex w-full max-w-[500px] flex-col items-center text-center">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
          }}
          className="text-[10px] uppercase tracking-[0.5em] text-pink-200/40 sm:text-xs"
        >
          23 JULY 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="mt-7 text-6xl leading-[0.9] text-pink-50 sm:text-7xl"
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Happy Birthday
          <br />
          Purru♥︎
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="mt-7 max-w-[320px] text-lg leading-8 text-pink-100/50"
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Something small but specially made for YOU...
          <br />
          
        </motion.p>

        {/* Start Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.8,
            duration: 0.8,
          }}
          whileTap={{
            scale: 0.94,
          }}
          onClick={onFinished}
          className="mt-12 rounded-full border border-pink-200/15 bg-pink-200/[0.04] px-8 py-3 text-xs uppercase tracking-[0.3em] text-pink-100/70 transition-all duration-300 hover:border-pink-200/30 hover:bg-pink-200/[0.08]"
        >
          Begin →
        </motion.button>

      </div>
    </section>
  );
}
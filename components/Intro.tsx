"use client";

import { motion } from "framer-motion";

export default function Intro({
  onFinished,
}: {
  onFinished: () => void;
}) {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#0b070b] px-6">

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.22, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/15 blur-[140px]"
      />

      {/* Small Floating Particles */}
      {Array.from({ length: 25 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.05, 0.6, 0.05],
            scale: [0.7, 1.2, 0.7],
          }}
          transition={{
            duration: 3 + (index % 4),
            delay: index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-pink-200/60"
          style={{
            left: `${(index * 43) % 95}%`,
            top: `${(index * 59) % 90}%`,
          }}
        />
      ))}

      {/* Floating Hearts */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
          rotate: [-8, 8, -8],
          opacity: [0.15, 0.5, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[12%] top-[20%] text-3xl text-pink-200/30"
      >
        ♡
      </motion.div>

      <motion.div
        animate={{
          y: [15, -15, 15],
          rotate: [8, -8, 8],
          opacity: [0.15, 0.5, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[12%] top-[65%] text-2xl text-pink-200/30"
      >
        ♡
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[500px] flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
          }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-pink-200/10 bg-pink-200/[0.03] text-2xl text-pink-300/60"
        >
          ♡
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mt-8 text-[10px] uppercase tracking-[0.5em] text-pink-200/40 sm:text-xs"
        >
          Happy 17 My Love!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="mt-7 text-5xl leading-tight text-pink-50 sm:text-6xl"
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          I've made something only for YOU!
          <br />
          
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="mt-7 max-w-[330px] text-xl leading-9 text-pink-100/55"
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          So take a deep breath,
          <br />
          forget everything else for a moment,
          <br />
          and just enjoy this little surprise.
      
        </motion.p>

        {/* Open Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.1,
            duration: 0.8,
          }}
          whileTap={{
            scale: 0.94,
          }}
          onClick={onFinished}
          className="mt-12 rounded-full border border-pink-200/15 bg-pink-200/[0.04] px-8 py-3 text-xs uppercase tracking-[0.3em] text-pink-100/70 transition-all duration-300 hover:border-pink-200/30 hover:bg-pink-200/[0.08]"
        >
          Open →
        </motion.button>

      </div>
    </section>
  );
}
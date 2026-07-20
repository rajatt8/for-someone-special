"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayData } from "@/data/content";

const floatingHearts = [
  { left: "7%", top: "12%", size: "text-2xl", delay: 0 },
  { left: "89%", top: "14%", size: "text-xl", delay: 1.2 },
  { left: "12%", top: "34%", size: "text-lg", delay: 2 },
  { left: "91%", top: "42%", size: "text-2xl", delay: 0.7 },
  { left: "6%", top: "70%", size: "text-xl", delay: 1.8 },
  { left: "88%", top: "76%", size: "text-lg", delay: 2.5 },
  { left: "22%", top: "88%", size: "text-sm", delay: 1 },
  { left: "78%", top: "90%", size: "text-lg", delay: 2.2 },
];

const floatingParticles = [
  { left: "18%", top: "18%", delay: 0 },
  { left: "82%", top: "22%", delay: 1 },
  { left: "10%", top: "52%", delay: 2 },
  { left: "90%", top: "58%", delay: 0.5 },
  { left: "22%", top: "65%", delay: 1.5 },
  { left: "78%", top: "68%", delay: 2.5 },
  { left: "35%", top: "10%", delay: 0.8 },
  { left: "65%", top: "14%", delay: 1.8 },
];

export default function Letter({
  onFinished,
}: {
  onFinished: () => void;
}) {
  const [page, setPage] = useState(0);

  const words = birthdayData.letter.trim().split(/\s+/);

  // Mobile screen ke liye balanced amount
  const wordsPerPage = 75;

  const pages: string[] = [];

  for (let i = 0; i < words.length; i += wordsPerPage) {
    pages.push(words.slice(i, i + wordsPerPage).join(" "));
  }

  const totalPages = pages.length;
  const isLastPage = page === totalPages - 1;

  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage((current) => current + 1);
    } else {
      onFinished();
    }
  };

  const previousPage = () => {
    if (page > 0) {
      setPage((current) => current - 1);
    }
  };

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#0d070c] px-4 py-8 sm:px-5">

      {/* Main pink glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.16, 0.28, 0.16],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[130px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]"
      />

      {/* Secondary glow */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [25, -25, 25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-400/10 blur-[90px]"
      />

      {/* Floating hearts */}
      {floatingHearts.map((heart, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            opacity: [0.18, 0.6, 0.18],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: 5 + (index % 3),
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`pointer-events-none absolute ${heart.size} z-0 select-none text-pink-300/50`}
          style={{
            left: heart.left,
            top: heart.top,
          }}
        >
          ♡
        </motion.div>
      ))}

      {/* Floating particles */}
      {floatingParticles.map((particle, index) => (
        <motion.div
          key={index}
          animate={{
            y: [-18, 18, -18],
            opacity: [0.08, 0.7, 0.08],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: 4 + (index % 4),
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-pink-200"
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[390px]">

        {/* Small heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5 text-center text-[10px] uppercase tracking-[0.4em] text-pink-200/50 sm:mb-6 sm:text-xs"
        >
          A letter for you
        </motion.p>

        {/* Letter card */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative overflow-hidden rounded-[28px] border border-pink-200/15 bg-gradient-to-br from-[#24151f]/95 via-[#181017]/95 to-[#120b10]/95 shadow-[0_0_70px_rgba(236,72,153,0.12)] backdrop-blur-xl sm:rounded-[30px]"
        >

          {/* Soft moving shine */}
          <motion.div
            animate={{
              x: ["-120%", "120%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.035] to-transparent"
          />

          <div className="relative px-6 pb-6 pt-7 sm:px-10 sm:pb-10 sm:pt-10">

            {/* Page number */}
            <div className="mb-6 flex items-center justify-between sm:mb-8">
              <span className="text-[10px] tracking-[0.25em] text-pink-200/30 sm:text-xs">
                {String(page + 1).padStart(2, "0")} /{" "}
                {String(totalPages).padStart(2, "0")}
              </span>

              <motion.span
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-lg text-pink-300/40"
              >
                ♡
              </motion.span>
            </div>

            {/* Letter content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="min-h-[390px] sm:min-h-[360px]"
              >
                <div
                  className="whitespace-pre-line text-center text-[17px] leading-[1.9] text-pink-50/90 sm:text-[19px] sm:leading-[2]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                  }}
                >
                  {pages[page]}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-between border-t border-pink-200/10 pt-5 sm:mt-8 sm:pt-6">

              {/* Back button */}
              <button
                onClick={previousPage}
                disabled={page === 0}
                className="min-h-[44px] px-2 text-[10px] uppercase tracking-[0.18em] text-pink-200/40 transition-all duration-300 hover:text-pink-100 disabled:pointer-events-none disabled:opacity-10 sm:text-xs sm:tracking-[0.2em]"
              >
                ← Back
              </button>

              {/* Next button */}
              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={nextPage}
                className="min-h-[44px] rounded-full border border-pink-200/10 px-4 text-[10px] uppercase tracking-[0.18em] text-pink-100 transition-all duration-300 hover:border-pink-200/20 hover:bg-pink-200/5 hover:text-white sm:px-5 sm:text-xs sm:tracking-[0.2em]"
              >
                {isLastPage ? "Gallery →" : "Next →"}
              </motion.button>

            </div>
          </div>
        </motion.div>

        {/* Page indicators */}
        <div className="mt-5 flex min-h-[6px] items-center justify-center gap-2 sm:mt-6">
          {pages.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                width: index === page ? 24 : 5,
                opacity: index === page ? 1 : 0.22,
              }}
              transition={{
                duration: 0.3,
              }}
              className="h-[3px] rounded-full bg-pink-200"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MakeAWish({
  onFinished,
}: {
  onFinished: () => void;
}) {
  const [wished, setWished] = useState(false);

  const makeWish = () => {
    setWished(true);
  };

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#050611] px-6">

      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[140px]"
      />

      {/* Pink glow */}
      <motion.div
        animate={{
          x: [-60, 60, -60],
          y: [30, -30, 30],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[120px]"
      />

      {/* Stars */}
      {Array.from({ length: 35 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: 2 + (index % 4),
            delay: index * 0.12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute h-[2px] w-[2px] rounded-full bg-white/70"
          style={{
            left: `${(index * 41) % 100}%`,
            top: `${(index * 67) % 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 flex w-full max-w-[500px] flex-col items-center text-center">

        <AnimatePresence mode="wait">

          {!wished ? (
            <motion.div
              key="before"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-[10px] uppercase tracking-[0.5em] text-pink-200/40 sm:text-xs"
              >
                One last little thing
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                }}
                className="mt-7 text-5xl leading-tight text-white/95 sm:text-6xl"
                style={{
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                Make a wish
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1,
                  duration: 1,
                }}
                className="mt-5 text-xl text-pink-100/50"
                style={{
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                Before the star disappears...
              </motion.p>

              {/* Shooting star */}
              <div className="relative mt-20 h-32 w-full">

                <motion.button
                  onClick={makeWish}
                  aria-label="Make a wish"
                  initial={{
                    opacity: 0,
                    x: -140,
                    y: 50,
                  }}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    x: [-140, 140, -140],
                    y: [50, -10, 50],
                  }}
                  transition={{
                    opacity: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    x: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="group absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2"
                >

                  {/* Star trail */}
                  <span className="absolute right-7 top-1/2 h-px w-24 -translate-y-1/2 rotate-[15deg] bg-gradient-to-r from-transparent via-pink-200/20 to-white/80 blur-[1px]" />

                  {/* Star */}
                  <motion.span
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-3xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                  >
                    ✦
                  </motion.span>

                </motion.button>

              </div>

              <motion.p
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/30"
              >
                Tap the star
              </motion.p>

            </motion.div>
          ) : (
            <motion.div
              key="after"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center"
            >

              {/* Burst */}
              <div className="relative mb-10 h-24 w-24">

                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{
                    scale: 3,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  className="absolute inset-0 rounded-full border border-white/30"
                />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="flex h-full w-full items-center justify-center text-5xl text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]"
                >
                  ✦
                </motion.div>

              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                }}
                className="text-sm uppercase tracking-[0.4em] text-pink-200/40"
              >
                My wish is simple...
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1,
                  duration: 1,
                }}
                className="mt-8 text-4xl leading-relaxed text-white/95 sm:text-5xl"
                style={{
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                I hope we get to create many, many more memories like this together!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.8,
                  duration: 1,
                }}
                className="mt-6 max-w-[350px] text-xl leading-9 text-pink-100/55"
                style={{
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                Today, tomorrow,
                <br />
                and every day. 💗🧿
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2.7,
                  duration: 0.8,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                onClick={onFinished}
                className="mt-12 min-h-[48px] rounded-full border border-pink-200/15 bg-pink-200/[0.04] px-7 text-xs uppercase tracking-[0.25em] text-pink-100/80 transition-all duration-300 hover:border-pink-200/30 hover:bg-pink-200/[0.08]"
              >
                Continue →
              </motion.button>

            </motion.div>
          )}

        </AnimatePresence>

      </div>

    </section>
  );
}
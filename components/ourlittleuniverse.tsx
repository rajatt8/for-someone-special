"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { birthdayData } from "@/data/content";

export default function OurLittleUniverse({
  onFinished,
}: {
  onFinished: () => void;
}) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const photos = birthdayData.universePhotos;

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#050611] px-4 py-16 sm:px-6">

      {/* Deep universe glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [40, -40, 40],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed left-1/2 top-2/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[140px]"
      />

      {/* Stars */}
      {Array.from({ length: 45 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: 2 + (index % 4),
            delay: index * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none fixed h-[2px] w-[2px] rounded-full bg-white/70"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 61) % 100}%`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-[900px]">

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-[600px] text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-pink-200/40 sm:text-xs">
            Our Little Universe
          </p>

          <h1
            className="mt-7 text-5xl leading-tight text-white/95 sm:text-7xl"
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            In a universe
            <br />
            of billions...
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="mt-7 text-xl leading-9 text-pink-100/60 sm:text-2xl"
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            I'm glad I found you.
          </motion.p>

          <motion.div
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-8 text-3xl text-pink-300/60"
          >
            ✦
          </motion.div>
        </motion.div>

        {/* Photo universe */}
        <div className="mt-16 columns-2 gap-3 sm:columns-3 sm:gap-5">

          {photos.map((photo, index) => (
            <motion.button
              key={index}
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.1,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => setSelectedPhoto(index)}
              className="group relative mb-3 block w-full overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.03] text-left shadow-[0_0_40px_rgba(236,72,153,0.05)] sm:mb-5 sm:rounded-[25px]"
            >

              <img
                src={photo.image}
                alt={`Memory ${index + 1}`}
                className="block h-auto w-full object-cover transition duration-700 group-hover:scale-105"
                draggable={false}
              />

              {/* Image glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                <p
                  className="text-sm leading-5 text-white/90 sm:text-base"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                  }}
                >
                  {photo.caption}
                </p>
              </div>

              {/* Tiny star */}
              <span className="absolute right-3 top-3 text-xs text-white/60">
                ✦
              </span>

            </motion.button>
          ))}

        </div>

        {/* Ending message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="mx-auto mt-20 max-w-[550px] text-center"
        >
          <div className="mb-8 text-2xl text-pink-300/50">
            ✦ ♡ ✦
          </div>

          <p
            className="text-3xl leading-relaxed text-white/90 sm:text-4xl"
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            And this is just a tiny part...
          </p>

          <p
            className="mt-5 text-xl leading-9 text-pink-100/50 sm:text-2xl"
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            of all the beautiful moments
            <br />
            I hope life gives you.
          </p>

          <motion.button
            whileTap={{
              scale: 0.94,
            }}
            onClick={onFinished}
            className="mt-12 min-h-[48px] rounded-full border border-pink-200/15 bg-pink-200/[0.04] px-7 text-xs uppercase tracking-[0.25em] text-pink-100/80 transition-all duration-300 hover:border-pink-200/30 hover:bg-pink-200/[0.08]"
          >
            Continue →
          </motion.button>
        </motion.div>

      </div>

      {/* Fullscreen photo viewer */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-5 backdrop-blur-xl"
            onClick={() => setSelectedPhoto(null)}
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 0.4,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90svh] w-full max-w-[500px]"
            >

              <img
                src={photos[selectedPhoto].image}
                alt={`Memory ${selectedPhoto + 1}`}
                className="max-h-[75svh] w-full rounded-[25px] object-contain"
                draggable={false}
              />

              <p
                className="mt-5 text-center text-xl text-white/90"
                style={{
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                {photos[selectedPhoto].caption}
              </p>

              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-lg text-white/80 backdrop-blur-md"
              >
                ×
              </button>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { birthdayData } from "@/data/content";

export default function Gallery({
  onFinished,
}: {
  onFinished: () => void;
}) {
  const [photo, setPhoto] = useState(0);
  const [direction, setDirection] = useState(1);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalPhotos = birthdayData.photos.length;
  const isLastPhoto = photo === totalPhotos - 1;

  const nextPhoto = () => {
    if (photo < totalPhotos - 1) {
      setDirection(1);
      setPhoto((current) => current + 1);
    } else {
      onFinished();
    }
  };

  const previousPhoto = () => {
    if (photo > 0) {
      setDirection(-1);
      setPhoto((current) => current - 1);
    }
  };

  // Mobile swipe support
  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      return;
    }

    const distance =
      touchStartX.current - touchEndX.current;

    const minimumSwipeDistance = 50;

    if (Math.abs(distance) > minimumSwipeDistance) {
      if (distance > 0) {
        nextPhoto();
      } else {
        previousPhoto();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#0d070c] px-4 py-8 sm:px-5">

      {/* Main dreamy pink glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.28, 0.15],
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
          y: [30, -30, 30],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-400/10 blur-[100px]"
      />

      {/* Floating hearts */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
          opacity: [0.15, 0.55, 0.15],
          rotate: [-8, 8, -8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[8%] top-[14%] text-3xl text-pink-300/40"
      >
        ♡
      </motion.div>

      <motion.div
        animate={{
          y: [15, -15, 15],
          opacity: [0.15, 0.5, 0.15],
          rotate: [8, -8, 8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[8%] top-[24%] text-2xl text-pink-300/40"
      >
        ♡
      </motion.div>

      <motion.div
        animate={{
          y: [-10, 10, -10],
          opacity: [0.1, 0.45, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[18%] left-[12%] text-xl text-pink-300/30"
      >
        ♡
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[390px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center sm:mb-7"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-pink-200/50 sm:text-xs">
            Our memories
          </p>

          <h2
            className="mt-2 text-4xl text-pink-50 sm:mt-3"
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            A few moments
          </h2>

          <p className="mt-2 text-[10px] tracking-[0.15em] text-pink-100/25">
            Swipe to explore
          </p>
        </motion.div>

        {/* Photo card */}
        <div
          className="relative overflow-hidden rounded-[28px] border border-pink-200/15 bg-[#181017]/90 p-2.5 shadow-[0_0_70px_rgba(236,72,153,0.12)] backdrop-blur-xl sm:rounded-[30px] sm:p-3"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          <AnimatePresence
            mode="wait"
            initial={false}
            custom={direction}
          >
            <motion.div
              key={photo}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 35 : -35,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -35 : 35,
                scale: 0.98,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >

              {/* Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] bg-[#24151f]">

                <motion.img
                  src={birthdayData.photos[photo].image}
                  alt={`Memory ${photo + 1}`}
                  className="h-full w-full select-none object-cover"
                  draggable={false}
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />

                {/* Soft image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              </div>

              {/* Caption */}
              <div className="px-4 pb-3 pt-5 text-center sm:px-5 sm:pb-4">

                <p
                  className="text-[18px] leading-8 text-pink-50/90 sm:text-[19px]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                  }}
                >
                  {birthdayData.photos[photo].caption}
                </p>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between px-2 pb-2 sm:px-3 sm:pb-3">

            {/* Back */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={previousPhoto}
              disabled={photo === 0}
              className="min-h-[44px] px-2 text-[10px] uppercase tracking-[0.18em] text-pink-200/40 transition-all duration-300 hover:text-pink-100 disabled:pointer-events-none disabled:opacity-10 sm:text-xs sm:tracking-[0.2em]"
            >
              ← Back
            </motion.button>

            {/* Counter */}
            <span className="text-[10px] tracking-[0.25em] text-pink-200/30 sm:text-xs">
              {String(photo + 1).padStart(2, "0")} /{" "}
              {String(totalPhotos).padStart(2, "0")}
            </span>

            {/* Next */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={nextPhoto}
              className="min-h-[44px] rounded-full border border-pink-200/10 px-4 text-[10px] uppercase tracking-[0.18em] text-pink-100 transition-all duration-300 hover:border-pink-200/20 hover:bg-pink-200/5 hover:text-white sm:px-5 sm:text-xs sm:tracking-[0.2em]"
            >
              {isLastPhoto ? "Continue →" : "Next →"}
            </motion.button>

          </div>

        </div>

        {/* Photo indicators */}
        <div className="mt-5 flex min-h-[6px] items-center justify-center gap-2 sm:mt-6">
          {birthdayData.photos.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                width: index === photo ? 24 : 5,
                opacity: index === photo ? 1 : 0.22,
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
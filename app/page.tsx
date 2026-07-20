"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Letter from "@/components/letter";
import Gallery from "@/components/gallery";
import OurLittleUniverse from "@/components/ourlittleuniverse";
import MakeAWish from "@/components/makeawish";
import Ending from "@/components/ending";

export default function Home() {
  const [screen, setScreen] = useState(0);

  const goToNextScreen = () => {
    setScreen((current) => current + 1);
  };

  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#050505]">
      <AnimatePresence mode="wait">

        {/* HERO */}
        {screen === 0 && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen w-full"
          >
            <Hero onFinished={goToNextScreen} />
          </motion.div>
        )}

        {/* INTRO */}
        {screen === 1 && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen w-full"
          >
            <Intro onFinished={goToNextScreen} />
          </motion.div>
        )}

        {/* LETTER */}
        {screen === 2 && (
          <motion.div
            key="letter"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen w-full"
          >
            <Letter onFinished={goToNextScreen} />
          </motion.div>
        )}

        {/* GALLERY */}
        {screen === 3 && (
          <motion.div
            key="gallery"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen w-full"
          >
            <Gallery onFinished={goToNextScreen} />
          </motion.div>
        )}

        {/* OUR LITTLE UNIVERSE */}
        {screen === 4 && (
          <motion.div
            key="universe"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen w-full"
          >
            <OurLittleUniverse onFinished={goToNextScreen} />
          </motion.div>
        )}

        {/* MAKE A WISH */}
        {screen === 5 && (
          <motion.div
            key="wish"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen w-full"
          >
            <MakeAWish onFinished={goToNextScreen} />
          </motion.div>
        )}

        {/* FINAL ENDING */}
        {screen === 6 && (
          <motion.div
            key="ending"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen w-full"
          >
            <Ending />
          </motion.div>
        )}

      </AnimatePresence>
    </main>
  );
}
"use client";

import { motion } from "framer-motion";

export default function Ending() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#050611] px-6">

      {/* Background Glow */}
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
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[150px]"
      />

      {/* Stars */}
      {Array.from({ length: 35 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scale: [0.7, 1.2, 0.7],
          }}
          transition={{
            duration: 2 + (index % 4),
            delay: index * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute h-[2px] w-[2px] rounded-full bg-white/70"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 61) % 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto flex w-full max-w-[550px] flex-col items-center text-center">

        {/* Heart */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-4xl text-pink-300/70"
        >
          ♡
        </motion.div>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="mt-10 text-[10px] uppercase tracking-[0.5em] text-pink-200/40 sm:text-xs"
        >
          A little message
        </motion.p>


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="mt-8 text-5xl leading-tight text-white/95 sm:text-6xl"
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Happy 17
          <br />
          Poorvi 💗🧿
        </motion.h1>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="mt-8 text-center text-xl leading-9 text-pink-100/60 sm:text-2xl"
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          And finally...

Happiesttt Birthdayyyy Puruuuu. 

I honestly don't know if a website can ever truly express everything I feel, because some feelings are simply too big to fit into words. But if you made it all the way here, I hope you felt a tiny part of what was in my heart while making this.

Every photo, every animation, every little detail on these pages was added with only one thought in my mind—YOU. I spent my time building something that would stay with you, something you could always come back to whenever you want to smile. Maybe one day this website will just become another old link hidden somewhere in your phone, but I hope that whenever you open it again, it reminds you that on this day..That some IDIOT felt enough to create an entire little world just to celebrate you.

You deserve every happiness in your life,i hope you'll be smiling while reading this and I hope every birthday brings you closer to every dream you've ever whispered to yourself.

No matter where life takes us in the future, you'll always find me by your side..always with you...I genuinely hope that you continue smiling the way you do now. I hope your laugh never fades, and your eyes never stop shining with excitement. My world becomes brighter because you're in it, and I hope you never forget how special you are to me.

 I hope you always remember how strong, beautiful, and capable you are and how much your Rajat loves you.

And i hope if you ever visit this website again,You'll smile, shake your head, and remember that someone once sat for hours creating every single page just because your birthday mattered that much.

          <br />
          Happy Birthday Meraa Chauu Mauu!
        </motion.p>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
            duration: 1,
          }}
          className="mt-8 max-w-[400px] text-center text-lg leading-8 text-white/40"
          style={{
            fontFamily: "var(--font-cormorant)",
          }}
        >
          Thank you for being the most beautiful part of my life
          <br />
          With all my heart,
        </motion.p>


        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 2.5,
            duration: 0.8,
          }}
          className="mt-14 text-sm uppercase tracking-[0.4em] text-pink-200/30"
        >
          YOUR IDOIT💗
        </motion.div>

      </div>

    </section>
  );
}
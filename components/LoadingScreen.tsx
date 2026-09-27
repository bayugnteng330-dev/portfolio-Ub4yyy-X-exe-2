"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const duration = 2800;
    const start = performance.now();

    let frameId: number;

    const update = (time: number) => {
      const elapsed = time - start;
      const value = Math.min((elapsed / duration) * 100, 100);

      setProgress(value);

      if (value < 100) {
        frameId = requestAnimationFrame(update);
      } else {
        setTimeout(() => {
          setFinished(true);
        }, 350);
      }
    };

    frameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (finished) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: finished ? 0 : 1 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[99999] overflow-hidden bg-[#01030a]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 bg-[#01030a]" />

      {/* STATIC BLUE GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-600/[0.08]
          blur-[80px]
        "
      />

      {/* STATIC PURPLE GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-600/[0.08]
          blur-[90px]
        "
      />

      {/* =====================================================
          LIGHT STAR FIELD
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 35 }).map((_, i) => {
          const left = (i * 47) % 100;
          const top = (i * 71) % 100;
          const size = i % 8 === 0 ? 2 : 1;

          return (
            <span
              key={i}
              className="absolute rounded-full bg-white/60"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
              }}
            />
          );
        })}
      </div>

      {/* =====================================================
          ONE LIGHT ANIMATION
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-[25%]
          h-px
          w-[100px]
          bg-gradient-to-r
          from-transparent
          via-blue-300
          to-transparent
        "
        animate={{
          x: ["0vw", "120vw"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 7,
          ease: "linear",
        }}
      />

      {/* =====================================================
          SIMPLE PLANET
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[130px]
          -top-[100px]
          hidden
          h-[360px]
          w-[360px]
          rounded-full
          bg-[radial-gradient(circle_at_35%_30%,#8b5cf6_0%,#312e81_45%,#08051c_75%)]
          shadow-[-15px_15px_60px_rgba(124,58,237,0.2)]
          sm:block
        "
      />

      {/* PLANET RING */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[190px]
          top-[40px]
          hidden
          h-[70px]
          w-[520px]
          rotate-[-20deg]
          rounded-[50%]
          border-[5px]
          border-purple-400/20
          sm:block
        "
      />

      {/* =====================================================
          CENTRAL CONTENT
      ===================================================== */}

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="flex w-full max-w-xl flex-col items-center px-6 text-center">

          {/* =================================================
              LOGO
          ================================================= */}

          <div className="relative flex h-32 w-32 items-center justify-center">

            {/* SINGLE ORBIT */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-0
                rounded-full
                border
                border-blue-500/20
                border-t-blue-400/70
              "
            />

            {/* STATIC GLOW */}

            <div
              className="
                absolute
                h-24
                w-24
                rounded-full
                bg-blue-500/[0.08]
                blur-xl
              "
            />

            {/* LOGO */}

            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="
                relative
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-blue-400/30
                bg-[#030817]
                shadow-[0_0_25px_rgba(37,99,235,0.2)]
              "
            >
              <span
                className="
                  text-4xl
                  font-black
                  italic
                  text-blue-300
                "
              >
                B
              </span>
            </motion.div>
          </div>

          {/* =================================================
              TEXT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.5,
            }}
            className="mt-7 text-center"
          >
            <h1 className="text-lg font-bold uppercase tracking-[0.18em] text-white sm:text-2xl">
              Welcome To My
            </h1>

            <h2 className="mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-3xl font-black uppercase tracking-[0.08em] text-transparent sm:text-5xl">
              Portfolio
            </h2>

            <div className="mx-auto mt-4 h-px w-20 bg-blue-400/70 sm:w-28" />
          </motion.div>

          {/* =================================================
              PROGRESS
          ================================================= */}

          <div className="mt-8 w-full max-w-[300px]">

            <div className="h-[3px] overflow-hidden rounded-full bg-blue-950/80">

              <div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  via-cyan-300
                  to-purple-500
                  transition-[width]
                  duration-75
                  ease-linear
                "
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

            <div className="mt-4 text-center">
              <span className="font-mono text-xs tracking-[0.25em] text-white/70">
                {Math.floor(progress)
                  .toString()
                  .padStart(2, "0")}
                %
              </span>
            </div>
          </div>

          {/* STATUS */}

          <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-gray-600">
            Initializing Experience
          </p>
        </div>
      </div>

      {/* =====================================================
          VIGNETTE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.45)_100%)]
        "
      />
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 5000;

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const value = Math.min((elapsed / duration) * 100, 100);

      setProgress(value);

      if (value >= 100) {
        clearInterval(timer);

        setTimeout(() => {
          setFinished(true);
        }, 900);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  if (finished) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: finished ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[99999] overflow-hidden bg-[#01020b]"
    >

      {/* =====================================================
          DEEP SPACE BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 bg-[#01020b]" />

      {/* BLUE NEBULA LEFT */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-15%] top-[5%] h-[600px] w-[600px] rounded-full bg-blue-700/20 blur-[130px]"
      />

      {/* PURPLE NEBULA RIGHT */}

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-10%] top-[30%] h-[700px] w-[700px] rounded-full bg-purple-700/20 blur-[150px]"
      />

      {/* BLUE/PURPLE BOTTOM */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-25%] left-[25%] h-[650px] w-[650px] rounded-full bg-indigo-700/20 blur-[160px]"
      />


      {/* =====================================================
          STAR FIELD
      ===================================================== */}

      {Array.from({ length: 150 }).map((_, i) => {
        const left = (i * 47) % 100;
        const top = (i * 73) % 100;
        const size = i % 15 === 0 ? 3 : i % 5 === 0 ? 2 : 1;

        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              boxShadow:
                size >= 3
                  ? "0 0 10px rgba(96,165,250,0.9)"
                  : "0 0 5px rgba(255,255,255,0.7)",
            }}
            animate={{
              opacity: [0.1, 0.9, 0.1],
              scale: [0.7, 1.4, 0.7],
            }}
            transition={{
              duration: 2 + (i % 5),
              repeat: Infinity,
              delay: (i % 10) * 0.4,
              ease: "easeInOut",
            }}
          />
        );
      })}


      {/* =====================================================
          SHOOTING STARS
      ===================================================== */}

      <ShootingStar
        className="left-[12%] top-[22%]"
        rotate="35deg"
        color="blue"
        x={500}
        y={300}
        duration={3}
        delay={2}
      />

      <ShootingStar
        className="right-[12%] top-[18%]"
        rotate="145deg"
        color="purple"
        x={-450}
        y={280}
        duration={3.5}
        delay={5}
      />

      <ShootingStar
        className="left-[55%] top-[10%]"
        rotate="35deg"
        color="cyan"
        x={350}
        y={220}
        duration={2.8}
        delay={8}
      />

      <ShootingStar
        className="left-[15%] top-[55%]"
        rotate="35deg"
        color="purple"
        x={420}
        y={250}
        duration={3.2}
        delay={11}
      />

      <ShootingStar
        className="right-[25%] top-[65%]"
        rotate="145deg"
        color="blue"
        x={-350}
        y={200}
        duration={3}
        delay={14}
      />


      {/* =====================================================
          PLANET - TOP RIGHT
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-[90px] -top-[80px] hidden h-[370px] w-[370px] sm:block"
      >

        {/* RINGS */}

        <div className="absolute left-[-100px] top-[130px] h-[100px] w-[570px] rotate-[-20deg] rounded-[50%] border-[7px] border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.7)]" />

        <div className="absolute left-[-100px] top-[140px] h-[75px] w-[570px] rotate-[-20deg] rounded-[50%] border-2 border-blue-400/60" />

        {/* PLANET */}

        <div className="absolute inset-0 overflow-hidden rounded-full bg-[radial-gradient(circle_at_35%_30%,#8b5cf6,#312e81_45%,#08051c_75%)] shadow-[-20px_20px_80px_rgba(124,58,237,0.45)]">

          <div className="absolute left-[20%] top-[35%] h-[35px] w-[120px] rotate-[25deg] rounded-full bg-purple-300/20 blur-xl" />

          <div className="absolute right-[10%] top-[20%] h-[100px] w-[40px] rounded-full bg-blue-400/20 blur-2xl" />

        </div>

      </motion.div>


      {/* =====================================================
          PLANET - BOTTOM LEFT
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[210px] -left-[170px] h-[520px] w-[520px]"
      >

        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_65%_30%,#60a5fa,#172554_45%,#020617_75%)] shadow-[20px_-10px_100px_rgba(59,130,246,0.35)]" />

        {/* ATMOSPHERE */}

        <div className="absolute inset-[-10px] rounded-full border-[8px] border-blue-400/30 blur-[3px]" />

        {/* PLANET LIGHT */}

        <div className="absolute right-[15%] top-[10%] h-[250px] w-[80px] rounded-full bg-blue-300/20 blur-2xl" />

      </motion.div>


      {/* =====================================================
          SMALL PLANET - BOTTOM RIGHT
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[12%] right-[14%] h-[80px] w-[80px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#60a5fa,#172554_60%,#020617)] shadow-[0_0_35px_rgba(59,130,246,0.4)]"
      />


      {/* =====================================================
          ASTEROIDS
      ===================================================== */}

      <Asteroid className="bottom-[7%] left-[28%]" size="18px" />
      <Asteroid className="bottom-[15%] left-[38%]" size="12px" />
      <Asteroid className="bottom-[5%] right-[30%]" size="24px" />
      <Asteroid className="bottom-[20%] right-[10%]" size="15px" />
      <Asteroid className="bottom-[12%] left-[10%]" size="10px" />


      {/* =====================================================
          CENTRAL CONTENT
      ===================================================== */}

      <div className="absolute inset-0 z-20 flex items-center justify-center">

        <div className="flex w-full max-w-xl flex-col items-center px-6 text-center">


          {/* =================================================
              LOGO
          ================================================= */}

          <div className="relative flex h-40 w-40 items-center justify-center">

            {/* OUTER ORBIT */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-blue-500/20 border-t-blue-400 border-r-purple-500"
            />

            {/* SECOND ORBIT */}

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-3 rounded-full border border-purple-500/20 border-b-purple-400 border-l-blue-400"
            />

            {/* SMALL ORBIT DOT */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-8px]"
            >
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,1)]" />
            </motion.div>


            {/* GLOW */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute h-28 w-28 rounded-full bg-blue-600/30 blur-2xl"
            />


            {/* LOGO */}

            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                type: "spring",
              }}
              className="relative flex h-24 w-24 items-center justify-center rounded-full border border-blue-400/30 bg-[#030817]/80 shadow-[0_0_50px_rgba(37,99,235,0.35)]"
            >

              <span className="text-5xl font-black italic text-blue-300 drop-shadow-[0_0_15px_rgba(96,165,250,0.9)]">
                B
              </span>

            </motion.div>

          </div>


          {/* =====================================================
    WELCOME TEXT
===================================================== */}

<motion.div
  initial={{
    opacity: 0,
    y: 25,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.4,
    duration: 0.8,
  }}
  className="mt-8 text-center"
>

  {/* WELCOME TO MY */}

  <motion.h1
    initial={{
      opacity: 0,
      y: 20,
      letterSpacing: "0.3em",
    }}
    animate={{
      opacity: 1,
      y: 0,
      letterSpacing: "0.12em",
    }}
    transition={{
      delay: 0.5,
      duration: 0.8,
    }}
    className="text-xl font-bold uppercase text-white sm:text-2xl"
  >
    Welcome To My
  </motion.h1>


  {/* PORTFOLIO */}

  <motion.h2
    initial={{
      opacity: 0,
      y: 20,
      scale: 0.9,
    }}
    animate={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{
      delay: 0.7,
      duration: 0.9,
      type: "spring",
    }}
    className="mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-4xl font-black uppercase tracking-[0.08em] text-transparent sm:text-5xl"
  >
    Portfolio
  </motion.h2>


  {/* GARIS */}

  <motion.div
    initial={{
      width: 0,
      opacity: 0,
    }}
    animate={{
      width: 120,
      opacity: 1,
    }}
    transition={{
      delay: 1,
      duration: 0.7,
    }}
    className="mx-auto mt-4 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.8)]"
  />

</motion.div>

          {/* =================================================
              PROGRESS BAR
          ================================================= */}

          <div className="mt-7 w-full max-w-[310px]">

            <div className="relative h-[4px] overflow-hidden rounded-full bg-blue-950/80">

              <motion.div
                className="relative h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-300 to-purple-500"
                style={{
                  width: `${progress}%`,
                }}
              >

                <div className="absolute right-0 top-1/2 h-5 w-8 -translate-y-1/2 rounded-full bg-cyan-300/80 blur-md" />

              </motion.div>

            </div>


            <div className="mt-4 flex justify-center">

              <span className="font-mono text-xs tracking-[0.3em] text-white">
                {Math.floor(progress)
                  .toString()
                  .padStart(2, "0")}
                %
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          VIGNETTE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-30 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

    </motion.div>
  );
}


/* =========================================================
   SHOOTING STAR
========================================================= */

function ShootingStar({
  className,
  rotate,
  color,
  x,
  y,
  duration,
  delay,
}: {
  className: string;
  rotate: string;
  color: "blue" | "purple" | "cyan";
  x: number;
  y: number;
  duration: number;
  delay: number;
}) {
  const colorClass = {
    blue: "via-blue-300",
    purple: "via-purple-300",
    cyan: "via-cyan-300",
  }[color];

  return (
    <motion.div
      className={`absolute h-[2px] w-[120px] rotate-[${rotate}] bg-gradient-to-r from-transparent ${colorClass} to-transparent shadow-[0_0_10px_rgba(96,165,250,0.8)] ${className}`}
      animate={{
        x: [0, x],
        y: [0, y],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 6,
        ease: "easeOut",
      }}
    />
  );
}


/* =========================================================
   ASTEROID
========================================================= */

function Asteroid({
  className,
  size,
}: {
  className: string;
  size: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
        rotate: [0, 20, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        width: size,
        height: size,
      }}
      className={`absolute rounded-[35%] bg-gradient-to-br from-gray-700 via-gray-900 to-black shadow-[0_0_15px_rgba(59,130,246,0.15)] ${className}`}
    />
  );
}
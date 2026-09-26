"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import TypingText from "@/components/TypingText";
import LoadingScreen from "@/components/LoadingScreen";

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    title: "Website Laundry",
    description:
      "Website laundry modern dengan sistem layanan, pemesanan dan dashboard admin.",
    image: "/projects/laundry.jpg",
    tech: ["Next.js", "Node.js", "MySQL"],
    github: "https://github.com/",
    demo: "https://vercel.com/",
  },
  {
    title: "Portfolio Website",
    description:
      "Portfolio website dengan desain futuristic, animasi dan responsive layout.",
    image: "/projects/portfolio.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "https://vercel.com/",
  },
  {
    title: "Website Angkatan",
    description:
      "Website angkatan Teknik Informatika untuk mahasiswa, galeri dan informasi.",
    image: "/projects/website-angkatan.jpg",
    tech: ["Next.js", "Express", "MySQL"],
    github: "https://github.com/",
    demo: "https://vercel.com/",
  },
];

/* =========================================================
   TECH STACK
========================================================= */

const techStack = [
  {
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Vercel",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  {
    name: "Laravel",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "GitHub",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "PHP",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
];

/* =========================================================
   STARS
========================================================= */

const stars = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 61) % 100}%`,
  size: i % 8 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
  duration: 2 + (i % 5),
  delay: (i % 7) * 0.4,
}));

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const [portfolioTab, setPortfolioTab] = useState<"projects" | "tech">(
    "projects"
  );

  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#01030a] text-white">

      {/* =====================================================
          LOADING
      ===================================================== */}

      <LoadingScreen />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          GLOBAL SPACE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-[#01030a]">

        {/* DEEP SPACE */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.10),transparent_35%),radial-gradient(circle_at_20%_60%,rgba(124,58,237,0.10),transparent_30%),radial-gradient(circle_at_80%_75%,rgba(6,182,212,0.08),transparent_30%)]" />

        {/* BLUE NEBULA */}

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[260px] top-[5%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[130px] sm:h-[600px] sm:w-[600px]"
        />

        {/* PURPLE NEBULA */}

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1.1, 0.95, 1.1],
            opacity: [0.10, 0.18, 0.10],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-[280px] top-[25%] h-[550px] w-[550px] rounded-full bg-purple-600/20 blur-[140px] sm:h-[700px] sm:w-[700px]"
        />

        {/* CYAN NEBULA */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
            opacity: [0.06, 0.15, 0.06],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[25%] top-[55%] h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[140px] sm:h-[600px] sm:w-[600px]"
        />

        {/* BOTTOM PURPLE */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.14, 0.06],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[350px] left-[35%] h-[650px] w-[650px] rounded-full bg-violet-600/15 blur-[150px]"
        />

        {/* =====================================================
            PLANET 1
        ===================================================== */}

        <motion.div
          className="absolute -left-[135px] top-[30%] sm:-left-[90px]"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute -inset-16 rounded-full bg-blue-500/20 blur-[50px] sm:-inset-20" />

          <div
            className="
              relative
              h-[220px]
              w-[220px]
              rounded-full
              bg-[radial-gradient(circle_at_30%_25%,#93c5fd_0%,#2563eb_25%,#1e3a8a_55%,#020617_100%)]
              shadow-[inset_-35px_-25px_70px_rgba(0,0,0,0.8),0_0_60px_rgba(37,99,235,0.35)]
              sm:h-[260px]
              sm:w-[260px]
            "
          >
            <div className="absolute left-[25%] top-[30%] h-8 w-14 rounded-full bg-blue-300/20 blur-md sm:h-10 sm:w-16" />

            <div className="absolute left-[50%] top-[60%] h-12 w-20 rounded-full bg-indigo-300/20 blur-lg sm:h-16 sm:w-24" />

            <div className="absolute left-[15%] top-[65%] h-6 w-10 rounded-full bg-cyan-300/10 blur-md sm:h-7 sm:w-12" />
          </div>
        </motion.div>

        {/* =====================================================
            PLANET 2
        ===================================================== */}

        <motion.div
          className="absolute -right-[155px] top-[12%] sm:-right-[120px]"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute -inset-20 rounded-full bg-purple-500/20 blur-[60px]" />

          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              h-[75px]
              w-[300px]
              -translate-x-1/2
              -translate-y-1/2
              rotate-[-18deg]
              rounded-[50%]
              border-[9px]
              border-purple-300/30
              shadow-[0_0_30px_rgba(167,139,250,0.25)]
              sm:h-[95px]
              sm:w-[390px]
              sm:border-[12px]
            "
            animate={{
              rotate: [-18, -15, -18],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div
            className="
              relative
              h-[175px]
              w-[175px]
              rounded-full
              bg-[radial-gradient(circle_at_30%_25%,#ddd6fe_0%,#8b5cf6_25%,#4c1d95_55%,#17052e_100%)]
              shadow-[inset_-30px_-25px_60px_rgba(0,0,0,0.8),0_0_70px_rgba(139,92,246,0.35)]
              sm:h-[210px]
              sm:w-[210px]
            "
          >
            <div className="absolute left-0 top-[35%] h-4 w-full bg-purple-200/10 blur-sm sm:h-5" />

            <div className="absolute left-0 top-[60%] h-6 w-full bg-violet-200/10 blur-md sm:h-8" />
          </div>
        </motion.div>

        {/* =====================================================
            SMALL PLANET
        ===================================================== */}

        <motion.div
          className="absolute bottom-[18%] right-[15%] sm:right-[25%]"
          animate={{
            y: [0, -18, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-[40px]" />

          <div
            className="
              relative
              h-[75px]
              w-[75px]
              rounded-full
              bg-[radial-gradient(circle_at_30%_25%,#67e8f9_0%,#0891b2_25%,#164e63_55%,#020617_100%)]
              shadow-[inset_-18px_-15px_35px_rgba(0,0,0,0.8),0_0_35px_rgba(34,211,238,0.25)]
              sm:h-[95px]
              sm:w-[95px]
            "
          >
            <div className="absolute left-[30%] top-[35%] h-2 w-4 rounded-full bg-cyan-200/20 blur-sm sm:h-3 sm:w-5" />

            <div className="absolute left-[55%] top-[65%] h-3 w-6 rounded-full bg-cyan-300/10 blur-sm sm:h-4 sm:w-7" />
          </div>
        </motion.div>

        {/* SPACE GRID */}

        <div
          className="absolute inset-0 opacity-[0.05] sm:opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.25) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        {/* STARS */}

        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              boxShadow:
                star.size >= 3
                  ? "0 0 8px rgba(147,197,253,0.8)"
                  : "0 0 4px rgba(255,255,255,0.5)",
            }}
            animate={{
              opacity: [0.1, 0.9, 0.1],
              scale: [0.7, 1.5, 0.7],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ))}

        {/* EXTRA STARS */}

        {Array.from({ length: 45 }).map((_, i) => (
          <motion.span
            key={`extra-star-${i}`}
            className="absolute h-[1px] w-[1px] rounded-full bg-white"
            style={{
              left: `${(i * 73) % 100}%`,
              top: `${(i * 43) % 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: (i % 8) * 0.5,
            }}
          />
        ))}

        {/* SHOOTING STAR 1 */}

        <motion.div
          className="
            absolute
            left-[10%]
            top-[18%]
            h-[2px]
            w-[100px]
            rotate-[35deg]
            bg-gradient-to-r
            from-transparent
            via-blue-300
            to-transparent
            shadow-[0_0_10px_rgba(96,165,250,0.8)]
            sm:w-[150px]
          "
          animate={{
            x: [0, 500],
            y: [0, 300],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 8,
            ease: "easeOut",
          }}
        />

        {/* SHOOTING STAR 2 */}

        <motion.div
          className="
            absolute
            right-[5%]
            top-[45%]
            h-[2px]
            w-[90px]
            rotate-[140deg]
            bg-gradient-to-r
            from-transparent
            via-cyan-300
            to-transparent
            shadow-[0_0_10px_rgba(34,211,238,0.8)]
            sm:w-[130px]
          "
          animate={{
            x: [0, -450],
            y: [0, 250],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 11,
            ease: "easeOut",
          }}
        />

        {/* SHOOTING STAR 3 */}

        <motion.div
          className="
            absolute
            left-[45%]
            top-[70%]
            h-[2px]
            w-[80px]
            rotate-[25deg]
            bg-gradient-to-r
            from-transparent
            via-purple-300
            to-transparent
            shadow-[0_0_10px_rgba(192,132,252,0.8)]
            sm:w-[120px]
          "
          animate={{
            x: [0, 350],
            y: [0, 180],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatDelay: 13,
            ease: "easeOut",
          }}
        />

        {/* SHOOTING STAR 4 */}

        <motion.div
          className="
            absolute
            left-[70%]
            top-[8%]
            h-[1px]
            w-[70px]
            rotate-[35deg]
            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent
            shadow-[0_0_8px_white]
            sm:w-[90px]
          "
          animate={{
            x: [0, -250],
            y: [0, 180],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 15,
            ease: "easeOut",
          }}
        />

        {/* HORIZONTAL LIGHT */}

        <div className="absolute left-0 right-0 top-[25%] h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

        <div className="absolute left-0 right-0 top-[50%] h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />

        <div className="absolute left-0 right-0 top-[75%] h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
      </div>

      {/* =====================================================
          HOME
      ===================================================== */}

      <section
        id="home"
        className="relative min-h-screen scroll-mt-24"
      >
        <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">

          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">

            {/* HERO LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="min-w-0"
            >

              {/* STATUS */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.06] px-3 py-2 backdrop-blur-xl sm:mb-7 sm:gap-3 sm:px-4"
              >
                <span className="relative flex h-2 w-2 shrink-0 sm:h-2.5 sm:w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400 sm:h-2.5 sm:w-2.5" />
                </span>

                <span className="truncate text-[9px] uppercase tracking-[0.16em] text-blue-300 sm:text-xs sm:tracking-[0.25em]">
                  Available for Projects
                </span>
              </motion.div>

              {/* TITLE */}

              <h1 className="text-[3.1rem] font-black leading-[0.92] tracking-[-0.055em] xs:text-[3.5rem] sm:text-6xl md:text-7xl lg:text-8xl">

                <span className="block text-white">
                  Turning
                </span>

                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  Ideas
                </span>

                <span className="block text-white">
                  Into Reality.
                </span>

              </h1>

              {/* TYPING */}

              <div className="mt-7 text-lg text-gray-300 sm:mt-8 sm:text-xl md:text-2xl">
                <TypingText />
              </div>

              {/* DESCRIPTION */}

              <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
                Dimulai dari rasa penasaran, berkembang menjadi passion.
                Saya membangun pengalaman digital yang modern,
                interaktif, responsive dan bermakna.
              </p>

              {/* BUTTON */}

              <div className="mt-8 flex w-full flex-col gap-3 min-[430px]:flex-row sm:mt-9 sm:gap-4">

                <a
                  href="#portfolio"
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-blue-600 px-5 py-3.5 text-center text-sm font-semibold shadow-[0_0_35px_rgba(37,99,235,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_45px_rgba(37,99,235,0.5)] min-[430px]:w-auto sm:px-7 sm:py-4 sm:text-base"
                >
                  <span className="relative z-10">
                    Explore Projects ↗
                  </span>

                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
                </a>

                <a
                  href="#contact"
                  className="flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-center text-sm font-semibold backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 min-[430px]:w-auto sm:px-7 sm:py-4 sm:text-base"
                >
                  Contact Me →
                </a>

              </div>

              {/* SOCIAL */}

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">

                <span className="mr-1 text-[9px] uppercase tracking-[0.2em] text-gray-600 sm:mr-2 sm:text-xs sm:tracking-[0.25em]">
                  Find Me
                </span>

                {[
                  ["GH", "https://github.com/"],
                  ["in", "https://linkedin.com/"],
                  ["IG", "https://instagram.com/"],
                ].map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[10px] font-bold text-gray-400 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] sm:h-11 sm:w-11 sm:text-xs"
                  >
                    {name}
                  </a>
                ))}

              </div>
            </motion.div>

            {/* =================================================
                HERO RIGHT - SPOTIFY
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 70,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="relative flex min-h-0 w-full items-center justify-center lg:min-h-[500px]"
            >

              <div className="absolute h-[280px] w-[280px] rounded-full bg-blue-600/10 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[130px]" />

              {/* SPOTIFY CARD */}

              <div className="relative w-full max-w-[500px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#080b12]/90 p-2 shadow-[0_0_60px_rgba(37,99,235,0.14)] backdrop-blur-2xl sm:rounded-[1.7rem] sm:p-3 sm:shadow-[0_0_80px_rgba(37,99,235,0.14)]">

                {/* HEADER */}

                <div className="flex items-center justify-between gap-3 px-2 pb-3 pt-2 sm:px-4 sm:pb-4 sm:pt-3">

                  <div className="min-w-0">

                    <h3 className="truncate text-lg font-bold text-white sm:text-2xl">
                      Daily Rotation
                    </h3>

                    <p className="mt-1 truncate text-xs text-gray-500 sm:text-sm">
                      My Spotify Playlist...
                    </p>

                  </div>

                  {/* SPOTIFY LOGO */}

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-lg sm:h-10 sm:w-10">

                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-black sm:h-6 sm:w-6"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm5.48 17.3c-.22.36-.69.47-1.05.25-2.88-1.76-6.5-2.16-10.77-1.18-.41.09-.82-.16-.91-.57-.09-.41.16-.82.57-.91 4.67-1.07 8.67-.61 11.91 1.37.37.22.48.69.25 1.04Zm1.41-3.14c-.28.45-.86.59-1.31.31-3.3-2.03-8.34-2.62-12.25-1.42-.5.15-1.03-.13-1.18-.63-.15-.5.13-1.03.63-1.18 4.47-1.36 10.04-.7 13.84 1.64.45.28.59.86.27 1.28Zm.12-3.27C15.05 8.4 8.4 8.16 4.45 9.36c-.6.18-1.24-.16-1.42-.76-.18-.6.16-1.24.76-1.42 4.54-1.38 10.23-1.11 14.98 1.71.54.32.71 1.02.39 1.56-.31.54-1.02.72-1.57.4Z" />
                    </svg>

                  </div>

                </div>

                {/* SPOTIFY */}

                <div className="overflow-hidden rounded-xl sm:rounded-2xl">

                  <iframe
                    data-testid="embed-iframe"
                    style={{
                      borderRadius: "12px",
                      border: "none",
                    }}
                    src="https://open.spotify.com/embed/playlist/0pFLRsPY4oYNNDO3VCF7z2?utm_source=generator&si=38f4d089c65948b3"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="block h-[300px] w-full sm:h-[352px]"
                    title="Bayu Spotify Playlist"
                  />

                </div>

                {/* FOOTER */}

                <div className="flex flex-col gap-3 px-1 pb-1 pt-3 min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between sm:px-2 sm:pt-4">

                  <div className="min-w-0">

                    <p className="text-[10px] uppercase tracking-[0.18em] text-blue-400 sm:text-xs sm:tracking-[0.2em]">
                      My Spotify
                    </p>

                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      Updated Playlist
                    </p>

                  </div>

                  <a
                    href="https://open.spotify.com/playlist/0pFLRsPY4oYNNDO3VCF7z2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-400 transition hover:border-green-400/30 hover:bg-green-500/10 hover:text-white min-[380px]:w-auto"
                  >
                    Open Spotify ↗
                  </a>

                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="relative scroll-mt-24 py-20 sm:py-24 md:py-32"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionTitle
            eyebrow="01 / About"
            title="The Person Behind The Code"
            description="Mengenal lebih dekat siapa saya, pendidikan dan perjalanan saya di dunia teknologi."
          />

          <div className="mt-14 grid items-center gap-12 sm:mt-16 md:mt-20 md:grid-cols-2 md:gap-16">

            {/* PROFILE */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >

              <div className="relative">

                <div className="absolute inset-[-20px] rounded-full bg-blue-600/10 blur-[60px] sm:inset-[-30px] sm:blur-[80px]" />

                <div className="relative h-[330px] w-[245px] overflow-hidden rounded-[1.6rem] border border-blue-400/10 bg-white/[0.03] shadow-[0_0_50px_rgba(37,99,235,0.1)] sm:h-[390px] sm:w-[290px] sm:rounded-[2rem] sm:shadow-[0_0_60px_rgba(37,99,235,0.1)]">

                  <img
                    src="/profile.png"
                    alt="Profile"
                    className="h-full w-full object-contain"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020711] to-transparent sm:h-32" />

                  <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">

                    <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400 sm:text-xs sm:tracking-[0.25em]">
                      Developer
                    </p>

                    <p className="mt-1 text-sm font-bold sm:text-base">
                      Full Stack Developer
                    </p>

                  </div>

                </div>
              </div>
            </motion.div>

            {/* ABOUT TEXT */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <p className="text-xl font-bold text-blue-400 sm:text-2xl">
                Hi, I'm Bayu.
              </p>

              <h3 className="mt-3 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Mahasiswa Teknik Informatika.
              </h3>

              <p className="mt-6 text-sm leading-7 text-gray-400 sm:mt-7 sm:text-base sm:leading-8">
                Saya adalah mahasiswa Teknik Informatika yang memiliki
                ketertarikan pada pengembangan website, aplikasi,
                frontend dan backend.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
                Saya senang mempelajari teknologi baru dan membangun
                berbagai project digital yang modern, interaktif,
                responsive dan mudah digunakan.
              </p>

              <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-2">

                <InfoCard
                  icon="🎓"
                  title="Universitas Khairun"
                  text="Teknik Informatika • 2025 - Present"
                />

                <InfoCard
                  icon="🏫"
                  title="SMA Negeri 1 Sanana"
                  text="IPS • 2021 - 2024"
                />

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PORTFOLIO
      ===================================================== */}

      <section
        id="portfolio"
        className="relative scroll-mt-24 py-20 sm:py-24 md:py-32"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionTitle
            eyebrow="02 / My Universe"
            title="Portfolio"
            description="Project dan teknologi yang digunakan untuk membangun berbagai pengalaman digital."
          />

          {/* TAB */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 rounded-2xl border border-white/10 bg-[#050b18]/80 p-1.5 shadow-[0_0_50px_rgba(37,99,235,0.08)] backdrop-blur-xl sm:mt-14 sm:rounded-3xl sm:p-2"
          >

            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">

              <button
                onClick={() => setPortfolioTab("projects")}
                className={`group relative min-w-0 rounded-xl px-2 py-4 transition duration-300 sm:rounded-2xl sm:px-5 sm:py-5 ${
                  portfolioTab === "projects"
                    ? "bg-blue-600/20 text-white shadow-[0_0_30px_rgba(37,99,235,0.15)]"
                    : "text-gray-500 hover:bg-white/5 hover:text-white"
                }`}
              >

                <div className="text-xl sm:text-2xl">
                  &lt;/&gt;
                </div>

                <p className="mt-1 text-sm font-semibold sm:mt-2 sm:text-base">
                  Projects
                </p>

                <p className="mt-1 hidden text-xs text-gray-600 min-[380px]:block">
                  My latest work
                </p>

              </button>

              <button
                onClick={() => setPortfolioTab("tech")}
                className={`group min-w-0 rounded-xl px-2 py-4 transition duration-300 sm:rounded-2xl sm:px-5 sm:py-5 ${
                  portfolioTab === "tech"
                    ? "bg-blue-600/20 text-white shadow-[0_0_30px_rgba(37,99,235,0.15)]"
                    : "text-gray-500 hover:bg-white/5 hover:text-white"
                }`}
              >

                <div className="text-xl sm:text-2xl">
                  ⚙
                </div>

                <p className="mt-1 text-sm font-semibold sm:mt-2 sm:text-base">
                  Tech Stack
                </p>

                <p className="mt-1 hidden text-xs text-gray-600 min-[380px]:block">
                  Technologies I use
                </p>

              </button>

            </div>
          </motion.div>

          {/* PROJECTS */}

          {portfolioTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 grid gap-5 sm:mt-12 sm:gap-7 md:grid-cols-2 lg:grid-cols-3"
            >

              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-3 backdrop-blur-xl sm:rounded-[1.7rem] sm:p-4"
                >

                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl transition duration-500 group-hover:bg-blue-500/25" />

                  <div className="relative h-44 overflow-hidden rounded-xl border border-white/5 bg-black sm:h-52 sm:rounded-2xl">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] text-gray-300 backdrop-blur-md sm:bottom-4 sm:left-4 sm:px-3 sm:text-xs">
                      Project 0{index + 1}
                    </div>
                  </div>

                  <div className="relative p-2 pt-4 sm:p-3 sm:pt-5">

                    <h3 className="text-xl font-bold sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-gray-500 sm:mt-3 sm:text-sm sm:leading-7">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">

                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-blue-400/10 bg-blue-500/5 px-2.5 py-1 text-[10px] text-blue-300 sm:px-3 sm:text-xs"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                    <div className="mt-5 flex flex-col gap-2.5 min-[400px]:flex-row sm:mt-6 sm:gap-3">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center rounded-xl border border-white/10 py-3 text-sm text-gray-400 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white min-[400px]:w-1/2"
                      >
                        GitHub
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-3 text-sm font-semibold transition hover:bg-blue-500 min-[400px]:w-1/2"
                      >
                        Live Demo ↗
                      </a>

                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}

          {/* TECH STACK */}

          {portfolioTab === "tech" && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-6"
            >

              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="group flex min-h-[135px] flex-col items-center justify-center rounded-xl border border-white/10 bg-[#081120]/80 p-3 backdrop-blur-xl transition duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.06] hover:shadow-[0_0_35px_rgba(37,99,235,0.15)] sm:min-h-[160px] sm:rounded-2xl sm:p-5"
                >

                  <div className="flex h-14 w-14 items-center justify-center sm:h-20 sm:w-20">

                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="h-12 w-12 object-contain transition duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
                    />

                  </div>

                  <p className="mt-3 text-center text-xs font-semibold text-gray-300 group-hover:text-white sm:mt-5 sm:text-sm">
                    {tech.name}
                  </p>

                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="relative scroll-mt-24 py-20 sm:py-24 md:py-32"
      >

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <SectionTitle
            eyebrow="03 / Contact"
            title="Let's Connect"
            description="Ada project, ide atau sesuatu yang ingin didiskusikan? Kirim pesan kepada saya."
          />

          <div className="mt-10 grid gap-5 sm:mt-16 sm:gap-7 md:grid-cols-2">

            {/* FORM */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl sm:rounded-[1.7rem] sm:p-7"
            >

              <h3 className="text-xl font-bold sm:text-2xl">
                Send a Message
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
                Pesan akan diteruskan langsung melalui WhatsApp.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const form = e.currentTarget;

                  const name = (
                    form.elements.namedItem("name") as HTMLInputElement
                  ).value;

                  const message = (
                    form.elements.namedItem("message") as HTMLTextAreaElement
                  ).value;

                  const whatsappNumber = "6282396703946";

                  const text = `Halo Bayu, saya ${name}.\n\n${message}`;

                  window.open(
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      text
                    )}`,
                    "_blank"
                  );
                }}
                className="mt-6 space-y-3 sm:mt-7 sm:space-y-4"
              >

                <input
                  name="name"
                  required
                  placeholder="Nama Anda"
                  className="space-input w-full"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Anda"
                  className="space-input w-full"
                />

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tulis pesan..."
                  className="space-input w-full resize-none"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 py-3.5 text-sm font-semibold shadow-[0_0_30px_rgba(37,99,235,0.2)] transition hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] sm:py-4 sm:text-base"
                >
                  Send Message ↗
                </button>

              </form>
            </motion.div>

            {/* SOCIAL */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl border border-blue-400/10 bg-blue-500/[0.025] p-5 backdrop-blur-xl sm:rounded-[1.7rem] sm:p-7"
            >

              <div className="absolute -right-[100px] -top-[100px] h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

              <h3 className="relative text-xl font-bold sm:text-2xl">
                Find Me
              </h3>

              <p className="relative mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
                Connect with me through these platforms.
              </p>

              <div className="relative mt-6 space-y-3 sm:mt-8 sm:space-y-4">

                <SocialCard
                  title="WhatsApp"
                  description="Let's Connect"
                  icon="WA"
                  href="https://wa.me/6282396703946"
                />

                <SocialCard
                  title="Instagram"
                  description="Follow me"
                  icon="IG"
                  href="https://instagram.com/"
                />

                <SocialCard
                  title="GitHub"
                  description="See my projects"
                  icon="GH"
                  href="https://github.com/"
                />

                <SocialCard
                  title="LinkedIn"
                  description="Professional profile"
                  icon="in"
                  href="https://linkedin.com/"
                />

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="relative border-t border-white/5 py-8 sm:py-10">

        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          <div className="mx-auto mb-4 h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent sm:w-24" />

          <p className="text-xs text-gray-600 sm:text-sm">
            © {new Date().getFullYear()} Portfolio.
          </p>

          <p className="mt-2 text-[10px] leading-5 text-gray-700 sm:text-xs">
            Built with Next.js • TypeScript • Tailwind CSS • Framer Motion
          </p>

        </div>
      </footer>

    </main>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl"
    >

      <p className="text-[10px] uppercase tracking-[0.25em] text-blue-400 sm:text-xs sm:tracking-[0.35em]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:mt-4 sm:text-4xl md:text-6xl">
        {title}
      </h2>

      <p className="mt-4 text-sm leading-7 text-gray-500 sm:mt-5 sm:text-base sm:leading-8">
        {description}
      </p>

    </motion.div>
  );
}

/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-xl border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:border-blue-400/20 hover:bg-blue-500/[0.03] sm:rounded-2xl sm:p-5"
    >

      <div className="flex gap-3 sm:gap-4">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-sm sm:h-11 sm:w-11 sm:text-base">
          {icon}
        </div>

        <div className="min-w-0">

          <p className="text-sm font-semibold sm:text-base">
            {title}
          </p>

          <p className="mt-1 text-[11px] leading-5 text-gray-500 sm:text-xs">
            {text}
          </p>

        </div>

      </div>
    </motion.div>
  );
}

/* =========================================================
   SOCIAL CARD
========================================================= */

function SocialCard({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-3 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.05] hover:shadow-[0_0_25px_rgba(37,99,235,0.1)] sm:gap-4 sm:rounded-2xl sm:p-4"
    >

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xs font-bold text-blue-400 transition group-hover:bg-blue-500/20 sm:h-12 sm:w-12 sm:text-sm">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="truncate text-sm font-semibold sm:text-base">
          {title}
        </p>

        <p className="mt-1 truncate text-[10px] text-gray-500 sm:text-xs">
          {description}
        </p>

      </div>

      <span className="shrink-0 text-sm text-gray-600 transition group-hover:translate-x-1 group-hover:text-blue-400 sm:text-base">
        →
      </span>

    </a>
  );
}
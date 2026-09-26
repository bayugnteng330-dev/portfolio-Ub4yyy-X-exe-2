"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020711] text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-900/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/10 blur-[150px]" />

      </div>

      {/* STARS */}
      <div className="about-stars pointer-events-none absolute inset-0" />

      {/* TITLE */}
      <motion.div
        initial={{
          opacity: 0,
          y: -25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative z-10 pt-24 text-center"
      >
        <h1 className="text-5xl font-black tracking-tight md:text-6xl">
          About <span className="text-white">Me</span>
        </h1>
      </motion.div>

      {/* MAIN */}
      <section className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="relative flex min-h-[650px] items-center">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="absolute left-0 top-[52%] z-20 w-full max-w-[390px] -translate-y-1/2"
          >

            <p className="text-4xl font-bold text-blue-500 md:text-5xl">
              Hi, I'm
            </p>

            <h2 className="mt-2 text-5xl font-black leading-[0.95] md:text-6xl">
              <span className="block">
                Bayu Samudra
              </span>

              <span className="block">
                Ayub
              </span>
            </h2>

            <p className="mt-5 text-xs uppercase tracking-[0.3em] text-gray-500">
              Informatics Student
            </p>

            <a
              href="/cv.pdf"
              download
              className="mt-7 inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              <span className="text-base">
                ▣
              </span>

              View Resume
            </a>

          </motion.div>


          {/* ================= CENTER PHOTO ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
            }}
            className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          >

            {/* GLOW */}

            <div className="absolute bottom-24 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-700/20 blur-[100px]" />

            {/* PHOTO */}

            <div className="relative h-[390px] w-[280px] md:h-[460px] md:w-[330px]">

              <img
                src="/profile.png"
                alt="Bayu Samudra Ayub"
                className="relative z-10 h-full w-full object-contain object-bottom"
              />

              {/* FADE */}

              <div className="absolute bottom-0 left-0 right-0 z-20 h-40 bg-gradient-to-t from-[#020711] via-[#020711]/70 to-transparent" />

            </div>

          </motion.div>


          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="absolute right-0 top-[52%] z-20 w-full max-w-[390px] -translate-y-1/2"
          >

            <p className="text-sm leading-7 text-gray-400 md:text-base">
              Sebagai mahasiswa Teknik Informatika, saya berfokus
              pada pengembangan teknologi yang tidak hanya
              fungsional, tetapi juga menghadirkan pengalaman
              digital yang menarik dan berdampak.
            </p>

            <Link
              href="/projects"
              className="mt-7 inline-flex items-center gap-3 rounded-lg border border-blue-500/40 bg-blue-500/5 px-6 py-3 text-sm font-semibold text-blue-300 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10 hover:text-white"
            >
              <span>
                ‹›
              </span>

              View Projects
            </Link>

          </motion.div>

        </div>

      </section>

    </main>
  );
}
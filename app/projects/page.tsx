"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Website Laundry",
    description:
      "Website laundry modern dengan halaman layanan, pemesanan dan dashboard admin.",
    image: "/projects/laundry.jpg",
    tech: ["Next.js", "Node.js", "MySQL"],
    github: "https://github.com/",
    demo: "https://vercel.com/",
  },

  {
    title: "Portfolio Website",
    description:
      "Website portfolio modern dengan desain dark, animasi dan responsive layout.",
    image: "/projects/portfolio.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "https://vercel.com/",
  },

  {
    title: "Website Angkatan",
    description:
      "Website angkatan Teknik Informatika untuk menampilkan mahasiswa, galeri dan informasi.",
    image: "/projects/website-angkatan.jpg",
    tech: ["Next.js", "Express", "MySQL"],
    github: "https://github.com/",
    demo: "https://vercel.com/",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#030712] px-6 py-32 text-white">

      <div className="mx-auto max-w-6xl">

        {/* TITLE */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            My Work
          </p>

          <h1 className="mt-3 text-5xl font-black md:text-6xl">
            Projects
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Beberapa project yang pernah saya kerjakan dalam pengembangan
            website, aplikasi dan teknologi.
          </p>
        </motion.div>


        {/* PROJECT GRID */}

        <div className="mt-16 grid gap-7 md:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>

      </div>

    </main>
  );
}
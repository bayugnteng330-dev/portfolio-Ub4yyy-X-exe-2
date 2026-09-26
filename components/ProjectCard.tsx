"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-blue-500/40"
    >

      {/* ANIMATED BORDER */}

      <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -inset-[1px] animate-pulse rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-30 blur-sm" />
      </div>


      {/* IMAGE */}

      <div className="relative z-10 aspect-video w-full overflow-hidden bg-black">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* IMAGE OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      </div>


      {/* CONTENT */}

      <div className="relative z-10 p-6">

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-400">
          {project.description}
        </p>


        {/* TECHNOLOGIES */}

        <div className="mt-5 flex flex-wrap gap-2">

          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
            >
              {item}
            </span>
          ))}

        </div>


        {/* BUTTONS */}

        <div className="mt-6 flex flex-wrap gap-3">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-gray-300 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
            >
              <GitBranch size={17} />
              GitHub
            </a>
          )}


          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              <ExternalLink size={17} />
              Demo
            </a>
          )}

        </div>

      </div>

    </motion.article>
  );
}
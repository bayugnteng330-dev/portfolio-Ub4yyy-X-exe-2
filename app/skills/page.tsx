import Navbar from "@/components/Navbar";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MySQL",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 pb-24 pt-40">

        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Technologies
        </p>

        <h1 className="mt-4 text-5xl font-black md:text-6xl">
          My <span className="text-blue-500">Skills</span>
        </h1>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center text-gray-300 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-500/40 hover:text-white"
            >
              {skill}
            </div>
          ))}

        </div>

      </section>
    </main>
  );
}
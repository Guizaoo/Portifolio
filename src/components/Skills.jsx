import React from "react";

export default function Skills() {
  const skills = [
    { name: "React", accent: "text-cyan-500", initials: "Re" },
    { name: "Java", accent: "text-orange-500", initials: "Ja" },
    { name: "Spring Boot", accent: "text-emerald-500", initials: "Sp" },
    { name: "Tailwind", accent: "text-sky-500", initials: "Tw" },
    { name: "JavaScript", accent: "text-yellow-500", initials: "JS" },
    { name: "HTML5", accent: "text-red-500", initials: "H5" },
  ];

  return (
    <section id="skills" className="bg-white py-16 dark:bg-zinc-900">
      <div className="mx-auto w-full max-w-6xl px-5">
        <h2 className="mx-auto mb-10 w-fit border-b-2 border-blue-700 pb-2 text-center text-3xl font-bold text-blue-700 dark:border-blue-300 dark:text-blue-300">
          Minhas Habilidades
        </h2>
        <div className="grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex h-32 w-32 flex-col items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
            >
              <span className={`text-3xl font-black ${skill.accent}`}>
                {skill.initials}
              </span>
              <span className="mt-2 text-sm font-semibold text-slate-800 dark:text-zinc-100">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

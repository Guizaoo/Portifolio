import React from "react";

const skills = [
  { name: "React", area: "Front-end", accent: "bg-cyan-500" },
  { name: "Java", area: "Back-end", accent: "bg-orange-500" },
  { name: "Spring Boot", area: "APIs REST", accent: "bg-emerald-500" },
  { name: "Tailwind CSS", area: "Interface", accent: "bg-sky-500" },
  { name: "JavaScript", area: "Lógica web", accent: "bg-yellow-500" },
  { name: "HTML5", area: "Estrutura", accent: "bg-red-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20 dark:bg-zinc-900">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
              Habilidades
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
              Stack que sustenta meus projetos
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-zinc-300">
            Tecnologias que já aparecem no meu estudo, nos meus projetos e na direção que quero
            seguir profissionalmente.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="group rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
            >
              <div className="flex items-center gap-4">
                <span className={`h-12 w-2 rounded-full ${skill.accent}`} />
                <div>
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">{skill.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-zinc-400">
                    {skill.area}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

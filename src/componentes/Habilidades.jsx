import React from "react";

const habilidades = [
  { nome: "React", area: "Front-end", destaque: "bg-cyan-500" },
  { nome: "Java", area: "Back-end", destaque: "bg-orange-500" },
  { nome: "Spring Boot", area: "APIs REST", destaque: "bg-emerald-500" },
  { nome: "Tailwind CSS", area: "Interface", destaque: "bg-sky-500" },
  { nome: "JavaScript", area: "Lógica web", destaque: "bg-yellow-500" },
  { nome: "HTML5", area: "Estrutura", destaque: "bg-red-500" },
];

export default function Habilidades() {
  return (
    <section id="skills" className="bg-white py-20 dark:bg-zinc-900">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end" data-reveal>
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
          {habilidades.map((habilidade, indice) => (
            <article
              key={habilidade.nome}
              data-reveal="zoom"
              style={{ "--reveal-delay": `${indice * 70}ms` }}
              className="group rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
            >
              <div className="flex items-center gap-4">
                <span className={`h-12 w-2 rounded-full ${habilidade.destaque}`} />
                <div>
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">
                    {habilidade.nome}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-zinc-400">
                    {habilidade.area}
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

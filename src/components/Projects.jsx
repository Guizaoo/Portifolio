import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Gerenciador de Tarefas em Java",
      description:
        "Projeto completo desenvolvido na InCodeTechSchool utilizando a stack Java/Spring Boot para o back-end e API RESTful.",
      image: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      tags: ["Java", "Spring Boot", "API REST"],
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7306401752667348993/",
    },
    {
      title: "Interface de E-commerce com React",
      description:
        "Desenvolvimento de um layout moderno e responsivo, focando em componentes reutilizáveis e gerenciamento de estado básico.",
      image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
      tags: ["React", "CSS3", "Componentes"],
      link: "#",
    },
    {
      title: "Calculadora Interativa em JavaScript",
      description:
        "Uma calculadora funcional que demonstra proficiência em manipulação do DOM e lógica de programação pura com JavaScript.",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      tags: ["JavaScript", "HTML5", "DOM"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="bg-slate-50 py-16 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-5">
        <h2 className="mx-auto mb-10 w-fit border-b-2 border-blue-700 pb-2 text-center text-3xl font-bold text-blue-700 dark:border-blue-300 dark:text-blue-300">
          Projetos Recentes
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group overflow-hidden rounded-lg border border-slate-200 border-l-blue-700 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:border-l-blue-400 dark:bg-zinc-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-full flex-col sm:flex-row lg:flex-col">
                <div className="flex items-center justify-center bg-slate-100 p-6 dark:bg-zinc-950">
                  <img
                    className="h-24 w-24 object-contain transition duration-300 group-hover:scale-105"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-zinc-300">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded border border-slate-300 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                  </div>
                  <div className="mt-5 text-sm font-bold text-blue-700 dark:text-blue-300">
                    Ver Projeto
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";

const projects = [
  {
    id: "like-acai",
    title: "Like Acai",
    eyebrow: "Projeto real",
    description:
      "Projeto criado para apresentar uma marca real com uma presença digital mais organizada, visual e direta.",
    goal:
      "Mostrar o negócio de forma profissional, com navegação simples e foco em facilitar o contato com clientes.",
    result:
      "Demonstra criação de página comercial, cuidado visual, responsividade e organização de conteúdo.",
    stack: ["React", "Tailwind CSS", "JavaScript", "Responsividade"],
    liveUrl: "",
  },
  {
    id: "pousada-parente",
    title: "Pousada do Parente",
    eyebrow: "Projeto real",
    description:
      "Site institucional para apresentar uma pousada real, destacando estrutura, localização, contato e confiança.",
    goal:
      "Criar uma página clara para quem procura hospedagem e precisa encontrar informações importantes rapidamente.",
    result:
      "Mostra minha capacidade de criar presença online para negócios locais e transformar informação em uma página organizada.",
    stack: ["React", "Tailwind CSS", "UI comercial", "Deploy"],
    liveUrl: "",
  },
  {
    id: "estoque",
    title: "Sistema de Estoque",
    eyebrow: "Sistema autoral",
    description:
      "Sistema próprio para controle de produtos, quantidades e movimentações administrativas.",
    goal:
      "Permitir visualizar entradas, saídas, itens críticos e histórico de movimentação em uma interface administrativa.",
    result:
      "Demonstra raciocínio de sistema, regras de negócio, dashboard e caminho para integração com back-end.",
    stack: ["Java", "Spring Boot", "API REST", "React"],
    liveUrl: "",
  },
  {
    id: "tarefas",
    title: "Gerenciador de Tarefas em Java",
    eyebrow: "Projeto de estudo",
    description:
      "Projeto desenvolvido na InCodeTechSchool utilizando Java/Spring Boot para back-end e API RESTful.",
    goal:
      "Praticar arquitetura de API, organização de endpoints e construção de funcionalidades úteis para rotina.",
    result:
      "Complementa a vitrine com aprendizado técnico de back-end e lógica de aplicação.",
    stack: ["Java", "Spring Boot", "API REST"],
    liveUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7306401752667348993/",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-zinc-950 text-white">
      <section className="border-b border-zinc-800 bg-zinc-950 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            Portfólio de projetos
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
            Projetos reais, sistemas próprios e trabalhos que mostram meu repertório.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Esta página destaca projetos feitos para negócios reais e sistemas autorais. A ideia é
            mostrar que meu portfólio tem trabalhos aplicáveis, com apresentação clara para futuras
            oportunidades.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16">
        {projects.map((project) => (
          <article
            key={project.id}
            id={project.id}
            className="grid gap-6 rounded-lg border border-zinc-800 bg-zinc-900 p-5 shadow-xl shadow-black/20 lg:grid-cols-[1fr_0.8fr] lg:p-7"
          >
            <div>
              <span className="rounded-full border border-blue-900 bg-blue-950 px-3 py-1 text-xs font-bold text-blue-300">
                {project.eyebrow}
              </span>
              <h2 className="mt-5 text-3xl font-black text-white">{project.title}</h2>
              <p className="mt-4 leading-7 text-zinc-300">{project.description}</p>
              <p className="mt-4 leading-7 text-zinc-300">
                <strong className="text-white">Objetivo:</strong> {project.goal}
              </p>
              <p className="mt-4 leading-7 text-zinc-300">
                <strong className="text-white">O que demonstra:</strong> {project.result}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-zinc-700 bg-zinc-950 px-2 py-1 text-xs font-semibold text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-800"
                >
                  Ver ao vivo
                </a>
              ) : (
                <span className="mt-7 inline-flex rounded-lg border border-zinc-700 px-5 py-3 text-sm font-bold text-zinc-300">
                  Aguardando link público
                </span>
              )}
            </div>

            <div className="grid min-h-56 place-items-center rounded-lg border border-zinc-800 bg-zinc-950 p-6 text-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300">
                  Projeto
                </p>
                <h3 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
                  {project.title}
                </h3>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const projetosEmDestaque = [
  {
    titulo: "Like Acai",
    status: "Projeto real",
    descricao:
      "Site/vitrine para apresentar marca, produtos e presença digital de um negócio real.",
    tecnologias: ["React", "Tailwind CSS", "Responsivo"],
    caminho: "/projetos#like-acai",
  },
  {
    titulo: "Pousada do Parente",
    status: "Projeto real",
    descricao:
      "Site de apresentação para pousada, focado em confiança, localização, contato e conversão.",
    tecnologias: ["React", "UI comercial", "Deploy"],
    caminho: "/projetos#pousada-parente",
  },
  {
    titulo: "Sistema de Estoque",
    status: "Sistema autoral",
    descricao:
      "Sistema próprio para controle de produtos, quantidades e movimentações administrativas.",
    tecnologias: ["Java", "Spring Boot", "React"],
    caminho: "/projetos#estoque",
  },
];

export default function ProjetosDestaque() {
  return (
    <section id="projects" className="bg-zinc-950 py-20 text-white">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end" data-reveal>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
              Projetos reais
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Trabalhos que mostram meu leque na prática
            </h2>
          </div>
          <Link
            to="/projetos"
            className="w-fit rounded-lg bg-white px-5 py-3 text-sm font-bold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-blue-300"
          >
            Ver todos os projetos
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projetosEmDestaque.map((projeto, indice) => (
            <Link
              key={projeto.titulo}
              to={projeto.caminho}
              data-reveal={indice === 1 ? "up" : "zoom"}
              style={{ "--reveal-delay": `${indice * 90}ms` }}
            >
              <article className="flex h-full flex-col rounded-lg border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-blue-500">
                <span className="mb-5 w-fit rounded-full border border-blue-900 bg-blue-950 px-3 py-1 text-xs font-bold text-blue-300">
                  {projeto.status}
                </span>
                <h3 className="text-2xl font-black text-white">{projeto.titulo}</h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-zinc-300">
                  {projeto.descricao}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {projeto.tecnologias.map((tecnologia) => (
                    <span
                      key={tecnologia}
                      className="rounded border border-zinc-700 bg-zinc-950 px-2 py-1 text-xs font-semibold text-zinc-300"
                    >
                      {tecnologia}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm font-black text-blue-300">Ver apresentação</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

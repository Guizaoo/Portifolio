import React from "react";

const projetos = [
  {
    id: "like-acai",
    titulo: "Like Acai",
    etiqueta: "Projeto real",
    descricao:
      "Projeto criado para apresentar uma marca real com uma presença digital mais organizada, visual e direta.",
    objetivo:
      "Mostrar o negócio de forma profissional, com navegação simples e foco em facilitar o contato com clientes.",
    resultado:
      "Demonstra criação de página comercial, cuidado visual, responsividade e organização de conteúdo.",
    tecnologias: ["React", "Tailwind CSS", "JavaScript", "Responsividade"],
    linkAoVivo: "",
  },
  {
    id: "pousada-parente",
    titulo: "Pousada do Parente",
    etiqueta: "Projeto real",
    descricao:
      "Site institucional para apresentar uma pousada real, destacando estrutura, localização, contato e confiança.",
    objetivo:
      "Criar uma página clara para quem procura hospedagem e precisa encontrar informações importantes rapidamente.",
    resultado:
      "Mostra minha capacidade de criar presença online para negócios locais e transformar informação em uma página organizada.",
    tecnologias: ["React", "Tailwind CSS", "UI comercial", "Deploy"],
    linkAoVivo: "",
  },
  {
    id: "estoque",
    titulo: "Sistema de Estoque",
    etiqueta: "Sistema autoral",
    descricao:
      "Sistema próprio para controle de produtos, quantidades e movimentações administrativas.",
    objetivo:
      "Permitir visualizar entradas, saídas, itens críticos e histórico de movimentação em uma interface administrativa.",
    resultado:
      "Demonstra raciocínio de sistema, regras de negócio, dashboard e caminho para integração com back-end.",
    tecnologias: ["Java", "Spring Boot", "API REST", "React"],
    linkAoVivo: "",
  },
  {
    id: "tarefas",
    titulo: "Gerenciador de Tarefas em Java",
    etiqueta: "Projeto de estudo",
    descricao:
      "Projeto desenvolvido na InCodeTechSchool utilizando Java/Spring Boot para back-end e API RESTful.",
    objetivo:
      "Praticar arquitetura de API, organização de endpoints e construção de funcionalidades úteis para rotina.",
    resultado:
      "Complementa a vitrine com aprendizado técnico de back-end e lógica de aplicação.",
    tecnologias: ["Java", "Spring Boot", "API REST"],
    linkAoVivo: "https://www.linkedin.com/feed/update/urn:li:activity:7306401752667348993/",
  },
];

export default function Projetos() {
  return (
    <main className="bg-zinc-950 text-white">
      <section className="border-b border-zinc-800 bg-zinc-950 py-16">
        <div className="mx-auto max-w-6xl px-5" data-reveal>
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
        {projetos.map((projeto, indice) => (
          <article
            key={projeto.id}
            id={projeto.id}
            data-reveal={indice % 2 === 0 ? "left" : "right"}
            style={{ "--reveal-delay": `${Math.min(indice, 3) * 80}ms` }}
            className="grid gap-6 rounded-lg border border-zinc-800 bg-zinc-900 p-5 shadow-xl shadow-black/20 lg:grid-cols-[1fr_0.8fr] lg:p-7"
          >
            <div>
              <span className="rounded-full border border-blue-900 bg-blue-950 px-3 py-1 text-xs font-bold text-blue-300">
                {projeto.etiqueta}
              </span>
              <h2 className="mt-5 text-3xl font-black text-white">{projeto.titulo}</h2>
              <p className="mt-4 leading-7 text-zinc-300">{projeto.descricao}</p>
              <p className="mt-4 leading-7 text-zinc-300">
                <strong className="text-white">Objetivo:</strong> {projeto.objetivo}
              </p>
              <p className="mt-4 leading-7 text-zinc-300">
                <strong className="text-white">O que demonstra:</strong> {projeto.resultado}
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

              {projeto.linkAoVivo ? (
                <a
                  href={projeto.linkAoVivo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-800"
                >
                  Ver ao vivo
                </a>
              ) : (
                <span className="mt-7 inline-flex rounded-lg border border-zinc-700 px-5 py-3 text-sm font-bold text-zinc-300">
                  
                </span>
              )}
            </div>

            <div className="grid min-h-56 place-items-center rounded-lg border border-zinc-800 bg-zinc-950 p-6 text-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300">
                  Projeto
                </p>
                <h3 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
                  {projeto.titulo}
                </h3>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Fotogui from "../assets/Fotogui.jpg";

const itensNavegacao = [
  { texto: "Sobre", ancora: "/#about" },
  { texto: "Habilidades", ancora: "/#skills" },
  { texto: "Projetos", rota: "/projetos" },
];

export default function Cabecalho() {
  const localizacao = useLocation();
  const estaNaPaginaInicial = localizacao.pathname === "/";

  return (
    <header className="relative overflow-hidden border-b border-slate-200 bg-white text-slate-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#2563eb,#14b8a6,#f59e0b)]" />

      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
        <Link to="/" className="text-base font-bold text-white transition hover:text-blue-300">
          Guilherme Dias
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-semibold text-slate-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 sm:flex">
          {itensNavegacao.map((item) =>
            item.rota ? (
              <NavLink
                key={item.texto}
                to={item.rota}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "hover:bg-white hover:text-blue-700 dark:hover:bg-zinc-800 dark:hover:text-blue-300"
                  }`
                }
              >
                {item.texto}
              </NavLink>
            ) : (
              <a
                key={item.texto}
                href={item.ancora}
                className="rounded-full px-4 py-2 transition hover:bg-white hover:text-blue-700 dark:hover:bg-zinc-800 dark:hover:text-blue-300"
              >
                {item.texto}
              </a>
            )
          )}
        </div>
      </nav>

      {estaNaPaginaInicial && (
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-16 pt-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:pb-20 lg:pt-12">
          <div data-reveal="left">
            <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Desenvolvo sites, sistemas e aplicações web pensadas para resolver problemas reais.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-300">
              Sou Guilherme Dias, desenvolvedor Full Stack em evolução, criando interfaces modernas
              com React e sistemas com Java e Spring Boot. Este portfólio reúne projetos reais,
              sistemas próprios e soluções que mostram minha forma de transformar ideias em produto.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projetos"
                className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                Ver projetos
              </Link>
              <a
                href="https://www.linkedin.com/in/guilherme-dias-0ba202230/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-700 hover:text-blue-700 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-blue-300 dark:hover:text-blue-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Guizaoo"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-700 hover:text-blue-700 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-blue-300 dark:hover:text-blue-300"
              >
                GitHub
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {[
                ["2024", "início na programação"],
                ["Full Stack", "Java, Spring e React"],
                ["10+", "projetos reais e autorais"],
              ].map(([valor, descricao], indice) => (
                <div
                  key={valor}
                  data-reveal="flip"
                  style={{ "--reveal-delay": `${220 + indice * 90}ms` }}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <strong className="block text-xl text-blue-700 dark:text-blue-300">{valor}</strong>
                  <span className="mt-1 block text-xs font-medium leading-5 text-slate-500 dark:text-zinc-400">
                    {descricao}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md" data-reveal="right">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-2xl shadow-slate-200/70 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30">
              <img
                src={Fotogui}
                alt="Guilherme Dias"
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
      )}
    </header>
  );
}

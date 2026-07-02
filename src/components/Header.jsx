import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Fotogui from "../assets/Fotogui.jpg";

const navItems = [
  { label: "Sobre", href: "/#about" },
  { label: "Habilidades", href: "/#skills" },
  { label: "Projetos", to: "/projetos" },
];

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldUseDark = savedTheme ? savedTheme === "dark" : true;

    setDarkMode(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className="relative overflow-hidden border-b border-slate-200 bg-white text-slate-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#2563eb,#14b8a6,#f59e0b)]" />

      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
        <Link to="/" className="flex items-center gap-3 font-bold">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-700 text-sm text-white shadow-sm">
            GD
          </span>
          <span>Guilherme Dias</span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-semibold text-slate-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 sm:flex">
          {navItems.map((item) =>
            item.to ? (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 transition ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "hover:bg-white hover:text-blue-700 dark:hover:bg-zinc-800 dark:hover:text-blue-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 transition hover:bg-white hover:text-blue-700 dark:hover:bg-zinc-800 dark:hover:text-blue-300"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        <button
          type="button"
          onClick={() => setDarkMode((current) => !current)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-300 text-sm font-bold transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-zinc-700 dark:hover:border-blue-400 dark:hover:bg-blue-500"
          aria-label="Alternar modo claro e escuro"
        >
          {darkMode ? "CL" : "ES"}
        </button>
      </nav>

      {isHome && (
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-16 pt-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:pb-20 lg:pt-12">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-900/70 dark:bg-blue-950/40 dark:text-blue-300">
              Desenvolvedor Full Stack em evolução desde 2024
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Construo aplicações web claras, rápidas e prontas para virar produto.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-300">
              Sou Guilherme Dias, tenho 22 anos e estudo desenvolvimento Full Stack com foco em Java,
              Spring Boot, React e JavaScript. Este portfólio reúne minha evolução, meus projetos atuais
              e o tipo de solução que quero entregar em trabalhos futuros.
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
                ["2024", "inicio na programação"],
                ["Full Stack", "Java, Spring e React"],
                ["3+", "projetos reais e autorais"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <strong className="block text-xl text-blue-700 dark:text-blue-300">{value}</strong>
                  <span className="mt-1 block text-xs font-medium leading-5 text-slate-500 dark:text-zinc-400">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
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

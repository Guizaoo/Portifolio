import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fotogui from "../assets/Fotogui.jpg";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setDarkMode(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className="border-b border-slate-200 bg-white shadow-sm transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-8 sm:py-10">
        <nav className="mb-8 flex w-full flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-700 dark:text-zinc-200 sm:gap-6">
          <button
            type="button"
            onClick={() => setDarkMode((current) => !current)}
            className="mr-auto grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-lg transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-zinc-700 dark:hover:border-blue-400 dark:hover:bg-blue-500"
            aria-label="Alternar modo claro/escuro"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <a className="rounded-md px-2 py-1 transition hover:text-blue-700 dark:hover:text-blue-300" href="#about">
            Sobre
          </a>
          <a className="rounded-md px-2 py-1 transition hover:text-blue-700 dark:hover:text-blue-300" href="#skills">
            Habilidades
          </a>
          <a className="rounded-md px-2 py-1 transition hover:text-blue-700 dark:hover:text-blue-300" href="#projects">
            Projetos
          </a>
          <Link className="rounded-md px-2 py-1 transition hover:text-blue-700 dark:hover:text-blue-300" to="/videos">
            Projetos em Vídeo
          </Link>
        </nav>

        <div className="flex max-w-3xl flex-col items-center text-center">
          <img
            src={Fotogui}
            alt="Guilherme Dias"
            className="h-32 w-32 rounded-full border-4 border-blue-500 object-cover shadow-[0_0_28px_rgba(37,99,235,0.35)] transition duration-300 hover:scale-105 sm:h-36 sm:w-36"
          />
          <h1 className="mt-6 text-4xl font-bold text-blue-700 dark:text-blue-300 sm:text-5xl">
            Guilherme Dias
          </h1>
          <p className="mt-3 text-base text-slate-600 dark:text-zinc-300 sm:text-lg">
            Desenvolvedor Full Stack | 22 anos | Programando desde 2024
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="https://www.linkedin.com/in/guilherme-dias-0ba202230/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-blue-500 dark:hover:bg-blue-500"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Guizaoo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-blue-500 dark:hover:bg-blue-500"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

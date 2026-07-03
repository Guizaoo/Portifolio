import React from "react";
import { Link } from "react-router-dom";

export default function Rodape() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-sm text-slate-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-slate-950 dark:text-white">Guilherme Dias</p>
          <p className="mt-1">Desenvolvedor Full Stack</p>
        </div>

        <div className="flex flex-wrap gap-4 font-semibold">
          <Link className="hover:text-blue-700 dark:hover:text-blue-300" to="/projetos">
            Projetos
          </Link>
          <a
            className="hover:text-blue-700 dark:hover:text-blue-300"
            href="https://github.com/Guizaoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-blue-700 dark:hover:text-blue-300"
            href="https://www.linkedin.com/in/guilherme-dias-0ba202230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

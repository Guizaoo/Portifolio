import React from "react";
import LogoLoop from "./LogoLoop";

const linksRapidos = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/guilherme-dias-0ba202230/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.9 8.9H3.7V20h3.2V8.9ZM5.3 4C4.2 4 3.5 4.7 3.5 5.7s.7 1.7 1.8 1.7S7.1 6.7 7.1 5.7 6.4 4 5.3 4ZM20.5 13.7c0-3-1.6-5-4.3-5-1.6 0-2.6.9-3 1.7h-.1V8.9H10V20h3.2v-5.5c0-1.5.3-2.9 2.1-2.9 1.7 0 1.8 1.6 1.8 3V20h3.2v-6.3Z" />
      </svg>
    ),
  },
  {
    title: "Contato",
    href: "https://wa.me/5598988831316?text=Ol%C3%A1%2C%20Guilherme!%20Gostaria%20de%20entrar%20em%20contato%20com%20voc%C3%AA.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.8 0 1.4.6 1.4 1.4v3.5c0 .8-.6 1.4-1.4 1.4C10.3 22.3 2 14 2 3.4 2 2.6 2.6 2 3.4 2h3.5c.8 0 1.4.6 1.4 1.4 0 1.4.2 2.7.6 4 .1.4 0 .9-.3 1.2l-2 2.2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "GitHub",
    href: "https://github.com/Guizaoo",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.7.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.8-.1-.3-.5-1.3.1-2.8 0 0 .9-.3 2.8 1.1.8-.2 1.6-.3 2.4-.3.8 0 1.7.1 2.4.3 1.9-1.4 2.8-1.1 2.8-1.1.6 1.5.2 2.5.1 2.8.6.7 1 1.7 1 2.8 0 3.9-2.4 4.8-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5 4-1.4 6.9-5.2 6.9-9.7C22 6.6 17.5 2 12 2Z" />
      </svg>
    ),
  },
];

export default function Rodape() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-sm text-slate-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-slate-950 dark:text-white">Guilherme Dias</p>
          <p className="mt-1">Desenvolvedor Full Stack</p>
        </div>

        <div className="flex w-full justify-center sm:w-auto">
          <LogoLoop
            logos={linksRapidos}
            speed={46}
            logoHeight={22}
            gap={15}
            hoverSpeed={0}
            scaleOnHover
            fadeOut={false}
            fadeOutColor="#09090b"
            ariaLabel="Links rapidos do portfolio"
          />
        </div>
      </div>
    </footer>
  );
}

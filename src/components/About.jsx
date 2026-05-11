import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-16 text-center dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-5xl px-5">
        <h2 className="mx-auto mb-10 w-fit border-b-2 border-blue-700 pb-2 text-3xl font-bold text-blue-700 dark:border-blue-300 dark:text-blue-300">
          Sobre mim
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 dark:text-zinc-300">
          Olá! Sou o{" "}
          <strong className="font-semibold text-blue-700 dark:text-blue-300">Guilherme Dias</strong>, um desenvolvedor Full
          Stack apaixonado por criar soluções eficientes e inovadoras. Minha
          jornada na programação começou em 2024, e desde então tenho focado em
          me aprimorar em tecnologias robustas como{" "}
          <strong className="font-semibold text-blue-700 dark:text-blue-300">
            Java com Spring Boot
          </strong>{" "}
          para o back-end, e{" "}
          <strong className="font-semibold text-blue-700 dark:text-blue-300">
            React
          </strong>{" "}
          e{" "}
          <strong className="font-semibold text-blue-700 dark:text-blue-300">
            JavaScript
          </strong>{" "}
          para o front-end.
          Meu objetivo é transformar ideias complexas em aplicações web
          intuitivas e de alto desempenho.
        </p>
      </div>
    </section>
  );
}

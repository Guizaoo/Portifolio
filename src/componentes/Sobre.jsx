import React from "react";

export default function Sobre() {
  return (
    <section id="about" className="bg-slate-50 py-20 dark:bg-zinc-950">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div data-reveal="left">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
            Sobre mim
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
            Um desenvolvedor em construção, com foco em entregar sistemas úteis.
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-slate-600 dark:text-zinc-300" data-reveal="right">
          <p>
            Olá! Sou o <strong>Guilherme Dias</strong>, desenvolvedor Full Stack apaixonado por
            criar soluções eficientes e modernas. Minha jornada na programação começou em 2024 e,
            desde então, venho evoluindo com projetos práticos e estudo constante.
          </p>
          <p>
            Hoje meu foco está em <strong>Java com Spring Boot</strong> no back-end e{" "}
            <strong>React com JavaScript</strong> no front-end. Busco transformar ideias complexas
            em aplicações web intuitivas, organizadas e com boa experiência para quem usa.
          </p>
          <div className="grid gap-3 pt-3 sm:grid-cols-2">
            {[
              "APIs REST com Java e Spring Boot",
              "Interfaces responsivas com React",
              "Organização de componentes e páginas",
              "Evolução contínua para oportunidades reais",
            ].map((item, indice) => (
              <div
                key={item}
                data-reveal="zoom"
                style={{ "--reveal-delay": `${indice * 80}ms` }}
                className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

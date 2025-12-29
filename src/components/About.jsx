import React from "react";
import "../App.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>Sobre min</h2>
        <p>
          Olá! Sou o <strong>Guilherme Dias</strong>, um desenvolvedor Full
          Stack apaixonado por criar soluções eficientes e inovadoras. Minha
          jornada na programação começou em 2024, e desde então tenho focado em
          me aprimorar em tecnologias robustas como{" "}
          <strong>Java com Spring Boot</strong> para o back-end, e{" "}
          <strong>React</strong> e <strong>JavaScript</strong> para o front-end.
          Meu objetivo é transformar ideias complexas em aplicações web
          intuitivas e de alto desempenho.
        </p>
      </div>
    </section>
  );
}

import React from "react";
import "../App.css";

export default function Projects() {
  const projects = [
    {
      title: "Gerenciador de Tarefas em Java",
      description:
        "Projeto completo desenvolvido na InCodeTechSchool utilizando a stack Java/Spring Boot para o back-end e API RESTful.",
      image: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      tags: ["Java", "Spring Boot", "API REST"],
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7306401752667348993/",
    },
    {
      title: "Interface de E-commerce com React",
      description:
        "Desenvolvimento de um layout moderno e responsivo, focando em componentes reutilizáveis e gerenciamento de estado básico.",
      image: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
      tags: ["React", "CSS3", "Componentes"],
      link: "#",
    },
    {
      title: "Calculadora Interativa em JavaScript",
      description:
        "Uma calculadora funcional que demonstra proficiência em manipulação do DOM e lógica de programação pura com JavaScript.",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      tags: ["JavaScript", "HTML5", "DOM"],
      link: "#",
    },
  ];

 return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projetos Recentes</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <div className="project-link">
                  <i className="fab fa-linkedin"></i> Ver Projeto
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
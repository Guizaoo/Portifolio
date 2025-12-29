import React, { useEffect } from "react";
import "../App.css";

export default function Skills() {
  useEffect(() => {
    const skillCards = document.querySelectorAll(".skill-card");

    const handleScroll = () => {
      const skillsSection = document.querySelector(".skills-section");
      if (!skillsSection) return;

      const sectionPosition = skillsSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
        skillCards.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, index * 100);
        });
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    skillCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "all 0.5s ease";
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Minhas Habilidades</h2>
        <div className="skills-grid">
          <div className="skill-card" data-tooltip="React">
            <i className="fab fa-react"></i>
            <span>React</span>
          </div>
          <div className="skill-card" data-tooltip="Java">
            <i className="fab fa-java"></i>
            <span>Java</span>
          </div>
          <div className="skill-card" data-tooltip="Spring Boot">
            <i className="fas fa-leaf"></i>
            <span>Tailwind</span>
          </div>
          <div className="skill-card" data-tooltip="JavaScript">
            <i className="fab fa-js"></i>
            <span>JavaScript</span>
          </div>
          <div className="skill-card" data-tooltip="CSS3">
            <i className="fab fa-css3-alt"></i>
            <span>CSS3</span>
          </div>
          <div className="skill-card" data-tooltip="HTML5">
            <i className="fab fa-html5"></i>
            <span>HTML5</span>
          </div>
        </div>
      </div>
    </section>
  );
}

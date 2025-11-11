import React, { useState, useEffect } from "react";
import "../App.css";
import Fotogui from "../assets/Fotogui.jpg";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header>
      <div className="container header-content">
        <nav className="main-nav">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mode-toggle-button"
            aria-label="Alternar modo claro/escuro"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <a href="#about">Sobre</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Projetos</a>
        </nav>

        <div className="profile">
          <img src={Fotogui} alt="Guilherme Dias" className="profile-img" />
          <h1>Guilherme Dias</h1>
          <p>Desenvolvedor Full Stack | 22 anos | Programando desde 2022</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/guilherme-dias-0ba202230/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Guizaoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

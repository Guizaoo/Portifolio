import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ProjectsPage from "./Pages/ProjectsPage";

function Home() {
  return (
    <main>
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

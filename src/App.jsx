import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ProjetosVideos from "./Pages/ProjetosVideos";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <Skills />
              <Projects />
            </>
          }
        />

        <Route path="/videos" element={<ProjetosVideos />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

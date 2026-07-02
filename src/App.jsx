import { Routes, Route } from "react-router-dom";

import Cabecalho from "./componentes/Cabecalho";
import Sobre from "./componentes/Sobre";
import ProjetosDestaque from "./componentes/ProjetosDestaque";
import Habilidades from "./componentes/Habilidades";
import Rodape from "./componentes/Rodape";
import Projetos from "./paginas/Projetos";
import AnimacoesRolagem from "./componentes/AnimacoesRolagem";

function Inicio() {
  return (
    <main>
      <Sobre />
      <Habilidades />
      <ProjetosDestaque />
    </main>
  );
}

function App() {
  return (
    <>
      <AnimacoesRolagem />
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
      <Rodape />
    </>
  );
}

export default App;

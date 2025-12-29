import React from "react";

export default function ProjetosVideos() {
  return (
    <div>
      <button 
      class="BTN-Videos"
      onClick={() => window.history.back()} >
        voltar
      </button>
      <h1>Projetos em Vídeo</h1>
      <p>Olá, essa é a página de vídeos</p>
    </div>
  );
}

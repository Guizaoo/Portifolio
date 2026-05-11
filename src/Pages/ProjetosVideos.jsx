import React from "react";

export default function ProjetosVideos() {
  return (
    <main className="min-h-[55vh] bg-slate-50 px-5 py-16 text-slate-900 dark:bg-zinc-950 dark:text-zinc-100">
      <button
        type="button"
        className="fixed left-5 top-5 rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-700"
        onClick={() => window.history.back()}
      >
        Voltar
      </button>
      <div className="mx-auto max-w-4xl pt-10 text-center">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-300">
          Projetos em Vídeo
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-zinc-300">
          Olá, essa é a página de vídeos.
        </p>
      </div>
    </main>
  );
}

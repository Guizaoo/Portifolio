import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AnimacoesRolagem() {
  const localizacao = useLocation();

  useEffect(() => {
    const elementos = document.querySelectorAll("[data-reveal]");
    const prefereMenosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefereMenosMovimento) {
      elementos.forEach((elemento) => elemento.classList.add("is-visible"));
      return undefined;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("is-visible");
            observador.unobserve(entrada.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 }
    );

    elementos.forEach((elemento) => observador.observe(elemento));

    return () => observador.disconnect();
  }, [localizacao.pathname]);

  return null;
}

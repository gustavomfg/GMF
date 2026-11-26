"use client";

import { useState } from "react";
import Image from "next/image";

interface NocturneStudioEvidenceItem {
  id: "dark" | "light";
  label: string;
  title: string;
  description: string;
  src: string;
  alt: string;
}

const EVIDENCE_ITEMS: readonly NocturneStudioEvidenceItem[] = [
  {
    id: "dark",
    label: "Tema escuro",
    title: "Revisar: perguntas sobre o projeto",
    description: "O chat responde com o contexto do projeto e mostra a resposta em Markdown, sem HTML, enquanto ela chega. Salvar guarda a resposta em uma conversa.",
    src: "/noct/review-dark.webp",
    alt: "NOCT no modo Revisar, tema escuro: a lista de projetos, uma pergunta sobre o projeto e a resposta em Markdown com um trecho de código em Rust",
  },
  {
    id: "light",
    label: "Tema claro",
    title: "Camada de vidro e dois temas",
    description: "A mesma tela no tema claro. O modelo escolhido e o estado da chave no cofre ficam visíveis na barra lateral, sem expor a chave.",
    src: "/noct/review-light.webp",
    alt: "NOCT no modo Revisar, tema claro, com a camada de vidro, a mesma pergunta e a resposta em Markdown",
  },
] as const;

const WIDTH = 1440;
const HEIGHT = 900;

export function NocturneStudioEvidence() {
  const [activeIndex, setActiveIndex] = useState(0);
  const item = EVIDENCE_ITEMS[activeIndex];

  return (
    <section className="studio-gallery" aria-label="Evidências visuais do NOCT">
      <figure className="studio-gallery-main">
        <div className="studio-gallery-image">
          <Image src={item.src} alt={item.alt} width={WIDTH} height={HEIGHT}
            sizes="(max-width: 700px) calc(100vw - 40px), 1120px" loading="lazy" draggable={false} />
        </div>
        <figcaption aria-live="polite" aria-atomic="true">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </figcaption>
      </figure>
      <div className="studio-gallery-options" role="group" aria-label="Escolha uma captura">
        {EVIDENCE_ITEMS.map((evidence, index) => (
          <button type="button" key={evidence.id} aria-pressed={activeIndex === index}
            onClick={() => setActiveIndex(index)} aria-label={`Mostrar ${evidence.label}`}>
            <span className="studio-gallery-preview">
              <Image src={evidence.src} alt="" width={WIDTH} height={HEIGHT}
                sizes="(max-width: 700px) 80px, 240px" loading="lazy" draggable={false} />
            </span>
            <span>{evidence.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

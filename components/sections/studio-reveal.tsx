"use client";

import Image from "next/image";
import ScrollExpand from "@/components/react-bits/ScrollExpand";
import { CINEMATIC_QUERY, useMediaQuery } from "@/hooks/use-media-query";

const WORKSPACE = {
  src: "/noct/review-dark.webp",
  alt: "NOCT no modo Revisar, tema escuro: a lista de projetos à esquerda, uma pergunta sobre o projeto e a resposta em Markdown com um trecho de código em Rust",
  width: 1440,
  height: 900,
};

/** Opens the flagship chapter: the real product grows to full bleed as the visitor scrolls. */
export function StudioReveal({ status }: { status: string }) {
  const cinematic = useMediaQuery(CINEMATIC_QUERY);

  if (!cinematic) {
    return (
      <figure className="studio-reveal-static">
        <Image src={WORKSPACE.src} alt={WORKSPACE.alt} width={WORKSPACE.width} height={WORKSPACE.height}
          sizes="(max-width: 700px) calc(100vw - 32px), min(1240px, calc(100vw - 56px))" />
      </figure>
    );
  }

  return (
    <ScrollExpand
      className="studio-reveal"
      src={WORKSPACE.src}
      alt={WORKSPACE.alt}
      scrollHint="Role para abrir o workspace"
      useWindowScroll
      startWidth={64}
      startHeight={66}
      startRadius={18}
      endRadius={0}
      mediaZoom={1.06}
      scrollDistance={1}
      holdDistance={0.25}
      overlayScrim={0.35}
    >
      <div className="studio-reveal-caption">
        <span>Projeto principal · {status}</span>
        <p>A interface em Leptos com dados de demonstração: uma pergunta sobre o projeto em Revisar e a resposta desenhada em Markdown.</p>
      </div>
    </ScrollExpand>
  );
}

"use client";

import Image from "next/image";
import ScrollExpand from "@/components/react-bits/ScrollExpand";
import { CINEMATIC_QUERY, useMediaQuery } from "@/hooks/use-media-query";

const WORKSPACE = {
  src: "/nocturne-studio/workspace-overview.png",
  alt: "Workspace do NOCT com navegação, conversa de revisão, seletor de modelo e painel do agente",
  width: 1440,
  height: 900,
};

/** Opens the flagship chapter: the real product grows to full bleed as the visitor scrolls. */
export function StudioReveal({ version }: { version: string }) {
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
        <span>Projeto principal · {version}</span>
        <p>O workspace real, com dados de demonstração: conversa, modo de revisão e o painel do agente lado a lado.</p>
      </div>
    </ScrollExpand>
  );
}

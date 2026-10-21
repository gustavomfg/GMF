"use client";

import ScrollReveal from "@/components/react-bits/ScrollReveal";

export function ManifestoSection() {
  return (
    <section className="manifesto section-shell" aria-labelledby="manifesto-label">
      <p className="manifesto-label" id="manifesto-label">Como eu trabalho</p>
      <ScrollReveal
        containerClassName="manifesto-text"
        baseOpacity={0.12}
        blurStrength={6}
        baseRotation={0}
        stagger={0.035}
        highlightColor="#c6b3ff"
      >
        Aprendo construindo software de verdade: um workspace de engenharia com IA, um monitor de sistema em Rust, a tela de login que uso todos os dias e um laboratório de shaders. Cada projeto começa com uma pergunta e avança com decisões documentadas.
      </ScrollReveal>
    </section>
  );
}

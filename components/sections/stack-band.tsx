"use client";

import LogoLoop, { type LogoItem } from "@/components/react-bits/LogoLoop";
import { STACK } from "@/data/portfolio";

const STACK_ITEMS: LogoItem[] = STACK.map((name) => ({
  node: <span className="stack-band-item">{name}</span>,
  title: name,
}));

export function StackBand() {
  return (
    <div className="stack-band">
      <LogoLoop
        logos={STACK_ITEMS}
        speed={42}
        gap={56}
        logoHeight={22}
        pauseOnHover
        fadeOut
        fadeOutColor="#08090f"
        ariaLabel="Tecnologias que uso nos projetos"
      />
    </div>
  );
}

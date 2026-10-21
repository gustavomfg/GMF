"use client";

import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/animations/reveal";
import Galaxy from "@/components/react-bits/Galaxy";
import RotatingText from "@/components/react-bits/RotatingText";
import VariableProximity from "@/components/react-bits/VariableProximity";
import { HeroLanyardShell } from "@/components/sections/hero-lanyard-shell";
import { PROJECT_CHAPTERS } from "@/data/portfolio";

const CRAFT = ["aplicações web", "apps desktop", "ferramentas para Linux", "experiências em WebGL"];
const STAR_COLORS = ["#c6b3ff", "#9167ff", "#5d8aff", "#f4f2f8"];

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const showSky = useDeferredSky();

  return (
    <section className="hero-x" id="inicio" ref={heroRef}>
      <div className="hero-x-sky" aria-hidden="true">
        {showSky ? (
          <Galaxy
            starColors={STAR_COLORS}
            density={0.85}
            glowIntensity={0.22}
            twinkleIntensity={0.45}
            starSpeed={0.28}
            speed={0.55}
            rotationSpeed={0.035}
            repulsionStrength={1.4}
            flareIntensity={0.6}
            layers={3}
            clickWarp={false}
            dpr={1}
            transparent={false}
            backgroundColor="#08090f"
          />
        ) : null}
      </div>

      <div className="hero-x-inner section-shell">
        <div className="hero-x-copy">
          <p className="hero-x-status">
            <span className="status-dot" aria-hidden="true" /> Disponível para estágio e vagas júnior
          </p>
          <h1 className="hero-x-name">
            <VariableProximity
              label="Gustavo Maquias"
              containerRef={heroRef}
              fromFontVariationSettings="'wght' 480"
              toFontVariationSettings="'wght' 800"
              radius={170}
              falloff="gaussian"
            />
          </h1>
          <p className="hero-x-role">
            <span>Desenvolvedor de software. Construo</span>{" "}
            <RotatingText
              texts={CRAFT}
              rotationInterval={2600}
              staggerDuration={0.018}
              mainClassName="hero-x-rotator"
              effect="slide"
            />
          </p>
          <p className="hero-x-intro">
            Estudante de ADS na UniFil. Aprendo construindo projetos reais, com foco em arquitetura, backend e interfaces que explicam o que fazem.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Ver projetos <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href="#contato">
              Contato <Mail size={17} aria-hidden="true" />
            </a>
          </div>
          <nav className="hero-links" aria-label="Links profissionais">
            <a href="https://github.com/gustavomfg" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/gustavomfg" target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href="/curriculo-gustavo-maquias.pdf" target="_blank" rel="noreferrer" download="curriculo-gustavo-maquias.pdf">
              Currículo <small>PDF</small> <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </nav>
        </div>

        <Reveal className="hero-lanyard-entry" delay={0.08} distance={12}>
          <HeroLanyardShell />
        </Reveal>
      </div>

      <nav className="hero-x-index section-shell" aria-label="Índice de projetos">
        <span className="hero-x-index-label">Índice</span>
        <ol>
          {PROJECT_CHAPTERS.map((chapter) => (
            <li key={chapter.anchor}>
              <a href={`#${chapter.anchor}`}>
                <span aria-hidden="true">{chapter.id}</span> {chapter.name}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}

/** Mounts the starfield once the first viewport (and the 3D badge) has had the GPU to itself. */
function useDeferredSky() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return ready;
}

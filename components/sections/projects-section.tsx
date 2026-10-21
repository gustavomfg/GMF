import { ArrowUpRight, Code2 } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SysmonDepthShowcase } from "@/components/sections/depth-carousel";
import { NocturneStudioEvidence } from "@/components/sections/nocturne-studio-evidence";
import { ProjectExplorer } from "@/components/sections/project-explorer";
import { ProjectStack } from "@/components/sections/project-stack";
import { StudioReveal } from "@/components/sections/studio-reveal";
import { NOCTURNE_STUDIO_EVIDENCE } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

interface ProjectsSectionProps {
  projects: readonly Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const studio = projects[0];
  const stackEntries = projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => project.key !== "studio" && project.key !== "portfolio");
  const studioSource = studio?.links?.find((link) => link.type === "source");

  if (!studio) return null;

  return (
    <ProjectExplorer projects={projects}>
      <section className="projects-section" id="projetos" aria-labelledby="projetos-title">
        <header className="chapter-heading section-shell">
          <p className="chapter-kicker">Projetos</p>
          <h2 id="projetos-title">Software que eu construo, uso e documento.</h2>
          <p>
            Do workspace de engenharia ao gerenciador de login do meu sistema: cada capítulo mostra o produto real, as decisões e o estado atual.
          </p>
        </header>

        <StudioReveal version={NOCTURNE_STUDIO_EVIDENCE.version} />

        <div className="section-shell">
          <Reveal className="studio-feature" distance={18}>
            <div className="studio-feature-heading">
              <span>01 · Projeto principal</span>
              <span>{NOCTURNE_STUDIO_EVIDENCE.version}</span>
            </div>
            <div className="studio-feature-intro" id="projeto-studio">
              <div>
                <p className="project-role">{studio.role}</p>
                <h3>{studio.name}</h3>
                <p className="studio-description">{studio.description}</p>
              </div>
              <div className="studio-feature-actions">
                <p className="studio-feature-stack">{studio.tags.join(" · ")}</p>
                {studioSource ? (
                  <a className="studio-source-link" href={studioSource.href} target="_blank" rel="noreferrer">
                    <Code2 size={15} aria-hidden="true" /> Ver código-fonte
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="studio-gallery-wrap">
              <NocturneStudioEvidence />
            </div>

            <details className="studio-evidence-dossier">
              <summary>Explore a engenharia do projeto <span aria-hidden="true">+</span></summary>
              <div className="studio-evidence-groups">
                <article className="studio-evidence-group">
                  <p className="studio-evidence-group-label">01 / Arquitetura</p>
                  <h4>Workspace conectado por fronteiras explícitas</h4>
                  <p>
                    Electron, React, TypeScript e SQLite com IPC tipado. O renderer permanece isolado por contextIsolation, nodeIntegration desabilitado e uma fronteira preload/contextBridge; o Provider Abstraction Layer separa o workspace dos provedores
                  </p>
                </article>
                <article className="studio-evidence-group">
                  <p className="studio-evidence-group-label">02 / Review Mode</p>
                  <h4>Recomendações que continuam sob revisão humana.</h4>
                  <p>
                    O Review Mode analisa arquitetura, segurança, testes, performance, documentação e manutenibilidade. Cada recomendação pode registrar evidência, confiança, origem, responsável, severidade, justificativa e histórico de decisão antes de qualquer alteração
                  </p>
                </article>
                <article className="studio-evidence-group">
                  <p className="studio-evidence-group-label">03 / Estado atual</p>
                  <h4>Base implementada, com frentes em expansão</h4>
                  <p>
                    Workspace Memory, Second Brain, Awareness explicável, Secure Provider System, Credential Vault, Typed IPC, Packaging Pipeline e CI Validation estão implementados. {NOCTURNE_STUDIO_EVIDENCE.stateSummary}
                  </p>
                  <p className="studio-evidence-providers">
                    Providers documentados: {NOCTURNE_STUDIO_EVIDENCE.providers.join(", ")}.
                  </p>
                </article>
              </div>
            </details>
          </Reveal>

          <section className="priority-secondary" id="sysmon" aria-labelledby="sysmon-title">
            <SysmonDepthShowcase />
          </section>
        </div>

        <section className="project-deck-section" aria-labelledby="other-projects-title">
          <div className="index-heading section-shell">
            <h3 id="other-projects-title">Outros projetos</h3>
            <p>Experimentos visuais, ferramentas para Linux e o que ainda está nascendo</p>
          </div>
          <ProjectStack entries={stackEntries} />
        </section>
      </section>
    </ProjectExplorer>
  );
}

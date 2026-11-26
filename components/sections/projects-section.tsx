import { ArrowUpRight, Code2 } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SysmonDepthShowcase } from "@/components/sections/depth-carousel";
import { NocturneStudioEvidence } from "@/components/sections/nocturne-studio-evidence";
import { ProjectExplorer } from "@/components/sections/project-explorer";
import { ProjectStack } from "@/components/sections/project-stack";
import { StudioReveal } from "@/components/sections/studio-reveal";
import type { Project } from "@/types/portfolio";

interface ProjectsSectionProps {
  projects: readonly Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const studio = projects[0];
  const stackEntries = projects.slice(1).map((project, index) => ({ project, index: index + 1 }));
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

        <StudioReveal status={studio.status ?? studio.role} />

        <div className="section-shell">
          <Reveal className="studio-feature" distance={18}>
            <div className="studio-feature-heading">
              <span>01 · Projeto principal</span>
              <span>{studio.status ?? studio.role}</span>
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
                  <h4>Seis crates com fronteiras explícitas</h4>
                  <p>
                    O shell em Tauri 2 registra 41 comandos, liberados só para a janela principal. Contratos e limites ficam em noct-core, a persistência em noct-db, as credenciais em noct-secrets, o rollback em um worker separado e a interface em Leptos, compilada para WebAssembly.
                  </p>
                </article>
                <article className="studio-evidence-group">
                  <p className="studio-evidence-group-label">02 / Segurança</p>
                  <h4>Nada muda no projeto sem aprovação.</h4>
                  <p>
                    A IA lê só os arquivos que as regras de contexto permitem. Uma resposta pode propor alterações, que esperam em Construir ou Documentar; as regras de caminho recusam Git, CI, arquivos que rodam sozinhos e caminhos codificados, e cada aprovação pode ser desfeita.
                  </p>
                </article>
                <article className="studio-evidence-group">
                  <p className="studio-evidence-group-label">03 / Estado atual</p>
                  <h4>Migração em fases, registrada em ADR</h4>
                  <p>
                    Fundação, persistência e o chat com o OpenRouter estão prontos; outros provedores e o loop de ferramentas ainda estão sendo portados. A versão anterior, em Electron e TypeScript, chegou à v1.0.5 e segue preservada em uma tag do repositório.
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
            <p>Uma ferramenta de hardware para Linux, uma aplicação full stack em Java, uma simulação física e a tela de login do meu sistema</p>
          </div>
          <ProjectStack entries={stackEntries} />
        </section>
      </section>
    </ProjectExplorer>
  );
}

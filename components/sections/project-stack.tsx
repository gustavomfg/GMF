"use client";

import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/components/react-bits/ScrollStack";
import { ProjectEvidence } from "@/components/sections/project-evidence";
import { ProjectTrigger } from "@/components/sections/project-explorer";
import { CINEMATIC_QUERY, useMediaQuery } from "@/hooks/use-media-query";
import type { Project } from "@/types/portfolio";

interface ProjectStackEntry {
  project: Project;
  /** Position in the full project list, used by the dialog explorer. */
  index: number;
}

interface ProjectStackProps {
  entries: readonly ProjectStackEntry[];
}

/** Secondary projects as a deck that pins and stacks on desktop, and a plain list everywhere else. */
export function ProjectStack({ entries }: ProjectStackProps) {
  const cinematic = useMediaQuery(CINEMATIC_QUERY);
  if (!cinematic) {
    return (
      <div className="project-sheets">
        {entries.map(({ project, index }) => (
          <ProjectSheet key={project.key} project={project} index={index} />
        ))}
      </div>
    );
  }

  return (
    <ScrollStack
      className="project-deck"
      useWindowScroll
      smoothScroll={false}
      itemDistance={120}
      itemStackDistance={22}
      stackPosition="13%"
      itemScale={0.035}
      baseScale={0.88}
      dimAmount={0.28}
      holdDistance={120}
    >
      {entries.map(({ project, index }) => (
        <ScrollStackItem key={project.key} itemClassName="project-sheet-slot">
          <ProjectSheet project={project} index={index} />
        </ScrollStackItem>
      ))}
    </ScrollStack>
  );
}

function ProjectSheet({ project, index }: { project: Project; index: number }) {
  const demo = project.links?.find((link) => link.type === "demo");
  const source = project.links?.find((link) => link.type === "source");

  return (
    <article className={`project-sheet project-${project.accent}`} id={`projeto-${project.key}`} aria-labelledby={`projeto-${project.key}-title`}>
      <div className="project-sheet-media">
        <ProjectEvidence project={project} sizes="(max-width: 1000px) calc(100vw - 40px), 640px" />
      </div>
      <div className="project-sheet-body">
        <div className="project-sheet-meta">
          <span className="project-sheet-index">{project.id}</span>
          {project.status ? <span className="project-sheet-status">{project.status}</span> : null}
        </div>
        <p className="project-role">{project.role}</p>
        <h4 id={`projeto-${project.key}-title`}>{project.name}</h4>
        <p className="project-sheet-description">{project.description}</p>
        {project.key === "batpet" ? (
          <p className="project-index-live">
            <span aria-hidden="true" /> Versão web pendurada no topo desta página, reagindo ao seu cursor.
          </p>
        ) : null}
        <ul className="project-index-tags" aria-label={`Tecnologias de ${project.name}`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="project-sheet-actions">
          <ProjectTrigger index={index} name={project.name}>
            Ver estudo <ArrowUpRight size={15} aria-hidden="true" />
          </ProjectTrigger>
          {demo ? (
            <a className="project-sheet-link" href={demo.href} target="_blank" rel="noreferrer">
              <ExternalLink size={14} aria-hidden="true" /> {demo.label}
            </a>
          ) : null}
          {source ? (
            <a className="project-sheet-link" href={source.href} target="_blank" rel="noreferrer">
              <Code2 size={14} aria-hidden="true" /> Código
            </a>
          ) : (
            <span className="project-sheet-note">Código publicado quando estiver pronto</span>
          )}
        </div>
      </div>
    </article>
  );
}

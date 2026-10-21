import Image from "next/image";
import type { Project } from "@/types/portfolio";

interface ProjectEvidenceProps {
  project: Project;
  sizes?: string;
}

export function ProjectEvidence({
  project,
  sizes = "(max-width: 700px) 100vw, 60vw",
}: ProjectEvidenceProps) {
  if (project.image) {
    return (
      <div className={`project-evidence project-evidence--${project.key}`}>
        <Image
          src={project.image}
          alt={project.imageAlt ?? `Registro visual de ${project.name}`}
          fill
          sizes={sizes}
          className="project-evidence-image"
        />
        {project.key === "ovra" ? (
          <span className="project-evidence-caption">12 ESPÉCIMES / TEMPO REAL</span>
        ) : null}
      </div>
    );
  }

  return (
    <div className={`project-evidence project-evidence--${project.key} project-evidence--fallback`} aria-hidden="true">
      <span>{project.id}</span>
      <strong>{project.name}</strong>
      <small>{project.role}</small>
    </div>
  );
}

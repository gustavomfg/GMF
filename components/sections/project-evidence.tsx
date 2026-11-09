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
      </div>
    );
  }

  if (project.key === "gesture") {
    return (
      <div className="project-evidence project-evidence--gesture">
        <HandLandmarks />
        <p className="project-evidence-caption">Diagrama dos 21 pontos que o MediaPipe rastreia em cada mão</p>
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

/** Hand landmark positions in MediaPipe order: wrist, then four joints per finger from thumb to pinky. */
const LANDMARKS: readonly (readonly [number, number])[] = [
  [300, 348],
  [252, 322], [218, 288], [196, 252], [180, 222],
  [268, 232], [259, 176], [254, 140], [250, 108],
  [300, 222], [300, 160], [300, 122], [300, 88],
  [330, 232], [338, 178], [343, 144], [346, 114],
  [355, 252], [371, 212], [380, 184], [387, 160],
];

const BONES: readonly (readonly [number, number])[] = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [9, 10], [10, 11], [11, 12],
  [13, 14], [14, 15], [15, 16],
  [0, 17], [17, 18], [18, 19], [19, 20],
  [5, 9], [9, 13], [13, 17],
];

const INDEX_TIP = LANDMARKS[8];
const THUMB_TIP = LANDMARKS[4];

function HandLandmarks() {
  return (
    <svg className="hand-landmarks" viewBox="0 0 600 420" role="img" aria-label="Mão aberta com os 21 pontos de rastreio ligados por linhas; o indicador controla o cursor e a pinça com o polegar faz o clique.">
      <g className="hand-landmarks-bones">
        {BONES.map(([from, to]) => (
          <line key={`${from}-${to}`} x1={LANDMARKS[from][0]} y1={LANDMARKS[from][1]} x2={LANDMARKS[to][0]} y2={LANDMARKS[to][1]} />
        ))}
      </g>
      <line className="hand-landmarks-pinch" x1={THUMB_TIP[0]} y1={THUMB_TIP[1]} x2={INDEX_TIP[0]} y2={INDEX_TIP[1]} />
      <g className="hand-landmarks-points">
        {LANDMARKS.map(([x, y], index) => (
          <circle key={index} cx={x} cy={y} r={index === 8 || index === 4 ? 6 : 4} />
        ))}
      </g>
      <circle className="hand-landmarks-cursor" cx={INDEX_TIP[0]} cy={INDEX_TIP[1]} r="17" />
      <g className="hand-landmarks-notes">
        <path d={`M${INDEX_TIP[0] - 20} ${INDEX_TIP[1] - 8} L150 70 H70`} />
        <text x="70" y="60">indicador: cursor</text>
        <path d="M212 232 L150 200 H70" />
        <text x="70" y="190">pinça: clique</text>
        <path d="M398 160 L450 120 H530" />
        <text x="530" y="110" textAnchor="end">mão aberta: deslize</text>
        <path d="M310 352 L450 330 H530" />
        <text x="530" y="320" textAnchor="end">punho: pausa</text>
      </g>
    </svg>
  );
}

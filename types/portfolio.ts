export type ProjectAccent = "violet" | "blue" | "cyan";

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface Project {
  id: string;
  key: string;
  image?: string | null;
  imageAlt?: string;
  name: string;
  role: string;
  status?: string;
  description: string;
  tags: readonly string[];
  problem: string;
  highlights: readonly string[];
  links?: readonly ProjectLink[];
  accent: ProjectAccent;
}

export interface ProjectLink {
  label: string;
  href: `https://${string}`;
  type: "source" | "demo";
}

export interface TechnicalProfileItem {
  label: string;
  value: string;
}

import { describe, expect, it } from "vitest";
import { NAV_ITEMS, PROJECT_CHAPTERS, PROJECTS } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

const projects: readonly Project[] = PROJECTS;

describe("portfolio data", () => {
  it("keeps project identifiers unique and complete", () => {
    expect(new Set(PROJECTS.map((project) => project.id)).size).toBe(PROJECTS.length);
    expect(new Set(PROJECTS.map((project) => project.key)).size).toBe(PROJECTS.length);

    for (const project of PROJECTS) {
      expect(project.name.trim()).not.toBe("");
      expect(project.description.trim()).not.toBe("");
      expect(project.tags.length).toBeGreaterThan(0);
      expect(project.highlights.length).toBeGreaterThan(0);

      if ("links" in project) {
        for (const link of project.links) {
          expect(link.href).toMatch(/^https:\/\//);
          expect(link.label.trim()).not.toBe("");
        }
      }
    }
  });

  it("publishes the verified source link for this portfolio", () => {
    const portfolio = PROJECTS.find((project) => project.key === "portfolio");

    expect(portfolio?.links).toContainEqual({
      label: "Ver código-fonte",
      href: "https://github.com/gustavomfg/GMF",
      type: "source",
    });
  });

  it("publishes the source links documented for the Nocturne projects", () => {
    const expectedRepositories = {
      studio: "https://github.com/gustavomfg/NOCT",
      ovra: "https://github.com/gustavomfg/ovra",
      greeter: "https://github.com/gustavomfg/UMBRA",
    } as const;

    for (const [projectKey, repository] of Object.entries(expectedRepositories)) {
      const project = projects.find((item) => item.key === projectKey);

      expect(project?.links).toContainEqual({
        label: "Ver código-fonte",
        href: repository,
        type: "source",
      });
    }
  });

  it("keeps the early-stage Atlas prototype without public links", () => {
    const atlas = projects.find((project) => project.key === "atlas");

    expect(atlas).toBeDefined();
    expect(atlas?.links).toBeUndefined();
  });

  it("indexes every displayed project chapter once, in reading order", () => {
    const anchors = PROJECT_CHAPTERS.map((chapter) => chapter.anchor);

    expect(new Set(anchors).size).toBe(anchors.length);
    expect(PROJECT_CHAPTERS.map((chapter) => chapter.id)).toEqual(
      [...PROJECT_CHAPTERS.map((chapter) => chapter.id)].sort(),
    );
  });

  it("keeps navigation targets unique", () => {
    expect(new Set(NAV_ITEMS.map((item) => item.href)).size).toBe(NAV_ITEMS.length);
  });
});

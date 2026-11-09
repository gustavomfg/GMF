import { existsSync } from "node:fs";
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

  it("publishes the source links of the public repositories", () => {
    const expectedRepositories = {
      studio: "https://github.com/gustavomfg/NOCT",
      frx: "https://github.com/gustavomfg/FRX",
      greeter: "https://github.com/gustavomfg/UMBRA",
      batpet: "https://github.com/gustavomfg/BATTY",
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

  it("keeps projects with private or unpublished repositories without links", () => {
    for (const projectKey of ["atlas", "saturn", "gesture"]) {
      const project = projects.find((item) => item.key === projectKey);

      expect(project).toBeDefined();
      expect(project?.links).toBeUndefined();
    }
  });

  it("points every project image at a file inside public", () => {
    for (const project of projects) {
      if (project.image) expect(existsSync(`public${project.image}`)).toBe(true);
    }
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

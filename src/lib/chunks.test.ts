import { describe, expect, it } from "vitest";

import bot from "../../public/api/bot.json";
import questions from "../../public/api/questions.json";
import { flattenSiteContentIntoChunks } from "./chunks";

describe("site data flattener", () => {
  const flat = flattenSiteContentIntoChunks(bot);
  const textOf = (id: string) => flat.find((c) => c.id === id)?.text;

  it("flattens properly the home section", () => {
    const { hero, info } = bot.home;
    expect(flat.slice(0, 5)).toEqual([
      { id: "home.hero.role", text: hero.role },
      { id: "home.hero.summary", text: hero.summary },
      { id: "home.hero.aka", text: hero.aka },
      { id: "home.info.title", text: info.title },
      { id: "home.info.summary", text: info.summary },
    ]);
  });

  it("flattens properly the experiences-projects", () => {
    for (const [project, fields] of Object.entries(bot.experiencesProjects)) {
      for (const field of ["overview", "roleSummary", "keywords"] as const) {
        expect(textOf(`experiencesProjects.${project}.${field}`)).toBe(
          fields[field],
        );
      }
    }
  });

  it("flattens properly the skills arrays in the experiences-projects", () => {
    for (const [project, fields] of Object.entries(bot.experiencesProjects)) {
      const prefix = `experiencesProjects.${project}.skills.`;
      const skills = flat.filter((c) => c.id.startsWith(prefix));
      expect(skills.map((c) => c.text)).toEqual(fields.skills);
      expect(skills.map((c) => c.id)).toEqual(
        fields.skills.map((_, i) => `${prefix}${i}`),
      );
    }
  });

  it("gives every chunk a unique id", () => {
    const ids = flat.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("has a chunk for every expected id in questions.json", () => {
    const ids = new Set(flat.map((c) => c.id));
    const missing = questions.flatMap((q) => q.c.filter((id) => !ids.has(id)));
    expect(missing).toEqual([]);
  });
});

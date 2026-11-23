import type { BotContent } from "./schemas";

export type Chunk = { id: string; text: string };

const flattenSkills = (path: string, skills: string[]) => {
  const flatSkills: Chunk[] = [];
  skills.map((skill, i) => {
    const id = `${path}.skills.${i}`;
    const text = skill;
    flatSkills.push({ id, text });
  });
  return flatSkills;
};

export function flattenSiteContentIntoChunks(content: BotContent) {
  // TODO: (lodash or a helper function would be helpful for more content), this could be used for a test
  const { hero, info } = content.home;
  const { role: heroRole, summary: heroSummary, aka: heroAka } = hero;
  const { title: infoTitle, summary: infoSummary } = info;

  const { experiencesProjects } = content;
  const { browserBot, garmentSegmentation, pixelPup } = experiencesProjects;
  const {
    overview: browserBotOverview,
    skills: browserBotSkills,
    keywords: browserBotKeywords,
    roleSummary: browserBotRoleSummary,
  } = browserBot;
  const {
    overview: garmentSegmentationOverview,
    skills: garmentSegmentationSkills,
    keywords: garmentSegmentationKeywords,
    roleSummary: garmentSegmentationRoleSummary,
  } = garmentSegmentation;
  const {
    overview: pixelPupOverview,
    skills: pixelPupSkills,
    keywords: pixelPupKeywords,
    roleSummary: pixelPupRoleSummary,
  } = pixelPup;

  const chunks = [
    { id: "home.hero.role", text: heroRole },
    { id: "home.hero.summary", text: heroSummary },
    { id: "home.hero.aka", text: heroAka },
    { id: "home.info.title", text: infoTitle },
    { id: "home.info.summary", text: infoSummary },
    { id: "experiencesProjects.browserBot.overview", text: browserBotOverview },
    {
      id: "experiencesProjects.browserBot.roleSummary",
      text: browserBotRoleSummary,
    },
    { id: "experiencesProjects.browserBot.keywords", text: browserBotKeywords },
    {
      id: "experiencesProjects.garmentSegmentation.overview",
      text: garmentSegmentationOverview,
    },
    {
      id: "experiencesProjects.garmentSegmentation.roleSummary",
      text: garmentSegmentationRoleSummary,
    },
    {
      id: "experiencesProjects.garmentSegmentation.keywords",
      text: garmentSegmentationKeywords,
    },
    { id: "experiencesProjects.pixelPup.overview", text: pixelPupOverview },
    {
      id: "experiencesProjects.pixelPup.roleSummary",
      text: pixelPupRoleSummary,
    },
    { id: "experiencesProjects.pixelPup.keywords", text: pixelPupKeywords },
  ];

  const browserBotSkillsFlattened = flattenSkills(
    "experiencesProjects.browserBot",
    browserBotSkills,
  );
  const garmentSegmentationSkillsFlattened = flattenSkills(
    "experiencesProjects.garmentSegmentation",
    garmentSegmentationSkills,
  );
  const pixelPupSkillsFlattened = flattenSkills(
    "experiencesProjects.pixelPup",
    pixelPupSkills,
  );

  chunks.push(
    ...browserBotSkillsFlattened,
    ...garmentSegmentationSkillsFlattened,
    ...pixelPupSkillsFlattened,
  );

  return chunks;
}

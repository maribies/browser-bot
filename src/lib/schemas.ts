import { z } from "zod";

const heroCopySchema = z.object({
  role: z.string(),
  summary: z.string(),
  aka: z.string(),
});

const infoCopySchema = z.object({
  title: z.string(),
  summary: z.string(),
});

const copySchema = z.object({
  home: z.object({ hero: heroCopySchema, info: infoCopySchema }),
});

const experienceSchema = z.object({
  roleSummary: z.string(),
  summary: z.string(), // project or company mission
  skills: z.array(z.string()),
  icon: z.string(),
  iconAlt: z.string(),
  title: z.string(), // i.e. company or project name
  role: z.string(),
  link: z.string(),
  timeFrame: z.string(),
  location: z.string().optional(),
  keywords: z.array(z.string()), // tools, skills, frameworks, buzzwords
});

const experienceDetailsCategorySchema = z.enum([
  "work",
  "business",
  "projects",
  "education",
]);

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- the site's experience schema, kept for reference
const experienceDetailsSchema = z.object({
  type: experienceDetailsCategorySchema,
  experiences: z.array(experienceSchema),
});

export const siteDataSchema = z.object({
  copy: copySchema,
  // experiences: z.array(experienceDetailsSchema), // exists in the real site schema, for comparison
});

export type HeroCopy = z.infer<typeof heroCopySchema>;
export type InfoCopy = z.infer<typeof infoCopySchema>;
export type SiteData = z.infer<typeof siteDataSchema>;

// Bot schemas
const botExperiencesSchema = z.object({
  overview: z.string(),
  roleSummary: z.string(),
  keywords: z.string(),
  skills: z.array(z.string()),
});

const botExperiencesProjectsSchema = z.object({
  browserBot: botExperiencesSchema,
  garmentSegmentation: botExperiencesSchema,
  pixelPup: botExperiencesSchema,
});

export const botContentSchema = z.object({
  home: z.object({ hero: heroCopySchema, info: infoCopySchema }),
  experiencesProjects: botExperiencesProjectsSchema,
});

export type BotContent = z.infer<typeof botContentSchema>;
export type BotExperiencesProjects = z.infer<
  typeof botExperiencesProjectsSchema
>;

const questionSchema = z.object({
  q: z.string(), // question
  c: z.array(z.string()), // chunk ids that answer the question
  e: z.string(), // expected result
  d: z.string(), // desired result
});

export const questionsSchema = z.array(questionSchema);

export type Question = z.infer<typeof questionSchema>;

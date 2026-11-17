import { z } from "zod";

const heroCopySchema = z.object({
  role: z.string(),
  summary: z.string(),
  aka: z.object({ title: z.string(), body: z.string() }),
});

const infoCopySchema = z.object({
  title: z.string(),
  summary: z.string(),
});

const copySchema = z.object({
  home: z.object({ hero: heroCopySchema, info: infoCopySchema }),
});

export const siteDataSchema = z.object({
  copy: copySchema,
});

export type HeroCopy = z.infer<typeof heroCopySchema>;
export type InfoCopy = z.infer<typeof infoCopySchema>;
export type SiteData = z.infer<typeof siteDataSchema>;

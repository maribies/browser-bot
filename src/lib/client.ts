import { z } from "zod";

import { siteDataSchema, type SiteData } from "./schemas";

export type FetchJson = (file: string) => Promise<unknown>;

export const loadSiteData = async (fetchJson: FetchJson): Promise<SiteData> => {
  const [copy] = await Promise.all([fetchJson("copy.json")]);
  const result = siteDataSchema.safeParse({ copy });

  if (!result.success) {
    throw new Error(`Invalid API data:\n${z.prettifyError(result.error)}`);
  }

  return result.data;
};

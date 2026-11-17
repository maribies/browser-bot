import type { ComponentType } from "react";

import { HomePage } from "./HomePage";
import { NotFoundPage } from "./NotFoundPage";
import type { SiteData } from "./lib/schemas";

export type PageProps = { data: SiteData };
export const DATA_ELEMENT_ID = "site-data";

export type Route = {
  title: string;
  description: string;
  Page: ComponentType<PageProps>;
};

export const routes: Record<string, Route> = {
  "/": {
    title: "🤖",
    description: "Browser Bot!",
    Page: HomePage,
  },
};

export const notFound: Route = {
  title: "Page not found",
  description: "Nothing to see here.",
  Page: NotFoundPage,
};


// The pre-rendered file for a route: "/" → "index.html", "/experiences" → "experiences.html".
export const htmlFile = (url: string) =>
  url === "/" ? "index.html" : `${url.slice(1)}.html`;

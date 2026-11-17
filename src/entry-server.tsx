import { renderToString } from "react-dom/server";

import type { SiteData } from "./lib/schemas";
import { App } from "./App";
import { DATA_ELEMENT_ID, notFound, routes } from "./routes";

export { loadSiteData } from "./lib/client";
export { htmlFile, routes } from "./routes";

const serialize = (data: SiteData) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

export const render = (url: string, data: SiteData) => {
  const { title, description, Page } = routes[url] ?? notFound;

  return {
    head: `<title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <script type="application/json" id="${DATA_ELEMENT_ID}">${serialize(data)}</script>`,
    html: renderToString(
      <App>
        <Page data={data} />
      </App>,
    ),
  };
};

import { createRoot, hydrateRoot } from "react-dom/client";

import { App } from "./App";
import { DATA_ELEMENT_ID, notFound, routes } from "./routes";
import {SiteData} from "./lib/schemas";

const path = location.pathname.replace(/(\/index)?\.html$/, "") || "/";
const route = routes[path] ?? notFound;

const root = document.getElementById("root")!;
const app = (data: SiteData) => (
  <App>
    <route.Page data={data} />
  </App>
);

const embeddedData = document.getElementById(DATA_ELEMENT_ID)?.textContent;

if (embeddedData) {
  hydrateRoot(root, app(JSON.parse(embeddedData)));
} else if (import.meta.env.DEV) {
  import("./lib/client").then(async ({ loadSiteData }) => {
    const data = await loadSiteData(async (file) =>
      (await fetch(`/api/${file}`)).json(),
    );

    document.title = route.title;
    createRoot(root).render(app(data));
  });
}

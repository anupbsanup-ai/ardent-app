import { sanityFetch } from "../sanity/client";
import { SITE_SETTINGS_QUERY } from "../sanity/queries";
import Nav from "./Nav";
import siteConfig from "../site.config";

type Settings = { siteTitle?: string; logoUrl?: string };

export default async function NavWrapper() {
  let settings: Settings = {};
  try {
    settings = await sanityFetch<Settings>({ query: SITE_SETTINGS_QUERY, tags: ["settings"] });
  } catch { /* fall through to siteConfig */ }

  return (
    <Nav
      siteName={settings?.siteTitle ?? siteConfig.name}
      logoUrl={settings?.logoUrl ?? null}
    />
  );
}

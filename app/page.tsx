import Nav from "../components/NavWrapper";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import FeaturedAgents from "../components/FeaturedAgents";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { sanityFetch } from "../sanity/client";
import { SITE_SETTINGS_QUERY } from "../sanity/queries";

type Settings = {
  email?: string;
  phone?: string;
  address?: string;
  mapEmbedUrl?: string | null;
};

export default async function HomePage() {
  let settings: Settings = {};
  try {
    settings = await sanityFetch<Settings>({ query: SITE_SETTINGS_QUERY, tags: ["settings"] });
  } catch { /* fall through to defaults */ }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <FeaturedAgents />
        <ContactSection
          email={settings?.email}
          phone={settings?.phone}
          address={settings?.address}
          mapEmbedUrl={settings?.mapEmbedUrl}
        />
      </main>
      <Footer />
    </>
  );
}

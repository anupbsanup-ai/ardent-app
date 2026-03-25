import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedAgents from "../components/FeaturedAgents";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <FeaturedAgents />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

import Nav from "../../components/NavWrapper";
import Footer from "../../components/Footer";
import ContactForm from "./ContactForm";
import { sanityFetch } from "../../sanity/client";
import { SITE_SETTINGS_QUERY } from "../../sanity/queries";
import siteConfig from "../../site.config";

type Settings = {
  email?: string;
  phone?: string;
  address?: string;
  mapEmbedUrl?: string | null;
  instagram?: string;
  linkedin?: string;
};

export const metadata = { title: "Contact — ARDENT" };

export default async function ContactPage() {
  let s: Settings = {};
  try {
    s = await sanityFetch<Settings>({ query: SITE_SETTINGS_QUERY, tags: ["settings"] });
  } catch { /* fall through */ }

  const email     = s?.email     ?? siteConfig.contact.email;
  const phone     = s?.phone     ?? siteConfig.contact.phone;
  const address   = s?.address   ?? siteConfig.contact.address;
  const mapUrl    = s?.mapEmbedUrl ?? null;
  const instagram = s?.instagram  ?? siteConfig.social.instagram;
  const linkedin  = s?.linkedin   ?? siteConfig.social.linkedin;

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Header */}
        <div className="bg-black pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
            <h1 className="font-heading font-black text-white leading-none mb-4" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", letterSpacing: "-0.04em" }}>
              Let&apos;s Talk.
            </h1>
            <p className="text-white/50 max-w-lg" style={{ lineHeight: "1.7" }}>
              Whether you have a question, a property in mind, or just want to get the process started — we&apos;re here.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-bg py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16">
            {/* Left: info */}
            <div className="md:col-span-2 space-y-10">
              <div>
                <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Office</p>
                <div className="space-y-4">
                  <a href={`mailto:${email}`} className="flex items-start gap-3 group">
                    <span className="w-8 h-8 rounded-full border border-silver flex items-center justify-center text-grey text-xs shrink-0 group-hover:border-black group-hover:text-black transition-colors duration-200">✉</span>
                    <div>
                      <p className="text-xs text-grey mb-0.5">Email</p>
                      <p className="text-sm font-medium group-hover:text-primary transition-colors duration-200">{email}</p>
                    </div>
                  </a>
                  <a href={`tel:${phone}`} className="flex items-start gap-3 group">
                    <span className="w-8 h-8 rounded-full border border-silver flex items-center justify-center text-grey text-xs shrink-0 group-hover:border-black group-hover:text-black transition-colors duration-200">✆</span>
                    <div>
                      <p className="text-xs text-grey mb-0.5">Phone</p>
                      <p className="text-sm font-medium group-hover:text-primary transition-colors duration-200">{phone}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full border border-silver flex items-center justify-center text-grey text-xs shrink-0">⌖</span>
                    <div>
                      <p className="text-xs text-grey mb-0.5">Address</p>
                      <p className="text-sm font-medium" style={{ whiteSpace: "pre-line" }}>{address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden border border-silver" style={{ height: "220px" }}>
                <iframe
                  src={mapUrl ?? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215057764985!2d-73.98784168459273!3d40.74844397932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office location"
                />
              </div>

              <div>
                <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Hours</p>
                <div className="space-y-2 text-sm">
                  {[["Mon – Fri", "9:00 AM – 7:00 PM"], ["Saturday", "10:00 AM – 5:00 PM"], ["Sunday", "By appointment"]].map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-grey">{day}</span>
                      <span className="font-medium">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {instagram && (
                    <a href={instagram} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-medium border border-silver rounded-full px-4 py-2 hover:border-black hover:bg-black hover:text-white transition-colors duration-200">
                      Instagram
                    </a>
                  )}
                  {linkedin && (
                    <a href={linkedin} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-medium border border-silver rounded-full px-4 py-2 hover:border-black hover:bg-black hover:text-white transition-colors duration-200">
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="md:col-span-3 bg-white rounded-2xl border border-silver p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

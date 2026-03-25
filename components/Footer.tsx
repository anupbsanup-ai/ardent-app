import Link from "next/link";
import siteConfig from "../site.config";

export default function Footer() {
  const { social, footer, nav, contact } = siteConfig;

  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-black text-white tracking-tight">
              {siteConfig.logo.text.slice(0, -1)}
              <span className="text-primary">{siteConfig.logo.text.slice(-1)}</span>
            </Link>
            <p className="text-white/40 mt-3 max-w-xs" style={{ lineHeight: "1.7" }}>
              {footer.tagline}
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer"
                   className="text-white/40 hover:text-primary transition-colors text-sm font-medium">
                  Instagram
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer"
                   className="text-white/40 hover:text-primary transition-colors text-sm font-medium">
                  LinkedIn
                </a>
              )}
              {social.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer"
                   className="text-white/40 hover:text-primary transition-colors text-sm font-medium">
                  Facebook
                </a>
              )}
              {social.twitter && (
                <a href={social.twitter} target="_blank" rel="noopener noreferrer"
                   className="text-white/40 hover:text-primary transition-colors text-sm font-medium">
                  Twitter/X
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/30 text-xs font-semibold tracking-[0.15em] uppercase mb-4">Navigate</p>
            <ul className="space-y-2">
              {nav.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/30 text-xs font-semibold tracking-[0.15em] uppercase mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">{contact.email}</a></li>
              <li><a href={`tel:${contact.phone}`}   className="hover:text-white transition-colors">{contact.phone}</a></li>
              <li style={{ whiteSpace: "pre-line" }}>{contact.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.links.map((l) => (
              <Link key={l.href} href={l.href} className="text-white/30 hover:text-white/60 text-xs transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

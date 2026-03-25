"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import siteConfig from "../site.config";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-b border-silver" : "border-b border-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="text-[22px] font-black tracking-tight">
        {siteConfig.logo.image ? (
          <img src={siteConfig.logo.image} alt={siteConfig.name} className="h-8" />
        ) : (
          <>
            {siteConfig.logo.text.slice(0, -1)}
            <span className="text-primary">{siteConfig.logo.text.slice(-1)}</span>
          </>
        )}
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {siteConfig.nav.links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-grey"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex items-center gap-3">
        <Link
          href={siteConfig.nav.signInHref}
          className="hidden md:block text-sm font-medium hover:text-grey transition-colors"
        >
          Sign In
        </Link>
        <Link
          href={siteConfig.nav.ctaHref}
          className="text-sm font-bold text-white bg-black rounded-full px-5 py-2.5 flex items-center gap-2
                     hover:bg-[#333] transition-colors duration-200
                     focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2
                     active:scale-95"
          style={{ transition: "background 0.25s, transform 0.2s" }}
        >
          {siteConfig.nav.ctaLabel}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </nav>
  );
}

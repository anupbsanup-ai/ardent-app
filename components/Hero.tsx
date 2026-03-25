import Link from "next/link";
import siteConfig from "../site.config";

export default function Hero() {
  const { headline, subheadline, ctaLabel, ctaHref, secondaryCtaLabel, secondaryCtaHref } =
    siteConfig.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-black">
      {/* Layered radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,169,110,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 50% 80% at 20% 80%, rgba(201,169,110,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 100% 100% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 50%)
          `,
        }}
      />

      {/* SVG grain texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" aria-hidden>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ letterSpacing: "0.2em" }}
          >
            {siteConfig.name} Real Estate
          </p>

          {/* Headline */}
          <h1
            className="font-heading text-white font-black leading-none mb-6"
            style={{
              fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: "0.95",
            }}
          >
            {headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? <em className="italic text-primary not-italic">{line}</em> : line}
              </span>
            ))}
          </h1>

          {/* Sub */}
          <p
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl"
            style={{ lineHeight: "1.7" }}
          >
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={ctaHref}
              className="bg-primary text-black font-bold text-sm rounded-full px-7 py-3.5
                         hover:brightness-110 active:scale-95
                         transition-[transform,filter] duration-200"
              style={{ transition: "transform 0.2s, filter 0.2s" }}
            >
              {ctaLabel} →
            </Link>
            <Link
              href={secondaryCtaHref}
              className="border border-white/30 text-white font-bold text-sm rounded-full px-7 py-3.5
                         hover:border-white/60 hover:bg-white/5
                         active:scale-95 transition-[transform,border-color,background] duration-200"
            >
              {secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {siteConfig.stats.map((s) => (
            <div key={s.label}>
              <p
                className="text-white font-black"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.03em" }}
              >
                {s.value}
              </p>
              <p className="text-white/40 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

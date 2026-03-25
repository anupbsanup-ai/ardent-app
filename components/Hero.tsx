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

      {/* Hero background image */}
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
        alt="Luxury real estate"
        className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
        aria-hidden
      />

      {/* SVG grain texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" aria-hidden>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-12 items-center">
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
              className="border-2 border-white/70 text-white font-bold text-sm rounded-full px-7 py-3.5
                         hover:border-white hover:bg-white/10
                         active:scale-95 transition-[transform,border-color,background] duration-200"
            >
              {secondaryCtaLabel}
            </Link>
          </div>
        </div>

        {/* Hero side image */}
        <div className="hidden md:block relative">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80"
              alt="Modern luxury home"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <p className="text-white/60 text-xs mb-1">Featured Property</p>
              <p className="text-white font-bold text-lg leading-tight">Modern Penthouse, NYC</p>
              <p className="text-primary font-black text-xl mt-1">$4,250,000</p>
            </div>
          </div>
          {/* Floating stat card */}
          <div className="absolute -left-8 top-1/3 bg-white rounded-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <p className="text-grey text-xs mb-1">Avg. Days on Market</p>
            <p className="text-black font-black text-2xl" style={{ letterSpacing: "-0.03em" }}>12</p>
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

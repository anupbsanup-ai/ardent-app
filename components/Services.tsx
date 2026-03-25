import Link from "next/link";
import siteConfig from "../site.config";

export default function Services() {
  return (
    <section className="bg-bg py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              What We Do
            </p>
            <h2
              className="font-heading font-black text-black leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
            >
              Full-Service<br />Real Estate
            </h2>
          </div>
          <p className="text-grey max-w-sm" style={{ lineHeight: "1.7" }}>
            Whether you&apos;re buying your first home, selling a property, or growing a portfolio — we have
            the expertise to guide you.
          </p>
        </div>

        {/* Service rows */}
        <div className="divide-y divide-silver">
          {siteConfig.services.map((s, i) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group flex items-center justify-between py-6 hover:pl-2
                         transition-[padding] duration-300"
            >
              <div className="flex items-center gap-8">
                <span className="text-silver text-sm font-mono w-6">0{i + 1}</span>
                <h3
                  className="font-heading font-black text-black group-hover:text-primary
                             transition-colors duration-200"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "-0.02em" }}
                >
                  {s.title}
                </h3>
              </div>
              <div className="flex items-center gap-6">
                <p className="text-grey text-sm hidden md:block max-w-xs" style={{ lineHeight: "1.6" }}>
                  {s.description}
                </p>
                <span
                  className="w-10 h-10 rounded-full border border-silver flex items-center justify-center
                               text-grey group-hover:border-black group-hover:text-black group-hover:bg-black
                               group-hover:text-white transition-all duration-300 shrink-0"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

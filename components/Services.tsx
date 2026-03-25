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

        {/* Service grid with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {siteConfig.services.slice(0, 2).map((s, i) => {
            const imgs = [
              "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80",
              "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
            ];
            return (
              <Link
                key={s.slug}
                href={s.href}
                className="group relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={imgs[i]}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105
                             transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-1">0{i + 1}</p>
                  <h3 className="text-white font-black text-2xl" style={{ letterSpacing: "-0.02em" }}>{s.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{s.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteConfig.services.slice(2).map((s, i) => {
            const imgs = [
              "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80",
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
            ];
            return (
              <Link
                key={s.slug}
                href={s.href}
                className="group relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={imgs[i]}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105
                             transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-1">0{i + 3}</p>
                  <h3 className="text-white font-black text-2xl" style={{ letterSpacing: "-0.02em" }}>{s.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{s.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

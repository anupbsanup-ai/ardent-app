import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";

const VALUES = [
  { title: "Client First, Always", desc: "Every decision we make is measured against one question: is this right for our client? No exceptions." },
  { title: "Radical Transparency", desc: "We share data, explain our reasoning, and tell you what we'd do if it were our own home." },
  { title: "Relentless Preparation", desc: "We out-prepare every counterpart at the table. Our clients win because we do the work before the deal." },
  { title: "Long-Term Thinking", desc: "We'd rather lose a deal than damage a relationship. Our business is built on referrals, not transactions." },
];

const MILESTONES = [
  { year: "2006", event: "Founded in Manhattan with 3 agents and a shared office." },
  { year: "2010", event: "Reached $100M in annual transaction volume." },
  { year: "2014", event: "Expanded to Brooklyn and Queens. Launched property management division." },
  { year: "2018", event: "Crossed $500M in annual volume. Named Best Boutique Brokerage by NY Real Estate Journal." },
  { year: "2022", event: "Launched investment advisory and new development divisions." },
  { year: "2024", event: "Surpassed $1.8B in total transactions with 40+ agents across 5 boroughs." },
];

const STATS = [
  { value: "18", label: "Years in business" },
  { value: "40+", label: "Expert agents" },
  { value: "2,400+", label: "Homes sold" },
  { value: "5", label: "NYC boroughs" },
];

export const metadata = { title: "About — ARDENT" };

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <div className="bg-black pt-20 pb-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(201,169,110,0.10) 0%, transparent 65%)" }} />
          <div className="max-w-7xl mx-auto relative grid md:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">About</p>
              <h1 className="font-heading font-black text-white leading-none mb-6" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", letterSpacing: "-0.04em" }}>
                Built on Trust.<br />Driven by Results.
              </h1>
            </div>
            <p className="text-white/50 text-lg" style={{ lineHeight: "1.8" }}>
              ARDENT was founded on a simple belief: real estate done right changes lives. We're a full-service brokerage that treats every transaction as if it were our own — because to our clients, it is.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white border-b border-silver">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-heading font-black text-black leading-none mb-1" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.04em" }}>{s.value}</p>
                <p className="text-grey text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="bg-bg py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Story</p>
              <h2 className="font-heading font-black leading-none mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}>
                18 Years.<br />One Standard.
              </h2>
              <div className="space-y-5 text-grey" style={{ lineHeight: "1.8" }}>
                <p>ARDENT started in 2006 in a small Midtown office with three agents who believed the brokerage model was broken. Too transactional. Too impersonal. Too focused on volume at the expense of value.</p>
                <p>We built something different — a firm where agents have the time, tools, and mandate to focus entirely on the client in front of them. No pressure to churn deals. No incentive to rush.</p>
                <p>That approach earned us trust. Trust earned us referrals. Referrals built a team of over 40 specialists who share the same belief: the right move isn't always the fast one.</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {MILESTONES.map((m, i) => (
                <div key={m.year} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mt-1.5 shrink-0" />
                    {i < MILESTONES.length - 1 && <div className="w-px flex-1 bg-silver mt-2" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-primary font-mono text-sm font-bold mb-1">{m.year}</p>
                    <p className="text-grey text-sm" style={{ lineHeight: "1.65" }}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-xl mb-16">
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">What We Stand For</p>
              <h2 className="font-heading font-black leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}>
                Our Values
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-silver">
              {VALUES.map((v) => (
                <div key={v.title} className="bg-white p-10">
                  <h3 className="font-heading font-black text-2xl mb-3" style={{ letterSpacing: "-0.02em" }}>{v.title}</h3>
                  <p className="text-grey" style={{ lineHeight: "1.75" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-black py-20 px-6 md:px-12 text-center">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Work With Us</p>
          <h2 className="font-heading font-black text-white leading-none mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em" }}>
            Ready to Get Started?
          </h2>
          <p className="text-white/50 max-w-md mx-auto mb-8" style={{ lineHeight: "1.7" }}>
            Whether you're buying, selling, or just exploring — we'd love to talk.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-black font-bold rounded-full px-8 py-4 hover:brightness-110 active:scale-95 transition-[filter,transform] duration-200">
              Contact Us →
            </Link>
            <Link href="/agents" className="inline-flex items-center gap-2 border border-white/30 text-white font-bold rounded-full px-8 py-4 hover:border-white/60 hover:bg-white/5 active:scale-95 transition-[border-color,background,transform] duration-200">
              Meet the Team
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Nav from "../../components/NavWrapper";
import Footer from "../../components/Footer";
import SellForm from "./SellForm";

export const metadata = { title: "Sell — ARDENT" };

const STEPS = [
  { n: "01", title: "Free Valuation",    desc: "We analyse recent comps, market trends, and your property's unique attributes to give you an accurate, data-backed price estimate." },
  { n: "02", title: "Listing Strategy",  desc: "Your dedicated agent crafts a pricing and marketing strategy designed to attract qualified buyers and maximise final sale price." },
  { n: "03", title: "Professional Prep", desc: "From staging advice to professional photography and virtual tours — we present your home in its best light." },
  { n: "04", title: "Targeted Marketing",desc: "Multi-channel exposure: MLS, digital ads, our buyer network, and direct outreach to agents with active buyers." },
  { n: "05", title: "Offers & Negotiation", desc: "We review every offer with you, negotiate terms, and guide you to the strongest possible close." },
  { n: "06", title: "Seamless Close",    desc: "Our team handles paperwork, coordinates with attorneys and title, and stays with you until keys are handed over." },
];

const STATS = [
  { value: "18",    label: "Days avg. time to offer" },
  { value: "103%",  label: "Average list-to-sale ratio" },
  { value: "$1.8B", label: "In transactions closed" },
  { value: "96%",   label: "Seller satisfaction rate" },
];

export default function SellPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <div className="bg-black pt-20 pb-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(201,169,110,0.12) 0%, transparent 70%)" }} />
          <div className="max-w-7xl mx-auto relative">
            <div className="max-w-2xl">
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Sell</p>
              <h1 className="font-heading font-black text-white leading-none mb-6" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", letterSpacing: "-0.04em" }}>
                Sell Smarter.<br /><em className="text-primary not-italic">Walk Away More.</em>
              </h1>
              <p className="text-white/50 text-lg mb-10 max-w-xl" style={{ lineHeight: "1.7" }}>
                Our agents combine local expertise with data-driven strategy to get you the best price — fast.
              </p>
              <a href="#valuation" className="inline-flex items-center gap-2 bg-primary text-black font-bold rounded-full px-8 py-4 hover:brightness-110 active:scale-95 transition-[filter,transform] duration-200">
                Get a Free Valuation →
              </a>
            </div>
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

        {/* Process */}
        <div className="bg-bg py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-xl mb-16">
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Process</p>
              <h2 className="font-heading font-black leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}>
                How We Sell<br />Your Home
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-silver">
              {STEPS.map((s) => (
                <div key={s.n} className="bg-bg p-8">
                  <p className="text-primary font-mono text-sm font-bold mb-4">{s.n}</p>
                  <h3 className="font-heading font-black text-xl mb-3" style={{ letterSpacing: "-0.02em" }}>{s.title}</h3>
                  <p className="text-grey text-sm" style={{ lineHeight: "1.7" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why ARDENT */}
        <div className="bg-white py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Why ARDENT</p>
              <h2 className="font-heading font-black leading-none mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", letterSpacing: "-0.04em" }}>
                More Than a<br />Listing Service
              </h2>
              <div className="space-y-6">
                {[
                  ["Dedicated Agent",   "One expert handles your sale from valuation to close — no handoffs."],
                  ["Proven Marketing",  "Professional photography, 3D tours, targeted digital ads, and a curated buyer network."],
                  ["Transparent Pricing","We show you the data behind our price recommendation. No guesswork."],
                  ["Off-Market Network","Access to buyers who never browse public listings — often the strongest offers."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <div>
                      <p className="font-bold text-black mb-1">{title}</p>
                      <p className="text-grey text-sm" style={{ lineHeight: "1.65" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3", background: "linear-gradient(145deg,#1a1a20 0%,#2a2a32 50%,#111118 100%)" }}>
              <div className="w-full h-full" style={{ background: "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(201,169,110,0.18) 0%, transparent 65%)" }} />
            </div>
          </div>
        </div>

        {/* Valuation form */}
        <div className="bg-black py-24 px-6 md:px-12" id="valuation">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Free Valuation</p>
              <h2 className="font-heading font-black text-white leading-none mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}>
                What&apos;s Your<br />Home Worth?
              </h2>
              <p className="text-white/50 mb-8" style={{ lineHeight: "1.7" }}>
                Share a few details and one of our agents will send you a comprehensive, no-obligation valuation within 24 hours.
              </p>
              <div className="space-y-3">
                {["Free, no-obligation estimate", "Based on live market data", "Response within 24 hours", "No pushy sales tactics"].map((pt) => (
                  <div key={pt} className="flex items-center gap-3 text-white/60 text-sm">
                    <span className="text-primary">✓</span> {pt}
                  </div>
                ))}
              </div>
            </div>
            <SellForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

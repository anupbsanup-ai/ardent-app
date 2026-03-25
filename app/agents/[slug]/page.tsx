import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Link from "next/link";

const AGENTS: Record<string, {
  name: string; title: string; bio: string; fullBio: string;
  photoUrl: string; email: string; phone: string;
  instagram: string; linkedin: string;
  stats: { label: string; value: string }[];
  specialties: string[];
  testimonial: { text: string; author: string };
}> = {
  "sarah-mitchell": {
    name: "Sarah Mitchell", title: "Senior Agent",
    bio: "With 8 years in New York luxury residential, Sarah has closed over $200M in transactions.",
    fullBio: "Sarah Mitchell joined ARDENT in 2016 after five years at a major Manhattan brokerage. Her specialty is luxury residential on the Upper West and Upper East sides, but her clients trust her across all five boroughs. Sarah is known for her calm under pressure, meticulous preparation, and negotiation skills that consistently win in competitive markets. She has been named in the Top 10 agents at ARDENT every year since 2018. Outside real estate, Sarah is a certified interior design consultant — which means her staging advice isn't just aesthetic, it directly impacts sale prices.",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    email: "sarah@ardentrealty.com", phone: "+1 (555) 001-0001",
    instagram: "https://instagram.com", linkedin: "https://linkedin.com",
    stats: [{ label: "Homes Sold", value: "120+" }, { label: "Years", value: "8" }, { label: "Avg. Days on Market", value: "14" }, { label: "Client Satisfaction", value: "98%" }],
    specialties: ["Luxury Residential", "Upper West Side", "Upper East Side", "Staging Consultation", "First-Time Buyers", "Relocation"],
    testimonial: { text: "Sarah found us a place we never thought we could afford and closed in 28 days. She's extraordinary.", author: "Rachel & Tom Evans" },
  },
  "james-carter": {
    name: "James Carter", title: "Investment Specialist",
    bio: "James focuses on multi-family and commercial investment properties with a financial background.",
    fullBio: "James Carter brings a CFA designation and a decade of Wall Street experience to ARDENT's investment division. He works exclusively with investors seeking multi-family, mixed-use, and commercial properties across New York. His edge is underwriting: James builds full pro-forma models for every deal, so his clients know the numbers before they ever make an offer. He has personally sourced over $400M in investment transactions, including several off-market opportunities that generated outsized returns for long-term clients.",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    email: "james@ardentrealty.com", phone: "+1 (555) 001-0002",
    instagram: "https://instagram.com", linkedin: "https://linkedin.com",
    stats: [{ label: "Deals Closed", value: "200+" }, { label: "Years", value: "12" }, { label: "Portfolio Value", value: "$400M" }, { label: "Avg. ROI", value: "18%" }],
    specialties: ["Multi-Family", "Commercial", "Investment Strategy", "Off-Market Deals", "Portfolio Management", "1031 Exchanges"],
    testimonial: { text: "James identified an off-market deal that yielded a 22% ROI in year one. He's the best in the business.", author: "Marcus Johnson, Investor" },
  },
  "priya-nair": {
    name: "Priya Nair", title: "Buyer's Agent",
    bio: "Priya specialises in first-time buyers and families relocating to the city.",
    fullBio: "Priya Nair is ARDENT's go-to agent for buyers navigating the New York market for the first time. She grew up in Brooklyn and knows every block, every co-op board quirk, and every neighborhood micro-market. Priya is known for her patience and honesty — she'll tell a client to walk away from a deal as readily as she'll champion one. 100% of her business comes from referrals, which says everything about how her clients feel after working with her.",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    email: "priya@ardentrealty.com", phone: "+1 (555) 001-0003",
    instagram: "https://instagram.com", linkedin: "https://linkedin.com",
    stats: [{ label: "Homes Sold", value: "85+" }, { label: "Years", value: "5" }, { label: "Client Satisfaction", value: "100%" }, { label: "Referral Rate", value: "100%" }],
    specialties: ["First-Time Buyers", "Brooklyn", "Queens", "Relocations", "Co-op Boards", "Family Homes"],
    testimonial: { text: "Priya negotiated $25K off asking price for me as a solo buyer. She made the whole thing feel easy.", author: "Alicia Nguyen" },
  },
  "marcus-webb": {
    name: "Marcus Webb", title: "Luxury Specialist",
    bio: "Marcus handles the city's most prestigious listings with unmatched discretion.",
    fullBio: "Marcus Webb operates at the very top of the New York market. His clients include C-suite executives, international buyers, and high-net-worth families seeking the city's finest penthouses, townhouses, and historic residences. Marcus is known for absolute discretion and access to inventory that never hits public listings. He has personally represented both buyers and sellers in transactions exceeding $10M, and his network spans private banks, family offices, and the global luxury brokerage community.",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    email: "marcus@ardentrealty.com", phone: "+1 (555) 001-0004",
    instagram: "https://instagram.com", linkedin: "https://linkedin.com",
    stats: [{ label: "Homes Sold", value: "60+" }, { label: "Years", value: "15" }, { label: "Avg. Sale Price", value: "$4.2M" }, { label: "Off-Market", value: "40%" }],
    specialties: ["Ultra Luxury", "Penthouses", "Historic Townhouses", "Off-Market", "International Buyers", "Trophy Properties"],
    testimonial: { text: "Marcus handled our $7M purchase with complete discretion and zero stress. Truly exceptional.", author: "Private Client" },
  },
  "diana-reyes": {
    name: "Diana Reyes", title: "Rentals Expert",
    bio: "Diana runs our rentals division, placing tenants and landlords faster than anyone in the business.",
    fullBio: "Diana Reyes leads ARDENT's rental division with a track record that speaks for itself: an average of 7 days to placement across 300+ transactions. She works with everyone from recent graduates finding their first New York apartment to corporations relocating employees and landlords managing multi-unit portfolios. Diana's deep knowledge of rental law, lease negotiation, and tenant rights makes her an invaluable advocate for both sides of the transaction.",
    photoUrl: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=600&q=80",
    email: "diana@ardentrealty.com", phone: "+1 (555) 001-0005",
    instagram: "https://instagram.com", linkedin: "https://linkedin.com",
    stats: [{ label: "Units Placed", value: "300+" }, { label: "Years", value: "6" }, { label: "Avg. Days", value: "7" }, { label: "Landlords", value: "45+" }],
    specialties: ["Long-Term Rentals", "Corporate Relocations", "Portfolio Landlords", "Lease Negotiation", "Manhattan", "Brooklyn"],
    testimonial: { text: "Diana found us a perfect tenant in 5 days. Our vacancy rate has been near zero since we started working with her.", author: "Property Owner, Prospect Heights" },
  },
  "tom-nakamura": {
    name: "Tom Nakamura", title: "New Development",
    bio: "Tom works exclusively with developers and buyers on new construction and off-plan sales.",
    fullBio: "Tom Nakamura is ARDENT's specialist in new development and pre-construction sales. He works with both developers bringing new inventory to market and buyers who want first access before public launch. His pipeline relationships mean ARDENT clients regularly purchase at pre-launch pricing, often seeing significant appreciation before move-in. Tom has been involved in 22 major development projects across Manhattan and Brooklyn, from boutique conversions to ground-up towers.",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    email: "tom@ardentrealty.com", phone: "+1 (555) 001-0006",
    instagram: "https://instagram.com", linkedin: "https://linkedin.com",
    stats: [{ label: "Units Sold", value: "150+" }, { label: "Years", value: "9" }, { label: "Projects", value: "22" }, { label: "Pre-Launch Access", value: "Yes" }],
    specialties: ["New Construction", "Off-Plan Sales", "Developer Relations", "Pre-Launch Pricing", "Condo Conversions", "Brooklyn Developments"],
    testimonial: { text: "Tom got us into a development at pre-launch pricing. By the time we moved in it had appreciated 18%.", author: "Kevin & Sara Patel" },
  },
};

export async function generateStaticParams() {
  return Object.keys(AGENTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = AGENTS[slug];
  return {
    title: agent ? `${agent.name} — ${agent.title} | ARDENT` : "Agent | ARDENT",
    description: agent?.bio,
  };
}

export default async function AgentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = AGENTS[slug];

  if (!agent) {
    return (
      <>
        <Nav />
        <main className="pt-16 min-h-screen bg-bg flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading font-black text-6xl mb-4" style={{ letterSpacing: "-0.03em" }}>404</h1>
            <p className="text-grey mb-6">Agent not found.</p>
            <Link href="/agents" className="bg-black text-white font-bold rounded-full px-6 py-3 hover:bg-[#333] transition-colors">
              Back to Agents
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="pt-16 bg-bg">

        {/* Hero */}
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-end">
            <div>
              <Link href="/agents" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors mb-8">
                ← All Agents
              </Link>
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">{agent.title}</p>
              <h1 className="font-heading font-black text-white leading-none mb-6"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.04em" }}>
                {agent.name}
              </h1>
              <div className="flex flex-wrap gap-3 mb-8">
                <a href={`tel:${agent.phone}`}
                  className="inline-flex items-center gap-2 bg-primary text-black font-bold rounded-full px-6 py-3
                             hover:brightness-110 active:scale-95 transition-[filter,transform] duration-200">
                  ✆ {agent.phone}
                </a>
                <a href={`mailto:${agent.email}`}
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold rounded-full px-6 py-3
                             hover:border-white/70 hover:bg-white/5 active:scale-95 transition-[border-color,background,transform] duration-200">
                  ✉ Email
                </a>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                {agent.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-black text-white text-2xl" style={{ letterSpacing: "-0.03em" }}>{s.value}</p>
                    <p className="text-white/40 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden hidden md:block" style={{ aspectRatio: "5/6" }}>
              <img src={agent.photoUrl} alt={agent.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {/* Social links */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {agent.linkedin && (
                  <a href={agent.linkedin} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center
                               text-white/70 hover:text-primary transition-colors text-xs font-bold">
                    in
                  </a>
                )}
                {agent.instagram && (
                  <a href={agent.instagram} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center
                               text-white/70 hover:text-primary transition-colors text-xs font-bold">
                    ig
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-3 gap-12">

          {/* Left */}
          <div className="md:col-span-2 space-y-12">

            {/* Bio */}
            <div>
              <h2 className="font-heading font-black text-2xl mb-5" style={{ letterSpacing: "-0.02em" }}>About {agent.name.split(" ")[0]}</h2>
              <p className="text-grey leading-relaxed" style={{ lineHeight: "1.85" }}>{agent.fullBio}</p>
            </div>

            {/* Specialties */}
            <div>
              <h2 className="font-heading font-black text-2xl mb-5" style={{ letterSpacing: "-0.02em" }}>Specialties</h2>
              <div className="flex flex-wrap gap-3">
                {agent.specialties.map((s) => (
                  <span key={s} className="text-sm font-medium bg-white border border-silver rounded-full px-4 py-2 text-grey">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-black rounded-2xl p-8">
              <svg width="32" height="22" viewBox="0 0 32 22" fill="none" className="mb-5">
                <path d="M0 22V13.4C0 9.13333 1.06667 5.8 3.2 3.4C5.33333 1 8.46667 0 12.6 0V3.8C10.3333 3.8 8.6 4.46667 7.4 5.8C6.2 7.13333 5.6 9 5.6 11.4H11.2V22H0ZM20.8 22V13.4C20.8 9.13333 21.8667 5.8 24 3.4C26.1333 1 29.2667 0 33.4 0V3.8C31.1333 3.8 29.4 4.46667 28.2 5.8C27 7.13333 26.4 9 26.4 11.4H32V22H20.8Z" fill="#C9A96E" fillOpacity="0.3"/>
              </svg>
              <blockquote className="text-white text-lg leading-relaxed mb-6" style={{ lineHeight: "1.7" }}>
                &ldquo;{agent.testimonial.text}&rdquo;
              </blockquote>
              <p className="text-primary text-sm font-semibold">— {agent.testimonial.author}</p>
            </div>
          </div>

          {/* Right — contact card */}
          <div>
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-silver">
                <p className="text-grey text-xs font-semibold tracking-[0.15em] uppercase mb-5">Get in Touch</p>
                <img src={agent.photoUrl} alt={agent.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary/30 mb-4" />
                <p className="font-bold text-black text-lg">{agent.name}</p>
                <p className="text-grey text-sm mb-5">{agent.title}</p>
                <a href={`tel:${agent.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-black text-white font-bold
                             rounded-full py-3 mb-3 hover:bg-[#333] transition-colors">
                  ✆ Call Now
                </a>
                <a href={`mailto:${agent.email}`}
                  className="flex items-center justify-center gap-2 w-full border-2 border-black text-black
                             font-bold rounded-full py-3 hover:bg-black hover:text-white transition-colors">
                  ✉ Send Email
                </a>
              </div>

              {/* Quick message */}
              <div className="bg-black rounded-2xl p-6">
                <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-3">Quick Message</p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                               placeholder-white/30 focus:outline-none focus:border-primary transition-colors" />
                  <input type="email" placeholder="Email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                               placeholder-white/30 focus:outline-none focus:border-primary transition-colors" />
                  <textarea rows={3} placeholder="How can I help you?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                               placeholder-white/30 focus:outline-none focus:border-primary transition-colors resize-none" />
                  <button type="submit"
                    className="w-full bg-primary text-black font-bold rounded-full py-3
                               hover:brightness-110 active:scale-95 transition-[filter,transform] duration-200">
                    Send Message →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Nav from "../../components/NavWrapper";
import Footer from "../../components/Footer";
import Link from "next/link";
import { sanityFetch } from "../../sanity/client";
import { ALL_AGENTS_QUERY } from "../../sanity/queries";

type Agent = {
  _id: string;
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
  email: string;
  phone: string;
  instagram: string;
  linkedin: string;
  slug: string;
  stats: { label: string; value: string }[];
};

const FALLBACK_AGENTS: Agent[] = [
  { _id: "1", name: "Sarah Mitchell", title: "Senior Agent", bio: "With 8 years in New York luxury residential, Sarah has closed over $200M in transactions. She brings calm expertise and fierce negotiation to every deal.", photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=480&q=80", email: "sarah@ardentrealty.com", phone: "+1 (555) 001-0001", instagram: "", linkedin: "", slug: "sarah-mitchell", stats: [{ label: "Homes Sold", value: "120+" }, { label: "Years", value: "8" }, { label: "Avg. Days", value: "14" }] },
  { _id: "2", name: "James Carter", title: "Investment Specialist", bio: "James focuses on multi-family and commercial investment properties. His financial background means clients get strategy, not just listings.", photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=480&q=80", email: "james@ardentrealty.com", phone: "+1 (555) 001-0002", instagram: "", linkedin: "", slug: "james-carter", stats: [{ label: "Homes Sold", value: "200+" }, { label: "Years", value: "12" }, { label: "Portfolio $", value: "$400M" }] },
  { _id: "3", name: "Priya Nair", title: "Buyer's Agent", bio: "Priya specialises in first-time buyers and families relocating to the city. She's known for patience, honesty, and knowing every block in Brooklyn.", photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=480&q=80", email: "priya@ardentrealty.com", phone: "+1 (555) 001-0003", instagram: "", linkedin: "", slug: "priya-nair", stats: [{ label: "Homes Sold", value: "85+" }, { label: "Years", value: "5" }, { label: "Satisfaction", value: "100%" }] },
  { _id: "4", name: "Marcus Webb", title: "Luxury Specialist", bio: "Marcus handles the city's most prestigious listings — penthouse sales, historic townhouses, and trophy properties. Discretion is his hallmark.", photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&q=80", email: "marcus@ardentrealty.com", phone: "+1 (555) 001-0004", instagram: "", linkedin: "", slug: "marcus-webb", stats: [{ label: "Homes Sold", value: "60+" }, { label: "Years", value: "15" }, { label: "Avg. Price", value: "$4.2M" }] },
  { _id: "5", name: "Diana Reyes", title: "Rentals Expert", bio: "Diana runs our rentals division with precision. From studios to corporate suites, she matches tenants and landlords faster than anyone in the business.", photoUrl: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=480&q=80", email: "diana@ardentrealty.com", phone: "+1 (555) 001-0005", instagram: "", linkedin: "", slug: "diana-reyes", stats: [{ label: "Units Placed", value: "300+" }, { label: "Years", value: "6" }, { label: "Avg. Days", value: "7" }] },
  { _id: "6", name: "Tom Nakamura", title: "New Development", bio: "Tom works exclusively with developers and buyers on new construction and off-plan sales. His pipeline insight gives buyers first access to new inventory.", photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=480&q=80", email: "tom@ardentrealty.com", phone: "+1 (555) 001-0006", instagram: "", linkedin: "", slug: "tom-nakamura", stats: [{ label: "Units Sold", value: "150+" }, { label: "Years", value: "9" }, { label: "Projects", value: "22" }] },
];

export const metadata = { title: "Agents — ARDENT" };

export default async function AgentsPage() {
  let agents: Agent[] = [];
  try {
    agents = await sanityFetch<Agent[]>({ query: ALL_AGENTS_QUERY, tags: ["agent"] });
    if (!agents.length) agents = FALLBACK_AGENTS;
  } catch {
    agents = FALLBACK_AGENTS;
  }

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Header */}
        <div className="bg-black pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Team</p>
            <h1 className="font-heading font-black text-white leading-none mb-4" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", letterSpacing: "-0.04em" }}>
              The People<br />Behind the Deals
            </h1>
            <p className="text-white/50 max-w-lg" style={{ lineHeight: "1.7" }}>
              Every ARDENT agent is hand-selected for expertise, integrity, and an obsession with client outcomes.
            </p>
          </div>
        </div>

        {/* Agents grid */}
        <div className="bg-bg py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {agents.map((agent) => (
                <article key={agent._id} className="group bg-white rounded-2xl overflow-hidden border border-silver hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] transition-shadow duration-300">
                  {/* Photo */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                    <img
                      src={agent.photoUrl || "https://placehold.co/480x600/111111/C9A96E?text=Agent"}
                      alt={agent.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex gap-5 mb-3">
                        {agent.stats?.map((s) => (
                          <div key={s.label}>
                            <p className="text-primary font-black text-lg leading-none" style={{ letterSpacing: "-0.02em" }}>{s.value}</p>
                            <p className="text-white/50 text-xs mt-0.5">{s.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="font-heading font-black text-2xl mb-0.5" style={{ letterSpacing: "-0.02em" }}>{agent.name}</h3>
                    <p className="text-primary text-sm font-semibold mb-3">{agent.title}</p>
                    <p className="text-grey text-sm mb-5" style={{ lineHeight: "1.65" }}>{agent.bio}</p>
                    <div className="flex gap-3">
                      <Link href={`/agents/${agent.slug}`}
                        className="flex-1 text-center text-sm font-bold border border-black rounded-full py-2.5
                                   hover:bg-black hover:text-white transition-colors duration-200
                                   focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2">
                        View Profile
                      </Link>
                      {agent.phone && (
                        <a href={`tel:${agent.phone}`}
                          className="flex-1 text-center text-sm font-bold bg-primary text-black rounded-full py-2.5
                                     hover:brightness-110 active:scale-95 transition-[filter,transform] duration-200
                                     focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2">
                          Call
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="bg-black py-20 px-6 md:px-12 text-center">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Join the Team</p>
          <h2 className="font-heading font-black text-white leading-none mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em" }}>
            Are You an Agent<br />Who Does Things Differently?
          </h2>
          <p className="text-white/50 max-w-md mx-auto mb-8" style={{ lineHeight: "1.7" }}>
            We're always looking for driven, client-first agents to join the ARDENT team.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-black font-bold rounded-full px-8 py-4 hover:brightness-110 active:scale-95 transition-[filter,transform] duration-200">
            Get in Touch →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import { sanityFetch } from "../sanity/client";
import { FEATURED_AGENTS_QUERY } from "../sanity/queries";

type Agent = {
  _id: string;
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
  email: string;
  phone: string;
  stats: { label: string; value: string }[];
};

export default async function FeaturedAgents() {
  let agents: Agent[] = [];

  try {
    agents = await sanityFetch<Agent[]>({
      query: FEATURED_AGENTS_QUERY,
      tags:  ["agent"],
    });
  } catch {
    // Sanity not yet configured — show placeholder cards
    agents = [
      { _id: "1", name: "Sarah Mitchell", title: "Senior Agent", bio: "Specializing in luxury residential properties.", photoUrl: "https://placehold.co/400x500/111111/C9A96E?text=SM", email: "", phone: "", stats: [{ label: "Sold", value: "120+" }, { label: "Years", value: "8" }] },
      { _id: "2", name: "James Carter",   title: "Investment Specialist", bio: "Expert in commercial and investment real estate.", photoUrl: "https://placehold.co/400x500/111111/C9A96E?text=JC", email: "", phone: "", stats: [{ label: "Sold", value: "200+" }, { label: "Years", value: "12" }] },
      { _id: "3", name: "Priya Nair",     title: "Buyer's Agent", bio: "Helping first-time buyers find their perfect home.", photoUrl: "https://placehold.co/400x500/111111/C9A96E?text=PN", email: "", phone: "", stats: [{ label: "Sold", value: "85+" }, { label: "Years", value: "5" }] },
    ];
  }

  if (!agents.length) return null;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our Team</p>
            <h2
              className="font-heading font-black leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
            >
              Meet the Agents
            </h2>
          </div>
          <Link
            href="/agents"
            className="text-sm font-bold border border-black rounded-full px-6 py-3
                       hover:bg-black hover:text-white transition-colors duration-200 self-start md:self-auto"
          >
            View All Agents →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <article
              key={agent._id}
              className="group relative overflow-hidden rounded-2xl bg-black"
              style={{ aspectRatio: "4/5" }}
            >
              {/* Photo */}
              <img
                src={agent.photoUrl || "https://placehold.co/400x500/111111/888888?text=Agent"}
                alt={agent.name}
                className="absolute inset-0 w-full h-full object-cover opacity-70
                           group-hover:opacity-50 group-hover:scale-105
                           transition-[opacity,transform] duration-500"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex gap-4 mb-4">
                  {agent.stats?.map((s) => (
                    <div key={s.label}>
                      <p className="text-primary font-black text-lg" style={{ letterSpacing: "-0.02em" }}>
                        {s.value}
                      </p>
                      <p className="text-white/50 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
                <h3 className="text-white font-bold text-xl">{agent.name}</h3>
                <p className="text-white/60 text-sm">{agent.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

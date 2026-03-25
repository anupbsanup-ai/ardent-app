import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";
import { sanityFetch } from "../../sanity/client";
import { ALL_LISTINGS_QUERY } from "../../sanity/queries";

type Listing = {
  _id: string;
  title: string;
  status: string;
  price: number;
  address: string;
  city: string;
  state: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  slug: string;
  coverImage: string;
  agent: { name: string; photoUrl: string } | null;
};

const FALLBACK_LISTINGS: Listing[] = [
  { _id: "1", title: "The Harrington", status: "For Sale", price: 1250000, address: "14 Riverside Dr", city: "New York", state: "NY", bedrooms: 3, bathrooms: 2, sqft: 2100, slug: "the-harrington", coverImage: "https://placehold.co/600x420/1a1a1a/C9A96E?text=Listing", agent: { name: "Sarah Mitchell", photoUrl: "" } },
  { _id: "2", title: "Park West Penthouse", status: "For Sale", price: 3400000, address: "88 Central Park W", city: "New York", state: "NY", bedrooms: 4, bathrooms: 3, sqft: 3800, slug: "park-west-penthouse", coverImage: "https://placehold.co/600x420/222228/C9A96E?text=Listing", agent: { name: "James Carter", photoUrl: "" } },
  { _id: "3", title: "Tribeca Loft", status: "For Sale", price: 2100000, address: "220 Hudson St", city: "New York", state: "NY", bedrooms: 2, bathrooms: 2, sqft: 2600, slug: "tribeca-loft", coverImage: "https://placehold.co/600x420/18181e/C9A96E?text=Listing", agent: { name: "Priya Nair", photoUrl: "" } },
  { _id: "4", title: "Brooklyn Heights Classic", status: "For Sale", price: 975000, address: "45 Pierrepont St", city: "Brooklyn", state: "NY", bedrooms: 3, bathrooms: 2, sqft: 1750, slug: "brooklyn-heights-classic", coverImage: "https://placehold.co/600x420/141414/C9A96E?text=Listing", agent: { name: "Sarah Mitchell", photoUrl: "" } },
  { _id: "5", title: "Upper East Townhouse", status: "For Sale", price: 4800000, address: "19 E 73rd St", city: "New York", state: "NY", bedrooms: 5, bathrooms: 4, sqft: 5200, slug: "upper-east-townhouse", coverImage: "https://placehold.co/600x420/1c1c22/C9A96E?text=Listing", agent: { name: "James Carter", photoUrl: "" } },
  { _id: "6", title: "Chelsea Studio+", status: "For Sale", price: 620000, address: "310 W 23rd St", city: "New York", state: "NY", bedrooms: 1, bathrooms: 1, sqft: 780, slug: "chelsea-studio", coverImage: "https://placehold.co/600x420/161616/C9A96E?text=Listing", agent: { name: "Priya Nair", photoUrl: "" } },
];

function formatPrice(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  return `$${(n / 1000).toFixed(0)}K`;
}

export const metadata = { title: "Buy — ARDENT" };

export default async function BuyPage() {
  let listings: Listing[] = [];
  try {
    const all = await sanityFetch<Listing[]>({ query: ALL_LISTINGS_QUERY, tags: ["listing"] });
    listings = all.filter((l) => l.status !== "For Rent");
  } catch {
    listings = FALLBACK_LISTINGS;
  }

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Page header */}
        <div className="bg-black pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Buy</p>
            <h1
              className="font-heading font-black text-white leading-none mb-4"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)", letterSpacing: "-0.04em" }}
            >
              Find Your<br />Next Home
            </h1>
            <p className="text-white/50 max-w-lg" style={{ lineHeight: "1.7" }}>
              Browse our curated portfolio of properties — from first homes to flagship penthouses.
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="bg-white border-b border-silver sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center gap-4 overflow-x-auto">
            {["All", "1 Bed", "2 Beds", "3+ Beds", "Under $1M", "$1M–$2M", "$2M+"].map((f) => (
              <button
                key={f}
                className="shrink-0 text-sm font-medium px-4 py-2 rounded-full border border-silver
                           hover:border-black hover:bg-black hover:text-white
                           transition-[background,color,border-color] duration-200
                           focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2
                           first:bg-black first:text-white first:border-black"
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Listings grid */}
        <div className="bg-bg py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-grey text-sm mb-8">{listings.length} properties available</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((l) => (
                <Link
                  key={l._id}
                  href={`/listings/${l.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-silver
                             hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)]
                             transition-shadow duration-300"
                >
                  {/* Photo */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={l.coverImage || "https://placehold.co/600x420/1a1a1a/C9A96E?text=Listing"}
                      alt={l.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                      {l.status}
                    </span>
                    <span className="absolute bottom-4 left-4 text-white font-black text-2xl" style={{ letterSpacing: "-0.03em" }}>
                      {formatPrice(l.price)}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-heading font-black text-xl mb-1" style={{ letterSpacing: "-0.02em" }}>
                      {l.title}
                    </h3>
                    <p className="text-grey text-sm mb-4">{l.address}, {l.city}, {l.state}</p>
                    <div className="flex items-center gap-5 text-sm text-grey border-t border-silver pt-4">
                      <span><strong className="text-black font-bold">{l.bedrooms}</strong> bd</span>
                      <span><strong className="text-black font-bold">{l.bathrooms}</strong> ba</span>
                      <span><strong className="text-black font-bold">{l.sqft.toLocaleString()}</strong> sqft</span>
                      {l.agent && (
                        <span className="ml-auto text-xs text-grey">{l.agent.name}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-black py-20 px-6 md:px-12 text-center">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Not Finding the Right Fit?</p>
          <h2
            className="font-heading font-black text-white leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Tell Us What You Want
          </h2>
          <p className="text-white/50 max-w-md mx-auto mb-8" style={{ lineHeight: "1.7" }}>
            Our agents will search off-market and upcoming listings to find your perfect match.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-black font-bold rounded-full px-8 py-4
                       hover:brightness-110 active:scale-95 transition-[filter,transform] duration-200"
          >
            Talk to an Agent →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

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
  { _id: "r1", title: "Soho Loft", status: "For Rent", price: 6500, address: "112 Greene St", city: "New York", state: "NY", bedrooms: 2, bathrooms: 1, sqft: 1400, slug: "soho-loft", coverImage: "https://placehold.co/600x420/1a1a1a/C9A96E?text=Rental", agent: { name: "Priya Nair", photoUrl: "" } },
  { _id: "r2", title: "Midtown Studio", status: "For Rent", price: 3200, address: "500 W 43rd St", city: "New York", state: "NY", bedrooms: 0, bathrooms: 1, sqft: 550, slug: "midtown-studio", coverImage: "https://placehold.co/600x420/222228/C9A96E?text=Rental", agent: { name: "Sarah Mitchell", photoUrl: "" } },
  { _id: "r3", title: "West Village 1BR", status: "For Rent", price: 4800, address: "73 Bank St", city: "New York", state: "NY", bedrooms: 1, bathrooms: 1, sqft: 850, slug: "west-village-1br", coverImage: "https://placehold.co/600x420/18181e/C9A96E?text=Rental", agent: { name: "James Carter", photoUrl: "" } },
  { _id: "r4", title: "Dumbo 3BR", status: "For Rent", price: 8200, address: "30 Jay St", city: "Brooklyn", state: "NY", bedrooms: 3, bathrooms: 2, sqft: 1900, slug: "dumbo-3br", coverImage: "https://placehold.co/600x420/141414/C9A96E?text=Rental", agent: { name: "Priya Nair", photoUrl: "" } },
  { _id: "r5", title: "Gramercy 2BR", status: "For Rent", price: 5900, address: "22 Gramercy Park S", city: "New York", state: "NY", bedrooms: 2, bathrooms: 2, sqft: 1200, slug: "gramercy-2br", coverImage: "https://placehold.co/600x420/1c1c22/C9A96E?text=Rental", agent: { name: "Sarah Mitchell", photoUrl: "" } },
  { _id: "r6", title: "Williamsburg Penthouse", status: "For Rent", price: 11000, address: "155 N 10th St", city: "Brooklyn", state: "NY", bedrooms: 3, bathrooms: 2, sqft: 2200, slug: "williamsburg-penthouse", coverImage: "https://placehold.co/600x420/161616/C9A96E?text=Rental", agent: { name: "James Carter", photoUrl: "" } },
];

function formatRent(n: number) {
  return `$${n.toLocaleString()}/mo`;
}

export const metadata = { title: "Rent — ARDENT" };

export default async function RentPage() {
  let listings: Listing[] = [];
  try {
    const all = await sanityFetch<Listing[]>({ query: ALL_LISTINGS_QUERY, tags: ["listing"] });
    listings = all.filter((l) => l.status === "For Rent");
    if (!listings.length) listings = FALLBACK_LISTINGS;
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
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Rent</p>
            <h1
              className="font-heading font-black text-white leading-none mb-4"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)", letterSpacing: "-0.04em" }}
            >
              Rentals<br />That Move You
            </h1>
            <p className="text-white/50 max-w-lg" style={{ lineHeight: "1.7" }}>
              Curated rentals across the city — studios to full floors, short-term to long.
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="bg-white border-b border-silver sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center gap-4 overflow-x-auto">
            {["All", "Studio", "1 Bed", "2 Beds", "3+ Beds", "Under $5K", "$5K–$8K", "$8K+"].map((f) => (
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
            <p className="text-grey text-sm mb-8">{listings.length} rentals available</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((l) => (
                <Link
                  key={l._id}
                  href={`/listings/${l.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-silver
                             hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)]
                             transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={l.coverImage || "https://placehold.co/600x420/1a1a1a/C9A96E?text=Rental"}
                      alt={l.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      For Rent
                    </span>
                    <span className="absolute bottom-4 left-4 text-white font-black text-2xl" style={{ letterSpacing: "-0.03em" }}>
                      {formatRent(l.price)}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-heading font-black text-xl mb-1" style={{ letterSpacing: "-0.02em" }}>
                      {l.title}
                    </h3>
                    <p className="text-grey text-sm mb-4">{l.address}, {l.city}, {l.state}</p>
                    <div className="flex items-center gap-5 text-sm text-grey border-t border-silver pt-4">
                      <span><strong className="text-black font-bold">{l.bedrooms || "Studio"}</strong>{l.bedrooms ? " bd" : ""}</span>
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
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Custom Search</p>
          <h2
            className="font-heading font-black text-white leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Don't See Your<br />Perfect Rental?
          </h2>
          <p className="text-white/50 max-w-md mx-auto mb-8" style={{ lineHeight: "1.7" }}>
            We have access to off-market and unlisted rentals. Tell us what you need and we'll find it.
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

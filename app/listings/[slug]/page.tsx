import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Link from "next/link";

/* ── Fallback data (replace with Sanity fetch when CMS is live) ── */
const LISTINGS: Record<string, {
  title: string; status: string; price: number;
  address: string; city: string; state: string;
  bedrooms: number; bathrooms: number; sqft: number; yearBuilt: number;
  description: string; features: string[];
  images: string[];
  agent: { name: string; title: string; phone: string; email: string; photo: string };
}> = {
  "the-harrington": {
    title: "The Harrington", status: "For Sale", price: 1250000,
    address: "14 Riverside Dr", city: "New York", state: "NY",
    bedrooms: 3, bathrooms: 2, sqft: 2100, yearBuilt: 2018,
    description: "A beautifully appointed three-bedroom residence with sweeping river views, chef's kitchen, and private terrace. Located in one of Manhattan's most desirable riverside buildings with 24-hour concierge, fitness center, and rooftop lounge.",
    features: ["River Views", "Private Terrace", "Chef's Kitchen", "24-hr Concierge", "Fitness Center", "Rooftop Lounge", "In-unit Laundry", "Central A/C"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80",
    ],
    agent: { name: "Sarah Mitchell", title: "Senior Agent", phone: "+1 (555) 000-0001", email: "sarah@ardentrealty.com", photo: "https://placehold.co/120x120/111111/C9A96E?text=SM" },
  },
  "park-west-penthouse": {
    title: "Park West Penthouse", status: "For Sale", price: 3400000,
    address: "88 Central Park W", city: "New York", state: "NY",
    bedrooms: 4, bathrooms: 3, sqft: 3800, yearBuilt: 2020,
    description: "Extraordinary full-floor penthouse overlooking Central Park. Floor-to-ceiling windows, bespoke Italian millwork, and a private elevator foyer. A once-in-a-generation opportunity in one of the world's most iconic addresses.",
    features: ["Central Park Views", "Full Floor", "Private Elevator", "Italian Millwork", "Wine Cellar", "Staff Quarters", "Smart Home", "Valet Parking"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
    ],
    agent: { name: "James Carter", title: "Investment Specialist", phone: "+1 (555) 000-0002", email: "james@ardentrealty.com", photo: "https://placehold.co/120x120/1a1a1a/C9A96E?text=JC" },
  },
  "tribeca-loft": {
    title: "Tribeca Loft", status: "For Sale", price: 2100000,
    address: "220 Hudson St", city: "New York", state: "NY",
    bedrooms: 2, bathrooms: 2, sqft: 2600, yearBuilt: 2015,
    description: "An authentic Tribeca loft conversion featuring soaring 14-foot ceilings, original cast-iron columns, and oversized industrial windows. Completely renovated with designer finishes while preserving the building's storied character.",
    features: ["14ft Ceilings", "Cast-Iron Columns", "Industrial Windows", "Designer Renovation", "Exposed Brick", "Open Plan", "Private Storage", "Bike Storage"],
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
    ],
    agent: { name: "Priya Nair", title: "Buyer's Agent", phone: "+1 (555) 000-0003", email: "priya@ardentrealty.com", photo: "https://placehold.co/120x120/222222/C9A96E?text=PN" },
  },
};

function formatPrice(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  return `$${(n / 1000).toFixed(0)}K`;
}

export async function generateStaticParams() {
  return Object.keys(LISTINGS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = LISTINGS[slug];
  return {
    title: listing ? `${listing.title} | ARDENT Real Estate` : "Listing | ARDENT",
    description: listing?.description?.slice(0, 155),
  };
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = LISTINGS[slug];

  if (!listing) {
    return (
      <>
        <Nav />
        <main className="pt-16 min-h-screen bg-bg flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-heading font-black text-6xl mb-4" style={{ letterSpacing: "-0.03em" }}>404</h1>
            <p className="text-grey mb-6">This listing was not found.</p>
            <Link href="/buy" className="bg-black text-white font-bold rounded-full px-6 py-3 hover:bg-[#333] transition-colors">
              Back to Listings
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const [main, ...thumbs] = listing.images;

  return (
    <>
      <Nav />
      <main className="pt-16 bg-bg">

        {/* Image gallery */}
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
            <div className="grid grid-cols-4 gap-3" style={{ gridTemplateRows: "320px" }}>
              {/* Main image */}
              <div className="col-span-4 md:col-span-2 row-span-1 rounded-2xl overflow-hidden">
                <img src={main} alt={listing.title} className="w-full h-full object-cover" />
              </div>
              {/* Thumbs */}
              {thumbs.slice(0, 2).map((img, i) => (
                <div key={i} className="hidden md:block rounded-2xl overflow-hidden">
                  <img src={img} alt={`${listing.title} ${i + 2}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-3 gap-12">

          {/* Left — details */}
          <div className="md:col-span-2">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-grey mb-6">
              <Link href="/buy" className="hover:text-black transition-colors">Listings</Link>
              <span>/</span>
              <span className="text-black">{listing.title}</span>
            </div>

            {/* Title & price */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
              <div>
                <span className="inline-block bg-primary text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {listing.status}
                </span>
                <h1
                  className="font-heading font-black text-black leading-none"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em" }}
                >
                  {listing.title}
                </h1>
                <p className="text-grey mt-2">{listing.address}, {listing.city}, {listing.state}</p>
              </div>
              <div className="text-right shrink-0">
                <p
                  className="font-heading font-black text-black"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", letterSpacing: "-0.03em" }}
                >
                  {formatPrice(listing.price)}
                </p>
                <p className="text-grey text-sm">Asking Price</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 bg-white rounded-2xl p-6 mb-8 border border-silver">
              {[
                { label: "Bedrooms",  value: listing.bedrooms },
                { label: "Bathrooms", value: listing.bathrooms },
                { label: "Sq Ft",     value: listing.sqft.toLocaleString() },
                { label: "Built",     value: listing.yearBuilt },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-black text-2xl text-black" style={{ letterSpacing: "-0.02em" }}>{s.value}</p>
                  <p className="text-grey text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mb-10">
              <h2 className="font-heading font-black text-xl mb-4" style={{ letterSpacing: "-0.02em" }}>
                About This Property
              </h2>
              <p className="text-grey leading-relaxed" style={{ lineHeight: "1.8" }}>
                {listing.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h2 className="font-heading font-black text-xl mb-4" style={{ letterSpacing: "-0.02em" }}>
                Features & Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {listing.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-grey">
                    <span className="text-primary font-bold">✓</span> {f}
                  </div>
                ))}
              </div>
            </div>

            {/* All photos */}
            <div>
              <h2 className="font-heading font-black text-xl mb-4" style={{ letterSpacing: "-0.02em" }}>
                All Photos
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {listing.images.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <img src={img} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — agent card + inquiry */}
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-4">

              {/* Agent card */}
              <div className="bg-white rounded-2xl p-6 border border-silver">
                <p className="text-grey text-xs font-semibold tracking-[0.15em] uppercase mb-4">Listed By</p>
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={listing.agent.photo}
                    alt={listing.agent.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <p className="font-bold text-black">{listing.agent.name}</p>
                    <p className="text-grey text-sm">{listing.agent.title}</p>
                  </div>
                </div>
                <a
                  href={`tel:${listing.agent.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-black text-white font-bold
                             rounded-full py-3 mb-3 hover:bg-[#333] transition-colors duration-200"
                >
                  ✆ Call Agent
                </a>
                <a
                  href={`mailto:${listing.agent.email}?subject=Inquiry: ${listing.title}`}
                  className="flex items-center justify-center gap-2 w-full border-2 border-black text-black
                             font-bold rounded-full py-3 hover:bg-black hover:text-white transition-colors duration-200"
                >
                  ✉ Email Agent
                </a>
              </div>

              {/* Quick inquiry form */}
              <div className="bg-black rounded-2xl p-6">
                <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-3">
                  Schedule a Viewing
                </p>
                <h3 className="text-white font-bold text-lg mb-4">Interested in this property?</h3>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text" placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                               placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="email" placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                               placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="tel" placeholder="Phone (optional)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                               placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-black font-bold rounded-full py-3
                               hover:brightness-110 active:scale-95 transition-[filter,transform] duration-200"
                  >
                    Request a Viewing →
                  </button>
                </form>
              </div>

              {/* Mortgage estimate */}
              <div className="bg-white rounded-2xl p-6 border border-silver">
                <p className="text-grey text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                  Est. Monthly Payment
                </p>
                <p className="font-black text-3xl text-black" style={{ letterSpacing: "-0.03em" }}>
                  ${Math.round((listing.price * 0.8 * (0.07 / 12)) / (1 - Math.pow(1 + 0.07 / 12, -360))).toLocaleString()}
                  <span className="text-grey text-base font-normal">/mo</span>
                </p>
                <p className="text-grey text-xs mt-1">Based on 20% down, 7% APR, 30yr fixed</p>
              </div>

            </div>
          </div>
        </div>

        {/* Back to listings */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
          <Link
            href="/buy"
            className="inline-flex items-center gap-2 text-sm font-bold text-grey hover:text-black transition-colors"
          >
            ← Back to All Listings
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}

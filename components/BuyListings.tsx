"use client";
import { useState } from "react";
import Link from "next/link";

const ALL_LISTINGS = [
  { _id: "1",  title: "The Harrington",         status: "For Sale", price: 1250000, address: "14 Riverside Dr",      city: "New York",  state: "NY", bedrooms: 3, bathrooms: 2, sqft: 2100, slug: "the-harrington",          coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",  agent: "Sarah Mitchell" },
  { _id: "2",  title: "Park West Penthouse",     status: "For Sale", price: 3400000, address: "88 Central Park W",    city: "New York",  state: "NY", bedrooms: 4, bathrooms: 3, sqft: 3800, slug: "park-west-penthouse",      coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",  agent: "James Carter" },
  { _id: "3",  title: "Tribeca Loft",            status: "For Sale", price: 2100000, address: "220 Hudson St",        city: "New York",  state: "NY", bedrooms: 2, bathrooms: 2, sqft: 2600, slug: "tribeca-loft",             coverImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",  agent: "Priya Nair" },
  { _id: "4",  title: "Brooklyn Heights Classic", status: "For Sale", price: 975000,  address: "45 Pierrepont St",    city: "Brooklyn",  state: "NY", bedrooms: 3, bathrooms: 2, sqft: 1750, slug: "brooklyn-heights-classic",  coverImage: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",  agent: "Sarah Mitchell" },
  { _id: "5",  title: "Upper East Townhouse",    status: "For Sale", price: 4800000, address: "19 E 73rd St",         city: "New York",  state: "NY", bedrooms: 5, bathrooms: 4, sqft: 5200, slug: "upper-east-townhouse",     coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",  agent: "James Carter" },
  { _id: "6",  title: "Chelsea Studio+",         status: "For Sale", price: 620000,  address: "310 W 23rd St",        city: "New York",  state: "NY", bedrooms: 1, bathrooms: 1, sqft: 780,  slug: "chelsea-studio",           coverImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",  agent: "Priya Nair" },
  { _id: "7",  title: "Astoria Family Home",     status: "For Sale", price: 840000,  address: "27-10 23rd Ave",       city: "Queens",    state: "NY", bedrooms: 4, bathrooms: 2, sqft: 2300, slug: "astoria-family-home",      coverImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",  agent: "Priya Nair" },
  { _id: "8",  title: "Nolita Duplex",           status: "For Sale", price: 2950000, address: "210 Mott St",          city: "New York",  state: "NY", bedrooms: 3, bathrooms: 2, sqft: 2200, slug: "nolita-duplex",            coverImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",  agent: "Marcus Webb" },
  { _id: "9",  title: "Harlem Brownstone",       status: "For Sale", price: 1650000, address: "118 W 130th St",       city: "New York",  state: "NY", bedrooms: 4, bathrooms: 3, sqft: 3100, slug: "harlem-brownstone",        coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",  agent: "James Carter" },
  { _id: "10", title: "Financial District Condo",status: "For Sale", price: 780000,  address: "55 Wall St",           city: "New York",  state: "NY", bedrooms: 1, bathrooms: 1, sqft: 920,  slug: "financial-district-condo", coverImage: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&q=80",  agent: "Sarah Mitchell" },
  { _id: "11", title: "Cobble Hill Townhouse",   status: "For Sale", price: 3200000, address: "88 Congress St",       city: "Brooklyn",  state: "NY", bedrooms: 5, bathrooms: 3, sqft: 4100, slug: "cobble-hill-townhouse",    coverImage: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80",  agent: "Marcus Webb" },
  { _id: "12", title: "LIC Waterfront Studio",   status: "For Sale", price: 520000,  address: "1 Court Square",       city: "Queens",    state: "NY", bedrooms: 0, bathrooms: 1, sqft: 610,  slug: "lic-waterfront-studio",    coverImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80",  agent: "Diana Reyes" },
];

const FILTERS = ["All", "Studio", "1 Bed", "2 Beds", "3+ Beds", "Under $1M", "$1M–$2M", "$2M+"];

function formatPrice(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  return `$${(n / 1000).toFixed(0)}K`;
}

export default function BuyListings() {
  const [active, setActive] = useState("All");

  const filtered = ALL_LISTINGS.filter((l) => {
    if (active === "All")       return true;
    if (active === "Studio")    return l.bedrooms === 0;
    if (active === "1 Bed")     return l.bedrooms === 1;
    if (active === "2 Beds")    return l.bedrooms === 2;
    if (active === "3+ Beds")   return l.bedrooms >= 3;
    if (active === "Under $1M") return l.price < 1_000_000;
    if (active === "$1M–$2M")   return l.price >= 1_000_000 && l.price <= 2_000_000;
    if (active === "$2M+")      return l.price > 2_000_000;
    return true;
  });

  return (
    <>
      {/* Filter bar */}
      <div className="bg-white border-b border-silver sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center gap-3 overflow-x-auto">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`shrink-0 text-sm font-medium px-4 py-2 rounded-full border transition-[background,color,border-color] duration-200
                focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2
                ${active === f
                  ? "bg-black text-white border-black"
                  : "border-silver hover:border-black hover:bg-black hover:text-white"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="bg-bg py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-grey text-sm mb-8">{filtered.length} properties available</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((l) => (
              <Link
                key={l._id}
                href={`/listings/${l.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-silver
                           hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] transition-shadow duration-300"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={l.coverImage}
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
                <div className="p-5">
                  <h3 className="font-heading font-black text-xl mb-1" style={{ letterSpacing: "-0.02em" }}>{l.title}</h3>
                  <p className="text-grey text-sm mb-4">{l.address}, {l.city}, {l.state}</p>
                  <div className="flex items-center gap-5 text-sm text-grey border-t border-silver pt-4">
                    <span><strong className="text-black font-bold">{l.bedrooms || "St"}</strong> {l.bedrooms ? "bd" : "udio"}</span>
                    <span><strong className="text-black font-bold">{l.bathrooms}</strong> ba</span>
                    <span><strong className="text-black font-bold">{l.sqft.toLocaleString()}</strong> sqft</span>
                    <span className="ml-auto text-xs text-grey">{l.agent}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-grey text-lg mb-4">No properties match this filter.</p>
              <button onClick={() => setActive("All")} className="text-sm font-bold text-black underline">
                Clear filter
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

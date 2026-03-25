"use client";
import { useState } from "react";
import Link from "next/link";

const ALL_RENTALS = [
  { _id: "r1",  title: "Soho Loft",              price: 6500,  address: "112 Greene St",        city: "New York", state: "NY", bedrooms: 2, bathrooms: 1, sqft: 1400, slug: "soho-loft",              coverImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80", agent: "Priya Nair" },
  { _id: "r2",  title: "Midtown Studio",          price: 3200,  address: "500 W 43rd St",        city: "New York", state: "NY", bedrooms: 0, bathrooms: 1, sqft: 550,  slug: "midtown-studio",          coverImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80", agent: "Sarah Mitchell" },
  { _id: "r3",  title: "West Village 1BR",        price: 4800,  address: "73 Bank St",           city: "New York", state: "NY", bedrooms: 1, bathrooms: 1, sqft: 850,  slug: "west-village-1br",        coverImage: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80", agent: "James Carter" },
  { _id: "r4",  title: "Dumbo 3BR",               price: 8200,  address: "30 Jay St",            city: "Brooklyn", state: "NY", bedrooms: 3, bathrooms: 2, sqft: 1900, slug: "dumbo-3br",               coverImage: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80", agent: "Priya Nair" },
  { _id: "r5",  title: "Gramercy 2BR",            price: 5900,  address: "22 Gramercy Park S",   city: "New York", state: "NY", bedrooms: 2, bathrooms: 2, sqft: 1200, slug: "gramercy-2br",            coverImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80", agent: "Sarah Mitchell" },
  { _id: "r6",  title: "Williamsburg Penthouse",  price: 11000, address: "155 N 10th St",        city: "Brooklyn", state: "NY", bedrooms: 3, bathrooms: 2, sqft: 2200, slug: "williamsburg-penthouse",  coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80", agent: "James Carter" },
  { _id: "r7",  title: "Astoria 2BR",             price: 3800,  address: "31-10 34th Ave",       city: "Queens",   state: "NY", bedrooms: 2, bathrooms: 1, sqft: 1050, slug: "astoria-2br",             coverImage: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&q=80", agent: "Diana Reyes" },
  { _id: "r8",  title: "Upper West Studio",       price: 2900,  address: "210 W 89th St",        city: "New York", state: "NY", bedrooms: 0, bathrooms: 1, sqft: 480,  slug: "upper-west-studio",       coverImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80", agent: "Diana Reyes" },
  { _id: "r9",  title: "Park Slope 3BR",          price: 7400,  address: "456 7th Ave",          city: "Brooklyn", state: "NY", bedrooms: 3, bathrooms: 2, sqft: 1800, slug: "park-slope-3br",          coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", agent: "Priya Nair" },
  { _id: "r10", title: "Tribeca 1BR",             price: 5200,  address: "88 Leonard St",        city: "New York", state: "NY", bedrooms: 1, bathrooms: 1, sqft: 780,  slug: "tribeca-1br",             coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", agent: "Marcus Webb" },
  { _id: "r11", title: "Bushwick Loft",           price: 4200,  address: "1083 Flushing Ave",    city: "Brooklyn", state: "NY", bedrooms: 2, bathrooms: 1, sqft: 1600, slug: "bushwick-loft",           coverImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80", agent: "Diana Reyes" },
  { _id: "r12", title: "FiDi Corporate Suite",   price: 9500,  address: "75 Broad St",          city: "New York", state: "NY", bedrooms: 3, bathrooms: 2, sqft: 2400, slug: "fidi-corporate-suite",    coverImage: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80", agent: "Tom Nakamura" },
];

const FILTERS = ["All", "Studio", "1 Bed", "2 Beds", "3+ Beds", "Under $5K", "$5K–$8K", "$8K+"];

function formatRent(n: number) {
  return `$${n.toLocaleString()}/mo`;
}

export default function RentListings() {
  const [active, setActive] = useState("All");

  const filtered = ALL_RENTALS.filter((l) => {
    if (active === "All")       return true;
    if (active === "Studio")    return l.bedrooms === 0;
    if (active === "1 Bed")     return l.bedrooms === 1;
    if (active === "2 Beds")    return l.bedrooms === 2;
    if (active === "3+ Beds")   return l.bedrooms >= 3;
    if (active === "Under $5K") return l.price < 5000;
    if (active === "$5K–$8K")   return l.price >= 5000 && l.price <= 8000;
    if (active === "$8K+")      return l.price > 8000;
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
          <p className="text-grey text-sm mb-8">{filtered.length} rentals available</p>
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
                  <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                    For Rent
                  </span>
                  <span className="absolute bottom-4 left-4 text-white font-black text-2xl" style={{ letterSpacing: "-0.03em" }}>
                    {formatRent(l.price)}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-black text-xl mb-1" style={{ letterSpacing: "-0.02em" }}>{l.title}</h3>
                  <p className="text-grey text-sm mb-4">{l.address}, {l.city}, {l.state}</p>
                  <div className="flex items-center gap-5 text-sm text-grey border-t border-silver pt-4">
                    <span><strong className="text-black font-bold">{l.bedrooms === 0 ? "St" : l.bedrooms}</strong>{l.bedrooms === 0 ? "udio" : " bd"}</span>
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
              <p className="text-grey text-lg mb-4">No rentals match this filter.</p>
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

"use client";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rachel & Tom Evans",
    role: "Home Buyers",
    location: "Brooklyn, NY",
    photo: "https://placehold.co/80x80/111111/C9A96E?text=RE",
    rating: 5,
    text: "ARDENT made buying our first home an absolute joy. Our agent was patient, knowledgeable, and found us a place we never thought we could afford. We closed in 28 days.",
    property: "3BR Townhouse — $985,000",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Property Investor",
    location: "Manhattan, NY",
    photo: "https://placehold.co/80x80/1a1a1a/C9A96E?text=MJ",
    rating: 5,
    text: "I've worked with many brokerages over the years. ARDENT is on a different level. They identified an off-market opportunity that yielded a 22% ROI in the first year.",
    property: "Commercial Unit — $2.4M",
  },
  {
    id: 3,
    name: "Diana Flores",
    role: "Home Seller",
    location: "Queens, NY",
    photo: "https://placehold.co/80x80/222222/C9A96E?text=DF",
    rating: 5,
    text: "Listed on a Thursday, had 11 offers by Monday. ARDENT's pricing strategy and staging advice resulted in a sale $60,000 over asking. I couldn't be happier.",
    property: "4BR House — Sold $60K over ask",
  },
  {
    id: 4,
    name: "Kevin & Sara Patel",
    role: "Relocating Buyers",
    location: "Upper West Side, NY",
    photo: "https://placehold.co/80x80/0d0d0d/C9A96E?text=KP",
    rating: 5,
    text: "We were relocating from London and needed everything handled remotely. ARDENT did virtual tours, handled all paperwork, and had our keys waiting when we landed.",
    property: "2BR Condo — $1.2M",
  },
  {
    id: 5,
    name: "Alicia Nguyen",
    role: "First-Time Buyer",
    location: "Astoria, NY",
    photo: "https://placehold.co/80x80/181818/C9A96E?text=AN",
    rating: 5,
    text: "As a single buyer, I was nervous about the whole process. My ARDENT agent walked me through every step and negotiated $25K off the asking price. Life-changing.",
    property: "1BR Apartment — $675,000",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C9A96E">
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="bg-bg py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Client Stories
            </p>
            <h2
              className="font-heading font-black text-black leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
            >
              Real People.<br />Real Results.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-black font-black text-3xl" style={{ letterSpacing: "-0.03em" }}>4.9<span className="text-primary">/5</span></p>
              <p className="text-grey text-sm">from 300+ reviews</p>
            </div>
            <div className="w-px h-10 bg-silver" />
            <Stars />
          </div>
        </div>

        {/* Main testimonial card */}
        <div className="grid md:grid-cols-5 gap-8 mb-10">
          {/* Featured */}
          <div
            className="md:col-span-3 bg-black rounded-3xl p-8 md:p-12 flex flex-col justify-between"
            style={{ minHeight: "360px" }}
          >
            <div>
              <Stars />
              <blockquote
                className="text-white mt-6 leading-relaxed"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", lineHeight: "1.7" }}
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>
            </div>
            <div className="flex items-center justify-between mt-8 flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/40"
                />
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-white/50 text-sm">{t.role} · {t.location}</p>
                </div>
              </div>
              <span className="text-primary text-sm font-semibold bg-primary/10 rounded-full px-4 py-1.5">
                {t.property}
              </span>
            </div>
          </div>

          {/* Side list */}
          <div className="md:col-span-2 flex flex-col gap-3">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`text-left rounded-2xl p-5 border transition-all duration-200
                  ${active === i
                    ? "bg-black border-black text-white"
                    : "bg-white border-silver hover:border-black/20"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-9 h-9 rounded-full object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <p className={`font-bold text-sm truncate ${active === i ? "text-white" : "text-black"}`}>
                      {item.name}
                    </p>
                    <p className={`text-xs truncate ${active === i ? "text-white/50" : "text-grey"}`}>
                      {item.role}
                    </p>
                  </div>
                  {active === i && (
                    <span className="ml-auto text-primary shrink-0">→</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                active === i ? "w-6 h-2 bg-black" : "w-2 h-2 bg-silver hover:bg-grey"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

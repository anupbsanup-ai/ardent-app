import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";
import RentListings from "../../components/RentListings";

export const metadata = { title: "Rent — ARDENT" };

export default function RentPage() {
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

        <RentListings />

        {/* CTA */}
        <div className="bg-black py-20 px-6 md:px-12 text-center">
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Custom Search</p>
          <h2
            className="font-heading font-black text-white leading-none mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Don&apos;t See Your<br />Perfect Rental?
          </h2>
          <p className="text-white/50 max-w-md mx-auto mb-8" style={{ lineHeight: "1.7" }}>
            We have access to off-market and unlisted rentals. Tell us what you need and we&apos;ll find it.
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

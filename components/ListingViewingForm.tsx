"use client";

export default function ListingViewingForm() {
  return (
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
  );
}

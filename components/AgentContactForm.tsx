"use client";

export default function AgentContactForm() {
  return (
    <div className="bg-black rounded-2xl p-6">
      <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase mb-3">Quick Message</p>
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                     placeholder-white/30 focus:outline-none focus:border-primary transition-colors" />
        <input type="email" placeholder="Email"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                     placeholder-white/30 focus:outline-none focus:border-primary transition-colors" />
        <textarea rows={3} placeholder="How can I help you?"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                     placeholder-white/30 focus:outline-none focus:border-primary transition-colors resize-none" />
        <button type="submit"
          className="w-full bg-primary text-black font-bold rounded-full py-3
                     hover:brightness-110 active:scale-95 transition-[filter,transform] duration-200">
          Send Message →
        </button>
      </form>
    </div>
  );
}

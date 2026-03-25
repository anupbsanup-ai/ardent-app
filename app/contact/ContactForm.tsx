"use client";
import { useState } from "react";

const INQUIRY_TYPES = ["General", "Buying", "Selling", "Renting", "Investing", "Careers"];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "General", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: form.type.toLowerCase() }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-16">
        <div className="text-primary text-6xl mb-4">✓</div>
        <h3 className="font-heading font-black text-3xl mb-2" style={{ letterSpacing: "-0.02em" }}>Message Sent!</h3>
        <p className="text-grey">We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <p className="text-xs text-grey font-semibold tracking-[0.1em] uppercase mb-3">Inquiry Type</p>
        <div className="flex flex-wrap gap-2">
          {INQUIRY_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setForm((p) => ({ ...p, type: t }))}
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors duration-200
                focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2
                ${form.type === t ? "bg-black text-white border-black" : "border-silver hover:border-black"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { name: "name", label: "Full Name", type: "text", required: true },
          { name: "email", label: "Email Address", type: "email", required: true },
        ].map((f) => (
          <div key={f.name}>
            <label className="block text-xs text-grey mb-1.5">{f.label} *</label>
            <input
              type={f.type}
              required={f.required}
              value={form[f.name as keyof typeof form]}
              onChange={(e) => setForm((p) => ({ ...p, [f.name]: e.target.value }))}
              className="w-full bg-bg border border-silver rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black transition-colors duration-200"
            />
          </div>
        ))}
      </div>

      <div>
        <label className="block text-xs text-grey mb-1.5">Phone</label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          className="w-full bg-bg border border-silver rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black transition-colors duration-200"
        />
      </div>

      <div>
        <label className="block text-xs text-grey mb-1.5">Message *</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          className="w-full bg-bg border border-silver rounded-xl px-4 py-3 text-black focus:outline-none focus:border-black transition-colors duration-200 resize-none"
        />
      </div>

      {status === "error" && <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-black text-white font-bold rounded-full py-4 hover:bg-[#333] active:scale-95 disabled:opacity-50 transition-[background,transform] duration-200 focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
      >
        {status === "sending" ? "Sending…" : "Send Message →"}
      </button>
    </form>
  );
}

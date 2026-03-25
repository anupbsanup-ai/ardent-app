"use client";
import { useState } from "react";
import siteConfig from "../site.config";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ ...form, type: "general" }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-black py-24" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contact Us</p>
          <h2
            className="font-heading font-black text-white leading-none mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
          >
            Let&apos;s Get<br />Started
          </h2>
          <p className="text-white/50 mb-10" style={{ lineHeight: "1.7" }}>
            Ready to find your next property or list your home? Our team is here to help every step of the way.
          </p>

          <div className="space-y-4 mb-10">
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
              <span className="text-primary">✉</span> {siteConfig.contact.email}
            </a>
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
              <span className="text-primary">✆</span> {siteConfig.contact.phone}
            </a>
            <p className="flex items-start gap-3 text-white/70">
              <span className="text-primary mt-0.5">⌖</span>
              <span style={{ whiteSpace: "pre-line" }}>{siteConfig.contact.address}</span>
            </p>
          </div>

          {/* Office image */}
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"
              alt="ARDENT office"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white/50 text-xs">New York, NY</p>
              <p className="text-white font-bold">123 Main Street, Suite 400</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          {status === "sent" ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="text-primary text-5xl mb-4">✓</div>
              <h3 className="text-white font-bold text-2xl mb-2">Message Sent!</h3>
              <p className="text-white/50">We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "name",    label: "Full Name",     type: "text",  required: true  },
                { name: "email",   label: "Email Address", type: "email", required: true  },
                { name: "phone",   label: "Phone",         type: "tel",   required: false },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-white/50 text-xs mb-1.5">{f.label}{f.required && " *"}</label>
                  <input
                    type={f.type}
                    required={f.required}
                    value={form[f.name as keyof typeof form]}
                    onChange={(e) => setForm((p) => ({ ...p, [f.name]: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                               placeholder-white/20 focus:outline-none focus:border-primary
                               transition-colors duration-200"
                  />
                </div>
              ))}
              <div>
                <label className="block text-white/50 text-xs mb-1.5">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                             placeholder-white/20 focus:outline-none focus:border-primary
                             transition-colors duration-200 resize-none"
                />
              </div>
              {status === "error" && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again or email us directly.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary text-black font-bold rounded-full py-4
                           hover:brightness-110 active:scale-95 disabled:opacity-50
                           transition-[transform,filter] duration-200"
              >
                {status === "sending" ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

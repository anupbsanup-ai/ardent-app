"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import siteConfig from "../../site.config";
import { useState } from "react";

const INQUIRY_TYPES = ["General", "Buying", "Selling", "Renting", "Investing", "Careers"];

export default function ContactPage() {
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

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Header */}
        <div className="bg-black pt-20 pb-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
            <h1 className="font-heading font-black text-white leading-none mb-4" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", letterSpacing: "-0.04em" }}>
              Let&apos;s Talk.
            </h1>
            <p className="text-white/50 max-w-lg" style={{ lineHeight: "1.7" }}>
              Whether you have a question, a property in mind, or just want to get the process started — we&apos;re here.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-bg py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16">
            {/* Left: info */}
            <div className="md:col-span-2 space-y-10">
              <div>
                <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Office</p>
                <div className="space-y-4">
                  <a href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-start gap-3 group">
                    <span className="w-8 h-8 rounded-full border border-silver flex items-center justify-center text-grey text-xs shrink-0 group-hover:border-black group-hover:text-black transition-colors duration-200">✉</span>
                    <div>
                      <p className="text-xs text-grey mb-0.5">Email</p>
                      <p className="text-sm font-medium group-hover:text-primary transition-colors duration-200">{siteConfig.contact.email}</p>
                    </div>
                  </a>
                  <a href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-start gap-3 group">
                    <span className="w-8 h-8 rounded-full border border-silver flex items-center justify-center text-grey text-xs shrink-0 group-hover:border-black group-hover:text-black transition-colors duration-200">✆</span>
                    <div>
                      <p className="text-xs text-grey mb-0.5">Phone</p>
                      <p className="text-sm font-medium group-hover:text-primary transition-colors duration-200">{siteConfig.contact.phone}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full border border-silver flex items-center justify-center text-grey text-xs shrink-0">⌖</span>
                    <div>
                      <p className="text-xs text-grey mb-0.5">Address</p>
                      <p className="text-sm font-medium" style={{ whiteSpace: "pre-line" }}>{siteConfig.contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Hours</p>
                <div className="space-y-2 text-sm">
                  {[["Mon – Fri", "9:00 AM – 7:00 PM"], ["Saturday", "10:00 AM – 5:00 PM"], ["Sunday", "By appointment"]].map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-grey">{day}</span>
                      <span className="font-medium">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {siteConfig.social.instagram && (
                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-medium border border-silver rounded-full px-4 py-2 hover:border-black hover:bg-black hover:text-white transition-colors duration-200">
                      Instagram
                    </a>
                  )}
                  {siteConfig.social.linkedin && (
                    <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-medium border border-silver rounded-full px-4 py-2 hover:border-black hover:bg-black hover:text-white transition-colors duration-200">
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="md:col-span-3 bg-white rounded-2xl border border-silver p-8 md:p-10">
              {status === "sent" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="text-primary text-6xl mb-4">✓</div>
                  <h3 className="font-heading font-black text-3xl mb-2" style={{ letterSpacing: "-0.02em" }}>Message Sent!</h3>
                  <p className="text-grey">We&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

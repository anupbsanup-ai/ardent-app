"use client";
import { useState } from "react";

export default function SellForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, message: `Property: ${form.address}\n\n${form.message}`, type: "seller" }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-primary text-6xl mb-4">✓</div>
        <h3 className="text-white font-bold text-2xl mb-2">Request Received!</h3>
        <p className="text-white/50">We&apos;ll send your valuation within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {[
        { name: "name",    label: "Full Name",         type: "text",  required: true  },
        { name: "email",   label: "Email Address",     type: "email", required: true  },
        { name: "phone",   label: "Phone Number",      type: "tel",   required: false },
        { name: "address", label: "Property Address",  type: "text",  required: true  },
      ].map((f) => (
        <div key={f.name}>
          <label className="block text-white/50 text-xs mb-1.5">{f.label}{f.required && " *"}</label>
          <input
            type={f.type}
            required={f.required}
            value={form[f.name as keyof typeof form]}
            onChange={(e) => setForm((p) => ({ ...p, [f.name]: e.target.value }))}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-200"
          />
        </div>
      ))}
      <div>
        <label className="block text-white/50 text-xs mb-1.5">Additional Notes</label>
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
        />
      </div>
      {status === "error" && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-primary text-black font-bold rounded-full py-4 hover:brightness-110 active:scale-95 disabled:opacity-50 transition-[filter,transform] duration-200"
      >
        {status === "sending" ? "Sending…" : "Request My Free Valuation →"}
      </button>
    </form>
  );
}

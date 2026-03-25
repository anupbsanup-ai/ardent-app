"use client";
import { useState } from "react";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    // Placeholder — wire to NextAuth signIn() when credentials are configured
    setTimeout(() => setStatus("error"), 1200);
  }

  return (
    <>
      <Nav />
      <main className="pt-16 min-h-screen bg-bg flex items-center justify-center px-6">
        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="text-center mb-10">
            <Link href="/" className="text-3xl font-black tracking-tight">
              ARDEN<span className="text-primary">T</span>
            </Link>
            <p className="text-grey text-sm mt-2">Sign in to your account</p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl border border-silver p-8 shadow-[0_4px_32px_rgba(0,0,0,0.06)]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full border border-silver rounded-xl px-4 py-3 text-black
                             focus:outline-none focus:border-black transition-colors placeholder-lgrey"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-medium text-black">Password</label>
                  <Link href="/forgot-password" className="text-xs text-grey hover:text-black transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  required
                  value={form.password}
                  onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                  placeholder="••••••••"
                  className="w-full border border-silver rounded-xl px-4 py-3 text-black
                             focus:outline-none focus:border-black transition-colors placeholder-lgrey"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm bg-red-50 rounded-xl px-4 py-3">
                  Invalid email or password. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-black text-white font-bold rounded-full py-3.5 mt-2
                           hover:bg-[#333] active:scale-95 disabled:opacity-50
                           transition-[background,transform] duration-200"
              >
                {status === "loading" ? "Signing in…" : "Sign In →"}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-silver" />
              </div>
              <div className="relative flex justify-center text-xs text-grey bg-white px-3">or</div>
            </div>

            {/* Agent portal note */}
            <div className="bg-bg rounded-2xl p-4 text-center">
              <p className="text-grey text-sm">Are you an agent?</p>
              <Link href="/contact" className="text-sm font-bold text-black hover:text-primary transition-colors">
                Contact us to get access →
              </Link>
            </div>
          </div>

          <p className="text-center text-grey text-sm mt-6">
            New to ARDENT?{" "}
            <Link href="/contact" className="font-bold text-black hover:text-primary transition-colors">
              Get in touch
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

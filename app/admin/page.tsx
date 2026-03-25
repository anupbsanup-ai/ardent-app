import Link from "next/link";
import { sanityFetch } from "../../sanity/client";
import { ALL_LISTINGS_QUERY, ALL_AGENTS_QUERY, SITE_SETTINGS_QUERY } from "../../sanity/queries";

type Stats = { listings: number; agents: number; siteName: string; email: string; phone: string };

async function getAdminStats(): Promise<Stats> {
  try {
    const [listings, agents, settings] = await Promise.all([
      sanityFetch<unknown[]>({ query: ALL_LISTINGS_QUERY, tags: ["listing"] }),
      sanityFetch<unknown[]>({ query: ALL_AGENTS_QUERY, tags: ["agent"] }),
      sanityFetch<{ siteTitle?: string; email?: string; phone?: string }>({ query: SITE_SETTINGS_QUERY, tags: ["settings"] }),
    ]);
    return {
      listings: listings.length,
      agents: agents.length,
      siteName: settings?.siteTitle ?? "ARDENT",
      email: settings?.email ?? "Not set",
      phone: settings?.phone ?? "Not set",
    };
  } catch {
    return { listings: 0, agents: 0, siteName: "ARDENT", email: "Not set", phone: "Not set" };
  }
}

const EDIT_SECTIONS = [
  {
    group: "Business Info",
    items: [
      {
        title: "Business Name & Tagline",
        description: "Update your company name, tagline, and brand color",
        href: "/studio/structure/siteSettings",
        icon: "🏢",
      },
      {
        title: "Phone, Email & Address",
        description: "Office contact details shown site-wide and on the Contact page",
        href: "/studio/structure/siteSettings",
        icon: "📞",
      },
      {
        title: "Social Media Links",
        description: "Instagram, LinkedIn, Facebook, Twitter/X handles",
        href: "/studio/structure/siteSettings",
        icon: "📲",
      },
    ],
  },
  {
    group: "Homepage",
    items: [
      {
        title: "Hero Headline & Subtext",
        description: "Main headline, subheadline, and CTA button text on the homepage",
        href: "/studio/structure/siteSettings",
        icon: "✏️",
      },
    ],
  },
  {
    group: "Listings & People",
    items: [
      {
        title: "Property Listings",
        description: "Add, edit, or remove buy/rent listings with photos, price, and details",
        href: "/studio/structure/listing",
        icon: "🏠",
      },
      {
        title: "Agent Profiles",
        description: "Manage agent photos, bios, stats, and contact info",
        href: "/studio/structure/agent",
        icon: "👤",
      },
      {
        title: "Testimonials",
        description: "Add and manage client reviews and success stories",
        href: "/studio/structure/testimonial",
        icon: "★",
      },
    ],
  },
];

const QUICK_LINKS = [
  { label: "Homepage",        href: "/" },
  { label: "Buy Page",        href: "/buy" },
  { label: "Rent Page",       href: "/rent" },
  { label: "Agents Page",     href: "/agents" },
  { label: "About Page",      href: "/about" },
  { label: "Contact Page",    href: "/contact" },
  { label: "Full CMS Studio", href: "/studio" },
];

const CHECKLIST = [
  { done: true,  task: "Sanity CMS connected" },
  { done: true,  task: "Site deployed on Vercel" },
  { done: true,  task: "Property listings added" },
  { done: true,  task: "Agent profiles configured" },
  { done: false, task: "Update business name, phone & address in Business Info" },
  { done: false, task: "Add real agent photos in Agent Profiles" },
  { done: false, task: "Add real property listings" },
  { done: false, task: "Set up Resend email (add RESEND_API_KEY to Vercel env)" },
  { done: false, task: "Add Google Maps embed URL in Business Info → Site Settings" },
  { done: false, task: "Add Instagram, LinkedIn handles in Social Media Links" },
  { done: false, task: "Connect custom domain in Vercel dashboard" },
  { done: false, task: "Add Google Analytics ID (NEXT_PUBLIC_GA_ID) to Vercel env" },
];

export default async function AdminPage() {
  const stats = await getAdminStats();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Top bar */}
      <header className="border-b border-white/10 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-black text-white tracking-tight">
            {stats.siteName.slice(0, -1)}<span className="text-primary">{stats.siteName.slice(-1)}</span>
          </Link>
          <span className="text-white/20">|</span>
          <span className="text-white/40 text-sm">Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/studio"
            className="text-sm font-bold text-black bg-primary rounded-full px-4 py-2 hover:brightness-110 transition-all">
            Open Studio →
          </Link>
          <Link href="/"
            className="text-sm font-medium text-white/50 hover:text-white transition-colors">
            View Site
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-12">

        {/* Welcome */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-white mb-2" style={{ letterSpacing: "-0.03em" }}>
            Welcome back
          </h1>
          <p className="text-white/40">Manage your website content, listings, and settings below.</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Active Listings", value: stats.listings, icon: "🏠" },
            { label: "Agents",          value: stats.agents,   icon: "👤" },
            { label: "Contact Email",   value: stats.email,    icon: "✉" },
            { label: "Phone",           value: stats.phone,    icon: "✆" },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-2xl mb-2">{s.icon}</div>
              <p className="text-white font-black text-xl truncate" style={{ letterSpacing: "-0.02em" }}>{s.value}</p>
              <p className="text-white/40 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Edit sections */}
        {EDIT_SECTIONS.map((group) => (
          <div key={group.group} className="mb-10">
            <h2 className="text-white/40 font-semibold text-xs tracking-[0.15em] uppercase mb-4">
              {group.group}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {group.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-primary/50
                             hover:shadow-[0_0_30px_rgba(201,169,110,0.08)] transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-white/20 group-hover:text-primary transition-colors">→</span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Setup checklist */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
          <h2 className="text-white font-black text-lg mb-5" style={{ letterSpacing: "-0.02em" }}>
            Setup Checklist
          </h2>
          <div className="space-y-3">
            {CHECKLIST.map((item) => (
              <div key={item.task} className="flex items-center gap-3">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0
                  ${item.done ? "bg-green-500/20 text-green-400" : "bg-white/5 text-white/20"}`}>
                  {item.done ? "✓" : "○"}
                </span>
                <span className={`text-sm ${item.done ? "text-white/40 line-through" : "text-white/80"}`}>
                  {item.task}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <h2 className="text-white font-black text-lg mb-5" style={{ letterSpacing: "-0.02em" }}>
          Quick Links
        </h2>
        <div className="flex flex-wrap gap-3">
          {QUICK_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-white/60 bg-white/5 border border-white/10
                         rounded-full px-4 py-2 hover:text-white hover:border-white/30 transition-all"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

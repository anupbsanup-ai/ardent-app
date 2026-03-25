/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIG  — change everything here to rebrand the site
 *  No need to touch any component files.
 * ─────────────────────────────────────────────────────────────
 */

const siteConfig = {
  // ── Brand ──────────────────────────────────────────────────
  name: "ARDENT",                          // Display name (all-caps recommended)
  tagline: "Find What Moves You",          // Hero tagline
  description:
    "A full-service real estate brokerage helping buyers, sellers, and agents thrive in today's market.",
  logo: {
    text: "ARDENT",                        // Text logo (used if no image logo)
    accentLetter: "A",                     // Letter rendered in accent color
    image: null,                           // e.g. "/logo.svg" — set to override text logo
  },

  // ── Colors ─────────────────────────────────────────────────
  colors: {
    primary: "#C9A96E",   // Gold — main accent
    black:   "#111111",
    white:   "#FFFFFF",
    bg:      "#F6F5F3",   // Off-white page background
    grey:    "#888888",
    silver:  "#E4E4E4",
  },

  // ── Fonts ──────────────────────────────────────────────────
  fonts: {
    heading: "Barlow Condensed",
    body:    "Barlow",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,800;1,900&family=Barlow+Condensed:wght@400;500;600;700;800&display=swap",
  },

  // ── Contact ────────────────────────────────────────────────
  contact: {
    email:   "hello@ardentrealty.com",
    phone:   "+1 (555) 000-0000",
    address: "123 Main Street, Suite 400\nNew York, NY 10001",
  },

  // ── Social ─────────────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/ardentrealty",
    linkedin:  "https://linkedin.com/company/ardentrealty",
    facebook:  "https://facebook.com/ardentrealty",
    twitter:   "",   // Leave empty to hide
  },

  // ── Navigation ─────────────────────────────────────────────
  nav: {
    links: [
      { label: "Buy",    href: "/buy" },
      { label: "Sell",   href: "/sell" },
      { label: "Rent",   href: "/rent" },
      { label: "Agents", href: "/agents" },
      { label: "About",  href: "/about" },
    ],
    ctaLabel: "Get Started",
    ctaHref:  "/contact",
    signInHref: "/sign-in",
  },

  // ── Hero Section ───────────────────────────────────────────
  hero: {
    headline:    "Find What\nMoves You",
    subheadline: "We connect people with properties that fit their life — not just their budget.",
    ctaLabel:    "Explore Listings",
    ctaHref:     "/buy",
    secondaryCtaLabel: "Meet Our Agents",
    secondaryCtaHref:  "/agents",
  },

  // ── Stats Bar ──────────────────────────────────────────────
  stats: [
    { value: "2,400+", label: "Homes Sold" },
    { value: "$1.8B",  label: "In Transactions" },
    { value: "18",     label: "Years of Experience" },
    { value: "96%",    label: "Client Satisfaction" },
  ],

  // ── Services ───────────────────────────────────────────────
  services: [
    {
      slug:        "buy",
      title:       "Buy",
      description: "Find your perfect home with expert guidance every step of the way.",
      href:        "/buy",
    },
    {
      slug:        "sell",
      title:       "Sell",
      description: "Get the best price for your property with our data-driven approach.",
      href:        "/sell",
    },
    {
      slug:        "invest",
      title:       "Invest",
      description: "Build long-term wealth through smart real estate investment strategy.",
      href:        "/invest",
    },
    {
      slug:        "manage",
      title:       "Manage",
      description: "Full-service property management that protects your investment.",
      href:        "/manage",
    },
  ],

  // ── Footer ─────────────────────────────────────────────────
  footer: {
    tagline: "Built on trust. Driven by results.",
    copyright: `© ${new Date().getFullYear()} ARDENT Realty. All rights reserved.`,
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },

  // ── SEO Defaults ───────────────────────────────────────────
  seo: {
    siteUrl:       "https://ardentrealty.com",   // Update after domain purchase
    ogImage:       "/og-image.png",
    twitterHandle: "@ardentrealty",
  },
};

export default siteConfig;
export type SiteConfig = typeof siteConfig;

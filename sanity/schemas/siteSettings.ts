import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "brand",   title: "Brand & Identity" },
    { name: "contact", title: "Contact & Social" },
    { name: "hero",    title: "Homepage Hero" },
    { name: "stats",   title: "Stats Bar" },
    { name: "seo",     title: "SEO" },
  ],
  fields: [
    // ── Brand ──────────────────────────────────────────────────
    defineField({ name: "siteTitle",    title: "Business Name",   type: "string",  group: "brand", description: "e.g. ARDENT" }),
    defineField({ name: "tagline",      title: "Tagline",         type: "string",  group: "brand", description: "e.g. Find What Moves You" }),
    defineField({ name: "description",  title: "Site Description",type: "text",    group: "brand", rows: 2 }),
    defineField({ name: "logo",         title: "Logo Image",      type: "image",   group: "brand", options: { hotspot: true }, description: "Upload to replace text logo" }),
    defineField({ name: "primaryColor", title: "Brand Color (hex)",type: "string", group: "brand", description: "e.g. #C9A96E — main accent color" }),

    // ── Contact ────────────────────────────────────────────────
    defineField({ name: "email",        title: "Contact Email",   type: "string",  group: "contact" }),
    defineField({ name: "phone",        title: "Phone Number",    type: "string",  group: "contact" }),
    defineField({ name: "address",      title: "Office Address",  type: "text",    group: "contact", rows: 2 }),
    defineField({ name: "mapEmbedUrl",  title: "Google Maps Embed URL", type: "url", group: "contact",
      description: 'Go to Google Maps → your address → Share → Embed a map → copy the src="..." URL' }),
    defineField({ name: "instagram",    title: "Instagram URL",   type: "url",     group: "contact" }),
    defineField({ name: "linkedin",     title: "LinkedIn URL",    type: "url",     group: "contact" }),
    defineField({ name: "facebook",     title: "Facebook URL",    type: "url",     group: "contact" }),
    defineField({ name: "twitter",      title: "Twitter/X URL",   type: "url",     group: "contact" }),
    defineField({ name: "whatsapp",     title: "WhatsApp Number", type: "string",  group: "contact", description: "e.g. +12125551234 (no spaces)" }),

    // ── Hero ───────────────────────────────────────────────────
    defineField({ name: "heroHeadline",    title: "Hero Headline",    type: "string", group: "hero", description: "Use \\n for line break" }),
    defineField({ name: "heroSubheadline", title: "Hero Subheadline", type: "string", group: "hero" }),
    defineField({ name: "heroCtaLabel",    title: "Hero CTA Button",  type: "string", group: "hero" }),
    defineField({ name: "heroImage",       title: "Hero Background Image", type: "image", group: "hero", options: { hotspot: true } }),

    // ── Stats ──────────────────────────────────────────────────
    defineField({
      name: "stats", title: "Stats Bar", type: "array", group: "stats",
      of: [{ type: "object", fields: [
        { name: "value", title: "Value", type: "string" },
        { name: "label", title: "Label", type: "string" },
      ]}],
    }),

    // ── SEO ────────────────────────────────────────────────────
    defineField({ name: "siteUrl",      title: "Live Site URL",   type: "url",    group: "seo" }),
    defineField({ name: "ogImage",      title: "OG Share Image",  type: "image",  group: "seo", options: { hotspot: true } }),
    defineField({ name: "twitterHandle",title: "Twitter Handle",  type: "string", group: "seo", description: "e.g. @ardentrealty" }),
  ],
  preview: { select: { title: "siteTitle" } },
});

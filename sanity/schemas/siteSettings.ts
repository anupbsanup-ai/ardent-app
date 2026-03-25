import { defineField, defineType } from "sanity";

// Single-instance document — client can update site-wide settings from the CMS
export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle",   title: "Site Title",     type: "string" }),
    defineField({ name: "tagline",     title: "Tagline",        type: "string" }),
    defineField({ name: "logo",        title: "Logo Image",     type: "image", options: { hotspot: true } }),
    defineField({ name: "email",       title: "Contact Email",  type: "string" }),
    defineField({ name: "phone",       title: "Phone Number",   type: "string" }),
    defineField({ name: "address",     title: "Office Address", type: "text", rows: 2 }),
    defineField({ name: "instagram",   title: "Instagram URL",  type: "url" }),
    defineField({ name: "linkedin",    title: "LinkedIn URL",   type: "url" }),
    defineField({ name: "facebook",    title: "Facebook URL",   type: "url" }),
  ],
  preview: { select: { title: "siteTitle" } },
});

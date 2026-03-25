import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({ name: "clientName",  title: "Client Name",    type: "string",  validation: (r) => r.required() }),
    defineField({ name: "photo",       title: "Client Photo",   type: "image",   options: { hotspot: true } }),
    defineField({ name: "quote",       title: "Quote",          type: "text",    rows: 4, validation: (r) => r.required() }),
    defineField({ name: "location",    title: "Location/Deal",  type: "string" }),
    defineField({ name: "rating",      title: "Star Rating",    type: "number",  validation: (r) => r.min(1).max(5), initialValue: 5 }),
    defineField({ name: "featured",    title: "Featured",       type: "boolean", initialValue: false }),
    defineField({ name: "order",       title: "Display Order",  type: "number",  initialValue: 99 }),
  ],
  preview: {
    select: { title: "clientName", subtitle: "location" },
  },
});

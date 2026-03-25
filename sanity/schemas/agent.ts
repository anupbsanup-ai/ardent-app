import { defineField, defineType } from "sanity";

export default defineType({
  name: "agent",
  title: "Agents",
  type: "document",
  fields: [
    defineField({ name: "name",       title: "Full Name",    type: "string",  validation: (r) => r.required() }),
    defineField({ name: "slug",       title: "Slug",         type: "slug",    options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "photo",      title: "Photo",        type: "image",   options: { hotspot: true } }),
    defineField({ name: "title",      title: "Job Title",    type: "string" }),
    defineField({ name: "bio",        title: "Short Bio",    type: "text",    rows: 3 }),
    defineField({ name: "email",      title: "Email",        type: "string" }),
    defineField({ name: "phone",      title: "Phone",        type: "string" }),
    defineField({ name: "instagram",  title: "Instagram URL",type: "url" }),
    defineField({ name: "linkedin",   title: "LinkedIn URL", type: "url" }),
    defineField({ name: "featured",   title: "Featured Agent",type: "boolean",initialValue: false }),
    defineField({ name: "order",      title: "Display Order",type: "number",  initialValue: 99 }),
    defineField({
      name: "stats",
      title: "Agent Stats",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "label", title: "Label", type: "string" },
          { name: "value", title: "Value", type: "string" },
        ],
      }],
    }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "title", media: "photo" },
  },
});

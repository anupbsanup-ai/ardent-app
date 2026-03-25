import { defineField, defineType } from "sanity";

export default defineType({
  name: "listing",
  title: "Property Listings",
  type: "document",
  fields: [
    defineField({ name: "title",       title: "Property Title",  type: "string",  validation: (r) => r.required() }),
    defineField({ name: "slug",        title: "Slug",            type: "slug",    options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "status",      title: "Status",          type: "string",  options: { list: ["For Sale","For Rent","Sold","Pending"], layout: "radio" }, initialValue: "For Sale" }),
    defineField({ name: "price",       title: "Price ($)",       type: "number" }),
    defineField({ name: "images",      title: "Photos",          type: "array",   of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "address",     title: "Street Address",  type: "string" }),
    defineField({ name: "city",        title: "City",            type: "string" }),
    defineField({ name: "state",       title: "State",           type: "string" }),
    defineField({ name: "zip",         title: "ZIP Code",        type: "string" }),
    defineField({ name: "bedrooms",    title: "Bedrooms",        type: "number" }),
    defineField({ name: "bathrooms",   title: "Bathrooms",       type: "number" }),
    defineField({ name: "sqft",        title: "Square Footage",  type: "number" }),
    defineField({ name: "description", title: "Description",     type: "array",   of: [{ type: "block" }] }),
    defineField({ name: "featured",    title: "Featured Listing",type: "boolean", initialValue: false }),
    defineField({
      name: "agent",
      title: "Listing Agent",
      type: "reference",
      to: [{ type: "agent" }],
    }),
    defineField({ name: "publishedAt", title: "Published Date", type: "datetime" }),
  ],
  preview: {
    select: { title: "title", subtitle: "address", media: "images.0" },
  },
});

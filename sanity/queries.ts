// ── GROQ queries for all Sanity data ──────────────────────────

export const FEATURED_AGENTS_QUERY = `
  *[_type == "agent" && featured == true] | order(order asc) {
    _id, name, title, bio, email, phone, instagram, linkedin, order,
    "photoUrl": photo.asset->url,
    stats
  }
`;

export const ALL_AGENTS_QUERY = `
  *[_type == "agent"] | order(order asc) {
    _id, name, title, bio, email, phone, instagram, linkedin,
    "photoUrl": photo.asset->url,
    "slug": slug.current,
    stats
  }
`;

export const AGENT_BY_SLUG_QUERY = `
  *[_type == "agent" && slug.current == $slug][0] {
    _id, name, title, bio, email, phone, instagram, linkedin,
    "photoUrl": photo.asset->url,
    stats
  }
`;

export const FEATURED_TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && featured == true] | order(order asc) {
    _id, clientName, quote, location, rating,
    "photoUrl": photo.asset->url
  }
`;

export const FEATURED_LISTINGS_QUERY = `
  *[_type == "listing" && featured == true] | order(publishedAt desc) {
    _id, title, status, price, address, city, state, bedrooms, bathrooms, sqft,
    "slug": slug.current,
    "coverImage": images[0].asset->url,
    "agent": agent->{ name, "photoUrl": photo.asset->url }
  }
`;

export const ALL_LISTINGS_QUERY = `
  *[_type == "listing"] | order(publishedAt desc) {
    _id, title, status, price, address, city, state, bedrooms, bathrooms, sqft,
    "slug": slug.current,
    "coverImage": images[0].asset->url,
    "agent": agent->{ name, "photoUrl": photo.asset->url }
  }
`;

export const LISTING_BY_SLUG_QUERY = `
  *[_type == "listing" && slug.current == $slug][0] {
    _id, title, status, price, address, city, state, zip, bedrooms, bathrooms, sqft,
    description, publishedAt,
    "images": images[].asset->url,
    "agent": agent->{ name, title, email, phone, "photoUrl": photo.asset->url }
  }
`;

export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    siteTitle, tagline, email, phone, address,
    instagram, linkedin, facebook,
    "logoUrl": logo.asset->url
  }
`;

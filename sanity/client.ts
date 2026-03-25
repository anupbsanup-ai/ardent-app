import { createClient } from "next-sanity";

// Lazy client — only throws at runtime if env vars are missing, not at build time
function getSanityClient() {
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
    dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
    apiVersion: "2024-01-01",
    useCdn:    process.env.NODE_ENV === "production",
  });
}

// Helper: fetch with optional tags for Next.js cache revalidation
export async function sanityFetch<T>({
  query,
  params = {},
  tags  = [],
}: {
  query:   string;
  params?: Record<string, unknown>;
  tags?:   string[];
}): Promise<T> {
  const client = getSanityClient();
  return client.fetch<T>(query, params, {
    next: { tags },
  });
}

export const sanityClient = getSanityClient;

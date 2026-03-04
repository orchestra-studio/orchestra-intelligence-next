import type { MetadataRoute } from "next";

const BASE_URL = "https://www.orchestraintelligence.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/formation",
    "/studio",
    "/pilotage",
    "/methode",
    "/blog",
    "/diagnostic",
    "/trust-center",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    "/cgv",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/diagnostic" ? 0.9 : 0.8,
  }));

  // TODO: Add dynamic blog post URLs from Supabase/data source
  // const blogPosts = await getBlogPosts();
  // const blogEntries = blogPosts.map(...)

  return staticEntries;
}

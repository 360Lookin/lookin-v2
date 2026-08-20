import type { MetadataRoute } from "next";

const baseUrl = "https://lookin.nz";
const lastModified = new Date("2026-08-17T00:00:00+12:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/work/the-white-swan`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work/kahakai-poke-bowls`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work/jusea`,
      lastModified: new Date("2026-08-21T00:00:00+12:00"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

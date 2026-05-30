import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shokujiba-site.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Dispense`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Goods`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Paradise`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/trip`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/upitel`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/TechnologyLand-AI`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
  ];
}
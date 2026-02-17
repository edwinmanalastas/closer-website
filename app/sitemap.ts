import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://closerapp.app";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/privacy`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
    { url: `${baseUrl}/community-guidelines`, lastModified: new Date() },
    { url: `${baseUrl}/safety`, lastModified: new Date() },
    { url: `${baseUrl}/support`, lastModified: new Date() },
  ];
}

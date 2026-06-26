import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://daviduchechukwu.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://daviduchechukwu.vercel.app/sermons",
      lastModified: new Date(),
    },
    {
      url: "https://daviduchechukwu.vercel.app/profile",
      lastModified: new Date(),
    },
  ];
}
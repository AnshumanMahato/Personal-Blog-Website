import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const hostUrl = process.env.HOST_URL;
  const sitemap = [
    {
      url: `${hostUrl}/`,
      lastModified: new Date().toISOString(),
      changefreq: "yearly",
      priority: 1,
    },
    {
      url: `${hostUrl}/about`,
      lastModified: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.7,
    },
    {
      url: `${hostUrl}/projects`,
      lastModified: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.8,
    },
  ];

  //TODO: Add blog posts to sitemap
  //TODO: Add tags to sitemap
  //TODO: Add series to sitemap
  //TODO: Projects info for sitemap after projects integration

  return sitemap;
}

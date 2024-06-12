import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/api/"],
      },
      {
        userAgent: "AdsBot-Google",
        disallow: ["/api/"],
      },
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },
    ],
    sitemap: `${process.env.HOST_URL}/sitemap.xml`,
  };
}

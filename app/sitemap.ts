import { MetadataRoute } from "next";
import { SitemapPostFieldsFragment } from "./schema/hashnode.graphql";
import getPostsSitemapData from "./actions/getPostsSitemapData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const hostUrl = process.env.HOST_URL;
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: `${hostUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${hostUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${hostUrl}/projects`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  // Add blog posts to sitemap
  let posts: SitemapPostFieldsFragment[] = [];
  let after;
  do {
    const postsInfo = await getPostsSitemapData(after);
    if (!postsInfo) break;
    posts = posts.concat(postsInfo.posts);

    if (postsInfo.pageInfo) after = postsInfo.pageInfo.endCursor;
  } while (after);

  sitemap.push({
    url: `${hostUrl}/blogs`,
    lastModified: posts[0].updatedAt || posts[0].publishedAt,
    changeFrequency: "always",
    priority: 1,
  });

  posts.forEach((post) => {
    sitemap.push({
      url: `${hostUrl}/blogs/${post.slug}`,
      lastModified: post.updatedAt || post.publishedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // Add tags to sitemap
  const tags = new Set<string>();
  posts.forEach((post) => {
    if (post.tags) post.tags.forEach((tag) => tags.add(tag.slug));
  });

  tags.forEach((tag) => {
    sitemap.push({
      url: `${hostUrl}/blogs/tag/${tag}`,
      changeFrequency: "always",
      priority: 1,
    });
  });

  // Add series to sitemap
  const series = new Set<string>();
  posts.forEach((post) => {
    if (post.series) series.add(post.series.slug);
  });

  series.forEach((series) => {
    sitemap.push({
      url: `${hostUrl}/blogs/series/${series}`,
      changeFrequency: "always",
      priority: 1,
    });
  });

  //TODO: Projects info for sitemap after projects integration

  return sitemap;
}

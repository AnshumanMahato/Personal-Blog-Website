import RSS from "rss";
import PostsFeedInfo from "@/app/@types/PostsFeedInfo";

const NON_ASCII_REGEX = /[\u{0080}-\u{FFFF}]/gu;

export const constructRSSFeedFromPosts = (
  publication: PostsFeedInfo["publication"],
  posts: PostsFeedInfo["posts"],
  currentCursor?: string | null,
  nextCursor?: string | null
) => {
  //TODO: Change base url to use environment data
  const baseUrl = publication.url;

  const customElements = [
    {
      "atom:link": {
        _attr: {
          rel: "first",
          href: `${baseUrl}/feed.xml`,
        },
      },
    },
  ];
  if (nextCursor) {
    customElements.push({
      "atom:link": {
        _attr: {
          rel: "next",
          href: `${baseUrl}/feed.xml${
            nextCursor ? `?after=${nextCursor}` : ""
          }`,
        },
      },
    });
  }

  const feedConfig = {
    title: `${publication.title || `${publication.author!.name}'s blog`}`,
    description: publication.descriptionSEO || publication.title,
    feed_url: `${baseUrl}/feed.xml${
      currentCursor ? `?after=${currentCursor}` : ""
    }`,
    site_url: baseUrl,
    image_url:
      publication.preferences!.logo ||
      publication.ogMetaData.image ||
      undefined,
    language: "en",
    ttl: 60,
    custom_elements: customElements,
  };

  const feed = new RSS(feedConfig);

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.content!.html!.replace(NON_ASCII_REGEX, ""),
      url: `${baseUrl}/${post.slug}`,
      categories: post.tags!.map((tag: any) => tag.name),
      author: post.author!.name,
      date: post.publishedAt,
      ...(post.coverImage && {
        custom_elements: [{ cover_image: post.coverImage.url }],
      }),
    });
  });

  const xml = feed.xml({ indent: true });
  return xml;
};

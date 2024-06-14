import {
  PostFullFragment,
  PublicationFragment,
} from "@/app/schema/hashnode.graphql";

export const addArticleJsonLd = (
  publication: PublicationFragment,
  post: PostFullFragment
) => {
  const tags = (post.tags ?? []).map((tag) => tag.name);
  const schema = {
    "@context": "https://schema.org/",
    "@type": "BlogPosting",
    "@id": post.url,
    mainEntityOfPage: post.url,
    headline: post.title,
    name: post.title,
    description: post.seo?.description || post.brief,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    articleBody: post.content,
    author: {
      "@type": "Person",
      "@id": `https://hashnode.com/@${post.author?.username}`,
      name: post.author?.name,
      url: `https://hashnode.com/@${post.author?.username}`,
    },
    publisher: {
      "@type": publication.isTeam ? "Organization" : "Person",
      "@id": publication.url,
      name: publication.title,
      description: publication.descriptionSEO,
      image: {
        "@type": "ImageObject",
        url:
          publication.preferences?.logo ||
          publication.preferences?.darkMode?.logo,
      },
    },
    image: {
      "@type": "ImageObject",
      url: post.coverImage?.url,
    },
    url: post.url,
    keywords: tags,
    isPartOf: {
      "@type": "Blog",
      "@id": publication.url,
      mainEntityOfPage: publication.url,
      name: publication.title,
      description: publication.descriptionSEO,
      isPartOf: {
        "@type": "WebSite",
        "@id": process.env.HOST_URL,
      },
    },
  };
  return schema;
};

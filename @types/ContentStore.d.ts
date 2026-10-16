export interface PostBase {
  slug: string;
  title: string;
  subtitle?: string | null;
  publishedAt: string;
  updatedAt?: string | null;
  tags: string[]; // tag slugs or tag objects
  series?: string | null; // series slug
  draft: boolean;
  featured?: boolean;
  canonicalUrl?: string;
  coverImage?: string | null;
  seo?: {
    title?: string;
    description?: string;
  };
  author?: {
    name: string;
    username: string;
  };
}

export type Post = PostBase & {
  excerpt?: string;
  content: string; // markdown body
};

export type TagIndex = {
  [tagSlug: string]: {
    name: string;
    slug: string;
    postSlugs: string[];
  };
};

export type SeriesIndex = {
  [seriesSlug: string]: {
    name: string;
    slug: string;
    coverImage?: string | null;
    postSlugs: string[];
  };
};

export type ContentStore = {
  posts: Post[];
  postsBySlug: Record<string, Post>;
  tagIndex: TagIndex;
  seriesIndex: SeriesIndex;
  allSlugs: string[];
};

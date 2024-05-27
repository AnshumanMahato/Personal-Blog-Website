import getSinglePost from "@/app/actions/getSinglePost";
import Article from "@/app/ui/Article";
import BlogBanner from "@/app/ui/BlogBanner";
import { addArticleJsonLd } from "@/app/utils/seo/addArticleJsonLd";
import { ResolvingMetadata } from "next";
import Link from "next/link";

type Props = Readonly<{
  params: {
    slug: string;
  };
}>;

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
) {
  const data = await getSinglePost(params.slug);
  if (!data) return;
  const { post, publication } = data;

  return {
    title: post?.seo?.title ?? post?.title,
    description: post?.seo?.description ?? post?.subtitle ?? post?.brief,
    alternates: {
      canonical: post?.canonicalUrl ?? post?.url,
    },
    twitter: {
      card: "summary_large_image",
      site: "@AnshumanMahato_",
      title: post?.seo?.title ?? post?.title,
      description: post?.seo?.description ?? post?.subtitle ?? post?.brief,
      images: [post?.ogMetaData?.image, post?.coverImage?.url],
    },
    openGraph: {
      type: "article",
      url: post?.canonicalUrl ?? post?.url,
      title: post?.seo?.title ?? post?.title,
      description: post?.seo?.description ?? post?.subtitle ?? post?.brief,
      site_name: publication?.title,
      images: [post?.ogMetaData?.image, post?.coverImage?.url],
    },
  };
}

async function BlogPost({ params }: Props) {
  const data = await getSinglePost(params.slug);
  if (!data) return <></>;
  const { post, publication } = data;

  const tagsList = (post?.tags ?? []).map((tag) => (
    <li key={tag.id}>
      <Link
        href={`/blogs/tag/${tag.slug}`}
        className="block rounded-full border px-2 py-1 font-medium hover:bg-slate-50 dark:border-neutral-800 dark:hover:bg-neutral-800 md:px-4"
      >
        #{tag.slug}
      </Link>
    </li>
  ));

  return (
    <>
      <BlogBanner
        title={post?.title!}
        series={post?.series}
        coverImage={post?.coverImage?.url!}
      />
      <Article post={post!} />
      {(post?.tags ?? []).length > 0 && (
        <div className="mx-auto w-full text-slate-600 dark:text-neutral-300 md:max-w-screen-md">
          <ul className="flex flex-row flex-wrap items-center gap-2">
            {tagsList}
          </ul>
        </div>
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(addArticleJsonLd(publication, post)),
        }}
      />
    </>
  );
}

export default BlogPost;

import getSinglePost from "@/app/actions/getSinglePost";
import Article from "@/app/components/Article";
import BlogBanner from "@/app/components/BlogBanner";
import Analytics from "@/app/components/Analytics";
import Integrations from "@/app/components/Integrations";
import { addArticleJsonLd } from "@/app/utils/seo/addArticleJsonLd";
import { ResolvingMetadata } from "next";
import { RiChat3Line, RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ParamsProps } from "@/@types/Props";

export async function generateMetadata(
  props: ParamsProps,
  parent: ResolvingMetadata
) {
  const params = await props.params;
  const data = await getSinglePost(params.slug);
  if (!data) notFound();
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

async function BlogPost(props: ParamsProps) {
  const params = await props.params;
  const data = await getSinglePost(params.slug);
  if (!data) return <></>;
  const { post, publication, comments } = data;

  const tagsList = (post.tags ?? []).map((tag) => (
    <li key={tag.id}>
      <Link
        href={`/blogs/tag/${tag.slug}`}
        className="block rounded-full hover:text-accent-dark dark:hover:text-accent-dark text-secondary-light dark:text-secondary-dark border border-secondary-light dark:border-secondary-dark px-[1rem] py-[5px] font-medium md:px-4"
      >
        #{tag.slug}
      </Link>
    </li>
  ));

  return (
    <>
      <BlogBanner
        title={post.title!}
        series={post.series}
        coverImage={post.coverImage?.url!}
      />
      <Article post={post} />
      {
        <Link
          href={`https://hashnode.com/discussions/post/${post.id}`}
          target="_blank"
          className="w-full bg-white/50 dark:bg-black/50 rounded-[1rem] shadow-lg shadow-black/5 dark:shadow-white/5 border border-black/10 dark:border-white/10 p-[2rem] flex justify-between items-center"
        >
          <span className="flex items-center gap-[5px]">
            {comments} {comments === 1 ? "Comment" : "Comments"}
            <RiExternalLinkLine />
          </span>
          <span className="flex items-center gap-[5px]">
            Add a Comment
            <RiChat3Line />
          </span>
        </Link>
      }
      {tagsList.length > 0 && (
        <div className="mx-auto w-full text-slate-600 dark:text-neutral-300 md:max-w-oint-md)">
          <ul className="flex flex-row flex-wrap items-center gap-[1rem]">
            {tagsList}
          </ul>
        </div>
      )}
      <script
        id="json-ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(addArticleJsonLd(publication, post)),
        }}
      />
      <Integrations
        publication={{
          integrations: publication.integrations,
          url: publication.url,
        }}
      />
      <Analytics publication={{ id: publication.id }} post={{ id: post.id }} />
    </>
  );
}

export default BlogPost;

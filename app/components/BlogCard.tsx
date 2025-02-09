import Link from "next/link";
import { AiOutlineRead } from "react-icons/ai";
import { PostFragment } from "../schema/hashnode.graphql";

type Props = Readonly<{
  post: PostFragment;
}>;

function BlogCard({ post }: Props) {
  const tagsList = (post.tags ?? []).map((tag) => (
    <li key={tag.id}>
      <span className="block text-secondary-light dark:text-secondary-dark font-medium text-[1rem] xs:text-[1.4rem]">
        #{tag.slug}
      </span>
    </li>
  ));

  const publishedAt = new Date(post.publishedAt);

  return (
    <Link
      className="w-full max-w-[64rem]"
      href={{ pathname: `/blogs/${post.slug}` }}
    >
      <div className="cursor-pointer w-full flex flex-col gap-[5px] p-[8px] xs:p-[1rem] sm:p-[2rem] sm:pr-[7rem] border-b-[1px] border-b-secondary-light dark:border-b-secondary-dark [&:hover>h3]:text-accent-light dark:[&:hover>h3]:text-accent-dark">
        <span className="text-[1.2rem] min-[430px]:text-[1.6rem] leading-[150%] text-secondary-light dark:text-secondary-dark">
          {Intl.DateTimeFormat("en-US", {
            day: "numeric",
            month: "short",
            year:
              publishedAt.getFullYear() === new Date().getFullYear()
                ? undefined
                : "numeric",
          }).format(publishedAt)}
        </span>
        <h3 className="text-black dark:text-white text-[1.6rem] xs:text-[2rem] leading-[150%]">
          {post.title}
        </h3>
        {tagsList.length > 0 && (
          <div className="mx-auto w-full text-slate-600 dark:text-neutral-300)">
            <ul className="flex flex-row flex-wrap items-center gap-2 xs:gap-3">
              {tagsList}
            </ul>
          </div>
        )}
        <div className="pt-5 text-[1.2rem] min-[430px]:text-[1.6rem]  leading-[150%] flex justify-end gap-[5px] items-center text-secondary-light dark:text-secondary-dark">
          {post.readTimeInMinutes > 0 && (
            <>
              <AiOutlineRead className="text-[1.4rem] min-[430px]:text-[1.8rem]" />
              <span>
                {Intl.NumberFormat("en-US", {
                  notation: "compact",
                  compactDisplay: "short",
                }).format(post.readTimeInMinutes)}
                &nbsp;min read
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;

import Link from "next/link";
import { PostFragment } from "../schema/hashnode.graphql";

type Props = Readonly<{
  post: PostFragment;
}>;

function BlogCard({ post }: Props) {
  return (
    <Link
      className="w-full max-w-[64rem]"
      href={{ pathname: `/blogs/${post.slug}` }}
    >
      <div className="cursor-pointer w-full flex flex-col gap-[5px] p-[8px] xs:p-[1rem] sm:p-[2rem] sm:pr-[7rem] border-b-[1px] border-b-secondary-light dark:border-b-secondary-dark [&:hover>h3]:text-accent-light dark:[&:hover>h3]:text-accent-dark">
        <h3 className="text-black dark:text-white text-[1.6rem] xs:text-[2rem] leading-[150%]">
          {post.title}
        </h3>
        <div className="text-[1.2rem] min-[430px]:text-[1.6rem] leading-[150%] flex gap-[5px] sm:gap-[2rem] items-center text-secondary-light dark:text-secondary-dark">
          <span>
            {Intl.DateTimeFormat("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(new Date(post.publishedAt))}
          </span>
          {post.views > 0 && (
            <>
              <hr className="h-[4px] w-[4px] border-none rounded-full bg-primary-light dark:bg-primary-dark" />
              <span>
                {Intl.NumberFormat("en-US", {
                  notation: "compact",
                  compactDisplay: "short",
                }).format(post.views)}
                &nbsp;views
              </span>
            </>
          )}
          {post.comments.totalDocuments > 0 && (
            <>
              <hr className="h-[4px] w-[4px] border-none rounded-full bg-primary-light dark:bg-primary-dark" />
              <span>
                {Intl.NumberFormat("en-US", {
                  notation: "compact",
                  compactDisplay: "short",
                }).format(post.comments.totalDocuments)}
                &nbsp;Comments
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;

import Image from "next/image";
import Link from "next/link";
import { SeriesFragment } from "../schema/graphql";

type Props = Readonly<{
  title: string;
  series?: SeriesFragment | null;
  coverImage?: string;
}>;

function BlogBanner({ title, series, coverImage }: Props) {
  return (
    <section className="col-span-full flex flex-col gap-[2rem]">
      <div className="flex flex-col gap-[1rem] sm:gap-[2rem]">
        {series && (
          <h3 className="capitalize leading-[150%] text-[1.2rem] xs:text-[1.6rem] sm:text-[2rem] pl-[5px] xs:pl-[1rem]">
            Series:&nbsp;
            <Link
              className="hover:text-accent-dark"
              href={`/blogs/series/${series.slug}`}
            >
              {series.name}
            </Link>
          </h3>
        )}
        <div className="relative w-full aspect-w-2 aspect-h-1 sm:aspect-w-7 sm:aspect-h-3 overflow-hidden rounded-[1rem] sm:rounded-[2rem] drop-shadow-sm">
          {coverImage && (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover object-center"
            />
          )}
        </div>
      </div>
      <h1 className="sm:mt-[2rem] w-full text-white font-semibold text-[3rem] xs:text-[3.6rem] sm:text-[4.8rem] leading-[120%]">
        {title}
      </h1>
    </section>
  );
}

export default BlogBanner;

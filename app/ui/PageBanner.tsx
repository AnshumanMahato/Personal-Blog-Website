import Image from "next/image";

type Props = Readonly<{
  title: string;
  coverImage: string;
  coverImageAlt: string;
}>;

function PageBanner({ title, coverImage, coverImageAlt }: Props) {
  return (
    <section className="col-span-full flex flex-col gap-[2rem]">
      <h2 className="uppercase leading-[150%] text-[1.2rem] tracking-[5.4px] xs:text-[1.6rem] xs:tracking-[7.2px] pl-[5px] xs:pl-[1rem]">
        {title}
      </h2>
      <div className="relative w-full aspect-w-2 aspect-h-1 sm:aspect-w-7 sm:aspect-h-3 overflow-hidden bg-secondary-light dark:bg-secondary-dark rounded-[1rem] sm:rounded-[2rem] drop-shadow-sm">
        <Image
          src={coverImage}
          alt={coverImageAlt}
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}

export default PageBanner;

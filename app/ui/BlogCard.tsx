function BlogCard() {
  return (
    <div className="cursor-pointer w-full max-w-[64rem] flex flex-col gap-[5px] p-[8px] xs:p-[1rem] sm:p-[2rem] sm:pr-[7rem] border-b-[1px] border-b-secondary-dark">
      <h3 className="text-white text-[1.6rem] xs:text-[2rem] leading-[150%]">
        Blog Heading
      </h3>
      <div className="text-[1.2rem] min-[430px]:text-[1.6rem] leading-[150%] flex gap-[5px] sm:gap-[2rem] items-center text-secondary-dark">
        <span>06 April 2024</span>
        <hr className="h-[4px] w-[4px] border-none rounded-full bg-primary-dark" />
        <span>124K views</span>
        <hr className="h-[4px] w-[4px] border-none rounded-full bg-primary-dark" />
        <span>124K Comments</span>
      </div>
    </div>
  );
}

export default BlogCard;

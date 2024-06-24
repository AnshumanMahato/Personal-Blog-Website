import Image from "next/image";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-evenly gap-[4rem]">
      <Image
        className="hidden dark:block"
        src="/assets/images/404-line-dark.svg"
        width={300}
        height={300}
        alt="404 Not Found"
      />
      <Image
        className="dark:hidden"
        src="/assets/images/404-line-light.svg"
        width={300}
        height={300}
        alt="404 Not Found"
      />
      <p>The Page you&apos;re looking for does not exist.</p>
    </div>
  );
}

export default NotFound;

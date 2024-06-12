import { FaHashnode, FaDev } from "react-icons/fa6";
import PageBanner from "@/app/components/PageBanner";
import PageCTA from "@/app/components/PageCTA";
import PageHeading from "@/app/components/PageHeading";
import Section from "@/app/components/Section";
import BlogCardContainer from "@/app/components/BlogCardContainer";
import getAllPosts from "@/app/actions/getAllPosts";

async function Blogs() {
  const socials = [
    {
      href: "https://dev.to/anshumanmahato",
      icon: <FaDev />,
      handle: "/anshumanmahato",
    },
    {
      href: "https://hashnode.com/@AnshumanMahato",
      icon: <FaHashnode />,
      handle: "@AnshumanMahato",
    },
  ];

  const posts = await getAllPosts();

  return (
    <>
      <PageBanner title="Blogs" coverImage="/next.svg" coverImageAlt="next" />
      <Section>
        <PageHeading>Blogs &amp; Articles.</PageHeading>
        <div className="flex flex-col gap-[2rem]">
          <p>
            These are some awesome projects that I have made. Some for fun, some
            for learning and some to showcase my skillset.
          </p>
        </div>
      </Section>
      <BlogCardContainer
        initialBlogs={posts?.posts ?? []}
        initialPageInfo={
          posts?.pageInfo ?? { hasNextPage: false, endCursor: "" }
        }
      />
      <PageCTA links={socials} />
    </>
  );
}

export default Blogs;

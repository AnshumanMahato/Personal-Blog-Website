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
      <PageBanner
        title="Blogs"
        coverImage="/assets/images/blogcover1.jpg"
        coverImageAlt="blogs-cover"
      />
      <Section>
        <PageHeading>Blogs &amp; Articles.</PageHeading>
        <div className="flex flex-col gap-[2rem]">
          <p>
            Welcome to my blog! Here, you&apos;ll find articles on web dev,
            technology trends, and my personal experiences as a developer.
            Whether you&apos;re here to learn, get inspired, or explore new
            ideas, I hope you enjoy reading my posts as much as I enjoy writing
            them!
          </p>
        </div>
      </Section>
      <PageCTA links={socials} />
      <BlogCardContainer
        initialBlogs={posts?.posts ?? []}
        initialPageInfo={
          posts?.pageInfo ?? { hasNextPage: false, endCursor: "" }
        }
      />
    </>
  );
}

export default Blogs;

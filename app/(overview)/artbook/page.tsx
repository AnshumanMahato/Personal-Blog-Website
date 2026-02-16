import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import PageHeading from "@/app/components/PageHeading";
import PageBanner from "@/app/components/PageBanner";
import Section from "@/app/components/Section";
import PageCTA from "@/app/components/PageCTA";
import { Metadata } from "next";
import { addAboutJsonLd } from "@/app/utils/seo/addAboutJsonLd";
import profile from "@/app/lib/profile.json";
import Link from "next/link";
import Image from "next/image";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";
import artworks from "@/app/lib/artworks.json";

export const metadata: Metadata = {
  title: `Artbook | ${profile.name}`,
  description: profile.headline,
  twitter: {
    card: "summary_large_image",
    site: profile.handles.socials.twitter,
    title: `Artbook | ${profile.name}`,
    description: profile.headline,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `Artbook | ${profile.name}`,
    description: profile.headline,
  },
};

const { twitter, linkedin } = profile.handles.socials;

function About() {
  const socials = [
    {
      href: twitter,
      icon: <FaXTwitter />,
      handle: `@${twitter.split("/").pop()}`,
    },
    {
      href: linkedin,
      icon: <FiLinkedin />,
      handle: `/${linkedin.split("/").pop()}`,
    },
    {
      href: `mailto:${profile.email}`,
      icon: <MdOutlineEmail />,
      handle: profile.email,
    },
  ];

  return (
    <>
      <GoogleAnalytics />
      <PageBanner
        title="Artbook"
        coverImage="/assets/images/aboutcover.png"
        coverImageAlt="artbook"
      />
      <Section className="col-span-full">
        <PageHeading>I&apos;m Anshuman.</PageHeading>
        <div className="columns-xs gap-[1rem]">
          {artworks.map((artwork) => (
            <Image
              key={artwork.filename}
              src={`/assets/art/${artwork.filename}`}
              width={artwork.dimensions.width}
              height={artwork.dimensions.height}
              alt={artwork.alt}
              className=" mb-[1rem]"
            />
          ))}
        </div>
      </Section>
      <script
        id="about-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(addAboutJsonLd()),
        }}
      />
    </>
  );
}

export default About;

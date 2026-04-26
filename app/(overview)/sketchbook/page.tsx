import PageHeading from "@/app/components/PageHeading";
import PageBanner from "@/app/components/PageBanner";
import Section from "@/app/components/Section";
import { Metadata } from "next";
import { addSketchbookJsonLd } from "@/app/utils/seo/addSketchbookJsonLd";
import profile from "@/app/lib/profile.json";
import Image from "next/image";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";
import artworks from "@/app/lib/artworks.json";

export const metadata: Metadata = {
  title: `Sketchbook | ${profile.name}`,
  description: profile.headline,
  twitter: {
    card: "summary_large_image",
    site: profile.handles.socials.twitter,
    title: `Sketchbook | ${profile.name}`,
    description: profile.headline,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `Sketchbook | ${profile.name}`,
    description: profile.headline,
  },
};

function About() {
  return (
    <>
      <GoogleAnalytics />
      <PageBanner
        title="Sketchbook"
        coverImage="/assets/images/aboutcover.png"
        coverImageAlt="sketchbook"
      />
      <Section>
        <PageHeading>Drawings &amp; Sketches</PageHeading>
        <div className="flex flex-col gap-[2rem]">
          <p>
            Welcome to my art space! This is where I put together sketches,
            ideas, and anything visual that I feel like creating. It’s not
            always planned - just things that caught my attention and felt worth
            exploring and putting down. I enjoy the process as much as the
            outcome, and this is where I keep a part of that.
          </p>
        </div>
      </Section>
      <div> </div>
      <div className="columns-xs gap-[1rem] col-span-full">
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
      <script
        id="sketchbook-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(addSketchbookJsonLd()),
        }}
      />
    </>
  );
}

export default About;

import profile from "@/app/lib/profile.json";

export const addAboutJsonLd = () => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": ["AboutPage", "WebPage"],
    "@id": `${process.env.HOST_URL}/about`,
    name: "About Me",
    url: `${process.env.HOST_URL}/about`,
    mainEntityOfPage: {
      "@type": "Person",
      name: profile.name,
      description: profile.headline,
      image: profile.photo,
      email: profile.email,
      url: process.env.HOST_URL,
      jobTitle: profile.profession,
      knowsAbout: profile.skills,
      sameAs: Object.values(profile.handles).flatMap((handle) => [
        ...Object.values(handle),
      ]),
    },
    isPartOf: {
      "@type": "WebSite",
      name: profile.name,
      url: process.env.HOST_URL,
    },
  };
  return schema;
};

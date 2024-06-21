import profile from "@/app/lib/profile.json";

export const addProjectJsonLd = () => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "@id": `${process.env.HOST_URL}/projects`,
    mainEntityOfPage: `${process.env.HOST_URL}/projects`,
    name: `Projects | ${profile.name}`,
    isPartOf: {
      "@type": "WebSite",
      name: profile.name,
      url: process.env.HOST_URL,
    },
  };
  return schema;
};

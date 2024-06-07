import profile from "@/app/lib/profile.json";

export const addHomeJsonLd = () => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "@id": process.env.HOST_URL,
    url: process.env.HOST_URL,
    name: profile.name,
    description: profile.headline,
    isPartOf: {
      "@type": "WebSite",
      name: profile.name,
      url: process.env.HOST_URL,
    },
  };
  return schema;
};

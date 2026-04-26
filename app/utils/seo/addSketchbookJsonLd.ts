import profile from "@/app/lib/profile.json";

export const addSketchbookJsonLd = () => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "VisualArtwork",
    "@id": `${process.env.HOST_URL}/sketchbook`,
    mainEntityOfPage: `${process.env.HOST_URL}/sketchbook`,
    name: `Sketchbook | ${profile.name}`,
    isPartOf: {
      "@type": "WebSite",
      name: profile.name,
      url: process.env.HOST_URL,
    },
  };
  return schema;
};

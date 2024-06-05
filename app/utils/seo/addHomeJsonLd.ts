export const addHomeJsonLd = () => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "@id": process.env.BASE_URL,
    url: process.env.BASE_URL,
    name: "Anshuman Mahato",
  };
  return schema;
};

import type { MetadataRoute } from "next";

const BASE_URL = "https://lpmoe.com";

const projects = [
  "agen",
  "bouillac",
  "fronton",
  "grenade",
  "launac",
  "levignac",
  "saint-cezert-1",
  "saint-cezert-2",
];

// "prix-construction-maison-haute-garonne-2026" est volontairement exclu :
// cette URL redirige (308) vers maitre-oeuvre-architecte-constructeur, un
// sitemap ne doit lister que des URLs finales et indexables.
const guides = [
  "etapes-construction-maison-individuelle",
  "maitre-oeuvre-architecte-constructeur",
  "norme-re2020-construction-maison",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...guides.map((slug) => ({
      url: `${BASE_URL}/guides/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...projects.map((slug) => ({
      url: `${BASE_URL}/projets/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${BASE_URL}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/politique-de-confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const routes = [
    "",
    "/programme",
    "/12-mesures",
    "/equipe",
    "/actus",
    "/rejoindre",
    "/contact",
    "/documents",
    "/mentions-legales",
    "/confidentialite",
    "/accessibilite",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}

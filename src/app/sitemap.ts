import type { MetadataRoute } from "next";

const routes = [
  "",
  "/projects",
  "/projects/personal-site",
  "/projects/game-server",
  "/blog",
  "/blog/my-first-site",
  "/blog/cpp-server-notes",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-26");

  return routes.map((route) => ({
    url: `https://hrzou.com${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/projects" || route === "/blog" ? 0.8 : 0.6,
  }));
}

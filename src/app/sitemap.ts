import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/blog";

const siteUrl = "https://hrzou.cn";
const staticRoutes = [
  "",
  "/about",
  "/projects",
  "/projects/personal-site",
  "/projects/game-server",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/projects" || route === "/blog" ? 0.8 : 0.6,
  }));

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}

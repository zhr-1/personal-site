import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://hrzou.cn/sitemap.xml",
    host: "https://hrzou.cn",
  };
}

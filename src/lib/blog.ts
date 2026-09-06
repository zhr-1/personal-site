import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import html from "remark-html";
import { remark } from "remark";

const blogDirectory = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

type BlogPostSource = BlogPostMeta & {
  contentMarkdown: string;
};

function readRequiredString(
  value: unknown,
  field: string,
  fileName: string,
): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${fileName} 缺少有效的 ${field} 字段`);
  }

  return value.trim();
}

function readTags(value: unknown, fileName: string): string[] {
  if (!Array.isArray(value) || !value.every((tag) => typeof tag === "string")) {
    throw new Error(`${fileName} 的 tags 字段必须是字符串数组`);
  }

  return value.map((tag) => tag.trim()).filter(Boolean);
}

function readPostSource(fileName: string): BlogPostSource {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(blogDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const date = readRequiredString(data.date, "date", fileName);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date))) {
    throw new Error(`${fileName} 的 date 字段必须使用 YYYY-MM-DD 格式`);
  }

  return {
    slug,
    title: readRequiredString(data.title, "title", fileName),
    description: readRequiredString(data.description, "description", fileName),
    date,
    tags: readTags(data.tags, fileName),
    contentMarkdown: content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  const posts = fs
    .readdirSync(blogDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => {
      const post = readPostSource(entry.name);

      return {
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        tags: post.tags,
      };
    });

  return posts.sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date) || a.slug.localeCompare(b.slug),
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(slug)) {
    return null;
  }

  const fileName = `${slug}.md`;
  const fullPath = path.join(blogDirectory, fileName);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const { contentMarkdown, ...post } = readPostSource(fileName);
  const processedContent = await remark().use(html).process(contentMarkdown);

  return {
    ...post,
    contentHtml: processedContent.toString(),
  };
}

import type { Metadata } from "next";

import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "技术博客",
  description:
    "记录 C++、Linux、网络编程、Redis、MySQL 和服务器开发相关内容。",
};

export default function BlogPage() {
  return (
    <main className="mx-auto min-h-[calc(100svh-8.5rem)] w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          博客
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-zinc-500">
          关于 C++、Linux、网络编程、Docker，以及服务端开发过程中的学习和实践。
        </p>
      </header>

      <div>
        {blogPosts.map((post, index) => (
          <BlogCard
            key={post.href}
            index={index + 1}
            title={post.title}
            summary={post.summary}
            date={post.date}
            href={post.href}
            topics={post.topics}
          />
        ))}
      </div>
    </main>
  );
}

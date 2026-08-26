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
    <main className="min-h-screen bg-zinc-950 px-5 py-16 text-zinc-100 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="border-b border-white/10 pb-10">
          <p className="text-sm font-medium text-emerald-400">BLOG</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            技术博客
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
            记录 C++、Linux、网络编程、Redis、MySQL、
            Docker 和服务器开发过程中遇到的问题与实践。
          </p>
        </div>

        <div className="mt-6">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.href}
              title={post.title}
              summary={post.summary}
              date={post.date}
              href={post.href}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

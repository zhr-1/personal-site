import Link from "next/link";

import { getAllPosts } from "@/lib/blog";

const focus = ["C++", "Linux", "网络编程", "Redis", "MySQL"];

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <main className="mx-auto flex min-h-[calc(100svh-8.5rem)] w-full max-w-3xl items-center px-5 py-14 sm:px-8 sm:py-20">
      <div className="w-full">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          邹华仁
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
          你好，我是一名专注于 C++ 服务端开发的开发者。
          我喜欢研究网络编程、数据存储和游戏服务器架构，也在这里记录项目与学习过程。
        </p>

        <div className="mt-9 space-y-3 text-sm leading-7 text-zinc-600">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <span className="w-20 shrink-0 text-zinc-400">正在学习</span>
            <span>C++ 服务端、Linux 网络编程与并发模型</span>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <span className="w-20 shrink-0 text-zinc-400">正在构建</span>
            <span>
              <Link href="/projects/game-server" className="link-underline text-zinc-800">
                C++ 游戏服务器
              </Link>
              <span className="mx-2 text-zinc-300">·</span>
              <Link href="/projects/personal-site" className="link-underline text-zinc-800">
                个人技术网站
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <span className="w-20 shrink-0 text-zinc-400">关注方向</span>
            <span>{focus.join(" · ")}</span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href="/projects" className="link-arrow text-zinc-700">
            查看项目 <span aria-hidden="true">→</span>
          </Link>
          <Link href="/about" className="link-arrow text-zinc-700">
            关于我 <span aria-hidden="true">→</span>
          </Link>
        </div>

        <section className="mt-12" aria-labelledby="latest-posts-heading">
          <div className="flex items-center justify-between gap-4">
            <h2 id="latest-posts-heading" className="text-sm font-medium text-zinc-800">
              最近文章
            </h2>
            <Link href="/blog" className="link-arrow text-xs text-zinc-400">
              查看全部文章 <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-3 border-y border-zinc-200">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-baseline justify-between gap-5 border-b border-zinc-200 py-3 last:border-b-0"
              >
                <span className="text-sm text-zinc-600 transition group-hover:text-emerald-600">
                  {post.title}
                </span>
                <time
                  dateTime={post.date}
                  className="shrink-0 font-mono text-xs text-zinc-400"
                >
                  {post.date}
                </time>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

import Link from "next/link";

import BlogCard from "@/components/BlogCard";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/blog";

const focus = ["Linux", "Network Programming", "Game Server Architecture"];

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-20">
      <section className="relative overflow-hidden py-8 sm:py-16" aria-labelledby="hero-heading">
        <div
          aria-hidden="true"
          className="absolute right-0 top-2 -z-10 size-56 rounded-full bg-emerald-500/5 blur-3xl sm:size-80"
        />

        <p className="font-mono text-xs tracking-[0.24em] text-emerald-600">HELLO, I&apos;M</p>
        <h1
          id="hero-heading"
          className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-zinc-900 sm:text-7xl"
        >
          邹华仁
        </h1>
        <p className="mt-5 text-xl font-medium tracking-tight text-zinc-800 sm:text-2xl">
          C++ Server Developer
        </p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
          专注于 C++ 服务端开发，持续学习 Linux、网络编程与游戏服务器架构。
          这里记录我正在做的项目、技术实践和成长过程。
        </p>

        <ul className="mt-7 flex flex-wrap gap-2" aria-label="技术方向">
          {focus.map((item) => (
            <li
              key={item}
              className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 font-mono text-xs text-zinc-500 dark:bg-zinc-900/60"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-zinc-900 px-5 text-sm font-medium text-white transition hover:bg-emerald-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-emerald-400"
          >
            查看项目
          </Link>
          <Link
            href="/blog"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-zinc-200 px-5 text-sm font-medium text-zinc-700 transition hover:border-emerald-500/50 hover:text-emerald-600"
          >
            阅读博客
          </Link>
        </div>
      </section>

      <section className="mt-20 sm:mt-28" aria-labelledby="featured-projects-heading">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-emerald-600">PROJECTS</p>
            <h2
              id="featured-projects-heading"
              className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
            >
              项目
            </h2>
          </div>
          <Link href="/projects" className="link-arrow shrink-0 text-sm text-zinc-500">
            查看全部项目 <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.href} {...project} index={index + 1} />
          ))}
        </div>
      </section>

      <section className="mt-20 sm:mt-28" aria-labelledby="latest-posts-heading">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-emerald-600">BLOG</p>
            <h2
              id="latest-posts-heading"
              className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
            >
              最近文章
            </h2>
          </div>
          <Link href="/blog" className="link-arrow shrink-0 text-sm text-zinc-500">
            查看全部文章 <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {latestPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              index={index + 1}
              title={post.title}
              description={post.description}
              date={post.date}
              href={`/blog/${post.slug}`}
              tags={post.tags}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

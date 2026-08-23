import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blogPosts";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-zinc-100">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-6xl">
          <p className="mb-4 text-sm font-medium text-emerald-400">
            C++ Server Developer
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            你好，我是华仁
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            我专注于 C++ 服务端开发，关注 Linux、网络编程、Redis、MySQL
            和游戏服务器架构。这里将用于展示我的项目与技术文章。
          </p>
        </div>
      </section>

      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">项目</h2>

          <p className="mt-4 text-zinc-400">
            一些我正在开发和研究的项目。
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard
                key={project.href}
                title={project.title}
                description={project.description}
                tech={project.tech}
                href={project.href}
                status={project.status}
              />
            ))}
          </div>

          <Link
            href="/projects"
            className="mt-8 inline-block text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
          >
            查看全部项目 →
          </Link>
        </div>
      </section>

      <section id="blog" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">博客</h2>

          <p className="mt-4 text-zinc-400">
            记录 C++、Linux、网络编程和服务器开发相关内容。
          </p>

          <div className="mt-8">
              {blogPosts.slice(0, 2).map((post) => (
                <BlogCard
                  key={post.href}
                  title={post.title}
                  summary={post.summary}
                  date={post.date}
                  href={post.href}
                />
              ))}
            </div>

            <Link
              href="/blog"
              className="mt-8 inline-block text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
            >
              查看全部文章 →
            </Link>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">关于我</h2>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <p className="leading-8 text-zinc-400">
                我是一名专注于 C++ 服务端开发的开发者，对 Linux、
                网络编程、并发编程、Redis、MySQL 和游戏服务器架构感兴趣。
              </p>

              <p className="mt-4 leading-8 text-zinc-400">
                这个网站用于记录我的技术学习、项目实践和开发经验。
                后续也会持续加入新的项目和技术文章。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">技术栈</h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "C++",
                  "Linux",
                  "TCP/IP",
                  "Redis",
                  "MySQL",
                  "Docker",
                  "CMake",
                  "Git",
                  "Next.js",
                  "TypeScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



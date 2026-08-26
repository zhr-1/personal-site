import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "个人技术网站",
  description: "我的个人技术网站项目介绍。",
};

export default function PersonalSiteProjectPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-16 text-zinc-100 sm:px-6 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/projects"
          className="text-sm text-zinc-500 transition hover:text-zinc-200"
        >
          ← 返回项目
        </Link>

        <p className="mt-10 text-sm font-medium text-emerald-400">
          开发中
        </p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          个人技术网站
        </h1>

        <p className="mt-8 text-lg leading-8 text-zinc-400">
          这是我的个人技术网站，用于展示个人项目、技术博客以及
          C++ 服务端开发相关内容。
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          技术栈
        </h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {["Next.js", "TypeScript", "Tailwind CSS", "Docker"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ),
          )}
        </div>

        <h2 className="mt-12 text-2xl font-semibold">
          开发环境
        </h2>

        <p className="mt-4 leading-8 text-zinc-400">
          网站首先在 VMware Ubuntu 24.04 环境中开发和测试，
          完成后将通过 Docker 部署到腾讯云 Ubuntu 服务器。
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          项目目标
        </h2>

        <p className="mt-4 leading-8 text-zinc-400">
          除了作为个人主页，这个项目也用于实践 Linux、
          Docker、Nginx、HTTPS、CI/CD 以及云服务器部署。
        </p>
      </article>
    </main>
  );
}

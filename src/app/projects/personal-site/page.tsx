import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "个人技术网站",
  description: "我的个人技术网站项目介绍。",
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function PersonalSiteProjectPage() {
  return (
    <main className="min-h-screen px-5 py-14 sm:px-8 sm:py-20">
      <article className="mx-auto max-w-2xl">
        <Link
          href="/projects"
          className="text-sm text-zinc-400 transition hover:text-emerald-600"
        >
          ← 返回项目
        </Link>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-y border-zinc-200 py-4 font-mono text-xs text-zinc-400">
          <span>WEB / INFRASTRUCTURE</span>
          <span className="text-emerald-600">● 开发中</span>
        </div>

        <h1 className="mt-10 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          个人技术网站
        </h1>

        <p className="mt-8 text-lg leading-9 text-zinc-600">
          这是我的个人技术网站，用于展示个人项目、技术博客以及
          C++ 服务端开发相关内容。
        </p>

        <section className="mt-12 rounded-lg bg-zinc-100 p-5 sm:p-6">
          <div className="flex items-center justify-between font-mono text-[10px] text-zinc-600">
            <span>production.request_flow</span>
            <span>hrzou.com</span>
          </div>
          <div className="mt-5 flex flex-col items-stretch gap-2 font-mono text-xs text-zinc-600 sm:flex-row sm:items-center">
            {[
              "Browser",
              "Nginx :80",
              "Docker",
              "Next.js :3000",
            ].map((node, index, nodes) => (
              <span key={node} className="contents">
                <span className="flex-1 rounded bg-white px-3 py-3 text-center">
                  {node}
                </span>
                {index < nodes.length - 1 && (
                  <span className="self-center text-zinc-700">→</span>
                )}
              </span>
            ))}
          </div>
        </section>

        <h2 className="mt-14 text-2xl font-medium text-zinc-800">
          技术栈
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {["Next.js", "TypeScript", "Tailwind CSS", "Docker"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded bg-zinc-100 px-3 py-1.5 text-sm text-zinc-500"
              >
                {tech}
              </span>
            ),
          )}
        </div>

        <h2 className="mt-14 text-2xl font-medium text-zinc-800">
          开发环境
        </h2>

        <p className="mt-5 leading-8 text-zinc-600">
          网站首先在 VMware Ubuntu 24.04 环境中开发和测试，
          完成后将通过 Docker 部署到腾讯云 Ubuntu 服务器。
        </p>

        <h2 className="mt-14 text-2xl font-medium text-zinc-800">
          项目目标
        </h2>

        <p className="mt-5 leading-8 text-zinc-600">
          除了作为个人主页，这个项目也用于实践 Linux、
          Docker、Nginx、HTTPS、CI/CD 以及云服务器部署。
        </p>
      </article>
    </main>
  );
}

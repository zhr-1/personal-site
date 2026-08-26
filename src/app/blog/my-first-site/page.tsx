import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "我的第一个个人网站",
  description: "记录个人网站从开发、Docker 容器化到腾讯云部署的完整过程。",
};

export default function MyFirstSiteArticle() {
  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-16 text-zinc-100 sm:px-6 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-500">2026-08-23</p>

        <Link
            href="/blog"
            className="text-sm text-zinc-500 transition hover:text-zinc-200"
        >
            ← 返回博客
        </Link>

        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          我的第一个个人网站
        </h1>

        <p className="mt-8 text-lg leading-8 text-zinc-400">
          这篇文章记录我的个人网站从 VMware Ubuntu 本地开发环境，
          到 Next.js 开发，再到最终部署腾讯云的完整过程。
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          为什么要做这个网站？
        </h2>

        <p className="mt-4 leading-8 text-zinc-400">
          我希望建立一个属于自己的技术网站，用来记录学习过程、
          展示项目，以及整理 C++ 服务端开发相关内容。
        </p>
      </article>
    </main>
  );
}

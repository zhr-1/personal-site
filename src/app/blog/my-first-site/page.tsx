import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "我的第一个个人网站",
  description: "记录个人网站从开发、Docker 容器化到腾讯云部署的完整过程。",
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function MyFirstSiteArticle() {
  return (
    <main className="min-h-screen px-5 py-14 sm:px-8 sm:py-20">
      <article className="mx-auto max-w-2xl">
        <Link
            href="/blog"
            className="text-sm text-zinc-400 transition hover:text-emerald-600"
        >
            ← 返回博客
        </Link>

        <div className="mt-10 border-y border-zinc-200 py-4 font-mono text-xs text-zinc-400">
          2026-08-23 · Next.js / Docker / Deployment
        </div>

        <h1 className="mt-10 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          我的第一个个人网站
        </h1>

        <p className="mt-8 text-lg leading-9 text-zinc-600">
          这篇文章记录我的个人网站从 VMware Ubuntu 本地开发环境，
          到 Next.js 开发，再到最终部署腾讯云的完整过程。
        </p>

        <h2 className="mt-14 text-2xl font-medium text-zinc-800">
          为什么要做这个网站？
        </h2>

        <p className="mt-5 leading-8 text-zinc-600">
          我希望建立一个属于自己的技术网站，用来记录学习过程、
          展示项目，以及整理 C++ 服务端开发相关内容。
        </p>
      </article>
    </main>
  );
}

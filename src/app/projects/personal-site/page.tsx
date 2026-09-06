import type { Metadata } from "next";
import Link from "next/link";

import ArchitectureFlow from "@/components/ArchitectureFlow";

const techStack = ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Markdown", "Docker", "Nginx"];

const developmentEnvironment = [
  { label: "本地开发", value: "Ubuntu 24.04 / VMware" },
  { label: "生产服务器", value: "腾讯云 Ubuntu 24.04" },
  { label: "交付方式", value: "Git + Docker Compose" },
];

const workflow = [
  "在本地完成页面、内容和功能开发",
  "执行 lint 与生产构建检查",
  "提交并推送到 GitHub main 分支",
  "服务器拉取代码并重新构建 Docker 容器",
];

const currentFeatures = [
  "响应式首页、项目页与关于页",
  "Markdown 博客列表和动态文章路由",
  "日间 / 夜间主题切换与本地记忆",
  "sitemap、robots 与文章 metadata",
  "Docker 部署、Nginx 反向代理和 HTTPS",
];

const nextSteps = [
  "继续补充真实项目与技术文章",
  "为博客增加代码高亮、目录与阅读时间",
  "接入 C++ Backend、后台管理与数据库",
  "完善自动化发布与运行状态监控",
];

export const metadata: Metadata = {
  title: "个人技术网站",
  description: "个人技术网站的设计、Markdown 内容系统与 Docker 云端部署实践。",
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function PersonalSiteProjectPage() {
  return (
    <main className="min-h-screen px-5 py-14 sm:px-8 sm:py-20">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/projects"
          className="text-sm text-zinc-400 transition hover:text-emerald-600"
        >
          ← 返回项目
        </Link>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-y border-zinc-200 py-4 font-mono text-xs text-zinc-400">
          <span>WEB / INFRASTRUCTURE</span>
          <span className="text-emerald-600">● 已上线 · 持续迭代</span>
        </div>

        <header className="mt-10 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            个人技术网站
          </h1>
          <p className="mt-6 text-lg leading-9 text-zinc-600">
            这是我的个人技术站，用于展示项目、发布 Markdown 技术博客，并记录
            C++ 服务端、Linux 与网络编程的学习过程。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/zhr-1/personal-site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-xl bg-emerald-600 px-5 text-sm font-medium text-white transition hover:bg-emerald-500"
            >
              GitHub 仓库 ↗
            </a>
            <a
              href="https://hrzou.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-xl border border-zinc-200 px-5 text-sm font-medium text-zinc-700 transition hover:border-emerald-500/50 hover:text-emerald-600 dark:border-zinc-700 dark:text-zinc-300"
            >
              在线 Demo ↗
            </a>
          </div>
        </header>

        <div className="mt-16 grid gap-10 border-t border-zinc-200 pt-12 md:grid-cols-2">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900">项目简介</h2>
            <p className="mt-4 text-sm leading-8 text-zinc-600">
              项目基于 Next.js App Router 构建，内容和页面在构建阶段生成静态输出，
              兼顾访问速度、SEO 与后续维护。博客文章由 Markdown 文件驱动，无需为每篇文章创建 React 页面。
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-zinc-900">为什么做这个项目</h2>
            <p className="mt-4 text-sm leading-8 text-zinc-600">
              我希望拥有一个长期积累技术内容的空间，同时把域名、HTTPS、Linux、
              Docker、Nginx 和持续部署串成一次完整的工程实践，而不只是制作一个静态简历页面。
            </p>
          </section>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">技术栈</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">部署架构</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-600">
            用户请求经域名解析到腾讯云，由 Nginx 处理 HTTPS 和反向代理，最终进入 Docker 中运行的 Next.js 服务。
          </p>
          <div className="mt-7">
            <ArchitectureFlow
              label="PRODUCTION REQUEST FLOW"
              nodes={["Browser", "DNS", "Nginx", "Docker", "Next.js"]}
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">开发环境</h2>
          <dl className="mt-6 grid gap-4 md:grid-cols-3">
            {developmentEnvironment.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
              >
                <dt className="font-mono text-xs text-zinc-400">{item.label}</dt>
                <dd className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">开发流程</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {workflow.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 rounded-xl border border-zinc-200 p-5 text-sm leading-7 text-zinc-600 dark:border-zinc-800"
              >
                <span className="font-mono text-emerald-600">{String(index + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-16 grid gap-10 border-t border-zinc-200 pt-12 md:grid-cols-2">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900">当前功能</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-600">
              {currentFeatures.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-zinc-900">后续计划</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-600">
              {nextSteps.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-zinc-400">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}

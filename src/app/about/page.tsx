import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于我",
  description:
    "了解华仁的技术方向、开发经历，以及 C++ 服务端与游戏服务器相关技能。",
};

const toolbox = [
  { label: "语言", items: ["C++", "TypeScript"] },
  { label: "系统", items: ["Linux", "TCP/IP", "CMake"] },
  { label: "数据", items: ["Redis", "MySQL"] },
  { label: "部署", items: ["Docker", "Nginx", "Git", "Next.js"] },
];

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-[calc(100svh-8.5rem)] w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
        关于我
      </h1>

      <div className="mt-8 space-y-5 text-base leading-8 text-zinc-600">
        <p>
          你好，我是华仁。我目前专注于 C++ 服务端开发，对 Linux、网络编程、
          并发、Redis、MySQL 和游戏服务器架构感兴趣。
        </p>
        <p>
          我喜欢从系统边界出发理解问题：一次请求如何流转、状态如何保存、
          服务怎样部署，以及每个模块为什么需要这样划分。
        </p>
        <p>
          这个网站是我的长期技术档案。我会在这里整理学习笔记、记录项目进展，
          也诚实保留仍在探索和改进的部分。
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-medium text-zinc-800">现在</h2>
        <div className="mt-5 space-y-3 text-sm leading-7 text-zinc-600">
          <p>
            <span className="mr-4 text-zinc-400">学习</span>
            Linux 网络编程、并发模型与服务端架构
          </p>
          <p>
            <span className="mr-4 text-zinc-400">构建</span>
            <Link href="/projects/game-server" className="link-underline text-zinc-800">
              C++ 游戏服务器
            </Link>
          </p>
          <p>
            <span className="mr-4 text-zinc-400">记录</span>
            <Link href="/blog" className="link-underline text-zinc-800">
              技术文章与开发笔记
            </Link>
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-medium text-zinc-800">工具箱</h2>
        <div className="mt-5 space-y-4">
          {toolbox.map((group) => (
            <div key={group.label} className="flex flex-col gap-2 text-sm sm:flex-row sm:gap-5">
              <span className="w-12 shrink-0 text-zinc-400">{group.label}</span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded bg-zinc-100 px-2.5 py-1 text-zinc-500">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

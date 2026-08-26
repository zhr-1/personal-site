import type { Metadata } from "next";
import Link from "next/link";

const architecture = [
  {
    name: "Gateway",
    description: "维护客户端连接，负责消息转发、心跳检测和连接管理。",
  },
  {
    name: "Login Server",
    description: "处理账号认证、登录状态校验和角色入口。",
  },
  {
    name: "Game Server",
    description: "承载核心游戏逻辑、玩家状态与场景交互。",
  },
  {
    name: "Redis + MySQL",
    description: "分别负责高速缓存、会话状态和持久化数据存储。",
  },
];

export const metadata: Metadata = {
  title: "C++ 游戏服务器",
  description: "基于 C++、Linux、Redis 和 MySQL 的迷你游戏服务器架构实践。",
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function GameServerProjectPage() {
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
          <span>C++ / DISTRIBUTED SYSTEM</span>
          <span className="text-amber-400">○ 计划中</span>
        </div>

        <h1 className="mt-10 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          C++ 游戏服务器
        </h1>

        <p className="mt-8 text-lg leading-9 text-zinc-600">
          这是一个用于学习和实践服务端架构的迷你游戏服务器项目，计划从网络层开始，
          逐步实现登录、网关、游戏逻辑、缓存与数据持久化。
        </p>

        <h2 className="mt-14 text-2xl font-medium text-zinc-800">计划架构</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {architecture.map((item) => (
            <section
              key={item.name}
              className="border-t border-zinc-200 py-5"
            >
              <h3 className="font-medium text-zinc-800">{item.name}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-500">
                {item.description}
              </p>
            </section>
          ))}
        </div>

        <h2 className="mt-14 text-2xl font-medium text-zinc-800">技术栈</h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {["C++", "Linux", "TCP/IP", "Redis", "MySQL", "CMake"].map(
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

        <h2 className="mt-14 text-2xl font-medium text-zinc-800">开发计划</h2>

        <ol className="mt-5 space-y-3 leading-7 text-zinc-600">
          <li>1. 完成基于 TCP 的网络通信与消息协议。</li>
          <li>2. 实现 Gateway 与 Login Server 的基础流程。</li>
          <li>3. 接入 Redis 会话缓存和 MySQL 数据持久化。</li>
          <li>4. 添加日志、配置、监控与 Docker 部署。</li>
        </ol>
      </article>
    </main>
  );
}

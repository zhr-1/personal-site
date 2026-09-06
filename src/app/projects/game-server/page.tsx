import type { Metadata } from "next";
import Link from "next/link";

import ArchitectureFlow from "@/components/ArchitectureFlow";

const architecture = [
  { name: "Gateway", description: "计划负责客户端长连接、心跳、消息路由与连接生命周期。" },
  { name: "Login Server", description: "计划负责身份校验、登录流程、角色入口与会话建立。" },
  { name: "Game Server", description: "计划承载玩家状态、核心游戏逻辑与场景交互。" },
  { name: "Redis", description: "计划用于会话、热点状态、排行榜等低延迟数据。" },
  { name: "MySQL", description: "计划用于账号、角色及长期业务数据的持久化。" },
];

const technologies = ["C++", "Linux", "TCP/IP", "CMake", "Redis", "MySQL"];

const roadmap = [
  { phase: "Phase 01", title: "网络基础", description: "完成 TCP 服务、连接管理、消息协议和基础日志。" },
  { phase: "Phase 02", title: "服务拆分", description: "实现 Gateway、Login Server 与 Game Server 的最小通信链路。" },
  { phase: "Phase 03", title: "数据层", description: "接入 Redis 会话缓存和 MySQL 持久化，明确数据一致性边界。" },
  { phase: "Phase 04", title: "可观测与压测", description: "补充指标、故障日志、压测脚本和性能分析记录。" },
];

export const metadata: Metadata = {
  title: "C++ 游戏服务器",
  description: "计划中的 C++ 游戏服务器：目标架构、技术方向、分阶段路线与压测计划。",
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function GameServerProjectPage() {
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
          <span>C++ / DISTRIBUTED SYSTEM</span>
          <span className="text-amber-500">○ 计划中 · 待开发</span>
        </div>

        <header className="mt-10 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            C++ 游戏服务器
          </h1>
          <p className="mt-6 text-lg leading-9 text-zinc-600">
            这是一个尚未正式开发的学习型项目。目标是从 Linux 网络编程出发，
            逐步理解游戏服务端的连接管理、服务拆分、状态缓存与数据持久化。
          </p>
          <p className="mt-5 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm leading-7 text-amber-700 dark:text-amber-300">
            当前优先完成个人网站 V1.0；网站收尾后将继续推进本项目，并以真实代码和测试结果更新页面。
          </p>
        </header>

        <section className="mt-16 border-t border-zinc-200 pt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">项目目标</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-600">
            构建一个规模可控但职责完整的迷你服务端：客户端通过 Gateway 建立连接，
            Login Server 处理登录，Game Server 承载业务逻辑，Redis 与 MySQL 分别负责缓存和持久化。
            重点是验证架构边界，而不是提前堆叠复杂功能。
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">计划架构</h2>
          <div className="mt-7">
            <ArchitectureFlow
              label="PLANNED SERVICE FLOW"
              nodes={["Client", "Gateway", "Login / Game", "Redis / MySQL"]}
            />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {architecture.map((item) => (
              <section
                key={item.name}
                className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
              >
                <h3 className="font-medium text-zinc-900">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-500">{item.description}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">技术方向</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((tech) => (
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
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">分阶段 Roadmap</h2>
          <ol className="mt-7 grid gap-4 md:grid-cols-2">
            {roadmap.map((item) => (
              <li
                key={item.phase}
                className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-emerald-600">{item.phase}</span>
                  <span className="text-xs text-zinc-400">待开始</span>
                </div>
                <h3 className="mt-4 font-medium text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-500">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 border-t border-zinc-200 pt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">性能目标与压测计划</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-600">
            第一版协议和服务链路稳定后，将以单机并发连接数、消息吞吐、P95 / P99 延迟、
            CPU 与内存占用为核心指标。压测会从单服务基线开始，再覆盖 Gateway 到 Game Server
            的完整链路，并记录瓶颈、优化过程和复测结果；在真实测试前不会虚构性能数字。
          </p>
        </section>
      </article>
    </main>
  );
}

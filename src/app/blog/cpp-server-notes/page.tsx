import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "C++ 服务端开发笔记",
  description: "记录 C++ 服务端、Linux 网络编程和服务器架构相关内容。",
};

export default function CppServerNotesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-24 text-zinc-100">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-sm text-zinc-500 transition hover:text-zinc-200"
        >
          ← 返回博客
        </Link>

        <p className="mt-10 text-sm text-zinc-500">持续更新</p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          C++ 服务端开发笔记
        </h1>

        <p className="mt-8 text-lg leading-8 text-zinc-400">
          这里用于整理我在 C++ 服务端开发过程中学习和实践的内容，
          包括 Linux、网络编程、并发、Redis、MySQL 和游戏服务器架构。
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Linux 网络编程</h2>

        <p className="mt-4 leading-8 text-zinc-400">
          后续会在这里整理 Socket、TCP、epoll、事件循环、
          长连接以及高并发服务器相关内容。
        </p>

        <h2 className="mt-12 text-2xl font-semibold">服务器架构</h2>

        <p className="mt-4 leading-8 text-zinc-400">
          后续会记录 Gateway、Login Server、Game Server、
          Redis 和 MySQL 等服务的设计与实践。
        </p>
      </article>
    </main>
  );
}

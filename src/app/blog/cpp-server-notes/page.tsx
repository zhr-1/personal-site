import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "C++ 服务端开发笔记",
  description: "记录 C++ 服务端、Linux 网络编程和服务器架构相关内容。",
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function CppServerNotesPage() {
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
          持续更新 · C++ / Linux / Network
        </div>

        <h1 className="mt-10 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          C++ 服务端开发笔记
        </h1>

        <p className="mt-8 text-lg leading-9 text-zinc-600">
          这里用于整理我在 C++ 服务端开发过程中学习和实践的内容，
          包括 Linux、网络编程、并发、Redis、MySQL 和游戏服务器架构。
        </p>

        <h2 className="mt-14 text-2xl font-medium text-zinc-800">Linux 网络编程</h2>

        <p className="mt-5 leading-8 text-zinc-600">
          后续会在这里整理 Socket、TCP、epoll、事件循环、
          长连接以及高并发服务器相关内容。
        </p>

        <h2 className="mt-14 text-2xl font-medium text-zinc-800">服务器架构</h2>

        <p className="mt-5 leading-8 text-zinc-600">
          后续会记录 Gateway、Login Server、Game Server、
          Redis 和 MySQL 等服务的设计与实践。
        </p>
      </article>
    </main>
  );
}

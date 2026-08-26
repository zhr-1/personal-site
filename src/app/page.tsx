import Link from "next/link";

const focus = ["C++", "Linux", "网络编程", "Redis", "MySQL"];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100svh-8.5rem)] w-full max-w-3xl items-center px-5 py-14 sm:px-8 sm:py-20">
      <div className="w-full">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          邹华仁
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
          你好，我是一名专注于 C++ 服务端开发的开发者。
          我喜欢研究网络编程、数据存储和游戏服务器架构，也在这里记录项目与学习过程。
        </p>

        <div className="mt-9 space-y-3 text-sm leading-7 text-zinc-600">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <span className="w-20 shrink-0 text-zinc-400">正在学习</span>
            <span>C++ 服务端、Linux 网络编程与并发模型</span>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <span className="w-20 shrink-0 text-zinc-400">正在构建</span>
            <span>
              <Link href="/projects/game-server" className="link-underline text-zinc-800">
                C++ 游戏服务器
              </Link>
              <span className="mx-2 text-zinc-300">·</span>
              <Link href="/projects/personal-site" className="link-underline text-zinc-800">
                个人技术网站
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <span className="w-20 shrink-0 text-zinc-400">关注方向</span>
            <span>{focus.join(" · ")}</span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href="/projects" className="link-arrow text-zinc-700">
            查看项目 <span aria-hidden="true">→</span>
          </Link>
          <Link href="/blog" className="link-arrow text-zinc-700">
            阅读博客 <span aria-hidden="true">→</span>
          </Link>
          <Link href="/about" className="link-arrow text-zinc-700">
            关于我 <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

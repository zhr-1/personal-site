import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100svh-8rem)] items-center bg-zinc-950 px-5 py-20 text-zinc-100 sm:px-6">
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-sm font-medium text-emerald-400">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          页面没有找到
        </h1>
        <p className="mt-5 max-w-xl leading-8 text-zinc-400">
          这个地址可能已经改变，或者页面尚未发布。你可以返回首页继续浏览项目和技术文章。
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center rounded-lg bg-emerald-400 px-5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300"
        >
          返回首页
        </Link>
      </div>
    </main>
  );
}

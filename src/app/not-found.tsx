import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100svh-8rem)] items-center px-5 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <p className="font-mono text-sm text-emerald-600">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          页面没有找到
        </h1>
        <p className="mt-5 max-w-xl leading-8 text-zinc-500">
          这个地址可能已经改变，或者页面尚未发布。你可以返回首页继续浏览项目和技术文章。
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center text-sm text-zinc-700 transition hover:text-emerald-600"
        >
          返回首页 →
        </Link>
      </div>
    </main>
  );
}

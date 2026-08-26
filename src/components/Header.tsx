import Link from "next/link";

const navigation = [
  { name: "首页", href: "/" },
  { name: "项目", href: "/projects" },
  { name: "博客", href: "/blog" },
  { name: "关于我", href: "/#about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-100"
        >
          华仁
        </Link>

        <nav aria-label="主导航" className="hidden items-center gap-6 sm:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-400 transition hover:text-zinc-100"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <details className="group relative sm:hidden">
          <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition hover:border-white/20 hover:text-white [&::-webkit-details-marker]:hidden">
            <span className="sr-only">打开导航菜单</span>
            <svg
              aria-hidden="true"
              className="h-5 w-5 group-open:hidden"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg
              aria-hidden="true"
              className="hidden h-5 w-5 group-open:block"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
            </svg>
          </summary>
          <nav
            aria-label="移动端导航"
            className="absolute right-0 top-13 w-44 overflow-hidden rounded-xl border border-white/10 bg-zinc-900 p-2 shadow-2xl"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

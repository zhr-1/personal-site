import Link from "next/link";

const navigation = [
  { name: "首页", href: "/" },
  { name: "项目", href: "/projects" },
  { name: "博客", href: "/blog" },
  { name: "关于我", href: "/#about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-100"
        >
          华仁
        </Link>

        <nav className="flex items-center gap-6">
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
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const navigation = [
  { name: "首页", href: "/" },
  { name: "项目", href: "/projects" },
  { name: "博客", href: "/blog" },
  { name: "关于", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="px-5 sm:px-8">
      <div className="mx-auto flex min-h-16 max-w-5xl items-center justify-between">
        <Link
          href="/"
          aria-label="华仁的个人网站"
          className="font-serif text-xl italic text-zinc-700 transition hover:text-emerald-600"
        >
          hr.
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <nav aria-label="主导航" className="flex items-center gap-4 sm:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`text-sm transition ${
                  isActive(item.href)
                    ? "text-zinc-900"
                    : "text-zinc-400 hover:text-zinc-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

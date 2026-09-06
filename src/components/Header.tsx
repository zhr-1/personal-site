"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggle from "@/components/ThemeToggle";

const navigation = [
  { name: "首页", href: "/" },
  { name: "项目", href: "/projects" },
  { name: "博客", href: "/blog" },
  { name: "关于我", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-background/90 px-5 backdrop-blur-md sm:px-8">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between">
        <Link
          href="/"
          aria-label="邹华仁的个人网站"
          onClick={() => setIsMenuOpen(false)}
          className="font-serif text-xl italic text-zinc-700 transition hover:text-emerald-600"
        >
          hr.
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav aria-label="主导航" className="hidden items-center gap-7 md:flex">
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
          <button
            type="button"
            aria-label={isMenuOpen ? "关闭导航菜单" : "打开导航菜单"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="flex size-11 flex-col items-center justify-center gap-1.5 rounded-lg text-zinc-600 transition hover:bg-zinc-100 hover:text-emerald-600 md:hidden"
          >
            <span
              aria-hidden="true"
              className={`h-px w-5 bg-current transition ${isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              aria-hidden="true"
              className={`h-px w-5 bg-current transition ${isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="移动端主导航"
        className={`${isMenuOpen ? "grid" : "hidden"} mx-auto max-w-6xl gap-1 border-t border-zinc-200/70 py-3 md:hidden`}
      >
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
            onClick={() => setIsMenuOpen(false)}
            className={`rounded-lg px-3 py-3 text-sm transition ${
              isActive(item.href)
                ? "bg-zinc-100 text-zinc-900"
                : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

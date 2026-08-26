"use client";

import { useEffect, useState } from "react";

const themeStorageKey = "theme";

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const syncTheme = () => {
      const storedTheme = window.localStorage.getItem(themeStorageKey);
      const nextIsDark = storedTheme
        ? storedTheme === "dark"
        : mediaQuery.matches;

      applyTheme(nextIsDark);
      setIsDark(nextIsDark);
    };

    syncTheme();
    mediaQuery.addEventListener("change", syncTheme);
    return () => mediaQuery.removeEventListener("change", syncTheme);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");

    applyTheme(nextIsDark);
    window.localStorage.setItem(themeStorageKey, nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "切换到日间主题" : "切换到夜间主题"}
      title={isDark ? "切换到日间主题" : "切换到夜间主题"}
      className="flex size-9 items-center justify-center rounded-full font-mono text-lg text-zinc-400 transition hover:text-emerald-600"
    >
      <span aria-hidden="true" className="leading-none">
        {isDark ? "☀︎" : "☾"}
      </span>
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 华仁. All rights reserved.</p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-zinc-300"
          >
            湘ICP备2026038190号
          </a>

          <span>Built with Next.js + TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
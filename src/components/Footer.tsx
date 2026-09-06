export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-zinc-950 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 邹华仁. All rights reserved.</p>

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
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

import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  status?: string;
  eyebrow: string;
  highlight: string;
  architecture: string[];
  index: number;
};

export default function ProjectCard({
  title,
  description,
  tech,
  href,
  status,
  eyebrow,
  highlight,
  architecture,
  index,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group block h-full rounded-2xl border border-zinc-200 bg-white/60 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-950/5 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-emerald-500/40 dark:hover:shadow-black/20"
    >
      <article className="flex h-full flex-col">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[11px] tracking-[0.12em] text-zinc-400">
            {String(index).padStart(2, "0")} / {eyebrow}
          </span>
          {status && (
            <span className="rounded-full border border-zinc-200 px-2.5 py-1 text-[11px] text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
              {status}
            </span>
          )}
        </div>

        <h2 className="mt-7 text-2xl font-semibold tracking-tight text-zinc-900 transition group-hover:text-emerald-600">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-zinc-600">{highlight}</p>
        <p className="mt-2 text-sm leading-7 text-zinc-400">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-7">
          <p className="break-words font-mono text-[11px] leading-5 text-zinc-400">
            {architecture.join(" → ")}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-700 transition group-hover:text-emerald-600 dark:text-zinc-300">
            查看详情 <span className="transition group-hover:translate-x-1">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}

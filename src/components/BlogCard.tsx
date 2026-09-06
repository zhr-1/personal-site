import Link from "next/link";

type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  href: string;
  tags: string[];
  index: number;
};

export default function BlogCard({
  title,
  description,
  date,
  href,
  tags,
  index,
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className="group block h-full rounded-xl border border-zinc-200 bg-white/60 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-950/5 sm:p-6 dark:bg-zinc-900/40"
    >
      <article className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <span>{String(index).padStart(2, "0")}</span>
          <time dateTime={date}>{date}</time>
        </div>

        <h2 className="mt-5 text-xl font-medium tracking-tight text-zinc-800 transition group-hover:text-emerald-600">
          {title}
        </h2>
        <p className="mt-3 flex-1 text-sm leading-7 text-zinc-500">{description}</p>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div className="flex min-w-0 flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-zinc-400">
            {tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
          <span
            aria-hidden="true"
            className="shrink-0 text-zinc-400 transition group-hover:translate-x-1 group-hover:text-emerald-600"
          >
            →
          </span>
        </div>
      </article>
    </Link>
  );
}

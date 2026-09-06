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
    <Link href={href} className="group block">
    <article className="grid gap-3 border-b border-zinc-200 py-7 first:border-t sm:grid-cols-[2.5rem_1fr_auto] sm:gap-5">
      <span className="hidden pt-1 font-mono text-xs text-zinc-300 sm:block">
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <h2 className="text-xl font-medium text-zinc-800 transition group-hover:text-emerald-600">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-7 text-zinc-500">{description}</p>
        <div className="mt-3 flex flex-wrap gap-3 font-mono text-xs text-zinc-400">
          {tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>
      <div className="flex items-start gap-4 text-xs text-zinc-400 sm:flex-col sm:items-end">
        <span>{date}</span>
        <span className="transition group-hover:translate-x-1 group-hover:text-emerald-600">→</span>
      </div>
    </article>
    </Link>
  );
}

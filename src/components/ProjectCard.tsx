import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  status?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  href,
  status,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group block min-w-0 rounded-2xl border border-white/10 bg-zinc-900 p-5 transition hover:border-white/20 hover:bg-zinc-800/80 sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="min-w-0 text-xl font-semibold">
          {title}
        </h3>

        {status && (
          <span className="shrink-0 rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-400">
            {status}
          </span>
        )}
      </div>

      <p className="mt-3 leading-7 text-zinc-400">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>

      <p className="mt-6 text-sm text-emerald-400">
        查看项目 →
      </p>
    </Link>
  );
}

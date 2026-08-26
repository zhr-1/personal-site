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
  highlight,
  architecture,
  index,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group block border-b border-zinc-200 py-7 first:border-t"
    >
      <article className="grid gap-3 sm:grid-cols-[2.5rem_1fr_auto] sm:gap-5">
        <span className="hidden pt-1 font-mono text-xs text-zinc-300 sm:block">
          0{index}
        </span>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-medium text-zinc-800 transition group-hover:text-emerald-600">
              {title}
            </h2>
            {status && (
              <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-400">
                {status}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm leading-7 text-zinc-600">{highlight}</p>
          <p className="mt-1 text-sm leading-7 text-zinc-400">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span key={item} className="rounded bg-zinc-100 px-2.5 py-1 text-xs text-zinc-500">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-zinc-400">
            {architecture.join(" → ")}
          </p>
        </div>
        <span className="text-zinc-300 transition group-hover:translate-x-1 group-hover:text-emerald-600">
          →
        </span>
      </article>
    </Link>
  );
}

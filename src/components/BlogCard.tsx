import Link from "next/link";

type BlogCardProps = {
  title: string;
  summary: string;
  date: string;
  href?: string;
};

export default function BlogCard({
  title,
  summary,
  date,
  href,
}: BlogCardProps) {
  const content = (
    <article className="border-b border-white/10 py-6">
      <p className="text-sm text-zinc-500">{date}</p>

      <h3 className="mt-2 text-xl font-semibold text-zinc-100">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-zinc-400">
        {summary}
      </p>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block transition hover:opacity-80">
        {content}
      </Link>
    );
  }

  return content;
}
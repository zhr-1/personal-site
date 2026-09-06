import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getAllPosts, getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      images: [],
    },
    twitter: {
      title: post.title,
      description: post.description,
      images: [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen px-5 py-14 sm:px-8 sm:py-20">
      <article className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="text-sm text-zinc-400 transition hover:text-emerald-600"
        >
          ← 返回博客
        </Link>

        <div className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-y border-zinc-200 py-4 font-mono text-xs text-zinc-400">
          <time dateTime={post.date}>{post.date}</time>
          <span aria-hidden="true">·</span>
          <span>{post.tags.map((tag) => `#${tag}`).join(" / ")}</span>
        </div>

        <h1 className="mt-10 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-9 text-zinc-500">{post.description}</p>

        <div
          className="prose prose-zinc mt-12 max-w-none prose-headings:scroll-mt-24 prose-a:text-emerald-600 prose-pre:bg-zinc-900 prose-pre:text-zinc-100 dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}

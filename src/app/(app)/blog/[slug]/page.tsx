import dayjs from "dayjs";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MDX } from "@/components/mdx";
import { SITE_INFO } from "@/config/site";
import { PostKeyboardShortcuts } from "@/features/blog/components/post-keyboard-shortcuts";
import { PostShareMenu } from "@/features/blog/components/post-share-menu";
import { findNeighbour, getAllPosts, getPostBySlug } from "@/features/blog/data/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: "article",
      url: `/blog/${post.slug}`,
      images: post.metadata.image ? [post.metadata.image] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const posts = getAllPosts();
  const { previous, next } = findNeighbour(posts, slug);
  const url = `${SITE_INFO.url}/blog/${post.slug}`;

  return (
    <div className="mx-auto md:max-w-3xl">
      <PostKeyboardShortcuts basePath="/blog" previous={previous} next={next} />

      <div className="flex h-14 items-center justify-between border-x border-edge px-4">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          &larr; Blog
        </Link>

        <PostShareMenu url={url} />
      </div>

      <div className="border-x border-t border-edge px-4 py-6 sm:px-8 sm:py-10">
        <h1 className="text-2xl font-semibold text-balance sm:text-3xl">
          {post.metadata.title}
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          <time dateTime={dayjs(post.metadata.createdAt).toISOString()}>
            {dayjs(post.metadata.createdAt).format("MMMM D, YYYY")}
          </time>
        </p>

        <div className="prose prose-neutral dark:prose-invert mt-8 max-w-none">
          <MDX code={post.content} />
        </div>
      </div>

      <div className="grid grid-cols-1 border-x border-t border-edge sm:grid-cols-2">
        {previous ? (
          <Link
            href={`/blog/${previous.slug}`}
            className="flex flex-col gap-1 border-b border-edge p-4 transition-colors hover:bg-zinc-950/2.5 sm:border-r sm:border-b-0 dark:hover:bg-white/2.5"
          >
            <span className="text-xs text-muted-foreground">&larr; Previous</span>
            <span className="text-sm font-medium">{previous.metadata.title}</span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="flex flex-col items-end gap-1 p-4 text-right transition-colors hover:bg-zinc-950/2.5 dark:hover:bg-white/2.5"
          >
            <span className="text-xs text-muted-foreground">Next &rarr;</span>
            <span className="text-sm font-medium">{next.metadata.title}</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

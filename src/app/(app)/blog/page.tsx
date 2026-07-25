import type { Metadata } from "next";

import { PostItem } from "@/features/blog/components/post-item";
import { getAllPosts } from "@/features/blog/data/posts";
import { SITE_INFO } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Thoughts and write-ups by ${SITE_INFO.name}.`,
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="flex h-14 items-center border-x border-edge px-4">
        <h1 className="text-lg font-semibold">Blog</h1>
      </div>

      <div className="grid grid-cols-1 border-x border-t border-edge sm:grid-cols-2">
        {posts.map((post, index) => (
          <PostItem key={post.slug} post={post} shouldPreloadImage={index < 2} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="flex h-32 items-center justify-center border-x border-t border-edge text-sm text-muted-foreground">
          No posts yet.
        </div>
      )}
    </div>
  );
}

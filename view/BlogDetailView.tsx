import React from "react";
import { notFound } from "next/navigation";
import { getBlogPost } from "@/constants/blog/posts";
import { ArticleDesktop } from "@/components/features/blog-detail/ArticleDesktop";
import { ArticleStacked } from "@/components/features/blog-detail/ArticleStacked";

export function BlogDetailView({ slug }: { slug: string }) {
  const post = getBlogPost(slug);
  if (!post) notFound();
  const url = `https://sakibanjum.com/blogs/${post.slug}`;

  return (
    <article>
      <ArticleDesktop post={post} url={url} />
      <ArticleStacked post={post} url={url} />
    </article>
  );
}

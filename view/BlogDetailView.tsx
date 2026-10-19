import React from "react";
import { notFound } from "next/navigation";
import { getBlogPost } from "@/constants/blog/posts";
import { ArticleDesktop } from "@/components/features/blog-detail/ArticleDesktop";
import { ArticleStacked } from "@/components/features/blog-detail/ArticleStacked";

/* Figma: desktop 61:3958 · tablet 258:280 · mobile 258:388 */
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

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPost } from "@/constants/blog/posts";
import { BlogDetailView } from "@/view/BlogDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} — Sakib Anjum`,
    description: post.lead,
    openGraph: {
      title: post.title,
      description: post.lead,
      images: [{ url: post.hero }],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!getBlogPost(slug)) notFound();
  return <BlogDetailView slug={slug} />;
}

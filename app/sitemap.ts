import { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/constants/portfolio/case-studies";
import { BLOG_POSTS } from "@/constants/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sakibanjum.com";

  const staticRoutes = [
    "",
    "/portfolio",
    "/blogs",
    "/tutorials",
    "/speaking",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-18"),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = CASE_STUDIES.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified: new Date("2026-10-18"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogRoutes = BLOG_POSTS.map((b) => ({
    url: `${baseUrl}/blogs/${b.slug}`,
    lastModified: new Date("2026-10-18"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}

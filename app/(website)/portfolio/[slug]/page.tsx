import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudy } from "@/constants/portfolio/case-studies";
import { PortfolioDetailView } from "@/view/PortfolioDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Project Not Found" };

  return {
    title: `${study.card.title} — Case Study`,
    description: study.title,
    openGraph: {
      title: `${study.card.title} — Case Study by Sakib Anjum`,
      description: study.title,
      images: [{ url: study.hero }],
    },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!getCaseStudy(slug)) notFound();
  return <PortfolioDetailView slug={slug} />;
}

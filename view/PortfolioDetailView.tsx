import React from "react";
import { notFound } from "next/navigation";
import { getCaseStudy } from "@/constants/portfolio/case-studies";
import { CaseHero } from "@/components/features/portfolio-detail/CaseHero";
import { CaseIntro } from "@/components/features/portfolio-detail/CaseIntro";
import { CaseGallery } from "@/components/features/portfolio-detail/CaseGallery";
import { CaseChallenges } from "@/components/features/portfolio-detail/CaseChallenges";
import { CaseApproach } from "@/components/features/portfolio-detail/CaseApproach";
import { CaseTechnology } from "@/components/features/portfolio-detail/CaseTechnology";
import { CaseTestimonial } from "@/components/features/portfolio-detail/CaseTestimonial";
import { CaseTimeline } from "@/components/features/portfolio-detail/CaseTimeline";
import { CaseOutcome } from "@/components/features/portfolio-detail/CaseOutcome";
import { CaseNext } from "@/components/features/portfolio-detail/CaseNext";

export function PortfolioDetailView({ slug }: { slug: string }) {
  const study = getCaseStudy(slug);
  if (!study) notFound();
  const next = getCaseStudy(study.next);

  return (
    <article className="flex w-full flex-col items-center px-[16px] pb-[32px] pt-[24px] sm:px-[32px] sm:pb-[48px] sm:pt-[40px] lg:px-[20px] lg:py-0">
      <div className="flex w-full flex-col gap-[48px] sm:max-w-[656px] sm:gap-[64px] lg:max-w-none lg:gap-0">
        <CaseHero study={study} />
        <CaseIntro study={study} />
        {study.gallery && <CaseGallery figures={study.gallery} />}
        {study.challenges && <CaseChallenges challenges={study.challenges} />}
        {study.approach && <CaseApproach approach={study.approach} />}
        {study.technology && <CaseTechnology items={study.technology} />}
        {study.testimonial && <CaseTestimonial testimonial={study.testimonial} />}
        {study.timeline && <CaseTimeline timeline={study.timeline} />}
        {study.outcome && <CaseOutcome outcome={study.outcome} />}
        {next && <CaseNext next={next} />}
      </div>
    </article>
  );
}

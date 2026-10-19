import React from "react";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/constants/portfolio/case-studies";
import { T } from "./styles";

/* 00 Brief + 01 Story. Desktop: one section (162:1652, 954 wide, 80 gap).
   Tablet (254:288 / 254:295) & mobile (254:357 / 254:364): two blocks in the page flow. */

function Row({ eyebrow, heading, children }: { eyebrow: string; heading: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[24px] sm:flex-row sm:items-start lg:gap-[64px]">
      <div className="flex flex-col gap-[12px] sm:w-[208px] sm:shrink-0 lg:w-[258px]">
        <p className={cn(T.eyebrow, "leading-[26px] text-[#F2F0E9] lg:leading-[20px]")}>{eyebrow}</p>
        <h2
          className={cn(
            "font-sans font-medium tracking-[-0.24px]",
            T.text,
            "text-[28px] leading-[34px] lg:min-h-[64px] lg:text-[24px] lg:leading-[32px]"
          )}
        >
          {heading}
        </h2>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-[16px] lg:gap-[24px]">{children}</div>
    </div>
  );
}

export function CaseIntro({ study }: { study: CaseStudy }) {
  const { brief, story } = study;
  if (!brief && !story) return null;
  const body = cn("font-mono-code text-[16px] leading-[26px]", T.text);

  return (
    <div className="contents lg:mx-auto lg:flex lg:w-full lg:max-w-[954px] lg:flex-col lg:gap-[80px] lg:pb-[40px] lg:pt-[96px]">
      {brief && (
        <Row eyebrow="00 — Brief" heading={brief.heading}>
          <p className={cn(body, "lg:min-h-[102px] lg:text-[18px] lg:leading-[34px]")}>
            <strong className="font-semibold">{brief.lead.strong}</strong>
            {brief.lead.rest}
          </p>
          <p className={cn(body, "lg:text-[18px] lg:leading-[34px]")}>{brief.body}</p>
        </Row>
      )}
      {story && (
        <Row eyebrow="01 — The story" heading={story.heading}>
          {story.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className={cn(body, "lg:text-[18px] lg:leading-[28px]")}>
              {p}
            </p>
          ))}
        </Row>
      )}
    </div>
  );
}

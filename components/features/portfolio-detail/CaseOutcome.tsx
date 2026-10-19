import React from "react";
import { cn } from "@/lib/utils";
import { cq } from "@/lib/cq";
import type { CaseStudy } from "@/constants/portfolio/case-studies";
import { T } from "./styles";

/* Outcome. Desktop 162:1926: 12-col grid (70px cols, 24 gutter, 48 padding) —
   brush heading col 1, title from col 3, paragraphs from col 5.
   Tablet 255:342 · mobile 255:442: stacked. */
export function CaseOutcome({ outcome }: { outcome: NonNullable<CaseStudy["outcome"]> }) {
  return (
    <section className="mx-auto w-full lg:max-w-[1200px] lg:pb-[40px] lg:pt-[96px]">
      {/* Desktop */}
      <div className="hidden w-full @container lg:block">
        <div style={{ paddingLeft: cq(48), paddingRight: cq(48) }}>
          <h2
            className={cn(T.brush, "whitespace-nowrap")}
            style={{ height: cq(105.59), fontSize: cq(120), lineHeight: cq(105.6), letterSpacing: cq(-1.2) }}
          >
            outcome
          </h2>
          <div className="pt-[12px]" style={{ minHeight: cq(190.08), paddingLeft: cq(188) }}>
            <p
              className={cn("font-sans font-semibold", T.text)}
              style={{ width: cq(728), fontSize: cq(56), lineHeight: cq(59.36), letterSpacing: cq(-1.96) }}
            >
              {outcome.title}
            </p>
          </div>
          <div className="flex flex-col gap-[16px] pt-[48px]" style={{ minHeight: 204, paddingLeft: cq(376) }}>
            <p className={cn("font-mono-code text-[16px] leading-[28px]", T.text)} style={{ width: cq(446) }}>
              {outcome.paragraphs[0]}
            </p>
            <p className={cn("font-mono-code text-[16px] leading-[28px]", T.soft)} style={{ width: cq(446) }}>
              {outcome.paragraphs[1]}
            </p>
          </div>
        </div>
      </div>

      {/* Tablet / mobile */}
      <div className="flex flex-col gap-[24px] lg:hidden">
        <h2 className={cn(T.brush, "tracking-[-1.2px] text-[72px] leading-[86px] sm:text-[96px] sm:leading-[115px]")}>outcome</h2>
        <p className={cn("font-sans font-semibold tracking-[-1.96px] text-[32px] leading-[38px] sm:text-[40px] sm:leading-[48px]", T.text)}>
          {outcome.title}
        </p>
        <p className={cn("font-mono-code text-[16px] leading-[26px]", T.text)}>{outcome.paragraphs[0]}</p>
        <p className={cn("font-mono-code text-[16px] leading-[26px]", T.soft)}>{outcome.paragraphs[1]}</p>
      </div>
    </section>
  );
}

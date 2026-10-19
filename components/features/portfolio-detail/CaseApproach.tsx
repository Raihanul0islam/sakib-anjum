import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cq } from "@/lib/cq";
import type { CaseStudy } from "@/constants/portfolio/case-studies";
import { T } from "./styles";

/* 03 — Approach. Desktop 162:1723 (1200 × 440: photo + overlapping card + faded 04)
   · tablet 255:286 (side by side) · mobile 255:386 (stacked) */
export function CaseApproach({ approach }: { approach: NonNullable<CaseStudy["approach"]> }) {
  const copy = (
    <>
      <p className={cn(T.eyebrow, T.dim, "leading-[26px] lg:whitespace-nowrap lg:leading-[20px]")}>03 — Our approach &amp; execution</p>
      <div className="flex flex-col gap-[16px]">
        <h2 className={cn("font-sans font-medium tracking-[-0.24px]", T.text, "text-[28px] leading-[34px] lg:text-[24px] lg:leading-[32px]")}>
          {approach.title}
        </h2>
        <div className="flex flex-col gap-[16px] lg:gap-[24px]">
          {approach.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className={cn("font-mono-code text-[16px] leading-[26px] lg:leading-[28px]", T.text)}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <section className="mx-auto w-full lg:max-w-[1200px] lg:pb-[40px] lg:pt-[96px]">
      {/* Desktop */}
      <div className="hidden w-full @container lg:block">
        <div className="relative flow-root" style={{ minHeight: cq(440) }}>
          <div className="absolute left-0" style={{ top: cq(-0.25), width: cq(489), height: cq(440) }}>
            <Image src={approach.image} alt={approach.title} fill sizes="489px" className="object-cover" />
          </div>
          {/* Card hangs 2.75px below the 440 box in Figma without adding height */}
          <div
            className="relative flex flex-col gap-[20px] px-[24px] py-[32px]"
            style={{ marginLeft: cq(446), marginTop: cq(42.75), marginBottom: cq(-2.75), width: cq(540) }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute whitespace-nowrap font-sans font-medium text-[#727D72] opacity-40 select-none"
              style={{ left: cq(404.63), top: cq(-84), fontSize: cq(180), lineHeight: cq(126.503), letterSpacing: cq(-6.3251) }}
            >
              04
            </span>
            <div className={cn("absolute inset-0 bg-[#171B18]", T.shadow)} />
            <div className="relative flex flex-col gap-[20px]">{copy}</div>
          </div>
        </div>
      </div>

      {/* Tablet / mobile */}
      <div className="flex flex-col gap-[24px] sm:flex-row sm:items-start lg:hidden">
        <div className="relative w-full shrink-0 aspect-[326/290] sm:w-[48.17%] sm:aspect-[316/360]">
          <Image src={approach.image} alt={approach.title} fill sizes="(min-width: 576px) 316px, 100vw" className="object-cover" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-[16px]">{copy}</div>
      </div>
    </section>
  );
}

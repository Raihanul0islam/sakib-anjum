import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cq } from "@/lib/cq";
import type { CaseStudy, TimelinePhase } from "@/constants/portfolio/case-studies";
import { T } from "./styles";

/* Timeline (the one inside Portfolio single). Desktop 162:1846: header + 1200 × 1620
   winding path with 4 offset-framed images · tablet 255:314 (alternating rows) ·
   mobile 255:414 (stacked). */

type Box = { left: number; top: number; width: number; height: number };
const PHASES: {
  image: Box & { radius: string };
  copy: { left: number; top: number };
  number: { left: number; top: number };
  waypoint: { left: number; top: number };
}[] = [
  { image: { left: 72, top: 20, width: 380, height: 330, radius: "0 0 8px 8px" }, copy: { left: 540, top: 48 }, number: { left: 44, top: 298 }, waypoint: { left: 614, top: 22 } },
  { image: { left: 710, top: 396, width: 360, height: 360, radius: "180px" }, copy: { left: 160, top: 425 }, number: { left: 682, top: 704 }, waypoint: { left: 784, top: 384 } },
  { image: { left: 90, top: 810, width: 450, height: 290, radius: "8px" }, copy: { left: 650, top: 810 }, number: { left: 62, top: 1048 }, waypoint: { left: 394, top: 734 } },
  { image: { left: 680, top: 1210, width: 400, height: 330, radius: "8px" }, copy: { left: 140, top: 1225 }, number: { left: 652, top: 1488 }, waypoint: { left: 784, top: 1114 } },
];
/* Tablet / mobile image corners per phase (mobile phase 2 is square-cornered) */
const STACKED_RADIUS = ["rounded-b-[8px]", "sm:rounded-[180px]", "rounded-[8px]", "rounded-[8px]"];

function PhaseCopy({ phase, desktop }: { phase: TimelinePhase; desktop?: boolean }) {
  return (
    <>
      <p className={cn("font-sans font-medium text-[16px]", T.muted, desktop ? "leading-[18px]" : "leading-[26px]")}>{phase.meta}</p>
      <h3
        className="font-sans font-semibold text-[#F2F0E9]"
        style={desktop ? { fontSize: cq(36), lineHeight: cq(40) } : undefined}
      >
        <span className={desktop ? undefined : "block text-[28px] leading-[34px]"}>{phase.title[0]}</span>
        <br className={desktop ? undefined : "hidden"} />
        <span className={desktop ? undefined : "block text-[28px] leading-[34px]"}>{phase.title[1]}</span>
      </h3>
      <ul className={cn("font-mono-code text-[16px]", T.muted, desktop ? "leading-[1.5]" : "leading-[26px]")}>
        {phase.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </>
  );
}

export function CaseTimeline({ timeline }: { timeline: NonNullable<CaseStudy["timeline"]> }) {
  return (
    <section className="mx-auto flex w-full flex-col gap-[32px] lg:max-w-[1200px] lg:gap-[80px] lg:overflow-clip lg:pb-[40px] lg:pt-[96px]">
      {/* Header */}
      <header className="flex flex-col gap-[32px] lg:items-center lg:gap-[20px] lg:text-center">
        <p className={cn("font-sans font-medium text-[16px] leading-[26px] lg:leading-[18px]", T.muted)}>TIMELINE</p>
        <div className="flex flex-col gap-[32px] lg:items-center lg:gap-[24px]">
          <h2 className="font-sans font-semibold text-[#F2F0E9] text-[32px] leading-[38px] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[55px]">
            {timeline.title[0]}
            <br />
            {timeline.title[1]}
          </h2>
          <p className={cn("font-mono-code text-[16px] leading-[26px] lg:max-w-[720px] lg:leading-[27px]", T.muted)}>{timeline.summary}</p>
        </div>
      </header>

      {/* Desktop composition */}
      <div className="hidden w-full @container lg:block">
        <div className="relative" style={{ height: cq(1620) }}>
          <Image src="/images/portfolio/case/metaface/timeline-path.svg" alt="" fill unoptimized className="pointer-events-none" />
          {timeline.phases.map((phase, i) => {
            const p = PHASES[i];
            if (!p) return null;
            const box = { left: cq(p.image.left), top: cq(p.image.top), width: cq(p.image.width), height: cq(p.image.height), borderRadius: p.image.radius };
            return (
              <React.Fragment key={phase.meta}>
                <div
                  aria-hidden
                  className="absolute border border-[#343D35]"
                  style={{ ...box, left: cq(p.image.left + 14), top: cq(p.image.top + 14), borderRadius: p.image.radius === "0 0 8px 8px" ? "8px" : p.image.radius }}
                />
                <div className="absolute overflow-hidden" style={box}>
                  <Image src={phase.image} alt="" fill sizes="450px" className="object-cover" />
                </div>
                <div className="absolute flex flex-col gap-[18px] overflow-clip" style={{ left: cq(p.copy.left), top: cq(p.copy.top), width: cq(440) }}>
                  <PhaseCopy phase={phase} desktop />
                </div>
                <span
                  aria-hidden
                  className="absolute font-sans font-normal text-[#727D72]"
                  style={{ left: cq(p.number.left), top: cq(p.number.top), width: cq(130), fontSize: cq(76), lineHeight: 1.1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden
                  className="absolute rounded-full bg-[#FF4802]"
                  style={{ left: cq(p.waypoint.left), top: cq(p.waypoint.top), width: cq(12), height: cq(12) }}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Tablet / mobile */}
      {timeline.phases.map((phase, i) => (
        <div
          key={phase.meta}
          className={cn("flex flex-col gap-[24px] py-[16px] sm:flex-row sm:items-start lg:hidden", i % 2 === 1 && "sm:flex-row-reverse")}
        >
          <div className={cn("relative aspect-[326/240] w-full shrink-0 overflow-hidden sm:aspect-[280/250] sm:w-[42.683%]", STACKED_RADIUS[i])}>
            <Image src={phase.image} alt="" fill sizes="(min-width: 576px) 280px, 100vw" className="object-cover" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-[12px]">
            <PhaseCopy phase={phase} />
          </div>
        </div>
      ))}
    </section>
  );
}

import React from "react";
import { cn } from "@/lib/utils";
import { CroppedImage } from "@/components/shared/CroppedImage";
import type { CaseStudy } from "@/constants/portfolio/case-studies";
import { T } from "./styles";

const HERO_CROP = { left: "-7.65%", top: "-0.12%", width: "130.72%", height: "100%" };

export function CaseHero({ study }: { study: CaseStudy }) {
  return (
    <section className="mx-auto flex w-full flex-col gap-[24px] lg:max-w-[1152px] lg:gap-[64px] lg:pb-[40px] lg:pt-[96px]">
      <div className="flex flex-col gap-[24px] lg:max-w-[822px] lg:gap-[32px]">
        <div className="flex flex-col gap-[24px]">
          <p className={cn(T.eyebrow, T.dim, "leading-[26px] lg:leading-[20px]")}>{study.eyebrow}</p>
          <h1
            className={cn(
              "font-sans font-semibold tracking-[-1.96px]",
              T.text,
              "text-[32px] leading-[38px] sm:text-[44px] sm:leading-[53px] lg:text-[56px] lg:leading-[59.36px] lg:min-h-[179px]"
            )}
          >
            {study.title}
          </h1>
        </div>
        <ul className="flex flex-col gap-[8px] lg:h-[26px] lg:flex-row">
          {study.services.map((s) => (
            <li
              key={s}
              className={cn(T.eyebrow, T.soft, "leading-[26px] lg:whitespace-nowrap lg:h-[26px] lg:rounded-[2px] lg:px-[10px] lg:pt-[5px] lg:leading-[20px]")}
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-[24px] lg:gap-0">
        <div className="relative overflow-hidden bg-[#262624] aspect-[326/230] sm:aspect-[656/420] lg:aspect-[1152/542.25]">
          <CroppedImage
            src={study.hero}
            crop={HERO_CROP}
            alt={study.eyebrow}
            priority
            sizes="(min-width: 992px) 1152px, 100vw"
            className="absolute inset-x-0 top-0 h-full w-full lg:h-auto lg:aspect-[1152/729.71] lg:bg-[#0D100E]"
          />
        </div>

        <dl className="hidden items-center justify-between bg-[#232A24] py-[32px] pl-[24px] pr-[8px] lg:flex">
          {study.facts
            .filter((f) => !f.mobileOnly)
            .map((f) => (
              <div key={f.term} className="flex items-center gap-[8px]">
                <dt className={cn(T.eyebrow, T.dim, "h-[14px] whitespace-nowrap leading-[14px]")}>{f.term}:</dt>
                <dd className={cn("h-[22px] whitespace-nowrap font-mono-code text-[16px] leading-[20px]", T.text)}>{f.value}</dd>
              </div>
            ))}
        </dl>

        <dl className="grid grid-cols-1 gap-[16px] text-[16px] leading-[26px] sm:grid-cols-2 sm:gap-x-[24px] lg:hidden">
          {study.facts.map((f) => (
            <div key={f.term} className="flex flex-col gap-[4px]">
              <dt className={cn(T.eyebrow, T.dim)}>{f.term}:</dt>
              <dd className={cn("font-mono-code", T.text)}>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

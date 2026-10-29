import React from "react";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/constants/portfolio/case-studies";
import { T } from "./styles";

export function CaseChallenges({ challenges }: { challenges: NonNullable<CaseStudy["challenges"]> }) {
  return (
    <section className="mx-auto flex w-full flex-col gap-[24px] lg:max-w-[900px] lg:gap-0 lg:pb-[40px] lg:pt-[96px]">
      <h2
        className={cn(
          T.brush,
          "tracking-[-0.8px] text-[64px] leading-[77px] sm:text-[80px] sm:leading-[96px]",
          "lg:flex lg:h-[72px] lg:items-center lg:justify-center lg:whitespace-nowrap lg:leading-[72px]"
        )}
      >
        challenges
      </h2>

      <div className="flex flex-col gap-[24px] sm:flex-row sm:items-start lg:gap-[118px]">
        <div className="flex flex-col gap-[16px] sm:w-[48.17%] sm:shrink-0 lg:w-[446px]">
          <p className={cn(T.eyebrow, T.muted, "leading-[26px] lg:h-[14px] lg:whitespace-nowrap lg:leading-[14px]")}>
            02 — What we were up against
          </p>
          <p
            className={cn(
              "font-sans font-semibold tracking-[-1.4px]",
              T.text,
              "text-[28px] leading-[34px] sm:text-[32px] sm:leading-[38px] lg:min-h-[169.594px] lg:text-[40px] lg:leading-[42.4px]"
            )}
          >
            {challenges.heading}
          </p>
          <p className={cn("font-mono-code text-[16px] leading-[26px] lg:leading-[28px]", T.muted)}>{challenges.summary}</p>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-[20px] lg:gap-0 lg:pt-[80px]">
          <p className={cn(T.eyebrow, T.dim, "leading-[26px] lg:h-[28px] lg:pt-[5.5px] lg:leading-[20px]")}>Key goals</p>
          <ul className="flex flex-col gap-[20px] lg:gap-0 lg:pt-[16px]">
            {challenges.goals.map((g, i) => (
              <li
                key={g.title}
                className={cn(
                  "flex flex-col gap-[8px] lg:gap-[16px] lg:border-t lg:border-[#2E2E2C]",
                  i === challenges.goals.length - 1 ? "lg:border-b lg:py-[25px]" : "lg:py-[24px]"
                )}
              >
                <p className={cn("font-sans font-medium text-[20px] leading-[24px] lg:whitespace-nowrap lg:text-[18px]", T.text)}>{g.title}</p>
                <p className={cn("font-mono-code text-[16px] leading-[26px] lg:min-h-[48px] lg:leading-[24px]", T.soft)}>{g.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

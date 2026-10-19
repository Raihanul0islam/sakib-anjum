import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/constants/portfolio/case-studies";
import { T } from "./styles";

/* Next story + enquiry. Desktop 162:1939 (py 96) · tablet 255:347 · mobile 255:447 */
export function CaseNext({ next }: { next: CaseStudy }) {
  const href = `/portfolio/${next.slug}`;
  return (
    <section className="mx-auto flex w-full flex-col gap-[24px] lg:max-w-[1200px] lg:gap-[64px] lg:py-[96px]">
      <div className="flex flex-col gap-[24px] lg:gap-[16px]">
        <p className="font-sans text-[16px] font-medium leading-[26px] text-[#F2F0E9] lg:leading-[18px]">KEEP EXPLORING / NEXT STORY</p>
        <div className="flex flex-col gap-[24px] lg:flex-row lg:items-center lg:gap-[64px]">
          <Link href={href} className="relative block w-full overflow-hidden aspect-[326/220] sm:aspect-[656/360] lg:aspect-[680/425] lg:w-auto lg:min-w-0 lg:flex-1">
            <Image src={next.card.image} alt={next.card.title} fill sizes="(min-width: 992px) 680px, 100vw" className="object-cover" />
          </Link>
          <div className="flex flex-col gap-[24px] lg:w-[456px] lg:shrink-0 lg:gap-[28px]">
            <p className={cn("font-sans text-[16px] font-medium leading-[26px] lg:leading-[18px]", T.subtle)}>{next.card.meta}</p>
            <h2 className="font-sans font-semibold text-[#F2F0E9] text-[36px] leading-[43px] sm:text-[44px] sm:leading-[53px] lg:text-[52px] lg:leading-[57px]">
              {next.card.title}
            </h2>
            <p className={cn("font-mono-code text-[16px] leading-[26px] lg:text-[18px] lg:leading-[30px]", T.muted)}>{next.card.summary}</p>
            <Link href={href} className={cn(T.link, "self-start leading-[26px] lg:leading-[1.25]")}>
              VIEW THE STORY ↗
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[24px] pt-[24px] lg:flex-row lg:items-center lg:gap-[80px] lg:border-t lg:border-[#343D35] lg:pt-[48px]">
        <p className={cn("font-sans font-semibold tracking-[-1.96px] text-[32px] leading-[38px] sm:text-[40px] sm:leading-[48px] lg:min-w-0 lg:flex-1 lg:leading-[1.15]", T.text)}>
          Let’s build something
          <br />
          good together.
        </p>
        <div className="flex flex-col items-start gap-[16px] sm:flex-row sm:items-center lg:w-[460px] lg:shrink-0 lg:justify-end lg:gap-[48px]">
          <Link
            href="/contact"
            className="border border-[#FF6A4D] bg-[#FF4802] px-[22px] py-[15px] font-sans text-[16px] uppercase leading-[1.25] text-[#F2F0E9] transition-colors hover:bg-[#FF5A1A]"
          >
            Start a project ↗
          </Link>
          <Link href="/portfolio" className={cn(T.link, "leading-[26px] sm:w-[200px] lg:w-auto lg:leading-[19px]")}>
            ALL WORK ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

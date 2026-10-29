import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/constants/portfolio/case-studies";
import { T } from "./styles";

export function CaseTestimonial({ testimonial }: { testimonial: NonNullable<CaseStudy["testimonial"]> }) {
  return (
    <section className="mx-auto w-full lg:max-w-[804px] lg:pb-[40px] lg:pt-[96px]">
      <figure className="relative hidden h-[445px] lg:block">
        <div className="absolute left-[553px] top-[200.75px] h-[254px] w-[253px] bg-[#262624]">
          <Image src={testimonial.photo} alt="" fill sizes="253px" className="object-cover" />
        </div>
        <div className={cn("absolute left-0 top-[51.75px] flex w-[580px] flex-col gap-[16px] overflow-clip bg-[#171B18] px-[24px] py-[32px]", T.shadow)}>
          <blockquote className={cn("font-mono-code text-[16px] leading-[30px]", T.text)}>{testimonial.quote}</blockquote>
          <figcaption className={cn("whitespace-nowrap font-mono-code text-[16px] italic leading-[20px]", T.soft)}>{testimonial.author}</figcaption>
        </div>
        <Image src="/images/icons/quote.svg" alt="" width={46.38} height={36.506} unoptimized className="absolute left-0 top-0" style={{ width: 46.38, height: 36.506 }} />
      </figure>

      <figure className="flex flex-col gap-[24px] sm:flex-row sm:items-start lg:hidden">
        <div className="relative aspect-square w-full shrink-0 bg-[#262624] sm:w-[176px]">
          <Image src={testimonial.photo} alt="" fill sizes="(min-width: 576px) 176px, 100vw" className="object-cover" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-[20px] text-[16px] leading-[26px]">
          <blockquote className={cn("font-mono-code", T.text)}>{testimonial.quote}</blockquote>
          <figcaption className={cn("font-mono-code italic", T.soft)}>{testimonial.author}</figcaption>
        </div>
      </figure>
    </section>
  );
}

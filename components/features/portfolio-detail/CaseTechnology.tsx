import React from "react";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/constants/portfolio/case-studies";
import { T } from "./styles";

/* 05 — Technology. Desktop 162:1792 (rows of 3, 44 gap) · tablet 255:293 / mobile 255:393 (2 columns) */
export function CaseTechnology({ items }: { items: NonNullable<CaseStudy["technology"]> }) {
  const rows = [items.slice(0, 3), items.slice(3)].filter((r) => r.length);

  return (
    <section className="mx-auto flex w-full flex-col gap-[24px] lg:max-w-[900px] lg:flex-row lg:justify-center lg:gap-[14px] lg:pb-[40px] lg:pt-[96px]">
      <p className={cn(T.eyebrow, T.subtle, "leading-[26px] lg:h-[156px] lg:w-[258px] lg:shrink-0 lg:leading-[14px]")}>05 — Technology</p>

      {/* Desktop rows */}
      <div className="hidden min-w-0 flex-1 flex-col gap-[24px] lg:flex">
        {rows.map((row, r) => (
          <ul key={r} className="flex items-center gap-[44px]">
            {row.map((t, i) => (
              <li key={t.name} className={cn("flex flex-col gap-[12px]", r === 0 && i === 0 && "w-[124.828px]")}>
                <p className={cn("whitespace-nowrap font-sans text-[24px] font-medium leading-[26px] tracking-[-0.8px]", T.text)}>{t.name}</p>
                <p className={cn(T.eyebrow, T.dim, "whitespace-nowrap leading-[20px]")}>{t.role}</p>
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Tablet / mobile: 2 columns */}
      <ul className="grid grid-cols-2 gap-[24px] lg:hidden">
        {items.map((t) => (
          <li key={t.name} className="flex min-w-0 flex-col gap-[8px]">
            <p className={cn("font-sans text-[24px] font-medium leading-[29px] tracking-[-0.8px]", T.text)}>{t.name}</p>
            <p className={cn(T.eyebrow, T.dim, "leading-[26px]")}>{t.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  BLOG_ARCHIVE,
  BLOG_ARCHIVE_INTRO,
  BLOG_ESSAYS,
  BLOG_FILTERS,
  BLOG_INTRO,
  type BlogCategory,
  type BlogEssay,
} from "@/constants/blog/listing";

type Filter = "all" | BlogCategory;
const META = "font-sans text-[16px] leading-[26px] text-[#ABB3A9]";
const LINK = "self-start font-sans text-[16px] leading-[26px] text-[#FF4802] transition-opacity hover:opacity-80";

function FilterButton({ f, active, onClick }: { f: (typeof BLOG_FILTERS)[number]; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex cursor-pointer gap-[12px] whitespace-nowrap font-sans text-[16px] font-medium uppercase leading-[26px] transition-colors",
        active ? "text-[#F2F0E9]" : "text-[#ABB3A9] hover:text-[#F2F0E9]"
      )}
    >
      <span className="mr-[-3.52px] tracking-[3.52px]">{f.label}</span>
      <span className="mr-[-0.72px] tracking-[0.72px] text-[#ABB3A9]">{f.count}</span>
    </button>
  );
}

function Filters({ active, onChange }: { active: Filter; onChange: (f: Filter) => void }) {
  const row = (items: typeof BLOG_FILTERS, className?: string) => (
    <div className={cn("flex gap-[12px]", className)}>
      {items.map((f) => (
        <FilterButton key={f.key} f={f} active={active === f.key} onClick={() => onChange(f.key)} />
      ))}
    </div>
  );
  return (
    <div role="group" aria-label="Filter notes" className="flex flex-col gap-[12px] pt-[8px]">
      {row(BLOG_FILTERS.slice(0, 2), "sm:hidden")}
      {row(BLOG_FILTERS.slice(2, 4), "sm:hidden")}
      {row(BLOG_FILTERS.slice(4), "sm:hidden")}
      {row(BLOG_FILTERS.slice(0, 3), "hidden sm:flex")}
      {row(BLOG_FILTERS.slice(3), "hidden sm:flex")}
    </div>
  );
}

function Essay({ essay }: { essay: BlogEssay }) {
  const portrait = !!essay.titleLines;
  const href = `/blogs/${essay.slug}`;
  return (
    <article className="flex flex-col gap-[24px] sm:gap-0">
      <p
        aria-hidden
        className="font-sans text-[48px] font-medium leading-[58px] tracking-[-6.3251px] text-[#727D72] sm:mb-[-24px] sm:text-[64px] sm:leading-[77px]"
      >
        {essay.number}
      </p>
      <div className={cn("flex flex-col gap-[24px]", portrait && "sm:flex-row sm:items-start")}>
        <Link
          href={href}
          className={cn(
            "relative block aspect-[326/240] w-full shrink-0 overflow-hidden",
            portrait ? "sm:aspect-[280/360] sm:w-[42.683%]" : "sm:aspect-[656/360]"
          )}
        >
          <Image src={essay.image} alt={essay.title} fill sizes="(min-width: 576px) 656px, 100vw" className="object-cover" />
        </Link>
        <div className="flex min-w-0 flex-1 flex-col gap-[16px]">
          <p className={cn(META, !portrait && "font-medium uppercase tracking-[1.4px]")}>{essay.meta}</p>
          <h2
            className={cn(
              "pr-[2px] font-sans text-[28px] leading-[34px] text-[#F2F0E9] sm:pr-0 sm:text-[36px] sm:leading-[43px]",
              portrait ? "font-semibold" : "font-medium"
            )}
          >
            <Link href={href} className="transition-colors hover:text-[#FF4802]">
              {portrait ? (
                <>
                  {essay.titleLines![0]}
                  <br />
                  {essay.titleLines![1]}
                </>
              ) : (
                essay.title
              )}
            </Link>
          </h2>
          <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{essay.summary}</p>
          <Link href={href} className={LINK}>
            READ THE STORY ↗
          </Link>
        </div>
      </div>
    </article>
  );
}

export function BlogStacked() {
  const [filter, setFilter] = useState<Filter>("all");
  const essays = BLOG_ESSAYS.filter((e) => filter === "all" || e.category === filter);
  const archive = BLOG_ARCHIVE.filter((a) => filter === "all" || a.category === filter);

  return (
    <div className="flex flex-col items-center px-[16px] pb-[32px] pt-[24px] sm:px-[32px] sm:pb-[48px] sm:pt-[40px] lg:hidden">
      <div className="flex w-full flex-col gap-[48px] sm:max-w-[656px] sm:gap-[64px]">
        <header className="flex flex-col gap-[16px]">
          <h1 className="font-brush text-[72px] lowercase leading-[86px] tracking-[-1.2px] text-[#FF4802] sm:text-[96px] sm:leading-[115px]">
            {BLOG_INTRO.script}
          </h1>
          <p className="font-sans text-[16px] font-medium uppercase leading-[26px] tracking-[1.4px] text-[#ABB3A9]">{BLOG_INTRO.count}</p>
          <p className="font-sans text-[36px] font-semibold leading-[43px] tracking-[-1.08px] text-[#F2F0E9] sm:text-[48px] sm:leading-[58px] sm:tracking-[-1.44px]">
            {BLOG_INTRO.title}
          </p>
          <p className="font-mono-code text-[16px] leading-[26px] text-[#F2F0E9]">
            {BLOG_INTRO.lead}
            {BLOG_INTRO.rest}
          </p>
          <Filters active={filter} onChange={setFilter} />
        </header>

        {essays.map((e) => (
          <Essay key={e.number} essay={e} />
        ))}

        <section className="flex flex-col gap-[24px]">
          <p className={META}>{BLOG_ARCHIVE_INTRO.label}</p>
          <h2 className="font-sans text-[32px] font-normal leading-[38px] text-[#F2F0E9] sm:text-[40px] sm:leading-[48px]">
            {BLOG_ARCHIVE_INTRO.title[0]}
            <br />
            {BLOG_ARCHIVE_INTRO.title[1]}
          </h2>
          <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{BLOG_ARCHIVE_INTRO.summary}</p>
          {archive.length === 0 && essays.length === 0 && (
            <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">No notes in this category yet.</p>
          )}
          {archive.map((item) => {
            const href = `/blogs/${item.slug}`;
            return (
              <article key={item.slug} className="flex flex-col gap-[24px] border-t border-[#343D35] py-[24px] sm:flex-row sm:items-start">
                <Link href={href} className="relative block aspect-[326/200] w-full shrink-0 overflow-hidden sm:aspect-[180/140] sm:w-[180px]">
                  <Image src={item.image} alt="" fill sizes="(min-width: 576px) 180px, 100vw" className="object-cover" />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col gap-[12px]">
                  <p className={META}>{item.meta}</p>
                  <h3 className="font-sans text-[24px] font-semibold leading-[29px] text-[#F2F0E9]">
                    <Link href={href} className="transition-colors hover:text-[#FF4802]">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{item.summary}</p>
                  <Link href={href} className={LINK}>
                    READ THE STORY ↗
                  </Link>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}

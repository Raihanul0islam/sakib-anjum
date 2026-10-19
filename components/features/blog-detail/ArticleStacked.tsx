import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { RELATED_LESSONS, type ArticleSection, type BlogArticle } from "@/constants/blog/posts";
import { ShareLinks } from "./ShareLinks";

/* Tablet 576–991 (Figma 258:289) and mobile ≤575 (Figma 258:397). */

const META = "font-sans text-[16px] font-medium leading-[26px] tracking-[-0.32px]";
const BODY = "font-mono-code text-[16px] leading-[26px] tracking-[-0.24px] text-[rgba(246,245,240,0.9)]";
/* The desktop copy renders the same headings; these ids keep the anchors unique */
const anchor = (id: string) => `${id}-m`;

function DateRow({ date, readTime, slash, className }: { date: string; readTime: string; slash?: boolean; className?: string }) {
  return (
    <div className={cn(META, "flex gap-[12px] whitespace-nowrap", className)}>
      <span className="w-[110px]">{date}</span>
      {slash && <span className="w-[12px]">/</span>}
      <span className="w-[100px]">{readTime}</span>
    </div>
  );
}

function SectionCopy({ section, children }: { section: ArticleSection; children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[16px]">
      <h2
        id={anchor(section.id)}
        className="scroll-mt-[24px] font-sans text-[28px] font-semibold leading-[34px] tracking-[-0.56px] text-[#F2F0E9] sm:text-[32px] sm:leading-[38px] sm:tracking-[-0.64px]"
      >
        {section.title}
      </h2>
      <p className={BODY}>{section.body}</p>
      {children}
    </div>
  );
}

export function ArticleStacked({ post, url }: { post: BlogArticle; url: string }) {
  return (
    <div className="flex flex-col items-center px-[16px] pb-[32px] pt-[24px] sm:px-[32px] sm:pb-[48px] sm:pt-[40px] lg:hidden">
      <div className="flex w-full flex-col gap-[48px] sm:max-w-[656px] sm:gap-[64px]">
        {/* Hero */}
        <header className="flex flex-col gap-[20px]">
          <p aria-hidden className="font-brush text-[72px] lowercase leading-[86px] tracking-[-1.2px] text-[#FF4802] sm:text-[96px] sm:leading-[115px]">
            blog
          </p>
          <div className="flex flex-col gap-[8px] text-[#F2F0E9]">
            <p className={META}>{post.category}</p>
            <DateRow date={post.date} readTime={post.readTime} slash />
          </div>
          <h1 className="font-sans text-[36px] font-semibold leading-[43px] tracking-[-1.08px] text-[#F2F0E9] sm:text-[48px] sm:leading-[58px] sm:tracking-[-1.44px]">
            {post.title}
          </h1>
          <p className="font-mono-code text-[16px] leading-[26px] text-[#F2F0E9]">
            {post.lead}
            {post.leadRest}
          </p>
          <div className="relative aspect-[326/240] w-full overflow-hidden rounded-[24px] sm:aspect-[656/370]">
            <Image src={post.hero} alt={post.title} fill priority sizes="(min-width: 576px) 656px, 100vw" className="object-cover" />
          </div>
        </header>

        {/* Contents + sharing */}
        <div className="flex flex-col gap-[24px] border-y border-[#343D35] py-[24px] sm:flex-row">
          <nav aria-label="Table of contents" className={cn(META, "flex flex-col gap-[12px] text-[#F2F0E9] sm:w-[382px] sm:shrink-0")}>
            <p>Table of contents</p>
            {post.sections.map((s) => (
              <a key={s.id} href={`#${anchor(s.id)}`} className="self-start transition-colors hover:text-[#FF4802]">
                {s.title}
              </a>
            ))}
          </nav>
          <div className="flex w-[250px] flex-col gap-[12px]">
            <p className={cn(META, "text-[#F2F0E9]")}>Share on:</p>
            <ShareLinks url={url} />
          </div>
        </div>

        {/* Reading column */}
        <div className="flex flex-col gap-[32px]">
          {post.sections.map((s) => (
            <React.Fragment key={s.id}>
              <SectionCopy section={s}>
                {s.bullets?.map((b) => (
                  <p key={b.text} className="border-l-2 border-[#343D35] pl-[16px] font-mono-code text-[16px] leading-[26px] text-[rgba(246,245,240,0.9)]">
                    {b.text}
                  </p>
                ))}
              </SectionCopy>
              {s.images && (
                <div className="flex flex-col gap-[24px] sm:grid sm:grid-cols-2">
                  {s.images.map((src, i) => (
                    <div key={i} className="relative aspect-[326/260] w-full overflow-hidden rounded-[8px] sm:aspect-[316/245]">
                      <Image src={src} alt="" fill sizes="(min-width: 576px) 316px, 100vw" className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
              {s.quote && (
                <blockquote className="bg-[#232A24] p-[24px]">
                  <p className="font-mono-code text-[22px] leading-[26px] tracking-[-0.44px] text-[rgba(246,245,240,0.9)] sm:text-[24px] sm:leading-[29px] sm:tracking-[-0.48px]">
                    {s.quote}
                  </p>
                </blockquote>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* More articles */}
        <section className="flex flex-col gap-[32px]">
          <h2 className="font-sans text-[32px] font-medium leading-[38px] text-[#F2F0E9]">More Articles</h2>
          {RELATED_LESSONS.map((l) => (
            <article key={l.title} className="flex flex-col gap-[24px] border-t border-[#343D35] pt-[24px] sm:flex-row sm:items-start">
              <Link href={l.href} className="relative block aspect-[326/220] w-full shrink-0 overflow-hidden sm:aspect-auto sm:h-[190px] sm:w-[220px]">
                <Image src={l.image} alt={l.title} fill sizes="(min-width: 576px) 220px, 100vw" className="object-cover" />
              </Link>
              <div className="flex min-w-0 flex-1 flex-col gap-[12px]">
                <p className={cn(META, "text-[#ABB3A9]")}>{l.category}</p>
                <DateRow date={l.date} readTime={l.readTime} className="text-[#ABB3A9]" />
                <h3 className="font-sans text-[24px] font-medium leading-[29px] text-[#F2F0E9]">
                  <Link href={l.href} className="transition-colors hover:text-[#FF4802]">
                    {l.title}
                  </Link>
                </h3>
                <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{l.summary}</p>
                <Link href={l.href} className="self-start font-sans text-[16px] leading-[26px] text-[#FF4802] transition-opacity hover:opacity-80">
                  EXPLORE THE LESSON ↗
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

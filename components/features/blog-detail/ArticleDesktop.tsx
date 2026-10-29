import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cq } from "@/lib/cq";
import { RELATED_LESSONS, type ArticleSection, type BlogArticle, type RelatedLesson } from "@/constants/blog/posts";
import { ShareLinks } from "./ShareLinks";

const BODY = "font-mono-code text-[16px] leading-[27px] tracking-[-0.24px] text-[rgba(246,245,240,0.9)]";
const META = "whitespace-nowrap font-sans text-[16px] font-medium leading-[24px] tracking-[-0.32px]";

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={cn("flex justify-center", className)}>
      <div className="w-full max-w-[1200px]">{children}</div>
    </section>
  );
}

function Hero({ post }: { post: BlogArticle }) {
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="flex flex-col gap-[64px] @container">
        <div className="flex flex-col" style={{ paddingInline: cq(48) }}>
          <p
            aria-hidden
            className="font-brush lowercase text-[#FF4802]"
            style={{ height: cq(105.594), fontSize: cq(120), lineHeight: cq(105.6), letterSpacing: cq(-1.2) }}
          >
            blog
          </p>
          <div className="flex flex-col items-end">
            <div className="flex flex-col gap-[16px]" style={{ width: cq(784) }}>
              <div className={cn(META, "flex items-center gap-[16px] text-[#F2F0E9]")}>
                <span className="bg-[#FF4802] px-[10px] pb-[3px] pt-[2px]">{post.category}</span>
                <span className="flex items-center gap-[12px]">
                  <span>{post.date}</span>
                  <span className="leading-[20px]">/</span>
                  <span>{post.readTime}</span>
                </span>
              </div>
              <h1
                className="font-sans font-semibold text-[#F2F0E9]"
                style={{ minHeight: cq(156), fontSize: cq(71), lineHeight: cq(77.52), letterSpacing: cq(-2.13) }}
              >
                {post.title}
              </h1>
            </div>
            <div style={{ width: cq(784), minHeight: cq(92), paddingTop: 24.406 }}>
              <p className="font-mono-code text-[16px] leading-[34px] text-[#F2F0E9]" style={{ width: cq(737) }}>
                {post.lead}
                {post.leadRest}
              </p>
            </div>
          </div>
        </div>
        <div className="relative mb-[-29px] aspect-[1200/640] w-full overflow-hidden rounded-[24px]">
          <Image src={post.hero} alt={post.title} fill priority sizes="(min-width: 1240px) 1200px, 100vw" className="object-cover" />
        </div>
      </div>
    </Section>
  );
}

function SectionCopy({ section }: { section: ArticleSection }) {
  return (
    <div className="flex flex-col gap-[16px]">
      <h2 id={section.id} className="scroll-mt-[24px] font-sans text-[32px] font-semibold leading-[40px] tracking-[-0.64px] text-[#F2F0E9]">
        {section.title}
      </h2>
      <p className={BODY}>{section.body}</p>
    </div>
  );
}

function ArticleSectionBlock({ section }: { section: ArticleSection }) {
  if (section.bullets || section.images) {
    return (
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[24px]">
          <SectionCopy section={section} />
          {section.bullets && (
            <ul className="flex flex-col gap-[20px]">
              {section.bullets.map((b) => (
                <li key={b.text} className="flex items-center gap-[12px]">
                  <span className="relative size-[24px] shrink-0">
                    <Image src="/icons/blog/arrow-right-double.svg" alt="" width={15} height={14} unoptimized className="absolute inset-[20.83%_18.75%] size-auto max-w-none" />
                  </span>
                  <span
                    className="min-w-0 max-w-[768px] font-mono-code text-[16px] leading-[27px] text-[rgba(246,245,240,0.9)]"
                    style={b.desktopWidth ? { maxWidth: b.desktopWidth } : undefined}
                  >
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {section.images && (
          <div className="grid grid-cols-2 gap-[24px]">
            {section.images.map((src, i) => (
              <div key={i} className="relative aspect-[463/359] overflow-hidden rounded-[8px]">
                <Image src={src} alt="" fill sizes="(min-width: 1240px) 463px, 40vw" className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  if (section.quote) {
    return (
      <div className="flex flex-col gap-[32px]">
        <SectionCopy section={section} />
        <blockquote className="relative">
          <span aria-hidden className="absolute left-[-1px] top-0 h-[102px] w-[2px] bg-[#343D35]" />
          <p className="ml-[2.5%] font-mono-code text-[24px] leading-[41px] tracking-[-0.48px] text-[rgba(246,245,240,0.9)]">{section.quote}</p>
        </blockquote>
      </div>
    );
  }
  return <SectionCopy section={section} />;
}

function Body({ post, url }: { post: BlogArticle; url: string }) {
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="flex items-start justify-between">
        <aside className="sticky top-[40px] flex w-[250px] shrink-0 flex-col gap-[60px]">
          <nav aria-label="Table of contents" className="flex flex-col gap-[24px]">
            <p className={cn(META, "text-[#F2F0E9]")}>Table of contents</p>
            <ul className="flex flex-col items-start">
              {post.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={cn(META, "block border-l border-[#343D35] px-[20px] py-[10px] text-[#F2F0E9] transition-colors hover:text-[#FF4802]")}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-[24px]">
            <p className={cn(META, "text-[#F2F0E9]")}>Share on:</p>
            <ShareLinks url={url} />
          </div>
        </aside>
        <div className="flex min-w-0 max-w-[950px] flex-1 flex-col gap-[80px]">
          {post.sections.map((s) => (
            <ArticleSectionBlock key={s.id} section={s} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function LessonCard({ lesson }: { lesson: RelatedLesson }) {
  return (
    <article className="flex flex-col gap-[20px]">
      <Link href={lesson.href} className="relative block aspect-[378/236] w-full overflow-hidden">
        <Image src={lesson.image} alt={lesson.title} fill sizes="(min-width: 1240px) 378px, 30vw" className="object-cover" />
      </Link>
      <div className={cn(META, "flex flex-wrap items-center gap-x-[16px] gap-y-[8px]")}>
        <span className="flex items-center gap-[8px] bg-[#232A24] px-[10px] pb-[3px] pt-[2px] text-[#ABB3A9]">
          <span className="size-[8px] rounded-full bg-[#FF4802]" />
          {lesson.category}
        </span>
        <span className="flex items-center gap-[12px] text-[#ABB3A9]">
          <span>{lesson.date}</span>
          <span className="leading-[20px] text-[#F2F0E9]">/</span>
          <span>{lesson.readTime}</span>
        </span>
      </div>
      <h3 className="font-sans text-[24px] font-medium leading-[29px] text-[#F2F0E9]">
        <Link href={lesson.href} className="transition-colors hover:text-[#FF4802]">
          {lesson.title}
        </Link>
      </h3>
      <p className="font-mono-code text-[16px] leading-[25px] text-[#ABB3A9]">{lesson.summary}</p>
      <Link href={lesson.href} className="self-start font-sans text-[16px] leading-[25px] text-[#FF4802] transition-opacity hover:opacity-80">
        EXPLORE THE LESSON ↗
      </Link>
    </article>
  );
}

function MoreArticles() {
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="flex flex-col gap-[32px]">
        <h2 className="font-sans text-[28px] font-medium leading-[43px] text-[#F2F0E9]">More Articles</h2>
        <div className="grid grid-cols-[repeat(3,minmax(0,378px))] items-start gap-[32px]">
          {RELATED_LESSONS.map((l) => (
            <LessonCard key={l.title} lesson={l} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export function ArticleDesktop({ post, url }: { post: BlogArticle; url: string }) {
  return (
    <div className="hidden flex-col px-[20px] lg:flex">
      <Hero post={post} />
      <Body post={post} url={url} />
      <MoreArticles />
    </div>
  );
}

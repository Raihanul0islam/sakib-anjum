import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cq } from "@/lib/cq";
import {
  BLOG_ARCHIVE,
  BLOG_ARCHIVE_INTRO,
  BLOG_ESSAYS,
  BLOG_INTRO,
  type BlogEssay,
} from "@/constants/blog/listing";

/* Desktop ≥992 — Figma "Blog · Dark" (29:370). Each section is the 1200px Figma
   composition; cq() keeps it exact at 1200 and scales it down to 992. */

const [essay1, essay2, essay3] = BLOG_ESSAYS;
const LABEL = "font-sans text-[16px] font-medium leading-[20px] tracking-[1.4px] uppercase text-[#ABB3A9]";
const LINK = "font-sans text-[16px] leading-[19px] text-[#FF4802] transition-opacity hover:opacity-80";
const CARD_SHADOW = { filter: "drop-shadow(0px 32px 32px rgba(0,0,0,0.35)) drop-shadow(0px 2px 4px rgba(0,0,0,0.35))" };

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={cn("flex justify-center", className)}>
      <div className="w-full max-w-[1200px] @container">{children}</div>
    </section>
  );
}

function BigNumber({ value, style }: { value: string; style: React.CSSProperties }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute whitespace-nowrap font-sans font-medium text-[#727D72] opacity-40 select-none"
      style={{ fontSize: cq(181.189), lineHeight: cq(126.503), letterSpacing: cq(-6.3251), ...style }}
    >
      {value}
    </span>
  );
}

function Photo({ src, alt, style }: { src: string; alt: string; style: React.CSSProperties }) {
  return (
    <div className="absolute overflow-hidden" style={style}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1240px) 800px, 66vw" className="object-cover" />
    </div>
  );
}

/* Essay card (Figma 209:467): 451 wide, 24/32 padding */
function EssayCard({ essay }: { essay: BlogEssay }) {
  return (
    <div className="flex w-full flex-col gap-[40px] bg-[#171B18] px-[24px] py-[32px]" style={CARD_SHADOW}>
      <div className="flex flex-col gap-[16px]">
        <p className={cn(LABEL, "whitespace-nowrap")}>{essay.meta}</p>
        <h2 className="w-[288px] max-w-full font-sans text-[20.116px] font-medium leading-[32px] text-[#F2F0E9]">
          <Link href={`/blogs/${essay.slug}`} className="transition-colors hover:text-[#FF4802]">
            {essay.title}
          </Link>
        </h2>
        {/* 42 mono chars = 403.2px; Figma fits them in its 403px box, so allow the extra fraction */}
        <p className="mr-[-1px] font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{essay.summary}</p>
      </div>
      <Link href={`/blogs/${essay.slug}`} className={cn(LINK, "self-start whitespace-nowrap")}>
        READ THE STORY ↗
      </Link>
    </div>
  );
}

/* 29:396 — intro */
function Intro() {
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="relative flow-root" style={{ minHeight: cq(409.656) }}>
        <h1
          className="absolute top-0 whitespace-nowrap font-brush lowercase text-[#FF4802]"
          style={{ left: cq(48), fontSize: cq(120), lineHeight: cq(105.6), letterSpacing: cq(-1.2) }}
        >
          {BLOG_INTRO.script}
        </h1>
        <div className="flex flex-col gap-[16px]" style={{ marginLeft: cq(424), paddingTop: cq(73), width: cq(776) }}>
          <p className={LABEL}>{BLOG_INTRO.count}</p>
          <div className="flex flex-col gap-[24px] text-[#F2F0E9]">
            <p className="font-sans font-semibold" style={{ fontSize: cq(76), lineHeight: cq(77.52), letterSpacing: cq(-2.28) }}>
              {BLOG_INTRO.titleLines[0]}
              <br />
              {BLOG_INTRO.titleLines[1]}
            </p>
            <p className="font-mono-code text-[16px] leading-[34px]" style={{ width: cq(595) }}>
              {BLOG_INTRO.lead}
              {BLOG_INTRO.rest}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* 88:177 — essay 01: photo left, card right */
function EssayOne() {
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="relative flow-root" style={{ minHeight: cq(532) }}>
        <Photo src={essay1.image} alt={essay1.title} style={{ left: cq(48), top: 0, width: cq(800), height: cq(500) }} />
        <div className="relative" style={{ marginLeft: cq(704), marginTop: cq(128.34), width: cq(451) }}>
          <BigNumber value={essay1.number} style={{ right: cq(-51), top: cq(-111) }} />
          <EssayCard essay={essay1} />
        </div>
      </div>
    </Section>
  );
}

/* 88:187 — essay 02: big title + offset copy left, portrait photo right */
function EssayTwo() {
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="relative flow-root" style={{ minHeight: cq(620) }}>
        <BigNumber value={essay2.number} style={{ left: cq(934), top: cq(460) }} />
        <Photo src={essay2.image} alt={essay2.title} style={{ left: cq(800), top: 0, width: cq(352), height: cq(470) }} />
        <div className="relative" style={{ marginLeft: cq(100), paddingTop: cq(32), width: cq(620) }}>
          <div className="flex flex-col gap-[20px]">
            <p className="font-sans text-[16px] leading-[19px] text-[#ABB3A9]">{essay2.meta}</p>
            <h2 className="font-sans font-semibold text-[#F2F0E9]" style={{ fontSize: cq(56), lineHeight: cq(67) }}>
              <Link href={`/blogs/${essay2.slug}`} className="transition-colors hover:text-[#FF4802]">
                {essay2.titleLines![0]}
                <br />
                {essay2.titleLines![1]}
              </Link>
            </h2>
          </div>
          <div className="flex flex-col gap-[24px]" style={{ marginLeft: cq(188), marginTop: cq(52.4), width: cq(430) }}>
            <p className="font-mono-code text-[16px] leading-[27px] text-[#ABB3A9]">{essay2.summary}</p>
            <Link href={`/blogs/${essay2.slug}`} className={cn(LINK, "self-start")}>
              READ THE STORY ↗
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* 88:196 — essay 03: wide photo, card overlapping its lower-left */
function EssayThree() {
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="relative flow-root" style={{ minHeight: cq(700) }}>
        <BigNumber value={essay3.number} style={{ left: cq(1021), top: cq(454.34) }} />
        <Photo src={essay3.image} alt={essay3.title} style={{ left: 0, top: cq(48), width: "100%", height: cq(440) }} />
        {/* Card hangs 3.34px below the 700 box in Figma without adding height */}
        <div className="relative" style={{ marginLeft: cq(48), marginTop: cq(360.34), marginBottom: cq(-3.34), width: cq(451) }}>
          <EssayCard essay={essay3} />
        </div>
      </div>
    </Section>
  );
}

/* 29:452 — archive */
function Archive() {
  return (
    <Section className="py-[96px]">
      <div className="flex items-start gap-[80px]">
        <div className="flex w-[390px] shrink-0 flex-col gap-[24px]">
          <p className="w-[244px] font-sans text-[16px] leading-[1.25] text-[#ABB3A9]">{BLOG_ARCHIVE_INTRO.label}</p>
          <h2 className="font-sans text-[56px] font-normal leading-[67px] text-[#F2F0E9]">
            {BLOG_ARCHIVE_INTRO.title[0]}
            <br />
            {BLOG_ARCHIVE_INTRO.title[1]}
          </h2>
          <p className="font-mono-code text-[16px] leading-[27px] text-[#ABB3A9]">{BLOG_ARCHIVE_INTRO.summary}</p>
        </div>
        <ul className="flex min-w-0 flex-1 flex-col gap-[24px] overflow-clip">
          {BLOG_ARCHIVE.map((item) => (
            <li key={item.slug} className="group flex items-start gap-[28px] border-t border-[#343D35] py-[24px]">
              <Link href={`/blogs/${item.slug}`} className="relative block h-[124px] w-[180px] shrink-0 overflow-hidden">
                <Image src={item.image} alt="" fill sizes="180px" className="object-cover" />
              </Link>
              <div className="flex min-w-0 flex-1 flex-col gap-[16px] overflow-clip whitespace-nowrap">
                <p className="font-sans text-[16px] leading-[1.25] text-[#ABB3A9]">{item.meta}</p>
                <div className="flex flex-col gap-[24px]">
                  <div className="flex flex-col gap-[16px]">
                    <h3 className="font-sans text-[24px] font-semibold leading-[1.25] text-[#F2F0E9]">
                      <Link href={`/blogs/${item.slug}`} className="transition-colors group-hover:text-[#FF4802]">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="font-mono-code text-[16px] leading-[27px] text-[#ABB3A9]">{item.summary}</p>
                  </div>
                  <Link href={`/blogs/${item.slug}`} className="self-start font-sans text-[16px] leading-[1.25] text-[#FF4802] transition-opacity hover:opacity-80">
                    READ THE STORY ↗
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function BlogDesktop() {
  return (
    <div className="hidden flex-col px-[20px] lg:flex">
      <Intro />
      <EssayOne />
      <EssayTwo />
      <EssayThree />
      <Archive />
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cq } from "@/lib/cq";
import {
  GUIDED_BUILDS_INTRO,
  REAL_PROJECTS_INTRO,
  TUTORIAL_FILTERS,
  TUTORIALS_INTRO,
  type FeaturedLesson,
  type GuidedBuild,
  type TutorialCategory,
} from "@/constants/tutorials/catalog";
import { PlayButton, RowPlayButton } from "./shared";

export type Filter = "all" | TutorialCategory;

const LABEL = "font-sans text-[16px] font-medium leading-[20px] tracking-[1.4px] uppercase";
const CARD_SHADOW = { filter: "drop-shadow(0px 32px 32px rgba(0,0,0,0.35)) drop-shadow(0px 2px 4px rgba(0,0,0,0.35))" };

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={cn("flex justify-center", className)}>
      <div className="w-full max-w-[1200px] @container">{children}</div>
    </section>
  );
}

function Hero() {
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="relative" style={{ height: cq(361.656) }}>
        <h1
          className="absolute top-0 whitespace-nowrap font-brush lowercase text-[#FF4802]"
          style={{ left: cq(48), fontSize: cq(120), lineHeight: cq(105.6), letterSpacing: cq(-1.2) }}
        >
          {TUTORIALS_INTRO.script}
        </h1>
        <div className="absolute top-0 flex flex-col gap-[24px]" style={{ left: cq(424), width: cq(728) }}>
          <p className={cn(LABEL, "whitespace-nowrap text-[#ABB3A9]")}>{TUTORIALS_INTRO.count}</p>
          <p className="font-sans font-semibold text-[#F2F0E9]" style={{ fontSize: cq(64), lineHeight: cq(69.12) }}>
            {TUTORIALS_INTRO.titleLines[0]}
            <br />
            {TUTORIALS_INTRO.titleLines[1]}
          </p>
          <p className="font-mono-code text-[16px] leading-[34px] text-[#F2F0E9]" style={{ width: cq(640) }}>
            {TUTORIALS_INTRO.lead}
            {TUTORIALS_INTRO.rest}
          </p>
        </div>
      </div>
    </Section>
  );
}

function Filters({ active, onChange }: { active: Filter; onChange: (f: Filter) => void }) {
  return (
    <div role="group" aria-label="Filter lessons" className="flex h-[35.656px] items-start gap-[24px]">
      {TUTORIAL_FILTERS.map((f) => {
        const on = active === f.key;
        return (
          <button
            key={f.key}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(f.key)}
            className="group relative flex h-full cursor-pointer items-start gap-[8px] whitespace-nowrap pb-[10px] font-sans text-[16px] font-medium uppercase leading-[20px]"
          >
            <span className={cn("tracking-[3.52px] transition-colors", on ? "text-[#F2F0E9]" : "text-[#ABB3A9] group-hover:text-[#F2F0E9]")}>
              {f.label}
            </span>
            <span className="tracking-[0.72px] text-[#ABB3A9]">{f.count}</span>
            {on && <span aria-hidden className="absolute left-0 top-[33.656px] h-[2px] w-[41.109px] bg-[#FF4802]" />}
          </button>
        );
      })}
    </div>
  );
}

function Preview({ lesson }: { lesson: FeaturedLesson }) {
  return (
    <Link href={lesson.href} className="group relative block h-full w-full overflow-clip rounded-[12px]" aria-label={`Play: ${lesson.title}`}>
      <span className="absolute inset-0 overflow-hidden rounded-[12px]">
        {lesson.crop ? (
          <span className="absolute top-0 h-full" style={{ left: lesson.crop.left, width: lesson.crop.width }}>
            <Image src={lesson.image} alt={lesson.title} fill sizes="(min-width: 1240px) 935px, 76vw" className="object-fill" />
          </span>
        ) : (
          <Image src={lesson.image} alt={lesson.title} fill sizes="(min-width: 1240px) 800px, 66vw" className="object-cover" />
        )}
      </span>
      <span aria-hidden className="absolute left-0 top-0 h-[5px] bg-[#343D35]" style={{ width: cq(728) }} />
      {lesson.previewCaption && (
        <span className="absolute inset-0 rounded-[12px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <Image src={lesson.preview} alt="" fill sizes="(min-width: 1240px) 800px, 66vw" className="rounded-[12px] object-cover" />
          <span className={cn("absolute left-[16px] whitespace-nowrap font-sans text-[16px] font-normal uppercase leading-[20px] tracking-[1.4px] text-[#ABB3A9]")} style={{ top: cq(429) }}>
            {lesson.previewCaption}
          </span>
        </span>
      )}
      <PlayButton className="top-[calc(50%-0.16px)] transition-transform duration-300 group-hover:scale-110" />
    </Link>
  );
}

function LessonCard({ lesson, numberSide }: { lesson: FeaturedLesson; numberSide: "right" | "left" }) {
  return (
    <div className="relative">
      <span
        aria-hidden
        className="pointer-events-none absolute whitespace-nowrap font-sans font-medium text-[#727D72] opacity-40 select-none"
        style={{
          top: cq(-111),
          ...(numberSide === "right" ? { right: cq(-51) } : { left: 0 }),
          fontSize: cq(181.189),
          lineHeight: cq(126.503),
          letterSpacing: cq(-6.3251),
        }}
      >
        {lesson.number}
      </span>
      <div className="relative flex flex-col gap-[32px] bg-[#171B18] px-[24px] py-[32px]" style={CARD_SHADOW}>
        <div className="flex flex-col gap-[40px]">
          <div className="flex min-h-[181px] flex-col gap-[16px]">
            <p className={cn(LABEL, "whitespace-nowrap text-[#ABB3A9]")}>{lesson.label}</p>
            <h2
              className="w-[288px] max-w-full font-sans text-[20.116px] font-medium leading-[32px] text-[#F2F0E9]"
              style={lesson.cardTitleWidth ? { width: lesson.cardTitleWidth } : undefined}
            >
              <Link href={lesson.href} className="transition-colors hover:text-[#FF4802]">
                {lesson.title}
              </Link>
            </h2>
            <p className="mb-[-13px] font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{lesson.summary}</p>
          </div>
          <dl className="flex items-center border-t border-[#343D35] pt-[16px]">
            {[
              ["Level", lesson.level],
              ["Time", lesson.time],
              ["Parts", lesson.parts],
            ].map(([term, value], i) => (
              <div key={term} className="flex min-w-0 flex-1 flex-col gap-[8px]">
                <dt className={cn(LABEL, i === 2 ? "text-white" : "text-[#ABB3A9]")}>{term}</dt>
                <dd className="h-[22px] whitespace-nowrap font-sans text-[16px] leading-[22px] text-[#F2F0E9]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Link href={lesson.href} className="flex items-center gap-[8px] self-start whitespace-nowrap font-sans text-[16px] font-medium uppercase leading-[20px] text-[#FF4802] transition-opacity hover:opacity-80">
          <span className="tracking-[3.52px]">Start the lesson</span>
          <span className="w-[20px]">→</span>
        </Link>
      </div>
    </div>
  );
}

function Composition({
  lesson,
  cardSide,
  height,
  imageTop,
  top,
}: {
  lesson: FeaturedLesson;
  cardSide: "right" | "left";
  height: number;
  imageTop: number;
  top?: React.ReactNode;
}) {
  return (
    <div className="relative flex" style={{ minHeight: cq(height), justifyContent: cardSide === "right" ? "flex-end" : "flex-start" }}>
      <div className="absolute" style={{ top: cq(imageTop), width: cq(800), height: cq(455), [cardSide === "right" ? "left" : "right"]: 0 }}>
        <Preview lesson={lesson} />
      </div>
      {top}
      <div className="relative self-start" style={{ marginTop: cq(115.34), marginBottom: cq(Math.min(0, height - 519.34)), width: cq(451) }}>
        <LessonCard lesson={lesson} numberSide={cardSide === "right" ? "right" : "left"} />
      </div>
    </div>
  );
}

function Featured({ lesson, filter, onFilter }: { lesson?: FeaturedLesson; filter: Filter; onFilter: (f: Filter) => void }) {
  const nav = (
    <div className="absolute left-0" style={{ top: cq(0.34) }}>
      <Filters active={filter} onChange={onFilter} />
    </div>
  );
  return (
    <Section className="pb-[40px] pt-[96px]">
      {lesson ? <Composition lesson={lesson} cardSide="right" height={519} imageTop={68} top={nav} /> : <div className="relative h-[35.656px]">{nav}</div>}
    </Section>
  );
}

function RealProjects({ lessons }: { lessons: FeaturedLesson[] }) {
  if (!lessons.length) return null;
  return (
    <Section className="overflow-clip pb-[40px] pt-[96px]">
      <div className="flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[16px]">
          <p className="font-sans text-[16px] leading-[19px] text-[#ABB3A9]">{REAL_PROJECTS_INTRO.label}</p>
          <h2 className="font-sans text-[36px] font-semibold leading-[43px] text-[#F2F0E9]">
            {REAL_PROJECTS_INTRO.titleLines[0]}
            <br />
            {REAL_PROJECTS_INTRO.titleLines[1]}
          </h2>
        </div>
        {lessons.map((l) => (
          <Composition key={l.number} lesson={l} cardSide={l.number === "03" ? "left" : "right"} height={540} imageTop={68.34} />
        ))}
      </div>
    </Section>
  );
}

function BuildRow({ build }: { build: GuidedBuild }) {
  return (
    <article className="flex items-center gap-[32px] bg-[#171B18] p-[24px]">
      <Link href={build.href} className="group relative block shrink-0 overflow-clip" style={{ width: cq(440), height: cq(290) }} aria-label={`Play: ${build.title}`}>
        <Image src={build.image} alt={build.title} fill sizes="(min-width: 1240px) 440px, 36vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        <RowPlayButton />
      </Link>
      <div className="flex min-w-0 max-w-[680px] flex-1 flex-col gap-[20px]">
        <p className="font-sans text-[16px] font-medium leading-[19px] text-[#727D72]">{build.label}</p>
        <h3
          className="max-w-[640px] font-sans text-[28px] font-semibold leading-[34px] text-[#F2F0E9]"
          style={build.desktopTitleWidth ? { maxWidth: build.desktopTitleWidth } : undefined}
        >
          <Link href={build.href} className="transition-colors hover:text-[#FF4802]">
            {build.title}
          </Link>
        </h3>
        <p className="max-w-[640px] font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{build.summary}</p>
        <dl className="flex max-w-[640px] gap-[28px] border-t border-[#343D35] pt-[16px] font-sans text-[16px] font-medium leading-[19px]">
          {[
            ["LEVEL", build.level],
            ["TIME", build.time],
            ["PARTS", build.parts],
          ].map(([term, value]) => (
            <div key={term} className="flex min-w-0 max-w-[194px] flex-1 basis-[194px] flex-col gap-[8px]">
              <dt className="text-[#727D72]">{term}</dt>
              <dd className="text-[#F2F0E9]">{value}</dd>
            </div>
          ))}
        </dl>
        <Link href={build.href} className="self-start font-sans text-[16px] font-medium leading-[19px] text-[#FF4802] transition-opacity hover:opacity-80">
          START THE LESSON ↗
        </Link>
      </div>
    </article>
  );
}

function GuidedBuilds({ builds }: { builds: GuidedBuild[] }) {
  if (!builds.length) return null;
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[16px]">
          <p className="font-sans text-[16px] font-medium leading-[19px] text-[#ABB3A9]">{GUIDED_BUILDS_INTRO.label}</p>
          <h2 className="font-sans text-[44px] font-semibold leading-[53px] text-[#F2F0E9]">{GUIDED_BUILDS_INTRO.title}</h2>
        </div>
        {builds.map((b) => (
          <BuildRow key={b.label} build={b} />
        ))}
      </div>
    </Section>
  );
}

export function TutorialsDesktop({
  filter,
  onFilter,
  featured,
  alternating,
  builds,
}: {
  filter: Filter;
  onFilter: (f: Filter) => void;
  featured?: FeaturedLesson;
  alternating: FeaturedLesson[];
  builds: GuidedBuild[];
}) {
  const empty = !featured && !alternating.length && !builds.length;
  return (
    <div className="hidden flex-col px-[20px] lg:flex">
      <Hero />
      <Featured lesson={featured} filter={filter} onFilter={onFilter} />
      {empty && (
        <Section className="pb-[40px] pt-[48px]">
          <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">No lessons in this category yet.</p>
        </Section>
      )}
      <RealProjects lessons={alternating} />
      <GuidedBuilds builds={builds} />
    </div>
  );
}

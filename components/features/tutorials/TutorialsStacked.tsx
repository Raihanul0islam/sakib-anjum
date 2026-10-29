import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  GUIDED_BUILDS_INTRO,
  REAL_PROJECTS_INTRO,
  TUTORIAL_FILTERS,
  TUTORIALS_INTRO,
  type FeaturedLesson,
  type GuidedBuild,
} from "@/constants/tutorials/catalog";
import { MetaRows, PlayButton, metaItems } from "./shared";
import type { Filter } from "./TutorialsDesktop";

const LABEL = "font-sans text-[16px] font-medium leading-[26px] tracking-[1.4px] uppercase text-[#ABB3A9]";

function Filters({ active, onChange }: { active: Filter; onChange: (f: Filter) => void }) {
  const rows = [TUTORIAL_FILTERS.slice(0, 2), TUTORIAL_FILTERS.slice(2, 4), TUTORIAL_FILTERS.slice(4)];
  return (
    <div role="group" aria-label="Filter lessons" className="flex flex-col gap-[12px] pt-[8px]">
      {rows.map((row, i) => (
        <div key={i} className="flex gap-[12px]">
          {row.map((f) => {
            const on = active === f.key;
            return (
              <button
                key={f.key}
                type="button"
                aria-pressed={on}
                onClick={() => onChange(f.key)}
                className="flex cursor-pointer gap-[12px] whitespace-nowrap font-sans text-[16px] font-medium uppercase leading-[26px]"
              >
                <span className={cn("mr-[-3.52px] tracking-[3.52px] transition-colors", on ? "text-[#F2F0E9]" : "text-[#ABB3A9] hover:text-[#F2F0E9]")}>{f.label}</span>
                <span className="mr-[-0.72px] tracking-[0.72px] text-[#ABB3A9]">{f.count}</span>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function Video({ href, src, alt, className, sizes }: { href: string; src: string; alt: string; className: string; sizes: string }) {
  return (
    <Link href={href} className={cn("relative block w-full shrink-0 overflow-clip", className)} aria-label={`Play: ${alt}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      <PlayButton />
    </Link>
  );
}

function Lesson({ lesson }: { lesson: FeaturedLesson }) {
  const first = lesson.number === "01";
  return (
    <article className="flex flex-col gap-[24px]">
      <p aria-hidden className="font-sans text-[48px] font-medium leading-[58px] tracking-[-6.3251px] text-[#727D72] sm:text-[64px] sm:leading-[77px]">
        {lesson.number}
      </p>
      <div className={cn("flex flex-col gap-[24px]", !first && "sm:flex-row sm:items-start", lesson.number === "03" && "sm:flex-row-reverse")}>
        <Video
          href={lesson.href}
          src={lesson.preview}
          alt={lesson.title}
          className={first ? "aspect-[326/230] sm:aspect-[656/360]" : "aspect-[326/230] sm:aspect-[280/340] sm:w-[42.683%]"}
          sizes={first ? "(min-width: 576px) 656px, 100vw" : "(min-width: 576px) 280px, 100vw"}
        />
        <div className="flex min-w-0 flex-1 flex-col gap-[16px]">
          <p className={LABEL}>{lesson.label}</p>
          <h2 className="font-sans text-[28px] font-medium leading-[34px] text-[#F2F0E9] sm:text-[32px] sm:leading-[38px]">
            <Link href={lesson.href} className="transition-colors hover:text-[#FF4802]">
              {lesson.title}
            </Link>
          </h2>
          <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{lesson.summary}</p>
          <MetaRows items={metaItems(lesson)} variant="lesson" />
          <Link href={lesson.href} className="self-start font-sans text-[16px] font-medium uppercase leading-[26px] tracking-[3.52px] text-[#FF4802] transition-opacity hover:opacity-80">
            Start the lesson
          </Link>
        </div>
      </div>
    </article>
  );
}

function Build({ build }: { build: GuidedBuild }) {
  return (
    <article className="flex flex-col gap-[24px] border-t border-[#343D35] py-[24px] sm:flex-row sm:items-start">
      <Video href={build.href} src={build.image} alt={build.title} className="aspect-[326/220] sm:aspect-[280/290] sm:w-[42.683%]" sizes="(min-width: 576px) 280px, 100vw" />
      <div className="flex min-w-0 flex-1 flex-col gap-[16px]">
        <p className="font-sans text-[16px] font-medium leading-[26px] text-[#727D72]">{build.label}</p>
        <h3 className="font-sans text-[28px] font-semibold leading-[34px] text-[#F2F0E9] sm:text-[32px] sm:leading-[38px]">
          <Link href={build.href} className="transition-colors hover:text-[#FF4802]">
            {build.title}
          </Link>
        </h3>
        <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{build.summary}</p>
        <MetaRows items={metaItems(build).map((m) => ({ ...m, term: m.term.toUpperCase() }))} variant="build" />
        <Link href={build.href} className="self-start font-sans text-[16px] font-medium leading-[26px] text-[#FF4802] transition-opacity hover:opacity-80">
          START THE LESSON ↗
        </Link>
      </div>
    </article>
  );
}

export function TutorialsStacked({
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
    <div className="flex flex-col items-center px-[16px] pb-[32px] pt-[24px] sm:px-[32px] sm:pb-[48px] sm:pt-[40px] lg:hidden">
      <div className="flex w-full flex-col gap-[48px] sm:max-w-[656px] sm:gap-[64px]">
        <header className="flex flex-col gap-[20px]">
          <h1 className="font-brush text-[80px] lowercase leading-[96px] tracking-[-1.2px] text-[#FF4802] sm:text-[104px] sm:leading-[125px]">
            {TUTORIALS_INTRO.script}
          </h1>
          <p className={LABEL}>{TUTORIALS_INTRO.count}</p>
          <p className="font-sans text-[36px] font-semibold leading-[43px] text-[#F2F0E9] sm:text-[48px] sm:leading-[58px]">
            {TUTORIALS_INTRO.titleLines[0]}
            <br />
            {TUTORIALS_INTRO.titleLines[1]}
          </p>
          <p className="font-mono-code text-[16px] leading-[26px] text-[#F2F0E9]">
            {TUTORIALS_INTRO.lead}
            {TUTORIALS_INTRO.rest}
          </p>
          <Filters active={filter} onChange={onFilter} />
        </header>

        {empty && <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">No lessons in this category yet.</p>}

        {featured && <Lesson lesson={featured} />}

        {alternating.length > 0 && (
          <>
            <div className="flex flex-col gap-[16px]">
              <p className="font-sans text-[16px] leading-[26px] text-[#ABB3A9]">{REAL_PROJECTS_INTRO.label}</p>
              <h2 className="font-sans text-[32px] font-semibold leading-[38px] text-[#F2F0E9] sm:text-[40px] sm:leading-[48px]">
                {REAL_PROJECTS_INTRO.titleLines[0]}
                <br />
                {REAL_PROJECTS_INTRO.titleLines[1]}
              </h2>
            </div>
            {alternating.map((l) => (
              <Lesson key={l.number} lesson={l} />
            ))}
          </>
        )}

        {builds.length > 0 && (
          <section className="flex flex-col gap-[40px]">
            <p className="font-sans text-[16px] font-medium leading-[26px] text-[#ABB3A9]">{GUIDED_BUILDS_INTRO.label}</p>
            <h2 className="font-sans text-[32px] font-semibold leading-[38px] text-[#F2F0E9] sm:text-[40px] sm:leading-[48px]">{GUIDED_BUILDS_INTRO.title}</h2>
            {builds.map((b) => (
              <Build key={b.label} build={b} />
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

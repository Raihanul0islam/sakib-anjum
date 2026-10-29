"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CroppedImage } from "@/components/shared/CroppedImage";
import {
  ARCHIVE_PROJECTS,
  FEATURED_PROJECTS,
  PORTFOLIO_FILTERS,
  PORTFOLIO_IMAGES as IMG,
  PORTFOLIO_INTRO,
  type FeaturedProject,
  type PortfolioCategory,
} from "@/constants/portfolio/showcase";

const LABEL = "font-sans text-[16px] font-medium leading-[26px] tracking-[1.4px] uppercase text-[#ABB3A9]";
const STORY_LINK = "self-start font-sans text-[16px] leading-[26px] text-[#FF4802] transition-opacity hover:opacity-80";

type Filter = "all" | PortfolioCategory;

function Filters({ active, onChange }: { active: Filter; onChange: (f: Filter) => void }) {
  const count = (key: Filter) =>
    String(key === "all" ? FEATURED_PROJECTS.length : FEATURED_PROJECTS.filter((p) => p.category === key).length).padStart(2, "0");
  const rows = [PORTFOLIO_FILTERS.slice(0, 2), PORTFOLIO_FILTERS.slice(2)];

  return (
    <div className="flex flex-col gap-[12px]" role="group" aria-label="Filter projects">
      {rows.map((row, r) => (
        <div key={r} className="flex flex-wrap gap-[12px]">
          {row.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => onChange(f.key)}
              aria-pressed={active === f.key}
              className={cn(
                "flex cursor-pointer gap-[12px] whitespace-nowrap font-sans text-[16px] font-medium leading-[26px] uppercase transition-colors",
                active === f.key ? "text-[#F2F0E9]" : "text-[#ABB3A9] hover:text-[#F2F0E9]"
              )}
            >
              <span className="tracking-[3.52px]">{f.label}</span>
              <span className="tracking-[0.72px] text-[#ABB3A9]">{count(f.key)}</span>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

function StoryNumber({ value, overlap }: { value: string; overlap?: boolean }) {
  return (
    <p
      aria-hidden
      className={cn(
        "font-sans text-[48px] font-medium leading-[55px] tracking-[-6.3251px] text-[#727D72] sm:text-[64px] sm:leading-[74px]",
        overlap && "sm:mb-[-24px]"
      )}
    >
      {value}
    </p>
  );
}

function Meta({ project }: { project: FeaturedProject }) {
  if (!project.meta.length) return null;
  return (
    <dl className="flex flex-col gap-[8px] py-[8px] text-[16px] leading-[26px] sm:grid sm:grid-cols-3 sm:gap-[16px]">
      {project.meta.map((m) => (
        <div key={m.term} className="flex gap-[12px] sm:flex-col sm:gap-[4px]">
          <dt className="w-[104px] shrink-0 font-sans font-medium tracking-[1.4px] uppercase text-[#ABB3A9] sm:w-auto">{m.term}</dt>
          <dd className="min-w-0 flex-1 font-sans text-[#F2F0E9]">{m.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Details({ project, children }: { project: FeaturedProject; children?: React.ReactNode }) {
  const semibold = project.number === "02";
  return (
    <div className="flex min-w-0 flex-col gap-[16px] bg-[#171B18] pt-[8px]">
      <p className={LABEL}>{project.label}</p>
      <h2
        className={cn(
          "font-sans text-[28px] leading-[32px] text-[#F2F0E9] sm:text-[36px] sm:leading-[41px]",
          semibold ? "font-semibold tracking-[-0.84px] sm:tracking-[-1.08px]" : "font-medium"
        )}
      >
        {project.title}
      </h2>
      <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{project.description}</p>
      <Meta project={project} />
      {children}
      <Link href={`/portfolio/${project.slug}`} className={STORY_LINK}>
        READ THE STORY ↗
      </Link>
    </div>
  );
}

function StandardStory({ project }: { project: FeaturedProject }) {
  const image = {
    "01": { tablet: { ...IMG.preciseclock, aspect: "656/350" }, mobile: { ...IMG.preciseclock, aspect: "326/220" } },
    "02": { tablet: { ...IMG.weeksTablet, aspect: "656/400" }, mobile: { ...IMG.weeks, aspect: "326/300" } },
    "03": { tablet: { ...IMG.marketplace, aspect: "656/350" }, mobile: { ...IMG.marketplace, aspect: "326/220" } },
  }[project.number]!;

  return (
    <article className="flex flex-col gap-[16px] py-[24px] sm:gap-[24px] sm:py-[32px]">
      <div className="flex flex-col gap-[16px] sm:gap-0">
        <StoryNumber value={project.number} overlap />
        <CroppedImage
          src={image.tablet.src}
          crop={image.tablet.crop}
          alt={project.title}
          sizes="656px"
          className="hidden w-full sm:block"
          style={{ aspectRatio: image.tablet.aspect }}
        />
        <CroppedImage
          src={image.mobile.src}
          crop={image.mobile.crop}
          alt={project.title}
          sizes="100vw"
          className="w-full sm:hidden"
          style={{ aspectRatio: image.mobile.aspect }}
        />
      </div>
      <Details project={project}>
        {project.shipped && (
          <div className="flex flex-col gap-[12px] py-[8px] sm:gap-[16px] sm:py-0">
            <p className={cn(LABEL, "sm:py-[8px]")}>What shipped</p>
            <ul className="flex flex-col gap-[12px] sm:gap-0">
              {project.shipped.map((item, i) => (
                <li
                  key={item}
                  className={cn(
                    "border-t border-[#343D35] py-[16px] font-sans text-[16px] leading-[24px] text-[#F2F0E9]",
                    i === 1 && "sm:font-mono-code",
                    i === project.shipped!.length - 1 && "sm:border-b sm:pb-[14px]"
                  )}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Details>
    </article>
  );
}

function VoiceStory({ project }: { project: FeaturedProject }) {
  return (
    <article className="flex flex-col gap-[16px] py-[24px] sm:gap-[24px] sm:py-[32px]">
      <StoryNumber value={project.number} />
      <div className="flex flex-col gap-[16px] sm:flex-row sm:items-start sm:gap-[24px]">
        <div className="flex gap-[12px] sm:w-[42.683%] sm:shrink-0">
          <CroppedImage
            {...IMG.voice1}
            alt="Sakib presenting the voice agent"
            sizes="(min-width: 576px) 166px, 60vw"
            className="w-[60.16%] shrink-0 aspect-[196.12/270] sm:w-[59.286%] sm:aspect-[166/380]"
          />
          <CroppedImage
            {...IMG.voice2Mobile}
            alt="Sakib at the whiteboard"
            sizes="(min-width: 576px) 102px, 36vw"
            className="min-w-0 flex-1 self-stretch sm:hidden"
          />
          <CroppedImage
            {...IMG.voice2}
            alt="Sakib at the whiteboard"
            sizes="102px"
            className="hidden min-w-0 flex-1 self-stretch sm:block"
          />
        </div>
        <Details project={project}>
          <ul className="flex flex-col gap-[12px] py-[8px] text-[16px] leading-[26px] text-[#F2F0E9]">
            {project.shipped!.map((item, i) => (
              <li key={item} className={i === 0 ? "font-sans" : "font-mono-code"}>
                {item}
              </li>
            ))}
          </ul>
        </Details>
      </div>
    </article>
  );
}

function Archive() {
  return (
    <section className="flex flex-col py-[24px] sm:py-[32px]">
      <h2 className="pb-[24px] font-sans text-[16px] font-medium leading-[26px] tracking-[1.4px] uppercase text-[#F2F0E9]">
        Also in the archive / client work
      </h2>
      <ul>
        {ARCHIVE_PROJECTS.map((item) => (
          <li key={item.number} className="group relative overflow-clip border-t border-[#343D35]">
            <Link href={item.href} className="flex flex-col gap-[12px] py-[20px] sm:py-[24px]">
              <span className="font-sans text-[16px] leading-[26px] text-[#ABB3A9]">{item.number}</span>
              <h3 className="font-sans text-[24px] font-medium leading-[28px] text-[#F2F0E9] transition-colors group-hover:text-[#FF4802]">
                {item.title}
              </h3>
              <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{item.description}</p>
              <p className="flex gap-[24px] font-sans text-[16px] font-medium leading-[26px] tracking-[1.4px] uppercase text-[#ABB3A9]">
                <span className="w-[120px]">{item.type}</span>
                <span className="w-[64px]">{item.year}</span>
              </p>
            </Link>
              <div className="pointer-events-none absolute left-[56.34%] top-[-45.95px] hidden h-[120px] w-[140px] rotate-[1.16deg] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
                <Image src={item.thumbnail} alt="" fill sizes="140px" className="object-cover" />
              </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PortfolioStacked() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = FEATURED_PROJECTS.filter((p) => filter === "all" || p.category === filter);

  return (
    <div className="flex flex-col items-center px-[16px] py-[24px] sm:px-[32px] sm:pb-[32px] sm:pt-[40px] lg:hidden">
      <div className="flex w-full flex-col gap-[16px] sm:max-w-[656px]">
        <header className="flex flex-col gap-[16px] pb-[24px] sm:pb-[32px]">
          <p className="font-brush text-[64px] lowercase leading-[74px] tracking-[-1.2px] text-[#FF4802] sm:text-[80px] sm:leading-[92px]">
            {PORTFOLIO_INTRO.script}
          </p>
          <p className={LABEL}>{PORTFOLIO_INTRO.count}</p>
          <h1 className="font-sans text-[36px] font-semibold leading-[41px] tracking-[-1.08px] text-[#F2F0E9] sm:text-[48px] sm:leading-[55px] sm:tracking-[-1.44px]">
            {PORTFOLIO_INTRO.title}
          </h1>
          <p className="font-mono-code text-[16px] leading-[26px] text-[#F2F0E9]">{PORTFOLIO_INTRO.description}</p>
          <Filters active={filter} onChange={setFilter} />
        </header>

        {visible.map((p) =>
          p.number === "04" ? <VoiceStory key={p.number} project={p} /> : <StandardStory key={p.number} project={p} />
        )}

        <Archive />
      </div>
    </div>
  );
}

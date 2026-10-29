import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cq } from "@/lib/cq";
import { cn } from "@/lib/utils";
import { CroppedImage } from "@/components/shared/CroppedImage";
import {
  ARCHIVE_PROJECTS,
  FEATURED_PROJECTS,
  PORTFOLIO_IMAGES as IMG,
  PORTFOLIO_INTRO,
  type FeaturedProject,
} from "@/constants/portfolio/showcase";

const [preciseClock, weeks, marketplace, voice] = FEATURED_PROJECTS;

const IMAGE_SHADOW = "shadow-[0px_32px_64px_-24px_rgba(0,0,0,0.35),0px_2px_8px_0px_rgba(0,0,0,0.35)]";
const CARD_SHADOW = { filter: "drop-shadow(0px 32px 32px rgba(0,0,0,0.35)) drop-shadow(0px 2px 4px rgba(0,0,0,0.35))" };
const LABEL = "font-sans text-[16px] font-medium leading-[20px] tracking-[1.4px] uppercase text-[#ABB3A9]";
const STORY_LINK = "font-sans text-[16px] font-normal leading-[19px] text-[#FF4802] transition-opacity hover:opacity-80";

function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={cn("flex justify-center", className)}>
      <div className="w-full max-w-[1200px] @container">{children}</div>
    </section>
  );
}

function BigNumber({ value, size, style }: { value: string; size: number; style: React.CSSProperties }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute whitespace-nowrap font-sans font-medium text-[#727D72] opacity-40 select-none"
      style={{ fontSize: cq(size), lineHeight: cq(126.503), letterSpacing: cq(-6.3251), ...style }}
    >
      {value}
    </span>
  );
}

function ProjectCard({ project }: { project: FeaturedProject }) {
  const [role, year] = project.meta;
  return (
    <div className="flex w-full flex-col gap-[40px] bg-[#171B18] px-[24px] py-[32px]" style={CARD_SHADOW}>
      <div className="flex flex-col gap-[48px]">
        <div className="flex flex-col gap-[16px]">
          <p className={cn(LABEL, "whitespace-nowrap")}>{project.label}</p>
          <h2 className="whitespace-nowrap font-sans text-[20.116px] font-medium leading-[32px] text-[#F2F0E9]">
            {project.title}
          </h2>
          <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{project.description}</p>
        </div>
        <dl className="flex items-start gap-[24px] border-t border-[#343D35] pt-[12px]">
          <div className="flex min-w-0 flex-1 flex-col gap-[8px]">
            <dt className={cn(LABEL, "whitespace-nowrap")}>{role.term}</dt>
            <dd className="font-sans text-[16px] leading-[22px] text-[#F2F0E9]">{role.value}</dd>
          </div>
          <div className="flex w-[87px] shrink-0 flex-col gap-[8px]">
            <dt className={cn(LABEL, "whitespace-nowrap")}>{year.term}</dt>
            <dd className="whitespace-nowrap font-sans text-[16px] leading-[22px] text-[#F2F0E9]">{year.value}</dd>
          </div>
        </dl>
      </div>
      <Link href={`/portfolio/${project.slug}`} className={cn(STORY_LINK, "self-start whitespace-nowrap")}>
        READ THE STORY ↗
      </Link>
    </div>
  );
}

function Intro() {
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="relative" style={{ minHeight: cq(365.25) }}>
        <div className="absolute top-0 flex items-start justify-between" style={{ left: cq(48), width: cq(1074.594) }}>
          <p
            className="whitespace-nowrap font-brush lowercase text-[#FF4802]"
            style={{ fontSize: cq(120), lineHeight: cq(105.6), letterSpacing: cq(-1.2) }}
          >
            {PORTFOLIO_INTRO.script}
          </p>
          <p className={cn(LABEL, "text-right")} style={{ width: cq(244) }}>
            {PORTFOLIO_INTRO.count}
          </p>
        </div>
        <div className="flex flex-col gap-[24px]" style={{ marginLeft: cq(424), paddingTop: cq(105.59), width: cq(776) }}>
          <h1
            className="font-sans font-semibold text-[#F2F0E9]"
            style={{ fontSize: cq(76), lineHeight: cq(77.52), letterSpacing: cq(-2.28), width: cq(562) }}
          >
            {PORTFOLIO_INTRO.title}
          </h1>
          <p className="font-mono-code text-[16px] leading-[34px] text-[#F2F0E9]">{PORTFOLIO_INTRO.description}</p>
        </div>
      </div>
    </Section>
  );
}

function ProjectOne() {
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="relative flex justify-end" style={{ minHeight: cq(505) }}>
        <CroppedImage
          {...IMG.preciseclock}
          alt="PreciseClock dashboard on a laptop"
          sizes="(min-width: 1240px) 808px, 66vw"
          className="absolute left-0 top-0 bg-[#0D100E] shadow-[0px_35.499px_70.998px_-26.624px_rgba(0,0,0,0.35),0px_2.219px_8.875px_0px_rgba(0,0,0,0.35)]"
          style={{ width: cq(807.6), height: cq(504.75) }}
        />
        <div className="relative self-start" style={{ marginTop: cq(116.75), marginBottom: cq(-33.76), width: cq(451) }}>
          <BigNumber value={preciseClock.number} size={181.189} style={{ right: cq(-51), top: cq(-111) }} />
          <ProjectCard project={preciseClock} />
        </div>
      </div>
    </Section>
  );
}

function ProjectTwo() {
  const [role, platform] = weeks.meta;
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="relative" style={{ minHeight: cq(451) }}>
        <div className="absolute" style={{ left: cq(800), top: cq(-0.25), width: cq(289), height: cq(344) }}>
          <BigNumber value={weeks.number} size={180} style={{ left: cq(102.08), top: cq(311.41) }} />
          <CroppedImage
            {...IMG.weeks}
            alt="5200 Weeks Shopify app on two phones"
            sizes="(min-width: 1240px) 289px, 24vw"
            className={cn("absolute inset-0 bg-[#0D100E]", IMAGE_SHADOW)}
          />
        </div>

        <div className="relative" style={{ marginLeft: cq(142), paddingTop: cq(41.75), marginBottom: cq(-13.92) }}>
          <div className="flex flex-col gap-[36px]" style={{ width: cq(445) }}>
            <p className={LABEL}>{weeks.label}</p>
            <h2
              className="font-sans font-semibold text-[#F2F0E9]"
              style={{ fontSize: cq(76), lineHeight: cq(77.52), letterSpacing: cq(-2.28) }}
            >
              {weeks.title}
            </h2>
          </div>
          <div className="flex flex-col" style={{ marginLeft: cq(188), marginTop: cq(43.65), width: cq(352), gap: cq(62) }}>
            <div className="flex flex-col gap-[20px]">
              <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{weeks.description}</p>
              <Link href={`/portfolio/${weeks.slug}`} className={cn(STORY_LINK, "self-start")}>
                READ THE STORY ↗
              </Link>
            </div>
            <dl className="flex items-center justify-between border-t border-[#343D35] pt-[16px]" style={{ width: cq(294) }}>
              {[role, platform].map((m) => (
                <div key={m.term} className="flex flex-col gap-[8px]">
                  <dt className={cn(LABEL, "whitespace-nowrap")}>{m.term}</dt>
                  <dd className="whitespace-nowrap font-sans text-[16px] leading-[22px] text-[#F2F0E9]">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ProjectThree() {
  return (
    <Section className="pt-[96px]">
      <div className="relative" style={{ minHeight: cq(900) }}>
        <BigNumber value={marketplace.number} size={180} style={{ left: cq(-70), top: cq(-96.25) }} />
        <CroppedImage
          {...IMG.marketplace}
          alt="BlackDevs Marketplace app screens"
          sizes="(min-width: 1240px) 1200px, 92vw"
          className="w-full bg-[#0D100E]"
          style={{ height: cq(514.281) }}
        />
        <div className="relative flex items-stretch" style={{ marginTop: cq(-36.25), marginLeft: cq(129), gap: cq(139) }}>
          <div className="shrink-0" style={{ width: cq(451) }}>
            <ProjectCard project={marketplace} />
          </div>
          <div className="flex shrink-0 flex-col justify-center" style={{ width: cq(352) }}>
            <p className={cn(LABEL, "pb-[3px] pt-[5px]")}>What shipped</p>
            <ul className="flex flex-col pt-[12px]">
              {marketplace.shipped!.map((item, i) => (
                <li
                  key={item}
                  className={cn(
                    "border-t border-[#343D35] py-[16px] text-[16px] leading-[24px] text-[#F2F0E9]",
                    i === 1 ? "font-mono-code" : "font-sans",
                    i === 2 && "border-b"
                  )}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ProjectFour() {
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="relative" style={{ minHeight: cq(624) }}>
        <div className="absolute" style={{ left: cq(24), top: cq(-3), width: cq(634), height: cq(594.656) }}>
          <CroppedImage
            {...IMG.voice1}
            alt="Sakib presenting the voice agent"
            sizes="(min-width: 1240px) 446px, 36vw"
            className="absolute left-0 top-0 bg-[#0D100E]"
            style={{ width: cq(446), height: cq(594.656) }}
          />
          <CroppedImage
            {...IMG.voice2}
            alt="Sakib at the whiteboard"
            sizes="(min-width: 1240px) 220px, 18vw"
            className={cn("absolute bg-[#0D100E]", IMAGE_SHADOW)}
            style={{ left: cq(414), top: cq(117), width: cq(220), height: cq(391.109) }}
          />
        </div>

        <div className="relative flex flex-col gap-[32px]" style={{ marginLeft: cq(706), paddingTop: cq(96), width: cq(352) }}>
          <div className="relative flex flex-col">
            <p className={cn(LABEL, "pt-[5px]")}>{voice.label}</p>
            <h2 className="mt-[11px] font-sans text-[24px] font-medium leading-[28px] text-[#F2F0E9]">{voice.title}</h2>
            <p className="mt-[20px] font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{voice.description}</p>
            <Link href={`/portfolio/${voice.slug}`} className={cn(STORY_LINK, "mt-[24px] self-start")}>
              READ THE STORY ↗
            </Link>
            <BigNumber value={voice.number} size={180} style={{ right: cq(-142), top: cq(-87.25) }} />
          </div>
          <ul className="flex flex-col">
            {voice.shipped!.map((item, i) => (
              <li
                key={item}
                className={cn(
                  "border-t border-[#343D35] py-[16px] text-[16px] leading-[24px] text-[#F2F0E9]",
                  i === 0 ? "font-sans" : "font-mono-code"
                )}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Archive() {
  return (
    <section className="flex flex-col items-center gap-[32px] pb-[64px]">
      <h2 className="w-full max-w-[916px] whitespace-nowrap py-[10px] font-sans text-[24px] font-medium leading-[26px] tracking-[1.4px] uppercase text-[#F2F0E9]">
        Also in the archive / client work
      </h2>
      <ul className="w-full max-w-[900px] pt-[24px]">
        {ARCHIVE_PROJECTS.map((item, i) => (
          <li
            key={item.number}
            className={cn("border-t border-[#343D35]", i === ARCHIVE_PROJECTS.length - 1 && "border-b")}
          >
            <Link href={item.href} className="group relative block h-[153px]">
              <span className="absolute left-0 top-[41px] font-sans text-[16px] leading-[20px] text-[#ABB3A9]">
                {item.number}
              </span>
              <div className="absolute left-[13.333%]" style={{ top: i === 0 ? 31.75 : 32 }}>
                <h3
                  className="h-[33px] whitespace-nowrap pt-[1px] font-sans font-medium leading-[32px] text-[#F2F0E9] transition-colors group-hover:text-[#FF4802]"
                  style={{ fontSize: item.titleSize, marginTop: -2 }}
                >
                  {item.title}
                </h3>
                <p
                  className="pt-[8px] font-mono-code text-[16px] leading-[24px] text-[#ABB3A9]"
                  style={{ width: item.descWidth, marginTop: 2 }}
                >
                  {item.description}
                </p>
                  <div className="pointer-events-none absolute left-[370.49px] top-[-44.92px] h-[149px] w-[133px] rotate-[1.16deg] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Image src={item.thumbnail} alt="" fill sizes="133px" className="object-cover" />
                  </div>
              </div>
              <div className="absolute left-[74.222%] top-[36.75px] flex w-[25.778%] items-center justify-between">
                <div className="grid grid-rows-[14px_14px] gap-[4px]">
                  {[item.type, item.year].map((t) => (
                    <span key={t} className="whitespace-nowrap font-sans text-[16px] font-medium leading-[20px] tracking-[1.4px] uppercase text-[#ABB3A9]">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="font-sans text-[16px] leading-[28px] text-[#FF4802]">→</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PortfolioDesktop() {
  return (
    <div className="hidden flex-col gap-[48px] px-[20px] lg:flex">
      <Intro />
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <ProjectFour />
      <Archive />
    </div>
  );
}

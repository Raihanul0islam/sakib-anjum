import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cq } from "@/lib/cq";
import { CornerPlayButton } from "@/components/shared/PlayButtons";
import {
  INVITE,
  SESSIONS,
  SESSIONS_INTRO,
  SPEAKER_PROFILE,
  SPEAKING_INTRO,
  WORKSHOP_STORY,
  type SpeakingSession,
} from "@/constants/speaking/page";

/* Desktop ≥992 — Figma "Speaking · Dark" (29:670). Compositions are the 1200px
   Figma layouts; cq() keeps them exact at 1200 and scales them down to 992. */

const LABEL = "font-sans text-[16px] font-medium leading-[20px] tracking-[1.4px] uppercase text-[#ABB3A9]";
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

/* 29:696 — script heading + intro */
function Hero() {
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="relative" style={{ height: cq(302) }}>
        <h1
          className="absolute top-0 whitespace-nowrap font-brush lowercase text-[#FF4802]"
          style={{ left: cq(48), fontSize: cq(120), lineHeight: cq(105.6), letterSpacing: cq(-1.2) }}
        >
          {SPEAKING_INTRO.script}
        </h1>
        <div className="absolute top-0 flex flex-col gap-[24px]" style={{ left: cq(424), width: cq(728) }}>
          <p className={cn(LABEL, "whitespace-nowrap")}>{SPEAKING_INTRO.label}</p>
          <div className="flex flex-col gap-[32px] text-[#F2F0E9]">
            <p className="font-sans font-semibold" style={{ fontSize: cq(64), lineHeight: cq(69.12) }}>
              {SPEAKING_INTRO.titleLines[0]}
              <br />
              {SPEAKING_INTRO.titleLines[1]}
            </p>
            <p className="font-mono-code text-[16px] leading-[34px]" style={{ width: cq(640) }}>
              {SPEAKING_INTRO.lead}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* 29:705 — speaker photo + profile card (card hangs 30px past the 571 frame) */
function Profile() {
  const p = SPEAKER_PROFILE;
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="relative flex" style={{ minHeight: cq(571) }}>
        <div
          className="absolute top-0 overflow-clip bg-[#0D100E] shadow-[0px_32px_64px_-24px_rgba(0,0,0,0.35),0px_2px_8px_0px_rgba(0,0,0,0.35)]"
          style={{ left: cq(48), width: cq(728), height: cq(455) }}
        >
          <Image src={p.image} alt="Sakib Anjum speaking" fill priority sizes="(min-width: 1240px) 728px, 60vw" className="object-cover" />
        </div>
        <div className="relative self-start" style={{ marginLeft: cq(706), marginTop: cq(210), marginBottom: cq(-30), width: cq(451) }}>
          <BigNumber value={p.number} style={{ right: cq(-51), top: cq(-111) }} />
          <div className="relative flex flex-col gap-[40px] bg-[#171B18] px-[24px] py-[32px]" style={CARD_SHADOW}>
            <div className="flex flex-col gap-[16px]">
              <p className={cn(LABEL, "whitespace-nowrap")}>{p.label}</p>
              <h2 className="w-[288px] max-w-full font-sans text-[20.116px] font-medium leading-[32px] text-[#F2F0E9]">{p.title}</h2>
              <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{p.summary}</p>
            </div>
            {/* Equal columns at 1200 as in Figma; never narrower than their words, wrapping when the card shrinks */}
            <dl className="flex flex-wrap items-center gap-y-[12px] border-t border-[#343D35] pt-[16px]">
              {p.facts.map((f) => (
                <div key={f.term} className="flex min-w-fit flex-1 flex-col gap-[8px]">
                  <dt className={cn(LABEL, "whitespace-nowrap")}>{f.term}</dt>
                  <dd className="h-[22px] whitespace-nowrap font-sans text-[16px] leading-[22px] text-[#F2F0E9]">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* 29:734 — workshop story: portrait photo + copy */
function Workshop() {
  const w = WORKSHOP_STORY;
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="flex items-center overflow-clip" style={{ gap: cq(80) }}>
        <figure className="flex shrink-0 flex-col" style={{ width: cq(352), height: cq(473) }}>
          <div className="relative w-full overflow-clip bg-[#0D100E]" style={{ height: cq(440) }}>
            <Image src={w.image} alt="Sakib Anjum leading a workshop" fill sizes="(min-width: 1240px) 352px, 30vw" className="object-cover" />
          </div>
        </figure>
        <div className="relative flex min-w-0 flex-col gap-[24px]" style={{ width: cq(640) }}>
          <p className="font-sans text-[16px] font-medium leading-[18px] text-[#F2F0E9]">{w.label}</p>
          <h2 className="font-sans text-[48px] font-semibold leading-[55px] text-[#F2F0E9]">
            {w.titleLines[0]}
            <br />
            {w.titleLines[1]}
          </h2>
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[24px] font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">
              <p>{w.summary}</p>
              <p className="whitespace-pre-wrap">{w.meta.join("\n")}</p>
            </div>
            <Link href={w.link.href} className="self-start font-sans text-[16px] font-medium uppercase leading-[18px] text-[#FF4802] transition-opacity hover:opacity-80">
              {w.link.label}
            </Link>
          </div>
          <BigNumber value={w.number} style={{ left: cq(499), top: cq(-26) }} />
        </div>
      </div>
    </Section>
  );
}

function SessionCard({ s }: { s: SpeakingSession }) {
  return (
    <div className="relative flex flex-col gap-[40px] bg-[#171B18] px-[24px] py-[32px]" style={CARD_SHADOW}>
      <div className="flex flex-col gap-[16px]">
        <p className={cn(LABEL, "whitespace-nowrap")}>{s.label}</p>
        <h3 className="font-sans text-[20.116px] font-medium leading-[32px] text-[#F2F0E9]">
          <Link href={s.href} className="transition-colors hover:text-[#FF4802]">
            {s.titleLines.map((line, i) => (
              <React.Fragment key={line}>
                {i > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </Link>
        </h3>
        <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{s.summary}</p>
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="flex max-w-[356px] flex-col gap-[16px] font-mono-code text-[16px] leading-[26px] text-[#727D72]">
          <p>{s.tags}</p>
          <p>{s.event}</p>
        </div>
        <Link href={s.href} className="self-start font-sans text-[16px] font-medium uppercase leading-[18px] text-[#FF4802] transition-opacity hover:opacity-80">
          Watch the session ↗
        </Link>
      </div>
    </div>
  );
}

function SessionVideo({ s, style, playTop, dark }: { s: SpeakingSession; style: React.CSSProperties; playTop: number; dark?: boolean }) {
  return (
    <Link href={s.href} className="group absolute overflow-clip" style={style} aria-label={`Watch: ${s.titleLines.join(" ")}`}>
      <Image src={s.image} alt="" fill sizes="(min-width: 1240px) 1104px, 90vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
      <CornerPlayButton dark={dark} style={{ left: cq(40), top: cq(playTop) }} />
    </Link>
  );
}

/* 100:5025 — session collection: three layered video stories */
function Sessions() {
  const [s1, s2, s3] = SESSIONS;
  return (
    <Section className="pb-[40px] pt-[96px]">
      <div className="flex flex-col gap-[64px]" style={{ minHeight: cq(2228) }}>
        <div className="flex flex-col gap-[16px] text-[#F2F0E9]">
          <p className="font-sans text-[16px] font-medium leading-[18px]">{SESSIONS_INTRO.label}</p>
          <h2 className="font-sans text-[48px] font-semibold leading-[55px]">
            {SESSIONS_INTRO.titleLines[0]}
            <br />
            {SESSIONS_INTRO.titleLines[1]}
          </h2>
        </div>

        {/* 123:165 — video left, card right */}
        <div className="relative flex" style={{ minHeight: cq(600) }}>
          <SessionVideo s={s1} dark playTop={338} style={{ left: cq(48), top: cq(24), width: cq(800), height: cq(450) }} />
          <div className="relative self-start" style={{ marginLeft: cq(732), marginTop: cq(148), width: cq(451) }}>
            <BigNumber value={s1.number} style={{ right: cq(32), top: cq(-111) }} />
            <SessionCard s={s1} />
          </div>
        </div>

        {/* 123:178 — card left, video right */}
        <div className="relative flex" style={{ minHeight: cq(600) }}>
          <SessionVideo s={s2} dark playTop={338} style={{ left: cq(352), top: cq(24), width: cq(800), height: cq(450) }} />
          <div className="relative self-start" style={{ marginLeft: cq(6), marginTop: cq(135), width: cq(441) }}>
            <BigNumber value={s2.number} style={{ left: cq(-58), top: cq(-114) }} />
            <SessionCard s={s2} />
          </div>
        </div>

        {/* 123:191 — wide video, card lower right; "05" spills below the section */}
        <div className="relative flex" style={{ minHeight: cq(660) }}>
          <BigNumber value={s3.number} style={{ left: cq(1028), top: cq(606) }} />
          <SessionVideo s={s3} playTop={348} style={{ left: cq(48), top: 0, width: cq(1104), height: cq(460) }} />
          <span aria-hidden className="absolute font-sans font-normal text-[#727D72]" style={{ left: cq(968), top: cq(440), width: cq(140), fontSize: cq(96), lineHeight: 1.1 }}>
            03
          </span>
          <div className="relative self-start" style={{ marginLeft: cq(732), marginTop: cq(292), marginBottom: cq(-48), width: cq(441) }}>
            <SessionCard s={s3} />
          </div>
        </div>
      </div>
    </Section>
  );
}

/* 29:853 — invite */
function Invite() {
  return (
    <Section className="py-[96px]">
      <div className="relative flex" style={{ minHeight: cq(420) }}>
        <p
          aria-hidden
          className="absolute whitespace-nowrap font-brush lowercase text-[#FF4802]"
          style={{ left: cq(89), top: cq(-33.094), fontSize: cq(120), lineHeight: cq(105.6), letterSpacing: cq(-1.2) }}
        >
          {INVITE.script}
        </p>
        <div className="relative flex flex-col gap-[80px] self-start" style={{ marginLeft: cq(236), marginTop: cq(89.594), width: cq(861) }}>
          <h2
            className="font-sans font-semibold text-[#F2F0E9]"
            style={{ width: cq(540), minHeight: cq(119), fontSize: cq(56), lineHeight: cq(59.36), letterSpacing: cq(-1.68) }}
          >
            {INVITE.titleLines[0]}
            <br />
            {INVITE.titleLines[1]}
          </h2>
          <dl className="flex flex-wrap gap-x-[32px] gap-y-[12px] border-t border-[#343D35] pt-[16px]">
            {INVITE.details.map((d) => (
              <div key={d.term} className="flex min-w-fit flex-1 flex-col gap-[8px]">
                <dt className={cn(LABEL, "h-[14px] whitespace-nowrap")}>{d.term}</dt>
                <dd className="whitespace-nowrap font-sans text-[14px] leading-[22px] text-[#F2F0E9]">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

export function SpeakingDesktop() {
  return (
    <div className="hidden flex-col px-[20px] lg:flex">
      <Hero />
      <Profile />
      <Workshop />
      <Sessions />
      <Invite />
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlayButton } from "@/components/shared/PlayButtons";
import {
  INVITE,
  SESSIONS,
  SESSIONS_INTRO,
  SPEAKER_PROFILE,
  SPEAKING_INTRO,
  WORKSHOP_STORY,
  type SpeakingSession,
} from "@/constants/speaking/page";

const LABEL = "font-sans text-[16px] font-medium leading-[26px] tracking-[1.4px] uppercase text-[#ABB3A9]";
const MONO = "font-mono-code text-[16px] leading-[26px]";
const LINK = "self-start font-sans text-[16px] font-medium uppercase leading-[26px] text-[#FF4802] transition-opacity hover:opacity-80";
const NUMBER = "font-sans text-[48px] font-medium leading-[58px] tracking-[-6.3251px] text-[#727D72] sm:mb-[-24px] sm:text-[64px] sm:leading-[77px]";
const TITLE = "font-sans text-[28px] font-medium leading-[34px] text-[#F2F0E9] sm:text-[36px] sm:leading-[43px]";

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <React.Fragment key={line}>
          {i > 0 && <br />}
          {line}
        </React.Fragment>
      ))}
    </>
  );
}

function Session({ s }: { s: SpeakingSession }) {
  const side = s.number === "04";
  return (
    <article className="flex flex-col gap-[24px] sm:gap-0">
      <p aria-hidden className={NUMBER}>
        {s.number}
      </p>
      <div className={cn("flex flex-col gap-[24px]", side && "sm:flex-row sm:items-start")}>
        <Link
          href={s.href}
          aria-label={`Watch: ${s.titleLines.join(" ")}`}
          className={cn("relative block w-full shrink-0 overflow-clip aspect-[326/230]", side ? "sm:aspect-[280/320] sm:w-[42.683%]" : "sm:aspect-[656/360]")}
        >
          <Image src={s.image} alt="" fill sizes={side ? "(min-width: 576px) 280px, 100vw" : "(min-width: 576px) 656px, 100vw"} className="object-cover" />
          <PlayButton />
        </Link>
        <div className="flex min-w-0 flex-1 flex-col gap-[16px]">
          <p className={LABEL}>{s.label}</p>
          <h3 className={TITLE}>
            <Link href={s.href} className="transition-colors hover:text-[#FF4802]">
              <Lines lines={s.titleLines} />
            </Link>
          </h3>
          <p className={cn(MONO, "text-[#ABB3A9]", s.number === "05" && "sm:max-w-[531px]")}>{s.summary}</p>
          <p className={cn(MONO, "text-[#727D72]")}>{s.tags}</p>
          <p className={cn(MONO, "text-[#727D72]")}>{s.event}</p>
          <Link href={s.href} className={LINK}>
            Watch the session ↗
          </Link>
        </div>
      </div>
    </article>
  );
}

export function SpeakingStacked() {
  const p = SPEAKER_PROFILE;
  const w = WORKSHOP_STORY;
  return (
    <div className="flex flex-col items-center px-[16px] pb-[32px] pt-[24px] sm:px-[32px] sm:pb-[48px] sm:pt-[40px] lg:hidden">
      <div className="flex w-full flex-col gap-[48px] sm:max-w-[656px] sm:gap-[64px]">
        <header className="flex flex-col gap-[20px]">
          <h1 className="font-brush text-[80px] lowercase leading-[96px] tracking-[-1.2px] text-[#FF4802] sm:text-[104px] sm:leading-[125px]">
            {SPEAKING_INTRO.script}
          </h1>
          <p className={LABEL}>{SPEAKING_INTRO.label}</p>
          <p className="font-sans text-[36px] font-semibold leading-[43px] text-[#F2F0E9] sm:text-[48px] sm:leading-[58px]">
            <Lines lines={SPEAKING_INTRO.titleLines} />
          </p>
          <p className={cn(MONO, "text-[#F2F0E9]")}>{SPEAKING_INTRO.lead}</p>
        </header>

        <section className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[24px] sm:gap-0">
            <p aria-hidden className={NUMBER}>
              {p.number}
            </p>
            <div className="relative aspect-[326/240] w-full sm:aspect-[656/360]">
              <Image src={p.image} alt="Sakib Anjum speaking" fill priority sizes="(min-width: 576px) 656px, 100vw" className="object-cover" />
            </div>
          </div>
          <p className={LABEL}>{p.label}</p>
          <h2 className={TITLE}>{p.title}</h2>
          <p className={cn(MONO, "text-[#ABB3A9]")}>{p.summary}</p>
          <dl className="flex flex-col gap-[16px] text-[16px] leading-[26px] sm:flex-row">
            {p.facts.map((f) => (
              <div key={f.term} className="flex flex-col gap-[4px] sm:w-[208px] sm:min-w-0 sm:shrink">
                <dt className="font-sans font-medium uppercase tracking-[1.4px] text-[#ABB3A9]">{f.term}</dt>
                <dd className="font-sans text-[#F2F0E9]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="flex flex-col gap-[24px] sm:gap-0">
          <p aria-hidden className={NUMBER}>
            {w.number}
          </p>
          <div className="flex flex-col gap-[24px] sm:flex-row sm:items-start">
            <div className="relative aspect-[326/300] w-full shrink-0 overflow-clip sm:aspect-[280/380] sm:w-[42.683%]">
              <Image src={w.image} alt="Sakib Anjum leading a workshop" fill sizes="(min-width: 576px) 280px, 100vw" className="object-cover" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-[16px]">
              <p className="font-sans text-[16px] font-medium leading-[26px] text-[#F2F0E9]">{w.label}</p>
              <h2 className="font-sans text-[28px] font-semibold leading-[34px] text-[#F2F0E9] sm:text-[32px] sm:leading-[38px]">
                <Lines lines={w.titleLines} />
              </h2>
              <p className={cn(MONO, "text-[#ABB3A9]")}>{w.summary}</p>
              <p className={cn(MONO, "whitespace-pre-wrap text-[#ABB3A9]")}>{w.meta.join("\n")}</p>
              <Link href={w.link.href} className={LINK}>
                {w.link.label}
              </Link>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-[40px]">
          <p className="font-sans text-[16px] font-medium leading-[26px] text-[#F2F0E9]">{SESSIONS_INTRO.label}</p>
          <h2 className="font-sans text-[32px] font-semibold leading-[38px] text-[#F2F0E9] sm:text-[40px] sm:leading-[48px]">
            <Lines lines={SESSIONS_INTRO.titleLines} />
          </h2>
          {SESSIONS.map((s) => (
            <Session key={s.number} s={s} />
          ))}
        </section>

        <section className="flex flex-col gap-[24px]">
          <h2 className="font-sans text-[32px] font-semibold leading-[38px] tracking-[-0.96px] text-[#F2F0E9] sm:text-[40px] sm:leading-[48px] sm:tracking-[-1.2px]">
            <Lines lines={INVITE.titleLines} />
          </h2>
          {[INVITE.details.slice(0, 2), INVITE.details.slice(2)].map((row, i) => (
            <dl key={i} className="flex flex-col gap-[24px] text-[16px] leading-[26px] sm:flex-row">
              {row.map((d) => (
                <div key={d.term} className="flex flex-col gap-[8px] sm:min-w-0 sm:flex-1">
                  <dt className="font-sans font-medium uppercase tracking-[1.4px] text-[#ABB3A9]">{d.term}</dt>
                  <dd className="font-sans text-[#F2F0E9]">{d.value}</dd>
                </div>
              ))}
            </dl>
          ))}
          <p aria-hidden className="font-brush text-[72px] lowercase leading-[86px] tracking-[-1.2px] text-[#FF4802] sm:text-[96px] sm:leading-[115px]">
            {INVITE.script}
          </p>
        </section>
      </div>
    </div>
  );
}

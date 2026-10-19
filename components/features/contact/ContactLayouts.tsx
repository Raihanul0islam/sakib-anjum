import React from "react";
import { cn } from "@/lib/utils";
import { cq } from "@/lib/cq";
import { AvailabilityBadge } from "@/components/shared/AvailabilityBadge";
import { CONTACT_PAGE } from "@/constants/contact/page";
import { NoteForm } from "./NoteForm";

const C = CONTACT_PAGE;
const LABEL = "font-sans text-[16px] font-medium uppercase tracking-[1.4px] text-[#ABB3A9]";

/* Desktop ≥992 — Figma "Contact · Dark" (29:593): one 1200 × 1223 composition.
   cq() keeps it exact at 1200 and scales it down to 992. */
export function ContactDesktop() {
  return (
    <section className="hidden justify-center px-[20px] pb-[40px] pt-[96px] lg:flex">
      <div className="w-full max-w-[1200px] @container">
        {/* Headline is placed absolutely; the rest flows from y 373.84 so the section grows when 16px copy wraps below 1200 */}
        <div className="relative" style={{ minHeight: cq(1223), paddingTop: cq(373.841) }}>
          {/* 161:940 — script + headline (headline right-aligned in the 1010 column) */}
          <div className="absolute flex flex-col gap-[32px]" style={{ left: cq(48), top: cq(-0.159), width: cq(1010) }}>
            <p aria-hidden className="font-brush lowercase text-[#FF4802]" style={{ fontSize: cq(120), lineHeight: cq(105.6), letterSpacing: cq(-1.2) }}>
              {C.script}
            </p>
            <div className="flex flex-col items-end justify-end" style={{ height: cq(155.031) }}>
              <h1 className="font-sans font-semibold text-[#F2F0E9]" style={{ width: cq(916), minHeight: cq(156), fontSize: cq(76), lineHeight: cq(77.52), letterSpacing: cq(-2.28) }}>
                {C.title}
              </h1>
            </div>
          </div>

          {/* 161:855 — email, details and the note form */}
          <div className="relative flex flex-col" style={{ marginLeft: cq(330), width: cq(870) }}>
            <div className="pb-[15px]">
              <a
                href={`mailto:${C.email}`}
                className="block whitespace-nowrap font-sans font-semibold text-[#F2F0E9] transition-colors hover:text-[#FF4802]"
                style={{ height: cq(52.797), fontSize: cq(39.954), lineHeight: cq(52.8), letterSpacing: cq(-1.1) }}
              >
                {C.email}
              </a>
            </div>
            <div className="flex items-start" style={{ gap: cq(118) }}>
              <div className="flex shrink-0 flex-col pt-[96px]" style={{ width: cq(352) }}>
                <div className="flex flex-col gap-[48px]">
                <div className="grid grid-rows-[14px_48px] gap-[8px]">
                  <p className={cn(LABEL, "leading-[20px] whitespace-nowrap")}>{C.availability.label}</p>
                  <div className="flex gap-[8px]">
                    <span className="pt-[9px]">
                      <span className="block size-[6px] rounded-full bg-[#FF4802]" />
                    </span>
                    <p className="whitespace-pre-wrap font-mono-code text-[16px] leading-[24px] text-[#F2F0E9]">{C.availability.lines.join("\n")}</p>
                  </div>
                </div>
                <div className="grid grid-rows-[14px_24px_24px] gap-[8px]">
                  <p className={cn(LABEL, "leading-[20px] whitespace-nowrap")}>{C.whereWhen.label}</p>
                  <p className="whitespace-nowrap font-sans text-[16px] leading-[24px] text-[#F2F0E9]">{C.whereWhen.place}</p>
                  <p className="whitespace-nowrap font-sans text-[16px] leading-[24px] text-[#ABB3A9]">{C.whereWhen.reply}</p>
                </div>
                <div className="grid grid-rows-[14px_24px] gap-[8px]">
                  <p className={cn(LABEL, "leading-[20px] whitespace-nowrap")}>{C.elsewhere.label}</p>
                  <div className="pt-[8px]">
                    {/* Figma lets the three links run 32px past the 352 column; they wrap once the composition narrows */}
                    <div className="flex h-[16px] gap-x-[32px] gap-y-[8px] @max-[1150px]:h-auto @max-[1150px]:flex-wrap">
                      {C.elsewhere.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target={l.href.startsWith("http") ? "_blank" : undefined}
                          rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="group flex h-[16px] shrink-0 items-center gap-[8px] whitespace-nowrap font-sans text-[16px] font-medium uppercase leading-[20px]"
                        >
                          <span className="tracking-[3.52px] text-[#F2F0E9] transition-colors group-hover:text-[#FF4802]">{l.label}</span>
                          <span className="w-[20px] text-[#FF4802]">↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
                {/* Badge sits at (456, 944.84) of the composition: 117.2 below this column, 126 in */}
                <AvailabilityBadge style={{ marginTop: cq(117.2), marginLeft: cq(126) }} />
              </div>
              <div className="min-w-0 flex-1 pt-[240px]">
                <NoteForm variant="desktop" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Tablet 576–991 (Figma 259:301) and mobile ≤575 (Figma 259:363) */
export function ContactStacked() {
  const detail = "flex flex-col gap-[8px] text-[16px] leading-[26px]";
  return (
    <div className="flex flex-col items-center px-[16px] pb-[32px] pt-[24px] sm:px-[32px] sm:pb-[48px] sm:pt-[40px] lg:hidden">
      <div className="flex w-full flex-col gap-[48px] sm:max-w-[656px] sm:gap-[64px]">
        <header className="flex flex-col gap-[20px]">
          <p aria-hidden className="font-brush text-[80px] lowercase leading-[96px] tracking-[-1.2px] text-[#FF4802] sm:text-[104px] sm:leading-[125px]">
            {C.script}
          </p>
          <h1 className="font-sans text-[36px] font-semibold leading-[43px] tracking-[-1.08px] text-[#F2F0E9] sm:text-[48px] sm:leading-[58px] sm:tracking-[-1.44px]">
            {C.title}
          </h1>
        </header>

        <div className="flex flex-col gap-[32px] sm:flex-row">
          <div className="flex min-w-0 flex-col gap-[28px] sm:flex-1">
            <a
              href={`mailto:${C.email}`}
              className="font-sans text-[26px] font-semibold leading-[31px] tracking-[-1.1px] text-[#F2F0E9] transition-colors hover:text-[#FF4802] sm:text-[24px] sm:leading-[29px]"
            >
              {C.email}
            </a>
            <div className={detail}>
              <p className={LABEL}>{C.availability.label}</p>
              <p className="whitespace-pre-wrap font-mono-code text-[#F2F0E9]">{C.availability.lines.join("\n")}</p>
            </div>
            <div className={detail}>
              <p className={LABEL}>{C.whereWhen.label}</p>
              <p className="font-sans text-[#F2F0E9]">{C.whereWhen.place}</p>
              <p className="font-sans text-[#ABB3A9]">{C.whereWhen.reply}</p>
            </div>
            <div className={detail}>
              <p className={LABEL}>{C.elsewhere.label}</p>
              {C.elsewhere.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="self-start font-sans font-medium uppercase tracking-[3.52px] text-[#F2F0E9] transition-colors hover:text-[#FF4802]"
                >
                  {l.label}
                </a>
              ))}
            </div>
            {/* Tablet keeps the badge in this column; mobile moves it below the form */}
            <AvailabilityBadge className="hidden sm:block" />
          </div>
          <div className="min-w-0 sm:flex-1">
            <NoteForm variant="stacked" />
          </div>
        </div>

        <AvailabilityBadge className="sm:hidden" />
      </div>
    </div>
  );
}

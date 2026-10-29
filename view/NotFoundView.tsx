import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cq } from "@/lib/cq";
import { NOT_FOUND as N } from "@/constants/not-found/page";

const LABEL = "font-sans text-[16px] font-medium uppercase tracking-[1.4px] text-[#ABB3A9]";
const PRIMARY =
  "inline-flex border border-[#FF6A4D] bg-[#FF4802] px-[22px] py-[15px] font-sans text-[16px] uppercase leading-[20px] text-[#F2F0E9] transition-colors hover:bg-[#FF5A1A]";
const SECONDARY = "font-sans text-[16px] uppercase leading-[20px] text-[#FF4802] transition-opacity hover:opacity-80";

function Actions({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      <Link href={N.primary.href} className={PRIMARY}>
        {N.primary.label}
      </Link>
      <Link href={N.secondary.href} className={SECONDARY}>
        {N.secondary.label}
      </Link>
    </div>
  );
}

function ExploreRow({ link }: { link: (typeof N.explore.links)[number] }) {
  return (
    <li>
      <Link
        href={link.href}
        className="group flex items-start gap-[16px] border-t border-[#343D35] py-[24px] sm:items-center sm:gap-[24px]"
      >
        <span className="w-[32px] shrink-0 pt-[3px] font-sans text-[16px] leading-[26px] text-[#727D72] sm:pt-0">{link.number}</span>
        <span className="flex min-w-0 flex-1 flex-col gap-[8px] lg:flex-row lg:items-baseline lg:gap-[32px]">
          <span className="font-sans text-[24px] font-medium leading-[29px] text-[#F2F0E9] transition-colors group-hover:text-[#FF4802] lg:w-[220px] lg:shrink-0">
            {link.title}
          </span>
          <span className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{link.summary}</span>
        </span>
        <span aria-hidden className="shrink-0 pt-[3px] font-sans text-[16px] leading-[26px] text-[#FF4802] transition-transform group-hover:-translate-y-[2px] group-hover:translate-x-[2px] sm:pt-0">
          ↗
        </span>
      </Link>
    </li>
  );
}

function Explore() {
  return (
    <section className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[16px]">
        <p className={cn(LABEL, "leading-[26px] lg:leading-[20px]")}>{N.explore.label}</p>
        <h2 className="font-sans text-[32px] font-semibold leading-[38px] text-[#F2F0E9] sm:text-[40px] sm:leading-[48px] lg:text-[36px] lg:leading-[43px]">
          {N.explore.title}
        </h2>
      </div>
      <ul className="flex flex-col border-b border-[#343D35]">
        {N.explore.links.map((l) => (
          <ExploreRow key={l.href} link={l} />
        ))}
      </ul>
    </section>
  );
}

function Desktop() {
  return (
    <div className="hidden flex-col px-[20px] lg:flex">
      <section className="flex justify-center pb-[40px] pt-[96px]">
        <div className="w-full max-w-[1200px] @container">
          <div className="relative flex" style={{ minHeight: cq(366) }}>
            <p
              aria-hidden
              className="absolute top-0 whitespace-nowrap font-brush lowercase text-[#FF4802]"
              style={{ left: cq(48), fontSize: cq(120), lineHeight: cq(105.6), letterSpacing: cq(-1.2) }}
            >
              {N.script}
            </p>
            <span
              aria-hidden
              className="pointer-events-none absolute whitespace-nowrap font-sans font-medium text-[#727D72] opacity-40 select-none"
              style={{ left: cq(48), top: cq(176), fontSize: cq(181.189), lineHeight: cq(126.503), letterSpacing: cq(-6.3251) }}
            >
              {N.number}
            </span>
            <div className="relative flex flex-col gap-[24px] self-start" style={{ marginLeft: cq(424), width: cq(728) }}>
              <p className={cn(LABEL, "whitespace-nowrap leading-[20px]")}>{N.label}</p>
              <h1 className="font-sans font-semibold text-[#F2F0E9]" style={{ fontSize: cq(64), lineHeight: cq(69.12) }}>
                {N.titleLines[0]}
                <br />
                {N.titleLines[1]}
              </h1>
              <p className="font-mono-code text-[16px] leading-[34px] text-[#F2F0E9]" style={{ width: cq(640) }}>
                {N.lead}
              </p>
              <Actions className="gap-[48px] pt-[16px]" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center pb-[40px] pt-[96px]">
        <div className="w-full max-w-[916px]">
          <Explore />
        </div>
      </section>
    </div>
  );
}

function Stacked() {
  return (
    <div className="flex flex-col items-center px-[16px] pb-[32px] pt-[24px] sm:px-[32px] sm:pb-[48px] sm:pt-[40px] lg:hidden">
      <div className="flex w-full flex-col gap-[48px] sm:max-w-[656px] sm:gap-[64px]">
        <header className="flex flex-col gap-[20px]">
          <p aria-hidden className="font-brush text-[80px] lowercase leading-[96px] tracking-[-1.2px] text-[#FF4802] sm:text-[104px] sm:leading-[125px]">
            {N.script}
          </p>
          <p aria-hidden className="font-sans text-[48px] font-medium leading-[58px] tracking-[-6.3251px] text-[#727D72] sm:text-[64px] sm:leading-[77px]">
            {N.number}
          </p>
          <p className={cn(LABEL, "leading-[26px]")}>{N.label}</p>
          <h1 className="font-sans text-[36px] font-semibold leading-[43px] text-[#F2F0E9] sm:text-[48px] sm:leading-[58px]">
            {N.titleLines[0]}
            <br />
            {N.titleLines[1]}
          </h1>
          <p className="font-mono-code text-[16px] leading-[26px] text-[#F2F0E9]">{N.lead}</p>
          <Actions className="flex-col items-start gap-[16px] pt-[8px] sm:flex-row sm:items-center sm:gap-[32px]" />
        </header>
        <Explore />
      </div>
    </div>
  );
}

export function NotFoundView() {
  return (
    <>
      <Desktop />
      <Stacked />
    </>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cq } from "@/lib/cq";
import { CroppedImage } from "@/components/shared/CroppedImage";
import type { CaseStudyFigure } from "@/constants/portfolio/case-studies";
import { T } from "./styles";

const FIG3_CROP = { left: "0%", top: "-5.44%", width: "100%", height: "110.88%" };
const LABEL = cn(T.eyebrow, T.muted);

function Photo({ fig, index, className, style, sizes }: { fig: CaseStudyFigure; index: number; className?: string; style?: React.CSSProperties; sizes: string }) {
  const alt = fig.caption?.text ?? "Project screenshot";
  if (index === 2)
    return <CroppedImage src={fig.src} crop={FIG3_CROP} alt={alt} sizes={sizes} className={cn(T.shadow, className)} style={style} />;
  return (
    <div className={cn("relative overflow-hidden bg-[#262624]", className)} style={style}>
      <Image src={fig.src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

function Caption({ fig, stacked }: { fig: CaseStudyFigure; stacked?: boolean }) {
  if (!fig.caption) return null;
  return stacked ? (
    <>
      <p className="font-mono-code text-[16px] uppercase leading-[26px] tracking-[1.4px] text-[#ABB3A9]">{fig.caption.label}</p>
      <p className="font-mono-code text-[16px] leading-[26px] text-[#ABB3A9]">{fig.caption.text}</p>
    </>
  ) : (
    <p className="flex items-center gap-[16px] whitespace-nowrap font-mono-code text-[16px] leading-[20px] text-[#ABB3A9]">
      <span className="uppercase tracking-[1.4px]">{fig.caption.label}</span>
      <span>{fig.caption.text}</span>
    </p>
  );
}

function ToggleIcon({ active, kind, onClick }: { active: boolean; kind: "grid" | "mosaic"; onClick: () => void }) {
  const src = kind === "grid" ? "/images/icons/layout-2-column.svg" : "/images/icons/layout-table.svg";
  const size = kind === "grid" ? 20.5 : 19.5;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={kind === "grid" ? "Two-column layout" : "Mosaic layout"}
      className="group flex size-[24px] cursor-pointer items-center justify-center"
    >
      <span
        aria-hidden
        className={cn("block transition-colors", active ? "bg-[#FF4802]" : "bg-[#D6D4CC] group-hover:bg-[#F2F0E9]")}
        style={{ width: size, height: size, mask: `url(${src}) center / contain no-repeat`, WebkitMask: `url(${src}) center / contain no-repeat` }}
      />
    </button>
  );
}

export function CaseGallery({ figures }: { figures: CaseStudyFigure[] }) {
  const [mode, setMode] = useState<"mosaic" | "grid">("mosaic");
  const [f1, f2, f3, f4] = figures;

  return (
    <section className="mx-auto flex w-full flex-col gap-[24px] lg:max-w-[1200px] lg:items-center lg:gap-0 lg:pb-[40px] lg:pt-[96px]">
      <div className="hidden w-full @container lg:block">
        <div className="relative" style={mode === "mosaic" ? { height: cq(1333) } : undefined}>
          <div className="absolute right-0 top-0 z-10 flex items-center gap-[10px]">
            <ToggleIcon kind="grid" active={mode === "grid"} onClick={() => setMode("grid")} />
            <ToggleIcon kind="mosaic" active={mode === "mosaic"} onClick={() => setMode("mosaic")} />
          </div>
          <p className={cn(LABEL, "relative leading-[14px]")} style={{ top: cq(-0.25) }}>
            04 — What’s inside
          </p>

          {mode === "mosaic" ? (
            <>
              <Photo fig={f1} index={0} sizes="494px" className="absolute left-0" style={{ top: cq(29.75), width: cq(494), height: cq(557.5) }} />
              <figure className="absolute flex flex-col gap-[16px]" style={{ left: cq(518), top: cq(125.75), width: cq(682) }}>
                <Photo fig={f2} index={1} sizes="682px" className="w-full" style={{ height: cq(439) }} />
                <Caption fig={f2} />
              </figure>
              <figure className="absolute flex flex-col gap-[16px]" style={{ left: cq(67), top: cq(627.75), width: cq(478) }}>
                <Photo fig={f3} index={2} sizes="478px" className="w-full" style={{ height: cq(648) }} />
                <Caption fig={f3} />
              </figure>
              <figure className="absolute flex flex-col gap-[16px]" style={{ left: cq(569), top: cq(627.75), width: cq(631) }}>
                <Photo fig={f4} index={3} sizes="631px" className="w-full" style={{ height: cq(582) }} />
                <Caption fig={f4} />
              </figure>
            </>
          ) : (
            <div className="grid grid-cols-2 gap-[24px] pt-[16px]">
              {figures.map((fig, i) => (
                <figure key={fig.src} className="flex flex-col gap-[16px]">
                  <Photo fig={fig} index={i} sizes="588px" className="aspect-[4/3] w-full" />
                  <Caption fig={fig} />
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
      <Link href="/portfolio" className={cn(T.link, "hidden leading-[19px] lg:inline-block", mode === "grid" && "lg:mt-[48px]")}>
        MORE PROJECTS ↗
      </Link>

      <p className={cn(LABEL, "leading-[26px] lg:hidden")}>04 — What’s inside</p>
      <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:hidden">
        {figures.map((fig, i) => (
          <figure key={fig.src} className="flex flex-col gap-[12px]">
            <Photo fig={fig} index={i} sizes="(min-width: 576px) 316px, 100vw" className="w-full aspect-[326/300] sm:aspect-[316/320]" />
            <Caption fig={fig} stacked />
          </figure>
        ))}
      </div>
      <Link href="/portfolio" className={cn(T.link, "self-start leading-[26px] lg:hidden")}>
        MORE PROJECTS ↗
      </Link>
    </section>
  );
}

import React from "react";
import { cn } from "@/lib/utils";

export function PlayButton({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 flex size-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] bg-[#FF4802]",
        className
      )}
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M7 4L18 11L7 18V4Z" fill="white" />
      </svg>
    </span>
  );
}

export function RowPlayButton() {
  return (
    <span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 size-[64px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4802]">
      <svg className="absolute left-[24px] top-[20px]" width="20" height="24" viewBox="0 0 20 24" fill="none">
        <path d="M3 2L19 12L3 22V2Z" fill="white" />
      </svg>
    </span>
  );
}

export function CornerPlayButton({ dark, style }: { dark?: boolean; style?: React.CSSProperties }) {
  return (
    <span aria-hidden className="pointer-events-none absolute size-[72px] rounded-full bg-[#FF4802]" style={style}>
      <svg className="absolute left-[28px] top-[24px]" width="20" height="24" viewBox="0 0 20 24" fill="none">
        <path d="M3 2L19 12L3 22V2Z" fill={dark ? "#151515" : "white"} />
      </svg>
    </span>
  );
}

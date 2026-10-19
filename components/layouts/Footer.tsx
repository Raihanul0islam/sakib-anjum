import React from "react";

/* Figma 155:466 — #111412 bar, 16px / 48px padding, Geist Medium 16/20, 1.4px tracking */
export function Footer() {
  return (
    <footer className="flex w-full items-center justify-center bg-[#111412] px-[48px] py-[16px]">
      <p className="whitespace-nowrap font-sans text-[16px] font-medium leading-[20px] tracking-[1.4px] uppercase text-[#ABB3A9]">
        © 2026 Sakib Anjum
      </p>
    </footer>
  );
}

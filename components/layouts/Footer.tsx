"use client";

import React from "react";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="flex w-full items-center justify-center bg-[#111412] px-[48px] py-[16px]">
      <p className="whitespace-nowrap font-sans text-[16px] font-medium leading-[20px] tracking-[1.4px] uppercase text-[#ABB3A9]">
        © 2026 Sakib Anjum
      </p>
    </footer>
  );
}

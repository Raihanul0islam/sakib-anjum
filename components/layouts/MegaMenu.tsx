"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/* Figma Navigation/Mega menu (263:384)
   Desktop 263:381 · Tablet 263:382 · Mobile 263:383
   #171B18 panel, 1px #343D35 border, 12px radius, placed over the header
   inside the page frame (16 / 24 / 20 px inset). */
export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Site navigation">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-[#0D100E]/70"
      />

      <div className="absolute left-[16px] right-[16px] top-[16px] flex max-h-[calc(100dvh-32px)] flex-col gap-[24px] overflow-y-auto rounded-[12px] border border-[#343D35] bg-[#171B18] p-[24px] sm:left-[24px] sm:right-[24px] sm:top-[24px] sm:max-h-[calc(100dvh-48px)] lg:left-1/2 lg:right-auto lg:top-[20px] lg:max-h-[calc(100dvh-40px)] lg:w-[calc(100%-40px)] lg:max-w-[1200px] lg:-translate-x-1/2 lg:p-[48px]">
        {/* Menu / Header — desktop keeps Close beside the logo (24px gap) as drawn */}
        <div className="flex items-start justify-between gap-[24px] lg:justify-start">
          <Link
            href="/"
            onClick={onClose}
            className="w-[64px] shrink-0 font-sans text-[28px] font-normal leading-[36px] text-[#FF4802]"
          >
            {SITE_CONFIG.monogram}
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="flex h-[48px] w-[112px] shrink-0 cursor-pointer items-center justify-center"
          >
            <span className="w-[100px] text-left font-sans text-[16px] font-normal leading-[21px] text-[#F2F0E9]">
              Close ×
            </span>
          </button>
        </div>

        {/* Menu / Content */}
        <div className="flex flex-col gap-[24px] lg:flex-row lg:items-start lg:gap-[48px]">
          {/* Page links: 1 col mobile, 2 cols tablet + desktop, 8px row gap, 24px col gap */}
          <nav className="grid grid-cols-1 gap-y-[8px] sm:grid-cols-2 sm:gap-x-[24px] lg:w-[65.2174%] lg:shrink-0">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex min-w-0 items-center gap-[12px] border-b border-[#343D35] py-[8px]"
              >
                <span
                  className={cn(
                    "min-w-0 flex-1 truncate font-sans font-normal text-[#F2F0E9] transition-colors group-hover:text-[#FF4802]",
                    "text-[28px] leading-[36px] sm:text-[32px] sm:leading-[42px] lg:text-[44px] lg:leading-[57px]"
                  )}
                >
                  {item.label}
                </span>
                <span className="w-[28px] shrink-0 font-sans text-[16px] leading-[21px] text-[#FF4802]">↗</span>
              </Link>
            ))}
          </nav>

          {/* Contact panel */}
          <div className="flex min-w-0 flex-1 flex-col gap-[12px]">
            <div className="flex flex-col gap-[12px] sm:gap-[16px] lg:gap-[32px]">
              <div className="flex flex-col gap-[12px] text-[16px] leading-[21px] text-[#ABB3A9]">
                <p className="font-sans font-normal">LET’S BUILD SOMETHING.</p>
                <p className="hidden font-mono-code sm:block">
                  Software, stories, and practical lessons from Sakib Anjum.
                </p>
              </div>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex w-full bg-[#FF4802] px-[16px] py-[14px] font-sans text-[16px] font-normal leading-[21px] text-white transition-colors hover:bg-[#FF5A1A]"
              >
                Start a project ↗
              </Link>
            </div>
            <p className="hidden font-mono-code text-[16px] leading-[21px] text-[#ABB3A9] lg:block">
              {SITE_CONFIG.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

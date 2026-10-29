"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { MegaMenu } from "./MegaMenu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpen = useCallback(() => setIsMenuOpen(true), []);
  const handleClose = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <header className="flex h-[80px] border-b border-[#0D100E] w-full items-center justify-center lg:h-auto lg:px-[40px] lg:py-[16px]">
        <div className="flex h-[72px] w-full items-center justify-between overflow-clip rounded-[12px] border border-[#343D35] bg-[#0D100E] px-[16px] py-[12px] sm:px-[20px] lg:h-auto lg:max-w-[1200px] lg:rounded-none lg:border-0 lg:bg-transparent lg:px-[24px] lg:py-0">
          <Link
            href="/"
            aria-label="Sakib Anjum — Home"
            className="whitespace-nowrap font-sans text-[28px] font-medium leading-normal text-[#FF4802] sm:text-[30px] sm:font-semibold sm:leading-[1.2]"
          >
            sa.
          </Link>
          <button
            type="button"
            onClick={handleOpen}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            className="flex h-[48px] cursor-pointer items-center justify-center gap-[12px] px-[16px] sm:w-[160px]"
          >
            <span className="whitespace-nowrap font-sans text-[16px] font-medium leading-[1.2] text-[#F2F0E9]">
              Menu
            </span>
            <Image
              src="/images/icons/menu.svg"
              alt=""
              width={24}
              height={24}
              unoptimized
              className="size-[24px]"
            />
          </button>
        </div>
      </header>

      <MegaMenu isOpen={isMenuOpen} onClose={handleClose} />
    </>
  );
}

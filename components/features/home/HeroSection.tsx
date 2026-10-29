import React from "react";
import Image from "next/image";
import { Signature } from "@/components/shared/Signature";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { cq } from "@/lib/cq";

const INTRO =
  "I’m a developer and the founder of BlackDevs, a studio in Rangpur. Ten years of payroll clocks, storefronts and the automations between them — with notes on how each one was built.";
const PORTRAIT = "/images/home/sakib-portrait.jpg";
const ROLE = "Educator / Founder";

function HeroDesktop() {
  return (
    <div className="hidden w-full @container lg:block">
      <div className="relative" style={{ minHeight: cq(604) }}>
        <div style={{ paddingLeft: cq(48), paddingTop: cq(387) }}>
          <p
            className="font-mono-code text-[18px] leading-[28px] text-[#F2F0E9]"
            style={{ width: cq(598) }}
          >
            {INTRO}
          </p>
          <SocialLinks className="pt-[32px]" />
        </div>

        <div
          className="absolute flex flex-col gap-[16px]"
          style={{ left: cq(758), top: cq(82), width: cq(352) }}
        >
          <div
            className="w-full overflow-hidden bg-[#0D100E] shadow-[0px_32px_64px_-24px_rgba(0,0,0,0.35),0px_2px_8px_0px_rgba(0,0,0,0.35)]"
            style={{ height: cq(465) }}
          >
            <div className="relative w-full" style={{ height: cq(522) }}>
              <Image src={PORTRAIT} alt="Sakib Anjum on stage" fill priority sizes="352px" className="object-cover" />
            </div>
          </div>
          <p className="font-sans text-[16px] leading-[21px] tracking-[3.2px] text-[#ABB3A9]">
            {ROLE}
          </p>
        </div>

        <h1 className="absolute" style={{ left: cq(50), top: cq(-62), width: cq(753.077) }}>
          <span className="sr-only">Sakib Anjum</span>
          <Signature />
        </h1>
      </div>
    </div>
  );
}

function HeroTablet() {
  return (
    <div className="hidden w-full items-center gap-[32px] sm:flex lg:hidden">
      <div className="flex min-w-0 flex-1 flex-col gap-[24px]">
        <h1>
          <span className="sr-only">Sakib Anjum</span>
          <Signature />
        </h1>
        <div className="flex flex-col gap-[20px]">
          <p className="font-mono-code text-[16px] leading-[28px] text-[#ABB3A9]">{INTRO}</p>
          <SocialLinks />
        </div>
      </div>
      <div className="flex w-[41.4634%] shrink-0 flex-col gap-[12px]">
        <div className="relative aspect-[272/392] w-full">
          <Image src={PORTRAIT} alt="Sakib Anjum on stage" fill priority sizes="272px" className="object-cover" />
        </div>
        <p className="font-sans text-[16px] leading-[24px] text-[#ABB3A9]">{ROLE}</p>
      </div>
    </div>
  );
}

function HeroMobile() {
  return (
    <div className="flex w-full flex-col gap-[18px] sm:hidden">
      <div className="relative w-full">
        <div className="ml-[5.714%] mt-[48%] flex flex-col gap-[8px]">
          <div className="relative aspect-square w-full">
            <Image src={PORTRAIT} alt="Sakib Anjum on stage" fill priority sizes="(max-width: 575px) 100vw" className="object-cover" />
          </div>
          <p className="font-sans text-[16px] leading-[24px] text-[#ABB3A9]">{ROLE}</p>
        </div>
        <h1 className="absolute left-0 top-0 w-full">
          <span className="sr-only">Sakib Anjum</span>
          <Signature />
        </h1>
      </div>
      <div className="mx-[30px] flex flex-col gap-[24px]">
        <p className="font-mono-code text-[16px] leading-[28px] text-[#ABB3A9]">{INTRO}</p>
        <SocialLinks />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <>
      <HeroDesktop />
      <HeroTablet />
      <HeroMobile />
    </>
  );
}

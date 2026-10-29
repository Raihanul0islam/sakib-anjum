import React from "react";
import { HeroSection } from "@/components/features/home/HeroSection";
import { RolesStrip } from "@/components/features/home/RolesStrip";

export function HomeView() {
  return (
    <div className="flex w-full flex-col items-center px-[4px] pb-[44px] pt-[16px] sm:px-[32px] sm:pb-[32px] sm:pt-[40px] lg:px-[20px] lg:pb-[40px] lg:pt-[100px]">
      <div className="flex w-full flex-col gap-[24px] sm:max-w-[656px] sm:gap-[40px] lg:max-w-[1200px] lg:gap-[64px]">
        <HeroSection />
        {/* <RolesStrip /> */}
      </div>
    </div>
  );
}

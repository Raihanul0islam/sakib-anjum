import React from "react";
import { PortfolioDesktop } from "@/components/features/portfolio/PortfolioDesktop";
import { PortfolioStacked } from "@/components/features/portfolio/PortfolioStacked";

/* Figma: desktop 29:102, tablet 251:244, mobile 251:385 */
export function PortfolioView() {
  return (
    <div className="w-full">
      <PortfolioDesktop />
      <PortfolioStacked />
    </div>
  );
}

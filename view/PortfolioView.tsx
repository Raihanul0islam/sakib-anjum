import React from "react";
import { PortfolioDesktop } from "@/components/features/portfolio/PortfolioDesktop";
import { PortfolioStacked } from "@/components/features/portfolio/PortfolioStacked";

export function PortfolioView() {
  return (
    <div className="w-full">
      <PortfolioDesktop />
      <PortfolioStacked />
    </div>
  );
}

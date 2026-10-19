import { Metadata } from "next";
import { PortfolioView } from "@/view/PortfolioView";

export const metadata: Metadata = {
  title: "Portfolio — Case Studies & Production Software",
  description:
    "Explore case studies of production software, multi-tenant SaaS platforms, custom commerce integrations, and WebGL applications by Sakib Anjum.",
};

export default function PortfolioPage() {
  return <PortfolioView />;
}

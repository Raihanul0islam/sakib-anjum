import React from "react";
import { SiteShell } from "@/components/layouts/SiteShell";

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}

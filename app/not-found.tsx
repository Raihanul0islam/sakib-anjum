import type { Metadata } from "next";
import { SiteShell } from "@/components/layouts/SiteShell";
import { NotFoundView } from "@/view/NotFoundView";

/* Root 404: handles every unmatched URL. It renders inside the root layout only
   (outside the (website) group), so it brings the site shell itself. */
export const metadata: Metadata = {
  title: "Page not found — Sakib Anjum",
};

export default function NotFound() {
  return (
    <SiteShell>
      <NotFoundView />
    </SiteShell>
  );
}

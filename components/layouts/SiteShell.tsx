import React from "react";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { LenisProvider } from "@/components/layouts/LenisProvider";

/* Figma page shell (155:388 / 246:206 / 246:264):
   #0D100E frame with 16 / 24 / 20 px inset (mobile / tablet / desktop),
   #171B18 surface card, 16px gap, then the #111412 footer bar.
   Shared by the (website) layout and the root 404, which renders outside it. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <div className="flex min-h-screen w-full flex-col gap-[16px] bg-[#0D100E] p-[16px] text-foreground sm:p-[24px] lg:p-[20px]">
        <div className="flex w-full flex-1 flex-col overflow-clip bg-[#171B18]">
          <Header />
          <main className="flex w-full flex-1 flex-col">{children}</main>
        </div>
        <Footer />
      </div>
    </LenisProvider>
  );
}

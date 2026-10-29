import React from "react";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { LenisProvider } from "@/components/layouts/LenisProvider";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <div className="flex min-h-screen w-full flex-col bg-[#171B18] p-[16px] sm:p-[24px] lg:p-[20px]">
        <div className="flex w-full flex-1 flex-col gap-[16px] bg-[#0D100E] p-[16px] text-foreground sm:p-[24px] lg:p-[20px]">
          <div className="flex w-full flex-1 flex-col overflow-clip bg-[#171B18]">
            <Header />
            <main className="flex w-full flex-1 flex-col">{children}</main>
          </div>
          <Footer />
        </div>
      </div>
    </LenisProvider>
  );
}

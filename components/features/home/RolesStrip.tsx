import React from "react";

const ROLES = [
  {
    title: "Developer — since 2016",
    description: "Laravel, Next.js and Flutter. Code that pays somebody’s wages.",
  },
  {
    title: "Founder — BlackDevs",
    description: "A fifteen-person studio building for clients on four continents.",
  },
  {
    title: "Specialist — the seams",
    description: "Payments, payroll, storefronts and the automations in between.",
  },
];

export function RolesStrip() {
  return (
    <>
      {/* Desktop — Figma 155:450 */}
      <ul className="hidden w-full items-end justify-between border-t border-[#343D35] pl-[48px] pt-[24px] lg:flex">
        {ROLES.map((role) => (
          <li key={role.title} className="flex flex-col gap-[8px]">
            <h2 className="whitespace-nowrap font-sans text-[16px] leading-[21px] tracking-[1.4px] uppercase text-[#F2F0E9]">
              {role.title}
            </h2>
            <p className="w-[266px] font-mono-code text-[16px] leading-[22px] text-[#ABB3A9]">
              {role.description}
            </p>
          </li>
        ))}
      </ul>

      {/* Tablet — Figma 246:253 */}
      <ul className="hidden w-full flex-col gap-[24px] border-t border-[#343D35] pt-[24px] sm:flex lg:hidden">
        {ROLES.map((role) => (
          <li key={role.title} className="flex items-start gap-[24px]">
            <h2 className="w-[208px] shrink-0 font-sans text-[16px] leading-[24px] text-[#F2F0E9]">
              {role.title}
            </h2>
            <p className="min-w-0 flex-1 font-mono-code text-[16px] leading-[28px] text-[#ABB3A9]">
              {role.description}
            </p>
          </li>
        ))}
      </ul>

      {/* Mobile — Figma 246:311 */}
      <ul className="mx-[30px] flex flex-col gap-[24px] border-t border-[#343D35] pt-[24px] sm:hidden">
        {ROLES.map((role) => (
          <li key={role.title} className="flex flex-col gap-[8px]">
            <h2 className="font-sans text-[16px] leading-[24px] text-[#F2F0E9]">{role.title}</h2>
            <p className="font-mono-code text-[16px] leading-[28px] text-[#ABB3A9]">
              {role.description}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

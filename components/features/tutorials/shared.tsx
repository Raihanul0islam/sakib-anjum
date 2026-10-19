import React from "react";
import { cn } from "@/lib/utils";

export { PlayButton, RowPlayButton } from "@/components/shared/PlayButtons";

/* Level / Time / Parts — the stacked layouts list them as rows (Figma colours "Parts" white) */
export function MetaRows({
  items,
  variant,
}: {
  items: { term: string; value: string }[];
  variant: "lesson" | "build";
}) {
  return (
    <dl className="flex flex-col gap-[8px] py-[8px] text-[16px] leading-[26px]">
      {items.map((m, i) => (
        <div key={m.term} className="flex gap-[16px]">
          <dt
            className={cn(
              "w-[88px] shrink-0 font-sans font-medium uppercase",
              variant === "lesson" ? cn("tracking-[1.4px]", i === 2 ? "text-white" : "text-[#ABB3A9]") : "text-[#727D72]"
            )}
          >
            {m.term}
          </dt>
          <dd className={cn("min-w-0 font-sans text-[#F2F0E9]", variant === "lesson" ? "font-normal" : "font-medium")}>{m.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export const metaItems = (l: { level: string; time: string; parts: string }) => [
  { term: "Level", value: l.level },
  { term: "Time", value: l.time },
  { term: "Parts", value: l.parts },
];

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site";

/* Button/Availability Circular — "Double Ring" (Figma 47:44). The 212px artwork
   (ring + drop shadow) sits at (-6, 0) inside the 200px instance; hover scales it
   to 108% over 220ms ease-out, as specified on the component. */
export function AvailabilityBadge({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <a href={`mailto:${SITE_CONFIG.email}`} aria-label="Available for work — email Sakib" className={cn("group relative block size-[200px] shrink-0", className)} style={style}>
      <Image
        src="/icons/availability-circular.svg"
        alt=""
        width={212}
        height={212}
        unoptimized
        className="absolute left-[-6px] top-0 size-[212px] max-w-none transition-transform duration-[220ms] ease-out group-hover:scale-[1.08]"
      />
    </a>
  );
}

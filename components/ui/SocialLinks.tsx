import React from "react";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";

/* Figma 155:415 — 24px icon boxes, 16px gap. SVGs exported from Figma at
   their natural size and centred in the box. LinkedIn is flipped vertically
   in the design (rotate 180° + mirror X). */
const ICONS = [
  { key: "github", src: "/images/icons/github.svg", w: 21.5, h: 21.5 },
  { key: "linkedin", src: "/images/icons/linkedin.svg", w: 20.5, h: 20.5, flip: true },
  { key: "mail", src: "/images/icons/mail.svg", w: 21.5, h: 18.5 },
];

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-[16px]", className)}>
      {ICONS.map((icon) => {
        const link = SOCIAL_LINKS.find((l) => l.icon === icon.key);
        if (!link) return null;
        const external = !link.href.startsWith("mailto:");
        return (
          <a
            key={icon.key}
            href={link.href}
            aria-label={link.name}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="flex size-[24px] shrink-0 items-center justify-center transition-opacity hover:opacity-70"
          >
            <Image
              src={icon.src}
              alt=""
              width={icon.w}
              height={icon.h}
              unoptimized
              className={cn("block", icon.flip && "-scale-y-100")}
              style={{ width: icon.w, height: icon.h }}
            />
          </a>
        );
      })}
    </div>
  );
}

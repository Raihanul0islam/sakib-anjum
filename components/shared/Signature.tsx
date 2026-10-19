import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* Figma 155:425 "Sakib Anjum — custom brush vector" — 753.077 × 458.371.
   Each letter is placed with the exact inset percentages from Figma, so the
   signature scales cleanly with its container width. */
const LETTERS = [
  { src: "letter-s", inset: "21.87% 89.69% 54.68% 1.2%" },
  { src: "letter-a", inset: "23.15% 74.39% 54.68% 9.31%" },
  { src: "letter-k", inset: "1.97% 61.81% 51.38% 24.62%" },
  { src: "letter-i", inset: "17.46% 53.96% 54.68% 37.19%" },
  { src: "letter-b", inset: "1.97% 41.92% 54.68% 45.04%" },
  { src: "letter-a2", inset: "58.57% 60.54% 19.26% 23.16%" },
  { src: "letter-n", inset: "55.97% 45.03% 19.26% 37.87%" },
  { src: "letter-j", inset: "52.89% 37.35% 1.97% 53.38%" },
  { src: "letter-u", inset: "57.78% 21.84% 17.44% 61.05%" },
  { src: "letter-m", inset: "55.97% 1.2% 19.26% 76.56%" },
];

interface SignatureProps {
  className?: string;
  priority?: boolean;
}

export function Signature({ className, priority = true }: SignatureProps) {
  return (
    <div
      role="img"
      aria-label="Sakib Anjum"
      className={cn(
        "relative aspect-[753.077/458.371] w-full overflow-hidden select-none pointer-events-none",
        className
      )}
    >
      {LETTERS.map((letter, i) => (
        <div key={i} className="absolute" style={{ inset: letter.inset }}>
          <Image
            src={`/images/home/signature/${letter.src}.svg`}
            alt=""
            fill
            unoptimized
            priority={priority}
            className="block"
          />
        </div>
      ))}
    </div>
  );
}

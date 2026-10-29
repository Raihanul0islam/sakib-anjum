import React from "react";
import Image from "next/image";

const ICONS = [
  { name: "Facebook", src: "/icons/blog/facebook.svg", w: 16.579, h: 16.579, href: (u: string) => `https://www.facebook.com/sharer/sharer.php?u=${u}` },
  { name: "Instagram", src: "/icons/blog/instagram.svg", w: 18.947, h: 18.947, href: () => "https://www.instagram.com/" },
  { name: "LinkedIn", src: "/icons/blog/linkedin.svg", w: 15.119, h: 14.447, dx: 0.45, dy: 0.12, href: (u: string) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
  { name: "X", src: "/icons/blog/twitter.svg", w: 18.947, h: 18.947, href: (u: string) => `https://twitter.com/intent/tweet?url=${u}` },
];

export function ShareLinks({ url }: { url: string }) {
  const encoded = encodeURIComponent(url);
  return (
    <div className="flex items-center gap-[6px]">
      {ICONS.map((icon) => (
        <a
          key={icon.name}
          href={icon.href(encoded)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${icon.name}`}
          className="relative size-[45px] shrink-0 overflow-clip rounded-[70px] bg-[#171B18] transition-colors hover:bg-[#232A24]"
        >
          <Image
            src={icon.src}
            alt=""
            width={icon.w}
            height={icon.h}
            unoptimized
            className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
            style={{ width: icon.w, height: icon.h, marginLeft: icon.dx, marginTop: icon.dy }}
          />
        </a>
      ))}
    </div>
  );
}

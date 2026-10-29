import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Crop } from "@/constants/portfolio/showcase";

interface CroppedImageProps {
  src: string;
  crop: Crop;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function CroppedImage({ src, crop, alt = "", sizes = "100vw", priority, className, style }: CroppedImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)} style={style}>
      <div className="absolute" style={crop}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-fill" />
      </div>
    </div>
  );
}

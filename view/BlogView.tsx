import React from "react";
import { BlogDesktop } from "@/components/features/blog/BlogDesktop";
import { BlogStacked } from "@/components/features/blog/BlogStacked";

/* Figma: desktop 29:370, tablet 257:268, mobile 257:356 */
export function BlogView() {
  return (
    <div className="w-full">
      <BlogDesktop />
      <BlogStacked />
    </div>
  );
}

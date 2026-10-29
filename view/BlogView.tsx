import React from "react";
import { BlogDesktop } from "@/components/features/blog/BlogDesktop";
import { BlogStacked } from "@/components/features/blog/BlogStacked";

export function BlogView() {
  return (
    <div className="w-full">
      <BlogDesktop />
      <BlogStacked />
    </div>
  );
}

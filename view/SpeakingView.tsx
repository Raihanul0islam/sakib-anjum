import React from "react";
import { SpeakingDesktop } from "@/components/features/speaking/SpeakingDesktop";
import { SpeakingStacked } from "@/components/features/speaking/SpeakingStacked";

/* Figma: desktop 29:670 · tablet 260:316 · mobile 260:428 */
export function SpeakingView() {
  return (
    <>
      <SpeakingDesktop />
      <SpeakingStacked />
    </>
  );
}

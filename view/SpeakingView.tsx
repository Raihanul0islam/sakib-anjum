import React from "react";
import { SpeakingDesktop } from "@/components/features/speaking/SpeakingDesktop";
import { SpeakingStacked } from "@/components/features/speaking/SpeakingStacked";

export function SpeakingView() {
  return (
    <>
      <SpeakingDesktop />
      <SpeakingStacked />
    </>
  );
}

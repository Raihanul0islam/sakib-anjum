import { Metadata } from "next";
import { SpeakingView } from "@/view/SpeakingView";

export const metadata: Metadata = {
  title: "Speaking & Workshops — Keynotes on Systems & Craft",
  description:
    "Real-world lessons shared on stage. Practical talks on software architecture, studio operations, and shipping resilient platforms by Sakib Anjum.",
};

export default function SpeakingPage() {
  return <SpeakingView />;
}

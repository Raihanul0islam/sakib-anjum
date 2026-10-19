import React from "react";
import { ContactDesktop, ContactStacked } from "@/components/features/contact/ContactLayouts";

/* Figma: desktop 29:568 (1920 frame, 1200 composition) · tablet 259:292 · mobile 259:354 */
export function ContactView() {
  return (
    <>
      <ContactDesktop />
      <ContactStacked />
    </>
  );
}

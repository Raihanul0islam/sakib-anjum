import React from "react";
import { ContactDesktop, ContactStacked } from "@/components/features/contact/ContactLayouts";

export function ContactView() {
  return (
    <>
      <ContactDesktop />
      <ContactStacked />
    </>
  );
}

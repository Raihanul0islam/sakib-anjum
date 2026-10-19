import { Metadata } from "next";
import { ContactView } from "@/view/ContactView";

export const metadata: Metadata = {
  title: "Contact — Start a Project or Say Hello",
  description:
    "Get in touch with Sakib Anjum. Taking one new product build for Q1 2027. Fast response within one working day.",
};

export default function ContactPage() {
  return <ContactView />;
}

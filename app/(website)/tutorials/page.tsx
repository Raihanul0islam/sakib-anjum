import { Metadata } from "next";
import { TutorialsView } from "@/view/TutorialsView";

export const metadata: Metadata = {
  title: "Tutorials — Step-by-Step Production Code",
  description:
    "Learn by building. Practical guided lessons on Laravel multi-tenancy, Postgres row-level security, Next.js architecture, and offline Flutter systems.",
};

export default function TutorialsPage() {
  return <TutorialsView />;
}

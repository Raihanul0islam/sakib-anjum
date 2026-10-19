import { Metadata } from "next";
import { BlogView } from "@/view/BlogView";

export const metadata: Metadata = {
  title: "Blog — Notes from a Software Engineer",
  description:
    "Essays and notes from a software studio in Rangpur. On engineering, client proposals, architecture, and developer hiring.",
};

export default function BlogPage() {
  return <BlogView />;
}

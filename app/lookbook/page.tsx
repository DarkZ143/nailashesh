import type { Metadata } from "next";
import LookbookExperience from "./lookbook-experience";

export const metadata: Metadata = {
  title: "Lookbook & Artistry Gallery | Nailashes Indirapuram",
  description:
    "Browse signature nail art, bridal designs, minimalist manicures, and lash looks from the Nailashes Indirapuram studio.",
};

export default function LookbookPage() {
  return <LookbookExperience />;
}

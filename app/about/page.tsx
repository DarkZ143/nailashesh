import type { Metadata } from "next";
import AboutExperience from "./about-experience";

export const metadata: Metadata = {
  title: "About Nailashes | Artistry, Team & Reviews",
  description:
    "Meet the Nailashes Indirapuram artists, learn about our hygiene standards, and read verified guest reviews.",
};

export default function AboutPage() {
  return <AboutExperience />;
}

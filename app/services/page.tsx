import type { Metadata } from "next";
import ServicesExperience from "./services-experience";

export const metadata: Metadata = {
  title: "Signature Services & Menu | Nailashes Indirapuram",
  description:
    "Explore nail extensions, lash architecture, spa manicures and pedicures, and festive mehndi services at Nailashes Indirapuram.",
};

export default function ServicesPage() {
  return <ServicesExperience />;
}

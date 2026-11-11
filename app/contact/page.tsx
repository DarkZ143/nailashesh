import type { Metadata } from "next";
import ContactExperience from "./contact-experience";

export const metadata: Metadata = {
  title: "Visit & Book | Nailashes Indirapuram",
  description:
    "Find Nailashes at Indirapuram Habitat Centre, check studio hours and amenities, or send an appointment request to our WhatsApp concierge.",
};

export default function ContactPage() {
  return <ContactExperience />;
}

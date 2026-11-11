import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteLoader from "./site-loader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nailashes Indirapuram | Couture Nails & Lash Studio",
  description:
    "Discover couture nail artistry, bespoke lash styling, and indulgent spa rituals at Nailashes Indirapuram Habitat Centre.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteLoader />
        {children}
      </body>
    </html>
  );
}

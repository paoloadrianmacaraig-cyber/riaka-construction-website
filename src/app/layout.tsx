import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://riakaconstruction.com'),
  title: "RIAKA Construction & Development Corp. | Quality You Can Trust",
  description:
    "RIAKA unifies design, contracting, and development under one roof. High-precision craftsmanship for safe, durable homes and multi-storey developments.",
  keywords: [
    "RIAKA Construction",
    "Construction Company Philippines",
    "General Contractor",
    "Residential Construction",
    "Commercial Construction",
    "Architectural Design",
    "Lemery Batangas Contractor",
  ],
  authors: [{ name: "RIAKA Construction & Development Corp." }],
  openGraph: {
    title: "RIAKA Construction & Development Corp. | Quality You Can Trust",
    description:
      "High-caliber construction solutions. Safe, durable homes and general construction for multi-storey developments.",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "/cta/cta-bg.jpg",
        width: 1200,
        height: 630,
        alt: "RIAKA Construction Hard Hats & Site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RIAKA Construction & Development Corp. | Quality You Can Trust",
    description:
      "High-caliber construction solutions. Safe, durable homes and general construction for multi-storey developments.",
    images: ["/cta/cta-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} ${plusJakartaSans.variable} bg-white text-gray-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

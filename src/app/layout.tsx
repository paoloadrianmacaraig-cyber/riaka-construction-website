import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RIAKA Construction & Development Corp.",
  description:
    "RIAKA unifies design, contracting, and development under one roof. High-precision craftsmanship, on schedule and within budget.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} bg-white text-gray-800 antialiased`}
        style={{ fontFamily: plusJakartaSans.style.fontFamily }}
      >
        {children}
      </body>
    </html>
  );
}

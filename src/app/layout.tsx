import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Klei House - Creative Workshops & Art Studio",
  description: "Discover your creativity at Klei House, a modern creative workshop space offering pottery, ceramics, and artistic experiences in a beautiful, inspiring environment.",
  keywords: "pottery, ceramics, creative workshops, art studio, handmade, clay, creative space, art classes",
  authors: [{ name: "Klei House" }],
  openGraph: {
    title: "Klei House - Creative Workshops & Art Studio",
    description: "Discover your creativity at Klei House, a modern creative workshop space offering pottery, ceramics, and artistic experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klei House - Creative Workshops & Art Studio",
    description: "Discover your creativity at Klei House, a modern creative workshop space offering pottery, ceramics, and artistic experiences.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased bg-neutral-50 text-neutral-800`}>
        {children}
      </body>
    </html>
  );
}

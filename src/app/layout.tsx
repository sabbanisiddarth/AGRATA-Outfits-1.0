import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AGRATA Outfits - Curated Elegance & Custom Boutique",
  description: "Luxury custom outfits for every occasion. Specializing in first birthdays, family combos, and bespoke wedding wear. Global shipping available.",
  keywords: ["Custom Baby Outfits", "Bespoke Family Combos", "Wedding Occasion Wear", "Luxury Custom Outfits", "Agrata Outfits", "Mom and Daughter Combos"],
  authors: [{ name: "Pranitha", url: "https://outfitsagrata.vercel.app/" }],
  creator: "AGRATA Outfits",
  openGraph: {
    title: "AGRATA Outfits - Curated Elegance",
    description: "Luxury custom outfits for every occasion. Bespoke fashion made with love.",
    url: "https://outfitsagrata.vercel.app/",
    siteName: "AGRATA Outfits",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AGRATA Outfits - Curated Elegance",
    description: "Luxury custom outfits for every occasion.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

      </head>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

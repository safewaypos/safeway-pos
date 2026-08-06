import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.safewayerp.lk"),

  title: {
    default: "SAFEWAY POS | ERP & POS Software in Sri Lanka",
    template: "%s | SAFEWAY POS",
  },

  description:
    "SAFEWAY POS is a modern ERP & POS solution for retail, wholesale, supermarkets, restaurants, pharmacies, and distribution businesses in Sri Lanka.",

  keywords: [
    "POS Software Sri Lanka",
    "ERP Software Sri Lanka",
    "Retail POS",
    "Wholesale ERP",
    "Inventory Management",
    "Accounting Software",
    "Billing Software",
    "Restaurant POS",
    "Pharmacy POS",
    "SAFEWAY POS",
    "Jaffna POS",
  ],

  authors: [
    {
      name: "SAFEWAY TECHNOLOGIES (PVT) LTD",
    },
  ],

  creator: "SAFEWAY TECHNOLOGIES (PVT) LTD",
  publisher: "SAFEWAY TECHNOLOGIES (PVT) LTD",

  alternates: {
    canonical: "https://www.safewayerp.lk",
  },

  openGraph: {
    title: "SAFEWAY POS | ERP & POS Software",
    description:
      "Complete ERP & POS solution for retail, wholesale, supermarkets, restaurants, and modern businesses.",
    url: "https://www.safewayerp.lk",
    siteName: "SAFEWAY POS",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SAFEWAY POS",
    description:
      "Complete ERP & POS solution for modern businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
        className={`${plusJakarta.className} bg-slate-900 text-white antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SAFEWAY POS",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Windows",
              description:
                "Complete ERP & POS Software for Retail, Wholesale, Supermarkets, Restaurants and Distribution Businesses.",
              url: "https://www.safewayerp.lk",
              provider: {
                "@type": "Organization",
                name: "SAFEWAY TECHNOLOGIES (PVT) LTD",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "LKR",
              },
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
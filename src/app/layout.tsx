import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://transakt.online"),
  title: {
    default: "Transakt — Modern Checkout for Cards, Crypto, and Wallets",
    template: "%s | Transakt",
  },
  description:
    "Transakt is a modern payments platform with a high-converting checkout. Accept cards, crypto, and digital wallets with enterprise-grade security.",
  keywords: [
    "checkout",
    "payments",
    "crypto payments",
    "digital wallets",
    "payment gateway",
    "Stripe alternative",
    "PayPal alternative",
    "Whop alternative",
    "global payments",
    "online checkout",
  ],
  applicationName: "Transakt",
  creator: "Transakt",
  authors: [{ name: "Transakt" }],
  openGraph: {
    type: "website",
    url: "/",
    title: "Transakt — Modern Checkout for Cards, Crypto, and Wallets",
    description:
      "Accept cards, crypto, and digital wallets with enterprise-grade security and 99.9% uptime.",
    siteName: "Transakt",
    images: [
      {
        url: "/next.svg",
        width: 1200,
        height: 630,
        alt: "Transakt — Modern Checkout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transakt — Modern Checkout for Cards, Crypto, and Wallets",
    description:
      "Accept cards, crypto, and digital wallets with enterprise-grade security and 99.9% uptime.",
    images: ["/next.svg"],
    creator: "@transakt",
  },
  alternates: {
    canonical: "https://transakt.online/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

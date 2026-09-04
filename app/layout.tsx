import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F0EBE0" },
    { media: "(prefers-color-scheme: dark)", color: "#18140F" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://transakt.family"),
  title: {
    default: "Transakt | Crypto for the Whole Family",
    template: "%s | Transakt",
  },
  description:
    "Claim your family ENS identity, issue custom subnames, set spending rules and permissions, and secure high-value transfers with World ID Selfie Check.",
  keywords: [
    "Transakt",
    "Family Crypto",
    "ENS Subnames",
    "Privy",
    "Account Abstraction",
    "ERC-4337",
    "Family Treasury",
    "Uniswap Swaps",
    "World ID Selfie Check",
    "ETH Sepolia",
    "Ethereum Sepolia",
  ],
  authors: [{ name: "Transakt Team", url: "https://transakt.family" }],
  creator: "Transakt",
  publisher: "Transakt",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Transakt | Crypto for the Whole Family",
    description:
      "Claim your family ENS identity, issue custom subnames, set spending rules and permissions, and secure high-value transfers with World ID Selfie Check.",
    url: "https://transakt.family",
    siteName: "Transakt",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transakt | Crypto for the Whole Family",
    description:
      "Claim your family ENS identity, issue custom subnames, set spending rules and permissions, and secure high-value transfers with World ID Selfie Check.",
    creator: "@transakt_eth",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Transakt",
  "operatingSystem": "All (Web App, iOS, Android, Desktop)",
  "applicationCategory": "FinanceApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "description":
    "Non-custodial family treasury and ENS identity portal powered by Privy and ERC-4337 Account Abstraction.",
  "url": "https://transakt.family",
  "featureList": [
    "Seamless Privy Smart Onboarding",
    "ENS Offchain Subname Issuance",
    "Uniswap Token Swaps",
    "Multi-Sig Guardian Social Recovery",
    "World ID Zero-Knowledge Step-Up Auth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakartaSans.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased selection:bg-[#1A5C3A] selection:text-white dark:selection:bg-[#00FF87] dark:selection:text-black">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import React from "react";
import { Comparison } from "@/components/Comparison";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Organization + Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Transakt',
            url: 'https://transakt.online',
            logo: 'https://transakt.online/next.svg',
            sameAs: [
              'https://twitter.com/transakt',
            ],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '120',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Does Transakt support crypto payments?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Bitcoin, Ethereum, and stablecoins with automatic conversion.'
                }
              },
              {
                '@type': 'Question',
                name: 'How long does setup take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most teams get a working checkout in under 5 minutes.'
                }
              },
              {
                '@type': 'Question',
                name: 'Is there a free trial?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Early access users get a 25% lifetime discount and trial access.'
                }
              },
              {
                '@type': 'Question',
                name: 'How does pricing compare to Stripe and PayPal?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Transparent pricing with no hidden fees. See the pricing section for details.'
                }
              }
            ]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Transakt',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'USD',
              lowPrice: '29',
              highPrice: '79',
              offerCount: '2',
            },
            description: 'Modern payments platform and checkout. Accept cards, crypto, and wallets.',
            url: 'https://transakt.online',
          }),
        }}
      />
      <Header />
      <Hero />
      <Features id="features" />
      <Comparison id="compare" />
      <Pricing id="pricing" />
      <FAQ id="faq" />
      <Footer />
    </div>
  );
}

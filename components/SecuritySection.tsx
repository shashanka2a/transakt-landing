"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export function SecuritySection() {
  const sponsors = [
    {
      name: "ENSv2",
      tag: "Hierarchical Registries",
      logo: "/ens.png",
      color: "blue",
      title: "ENSv2 Architecture",
      points: [
        "Hierarchical registries & subname lifecycle management",
        "Enhanced Access Control (EAC) & record-level permissions",
        "Decentralized L2 resolution via ERC-3668 CCIP-read",
      ],
      highlight: "Record-Level Access Control",
    },
    {
      name: "Privy",
      tag: "Embedded Wallets",
      logo: "/privy.png",
      color: "emerald",
      title: "Privy Embedded Auth",
      points: [
        "Zero-seed-phrase onboarding via hardware passkeys",
        "Embedded smart wallets with invisible gas funding",
        "Seamless wallet actions across all family devices",
      ],
      highlight: "FIDO2 / Secure Enclave Native",
    },
    {
      name: "World ID",
      tag: "Proof-of-Unique-Human",
      logo: "/world-id.png",
      color: "purple",
      title: "World ID Selfie Check",
      points: [
        "Low-friction biometric liveness & anti-abuse checks",
        "Step-up authorization for high-value family transfers",
        "Zero biometric data stored—1:1 ZK-SNARK proof only",
      ],
      highlight: "Privacy-Preserving ZK Proofs",
    },
  ];

  return (
    <section id="security" className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full app-surface border border-black/5 dark:border-white/5 mb-4 text-xs font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
          <span>WEB3 ARCHITECTURE & SPONSOR TECH</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold app-text tracking-tight mb-4">
          Institutional Security. <br className="hidden sm:block" />
          Consumer Simplicity.
        </h2>
        <p className="text-base sm:text-lg app-muted">
          Transakt eliminates traditional single-point-of-failure vulnerabilities through an integrated Web3 architecture powered by <span className="font-semibold app-text">ENSv2</span>, <span className="font-semibold app-text">Privy</span>, and <span className="font-semibold app-text">World ID</span>.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {sponsors.map((sponsor, idx) => (
          <div
            key={idx}
            className="app-surface p-8 rounded-3xl border border-black/10 dark:border-white/10 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
          >
            <div>
              {/* Card Header with Real Sponsor Logo */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform shadow-xs overflow-hidden">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} Logo`}
                    width={44}
                    height={44}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 app-muted">
                  {sponsor.tag}
                </span>
              </div>

              {/* Card Title */}
              <div className="mb-5">
                <span
                  className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
                    sponsor.color === "blue"
                      ? "text-blue-600 dark:text-blue-400"
                      : sponsor.color === "emerald"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-purple-600 dark:text-purple-400"
                  }`}
                >
                  {sponsor.name}
                </span>
                <h3 className="text-xl font-bold app-text">{sponsor.title}</h3>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6">
                {sponsor.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm app-muted leading-relaxed">
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        sponsor.color === "blue"
                          ? "text-blue-500"
                          : sponsor.color === "emerald"
                          ? "text-emerald-500"
                          : "text-purple-500"
                      }`}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Highlight */}
            <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-semibold">
              <span
                className={
                  sponsor.color === "blue"
                    ? "text-blue-600 dark:text-blue-400"
                    : sponsor.color === "emerald"
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-purple-600 dark:text-purple-400"
                }
              >
                {sponsor.highlight}
              </span>
              <ArrowUpRight className="w-4 h-4 app-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

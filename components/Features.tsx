"use client";

import React from "react";
import { Fingerprint, Shield, Clock, KeyRound, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Passkey Native",
    tag: "FIDO2 / WebAuthn",
    description:
      "Powered by Privy. Sign in instantly using Apple FaceID, TouchID, or Windows Hello. No browser extensions, no passwords, and zero seed phrases to lose.",
    highlight: "Zero recovery phrase stress",
  },
  {
    icon: Shield,
    title: "Family ENS Identities",
    tag: "ENS Subnames (CCIP)",
    description:
      "Search and claim your root name.eth. Mint instant gasless subnames (e.g., alex.smithfam.eth) for kids and partners with customized permission scopes.",
    highlight: "Human-readable addresses",
  },
  {
    icon: Clock,
    title: "Programmable Allowances",
    tag: "Smart Contract Limits",
    description:
      "Automate recurring weekly allowance drops in USDC or ETH. Set daily spending ceilings and toggle DeFi protocol access with a single tap.",
    highlight: "Automated allowance rails",
  },
  {
    icon: KeyRound,
    title: "Gasless Relay",
    tag: "ERC-4337 Account Abstraction",
    description:
      "Every transaction is bundled through paymasters on ETH Sepolia. Your family transacts with zero gas fee confusion or failed nonce errors.",
    highlight: "100% sponsored gas fees",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full app-surface border border-black/5 dark:border-white/5 mb-4 text-xs font-bold tracking-wider app-accent">
          <span>DESIGNED FOR FAMILIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold app-text tracking-tight mb-4">
          Everything crypto needed. <br className="hidden sm:block" />
          Nothing complicated.
        </h2>
        <p className="text-base sm:text-lg app-muted">
          We combined Passkeys, ERC-4337 Account Abstraction, and ENS to build a modern consumer experience that parents and teenagers can easily use.
        </p>
      </div>

      {/* 4 Cards in 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="app-surface p-7 sm:p-9 rounded-3xl group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-black/10 dark:border-white/10 relative overflow-hidden"
          >

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                  <feature.icon className="w-7 h-7 app-accent" />
                </div>
                <span className="text-[11px] font-bold px-3 py-1 rounded-md bg-black/5 dark:bg-white/5 app-muted">
                  {feature.tag}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold app-text mb-3">{feature.title}</h3>
              <p className="app-muted leading-relaxed text-sm sm:text-base font-normal mb-6">
                {feature.description}
              </p>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-semibold app-accent">
              <span>{feature.highlight}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

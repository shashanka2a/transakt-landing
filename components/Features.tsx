"use client";

import React from "react";
import { Fingerprint, Shield, Clock, ArrowLeftRight, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Frictionless Login",
    tag: "Seamless Onboarding",
    description:
      "Sign up with your email or social account in seconds. Powered by Privy, your secure smart account is generated automatically under the hood with zero complex setup.",
    highlight: "One-tap email & social onboarding",
  },
  {
    icon: Shield,
    title: "Readable Family Names",
    tag: "Simple Usernames",
    description:
      "Replace confusing crypto addresses with simple names like alex.smithfam.eth. Sending money is as simple as sending a text message.",
    highlight: "Never copy-paste cryptic addresses",
  },
  {
    icon: Clock,
    title: "Automatic Allowances",
    tag: "Family Budgeting",
    description:
      "Schedule weekly pocket money drops for kids with automatic spending limits. Help your family build healthy financial habits with built-in parental controls.",
    highlight: "Automated pocket money with limits",
  },
  {
    icon: ArrowLeftRight,
    title: "Swap & Invest",
    tag: "Powered by Uniswap",
    description:
      "Swap effortlessly into your favourite crypto assets and tokens directly inside the app using Uniswap. Build and manage your family portfolio with simple, intuitive tools.",
    highlight: "Instant decentralized swaps",
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
          We removed complex setups, confusing wallet addresses, and complicated tools so your entire family can easily manage money together.
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

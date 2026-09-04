"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { SubnameDeepDive } from "@/components/SubnameDeepDive";
import { SecuritySection } from "@/components/SecuritySection";
import { Footer } from "@/components/Footer";
import { EarlyAccessModal } from "@/components/EarlyAccessModal";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  return (
    <div className="min-h-screen app-bg transition-colors duration-300">
      {/* Navigation */}
      <Navbar onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)} />

        {/* Core Features */}
        <Features />

        {/* Deep Dive Subnames Simulator */}
        <SubnameDeepDive />

        {/* Security & Architecture Pillars */}
        <SecuritySection />

        {/* High Conversion Pre-Footer CTA */}
        <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="app-surface rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-black/5 dark:border-white/5 relative overflow-hidden text-center shadow-xl">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-400/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>EXPERIENCE THE FUTURE OF FAMILY WEALTH</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold app-text tracking-tight leading-tight">
                Ready to setup your family ENS treasury?
              </h2>

              <p className="text-base sm:text-lg app-muted max-w-xl mx-auto">
                Join our private alpha on ETH Sepolia. Zero seed phrases, gasless subname issuance, and World ID Selfie Check in less than 60 seconds.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => setIsEarlyAccessOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 app-accent-bg rounded-full font-bold text-base sm:text-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center space-x-2 shadow-md"
                >
                  <span>Request Alpha Access</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs font-semibold app-muted">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>No wallet download required</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Non-custodial smart contracts</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>100% Gasless on Sepolia</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Early Access Modal */}
      <EarlyAccessModal
        isOpen={isEarlyAccessOpen}
        onClose={() => setIsEarlyAccessOpen(false)}
      />
    </div>
  );
}

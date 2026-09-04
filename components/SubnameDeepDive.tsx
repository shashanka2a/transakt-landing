"use client";

import React, { useState, useEffect } from "react";
import { Users, CheckCircle2, ChevronRight, Lock, Unlock, Check, Zap } from "lucide-react";

interface DemoCycle {
  name: string;
  limit: number;
  defi: boolean;
}

const DEMO_CYCLES: DemoCycle[] = [
  { name: "alex", limit: 75, defi: true },
  { name: "chloe", limit: 40, defi: false },
  { name: "sarah", limit: 120, defi: true },
];

export function SubnameDeepDive() {
  const [mounted, setMounted] = useState(false);
  const [cycleIndex, setCycleIndex] = useState(0);
  const [subname, setSubname] = useState("alex");
  const [weeklyLimit, setWeeklyLimit] = useState(50);
  const [defiAllowed, setDefiAllowed] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [minted, setMinted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Continuous Automated Animation Loop
  useEffect(() => {
    if (!mounted || isHovered) return;

    let isCancelled = false;
    const target = DEMO_CYCLES[cycleIndex];

    const runCycle = async () => {
      // 1. Reset state
      setMinted(false);
      setIsMinting(false);
      setSubname("");

      // 2. Typewriter effect for name
      for (let i = 1; i <= target.name.length; i++) {
        if (isCancelled) return;
        await new Promise((r) => setTimeout(r, 160));
        setSubname(target.name.slice(0, i));
      }

      await new Promise((r) => setTimeout(r, 400));
      if (isCancelled) return;

      // 3. Smooth Slider Adjustment
      const startLimit = 25;
      const targetLimit = target.limit;
      const stepCount = 8;
      for (let s = 1; s <= stepCount; s++) {
        if (isCancelled) return;
        await new Promise((r) => setTimeout(r, 70));
        const val = Math.round(startLimit + (targetLimit - startLimit) * (s / stepCount));
        setWeeklyLimit(val);
      }

      await new Promise((r) => setTimeout(r, 400));
      if (isCancelled) return;

      // 4. Toggle DeFi Permissions
      setDefiAllowed(target.defi);

      await new Promise((r) => setTimeout(r, 600));
      if (isCancelled) return;

      // 5. Trigger Mint Action
      setIsMinting(true);
      await new Promise((r) => setTimeout(r, 900));
      if (isCancelled) return;

      setIsMinting(false);
      setMinted(true);

      // 6. Show Success Toast Preview
      await new Promise((r) => setTimeout(r, 2600));
      if (isCancelled) return;

      setMinted(false);
      await new Promise((r) => setTimeout(r, 400));
      if (isCancelled) return;

      // Advance to next cycle
      setCycleIndex((prev) => (prev + 1) % DEMO_CYCLES.length);
    };

    runCycle();

    return () => {
      isCancelled = true;
    };
  }, [mounted, cycleIndex, isHovered]);

  return (
    <section id="subnames" className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="app-surface rounded-[2.5rem] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 sm:gap-16 border border-black/5 dark:border-white/5 relative overflow-hidden shadow-xl">
        {/* Background Ambient Glow */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

        {/* Left Column: Explanation */}
        <div className="flex-1 space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>INTERACTIVE SUB-IDENTITY BUILDER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold app-text tracking-tight leading-tight">
            Issue subnames in seconds.
          </h2>

          <p className="text-base sm:text-lg app-muted leading-relaxed max-w-xl">
            Setting up crypto for your family shouldn&apos;t require a Ph.D. Choose a name, set their weekly spend limit, and send an invite link. Transakt handles the smart contracts, L2 state proofs, and permissions under the hood.
          </p>

          <div className="space-y-4 pt-4">
            {[
              {
                step: "1",
                title: "Choose subname identity",
                desc: "Mint gasless subdomains like alex.smithfam.eth directly on ETH Sepolia.",
              },
              {
                step: "2",
                title: "Set permissions & spend limits",
                desc: "Control DeFi execution rights, daily limits, and co-signing thresholds.",
              },
              {
                step: "3",
                title: "Send one-tap invite link",
                desc: "Recipient activates their subname via PWA with World ID Selfie Check in seconds.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start space-x-4">
                <div className="w-7 h-7 rounded-full app-accent-bg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-xs">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-base app-text">{item.title}</h4>
                  <p className="text-xs sm:text-sm app-muted font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Animated Simulator Card */}
        <div
          className="flex-1 w-full max-w-md relative z-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-white dark:bg-[#120F0C] rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 dark:border-white/10 relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/5 dark:border-white/5">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-emerald-500" />
                <h4 className="font-bold app-text text-base">Mint Family Subname</h4>
              </div>
              <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>ENS Offchain Sepolia</span>
              </div>
            </div>

            {/* Simulator Form */}
            <div className="space-y-5">
              {/* ENS Name Input with Animated Typing */}
              <div>
                <label className="text-[11px] font-bold app-muted uppercase tracking-wider mb-2 block">
                  Assign ENS Handle
                </label>
                <div className="flex items-center app-surface rounded-xl p-3 border border-black/10 dark:border-white/10 ring-2 ring-emerald-500/40 transition-all shadow-inner">
                  <div className="flex items-center">
                    <span className="font-bold text-sm sm:text-base app-text min-w-[20px]">
                      {subname || ""}
                    </span>
                    <span className="inline-block w-0.5 h-4 bg-emerald-500 animate-pulse ml-0.5"></span>
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-neutral-400 ml-1">
                    .smithfam.eth
                  </span>
                  <CheckCircle2
                    className={`w-4 h-4 ml-auto shrink-0 transition-opacity duration-300 ${
                      subname ? "text-emerald-500 opacity-100" : "opacity-20 text-neutral-400"
                    }`}
                  />
                </div>
              </div>

              {/* Weekly Limit Range Slider with Animated Value */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[11px] font-bold app-muted uppercase tracking-wider">
                    Weekly Allowance
                  </label>
                  <span className="text-sm font-black app-text px-2.5 py-0.5 rounded-md bg-black/5 dark:bg-white/10 transition-all">
                    ${weeklyLimit} / wk
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="250"
                  step="5"
                  value={weeklyLimit}
                  readOnly
                  className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none pointer-events-none accent-emerald-500 transition-all"
                />
                <div className="flex justify-between text-[10px] app-muted font-medium mt-1">
                  <span>$10 min</span>
                  <span>$250 max</span>
                </div>
              </div>

              {/* Permissions Toggles with Animated Switch */}
              <div>
                <label className="text-[11px] font-bold app-muted uppercase tracking-wider mb-2 block">
                  Permissions & Safeguards
                </label>
                <div className="app-surface rounded-xl border border-black/10 dark:border-white/10 divide-y divide-black/5 dark:divide-white/5">
                  <div className="p-3 flex justify-between items-center">
                    <span className="text-xs font-semibold app-text">L2 Gasless Paymaster</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      ENABLED
                    </span>
                  </div>

                  <div className="p-3 flex justify-between items-center transition-colors">
                    <span className="text-xs font-semibold app-text flex items-center space-x-2">
                      {defiAllowed ? (
                        <Unlock className="w-3.5 h-3.5 text-emerald-500 transition-colors" />
                      ) : (
                        <Lock className="w-3.5 h-3.5 text-amber-500 transition-colors" />
                      )}
                      <span>DeFi Protocols Access</span>
                    </span>
                    <div
                      className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-300 ${
                        defiAllowed ? "bg-emerald-500" : "bg-neutral-300 dark:bg-neutral-700"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                          defiAllowed ? "translate-x-4" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button with Animated Spin & State */}
              <div
                className={`w-full py-3.5 app-accent-bg rounded-xl font-bold text-sm mt-2 flex items-center justify-center space-x-2 shadow-md transition-all ${
                  isMinting ? "opacity-90 scale-98" : ""
                }`}
              >
                {isMinting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    <span>Relaying Smart Contract...</span>
                  </>
                ) : (
                  <>
                    <span>Mint & Send Invite</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </div>
            </div>

            {/* Success Toast Preview Overlay */}
            {minted && (
              <div className="absolute inset-0 bg-white/95 dark:bg-[#120F0C]/95 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center justify-center text-center animate-count-up z-20">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 shadow-xs">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h5 className="font-extrabold text-base app-text mb-1">Subname Created!</h5>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                  {subname || "alex"}.smithfam.eth
                </p>
                <p className="text-[11px] app-muted mb-4 max-w-[240px] leading-relaxed">
                  Invite link with World ID Selfie Check is ready to share. Spend limit: ${weeklyLimit}/wk.
                </p>
                <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                  ✓ Relayed on ETH Sepolia ($0.00 Gas)
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  Download,
  Users,
  RefreshCw,
  Shield,
  Lock,
  Menu,
  TrendingUp,
  CheckCircle2,
  Check,
  Zap,
  Camera,
  ShieldCheck
} from "lucide-react";
import { TxLogo, EthereumIcon, UniswapIcon, WorldIdIcon } from "./Icons";

interface MockPhoneProps {
  isDark?: boolean;
}

type TabType = "home" | "send" | "manage" | "activity";

interface PWAStep {
  id: string;
  tab: TabType;
  title: string;
  island: string;
}

const PWA_STEPS: PWAStep[] = [
  { id: "home", tab: "home", title: "1. Family Treasury", island: "⚡ PWA • Base L2" },
  { id: "send", tab: "send", title: "2. Gasless Send", island: "⛽ $0.00 Gas Relay" },
  { id: "selfie", tab: "send", title: "3. World ID Selfie Check", island: "🌐 World ID ZK Check" },
  { id: "activity", tab: "activity", title: "4. Instant L2 Activity", island: "🟢 Confirmed on Base" },
];

export function MockPhone({ isDark = false }: MockPhoneProps) {
  const [mounted, setMounted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Automated continuous PWA flow loop (Non-clickable tabs / automated demo)
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % PWA_STEPS.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [mounted]);

  const currentStep = PWA_STEPS[stepIndex];
  const activeTab = currentStep.tab;

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] select-none pointer-events-none">
      {/* Floating Status HUD Pill 1: Top-Right */}
      <div className="absolute -top-6 -right-4 sm:-right-8 z-30 animate-float hidden xs:flex items-center space-x-2 px-3.5 py-1.5 rounded-full app-surface border border-black/10 dark:border-white/10 shadow-lg backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] font-bold app-text tracking-tight">Base L2 • Gas Sponsored</span>
      </div>

      {/* Floating Status HUD Pill 2: Bottom-Left */}
      <div className="absolute -bottom-6 -left-4 sm:-left-8 z-30 animate-float-delayed hidden xs:flex items-center space-x-2 px-3.5 py-1.5 rounded-full app-surface border border-black/10 dark:border-white/10 shadow-lg backdrop-blur-md">
        <WorldIdIcon className="w-4 h-4 text-emerald-500" />
        <span className="text-[11px] font-bold app-text tracking-tight">World ID Selfie Check Active</span>
      </div>

      {/* Phone Shell */}
      <div
        className={`relative w-full aspect-[1/2.05] rounded-[2.75rem] border-[10px] overflow-hidden shadow-2xl transition-all duration-500
        ${
          isDark
            ? "border-neutral-800 bg-[#18140F] shadow-[0_25px_60px_rgba(0,255,135,0.12)]"
            : "border-white bg-[#F0EBE0] shadow-[0_25px_60px_rgba(26,92,58,0.12)]"
        }
        flex flex-col font-sans`}
      >
        {/* PWA Flow Step Indicator Bar at very top */}
        <div className="absolute top-1 inset-x-8 z-50 flex space-x-1.5 pt-1">
          {PWA_STEPS.map((step, idx) => (
            <div
              key={step.id}
              className="h-1 flex-1 rounded-full bg-black/15 dark:bg-white/20 overflow-hidden"
            >
              <div
                className={`h-full bg-emerald-500 transition-all duration-500 ${
                  idx === stepIndex
                    ? "w-full"
                    : idx < stepIndex
                    ? "w-full opacity-60"
                    : "w-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Dynamic Island / Active Notification Notch */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 z-40 transition-all duration-300">
          <div className="h-6 px-3 bg-black text-white rounded-full flex items-center justify-between space-x-2 shadow-md">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-[9px] font-bold tracking-tight text-neutral-200">
              {currentStep.island}
            </span>
          </div>
        </div>

        {/* Status Bar */}
        <div className="absolute top-0 w-full h-8 flex justify-between items-center px-6 z-20 text-[11px] font-medium app-text opacity-75 pt-3">
          <span>9:41</span>
          <div className="flex space-x-1.5 items-center">
            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              PWA
            </span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
            </svg>
          </div>
        </div>

        {/* World ID Selfie Check Overlay Animation (Step 2: Selfie Check) */}
        {stepIndex === 2 && (
          <div className="absolute inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-count-up">
            {/* World ID Selfie Oval Scanner Frame */}
            <div className="relative w-28 h-36 rounded-[2.5rem] border-2 border-emerald-400/80 p-2 flex flex-col items-center justify-center mb-4 overflow-hidden shadow-[0_0_25px_rgba(0,255,135,0.25)]">
              {/* Animated Scan Line */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-biometric-pulse"></div>
              
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                <WorldIdIcon className="w-8 h-8" />
              </div>
              <span className="text-[9px] font-bold text-emerald-400 tracking-wider uppercase">
                Align Face
              </span>
            </div>

            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>World ID Selfie Check</span>
            </div>

            <h4 className="text-white font-black text-sm tracking-tight mb-1">
              1:1 ZK Proof Verified
            </h4>
            <p className="text-neutral-300 text-[10px] font-medium max-w-[210px] leading-relaxed mb-3">
              Unique human authorization confirmed without storing any biometric data.
            </p>

            <div className="px-3 py-1 rounded-lg bg-white/10 text-white/90 text-[9px] font-bold flex items-center space-x-1">
              <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
              <span>Zero-Knowledge Proof Signed</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="px-5 pt-14 pb-2 flex justify-between items-center z-10">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg app-accent-bg flex items-center justify-center shadow-xs">
              <TxLogo className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-sm tracking-tight app-text leading-tight">smithfam.eth</span>
              <span className="text-[8px] font-semibold text-emerald-600 dark:text-emerald-400">PWA • Mainnet/Base</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full app-surface flex items-center justify-center shadow-xs">
            <Menu className="w-4 h-4 app-text" />
          </div>
        </div>

        {/* Main Content Area based on Step */}
        <div className="flex-1 overflow-y-auto no-scrollbar pb-18 px-1">
          {/* STEP 1: HOME OVERVIEW */}
          {activeTab === "home" && (
            <>
              {/* Balance Hero */}
              <div className="px-5 py-3 flex flex-col items-center">
                <p className="app-muted text-[11px] font-semibold uppercase tracking-wider mb-1">
                  Family Treasury
                </p>
                <div className="flex items-start space-x-1.5">
                  <span className="text-2xl font-medium app-muted mt-2">$</span>
                  <span
                    className={`text-[2.6rem] font-black tracking-tight app-text transition-all duration-500 ${
                      stepIndex === 0 ? "text-emerald-500 scale-102" : ""
                    }`}
                  >
                    1,470<span className="app-muted text-3xl font-semibold">.50</span>
                  </span>
                </div>
                <div className="mt-2 flex items-center space-x-2 app-surface px-3 py-1 rounded-full border border-black/5 dark:border-white/5 shadow-xs">
                  <EthereumIcon className="w-3.5 h-3.5 app-muted" />
                  <span className="text-xs font-semibold app-text">0.45 ETH</span>
                  <span className="text-xs font-bold text-emerald-500 ml-1 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-0.5" /> +4.2%
                  </span>
                </div>
              </div>

              {/* Quick Actions (Demonstration Icons) */}
              <div className="px-4 grid grid-cols-4 gap-2.5 my-3">
                {[
                  { icon: Send, label: "Send" },
                  { icon: Download, label: "Request" },
                  { icon: Users, label: "Manage" },
                  { icon: RefreshCw, label: "Swap" },
                ].map((action, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center space-y-1 group"
                  >
                    <div className="w-11 h-11 rounded-2xl app-surface flex items-center justify-center shadow-sm border border-black/5 dark:border-white/5">
                      <action.icon className="w-4 h-4 app-text" />
                    </div>
                    <span className="text-[10px] font-semibold app-muted">
                      {action.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Family Nodes */}
              <div className="pl-4 mb-4">
                <div className="flex justify-between items-center pr-4 mb-2">
                  <h3 className="text-xs font-bold app-text uppercase tracking-wider">Family Nodes</h3>
                  <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                    3 connected
                  </span>
                </div>
                <div className="flex space-x-3 overflow-x-auto no-scrollbar pr-4 pb-1">
                  {/* Node 1: Alex */}
                  <div className="min-w-[145px] app-surface rounded-2xl p-3 shadow-sm flex flex-col relative overflow-hidden ring-2 ring-emerald-500">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center font-bold text-xs">
                        AS
                      </div>
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-sm bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-xs font-bold app-text truncate w-full mb-0.5">alex.smithfam</p>
                    <p className="text-[10px] app-muted mb-1.5 font-medium">Allowance: $50/wk</p>

                    <div className="w-full bg-black/5 dark:bg-white/10 rounded-full h-1.5 mb-1 overflow-hidden">
                      <div
                        className="bg-emerald-500 h-1.5 rounded-full"
                        style={{
                          width: mounted ? "65%" : "0%",
                          transition: "width 1s ease-out",
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[8px] app-muted font-medium">
                      <span>$32.50 spent</span>
                      <span>$17.50 left</span>
                    </div>
                  </div>

                  {/* Node 2: Mom */}
                  <div className="min-w-[145px] app-surface rounded-2xl p-3 shadow-sm flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold text-xs">
                        MS
                      </div>
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-sm bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        GUARDIAN
                      </span>
                    </div>
                    <p className="text-xs font-bold app-text truncate w-full mb-0.5">mom.smithfam</p>
                    <p className="text-[10px] app-muted mb-1.5 font-medium">Co-signer (2/2)</p>
                    <div className="w-full bg-black/5 dark:bg-white/10 rounded-full h-1.5 mb-1 overflow-hidden">
                      <div className="bg-blue-500 h-1.5 rounded-full w-full"></div>
                    </div>
                    <div className="flex justify-between text-[8px] app-muted font-medium">
                      <span>Full Access</span>
                      <span>World ID Guard</span>
                    </div>
                  </div>

                  {/* Node 3: Vault */}
                  <div className="min-w-[145px] app-surface rounded-2xl p-3 shadow-sm flex flex-col relative overflow-hidden opacity-80">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 flex items-center justify-center font-bold text-xs">
                        <Lock size={12} />
                      </div>
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-sm bg-amber-500/10 text-amber-600 dark:text-amber-400">
                        TIMELOCKED
                      </span>
                    </div>
                    <p className="text-xs font-bold app-text truncate w-full mb-0.5">vault.smithfam</p>
                    <p className="text-[10px] app-muted mb-1.5 font-medium">College Savings</p>
                    <div className="w-full bg-black/5 dark:bg-white/10 rounded-full h-1.5 mb-1 overflow-hidden">
                      <div className="bg-amber-500 h-1.5 rounded-full w-[85%]"></div>
                    </div>
                    <div className="flex justify-between text-[8px] app-muted font-medium">
                      <span>$12,400 locked</span>
                      <span>180 days</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Dropped Inflow Notification */}
              <div className="px-4 mb-2">
                <div className="app-surface p-2.5 rounded-xl flex items-center justify-between border border-emerald-500/30 bg-emerald-500/5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                      <Send className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold app-text">Allowance Dropped</p>
                      <p className="text-[9px] app-muted">+$50.00 USDC to alex</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    Gasless (Base)
                  </span>
                </div>
              </div>
            </>
          )}

          {/* STEP 2 & 3: GASLESS SEND & WORLD ID CHECK */}
          {activeTab === "send" && (
            <div className="p-4 space-y-3 animate-count-up">
              <h3 className="text-sm font-bold app-text text-left">Instant Gasless Send (PWA)</h3>
              <div className="app-surface p-4 rounded-2xl border border-black/5 dark:border-white/5 space-y-3 text-left">
                <label className="text-[10px] font-bold app-muted uppercase">Recipient Subname</label>
                <div className="flex items-center bg-black/5 dark:bg-white/5 p-2.5 rounded-xl">
                  <input
                    type="text"
                    readOnly
                    value="alex.smithfam.eth"
                    className="bg-transparent text-xs font-semibold app-text w-full outline-none"
                  />
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                </div>
                <label className="text-[10px] font-bold app-muted uppercase">Amount (USDC)</label>
                <div className="text-2xl font-black app-text">$25.00</div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center space-x-1">
                  <Zap className="w-3 h-3" />
                  <span>Network fee: $0.00 (Sponsored by Paymaster)</span>
                </div>
                
                {/* Step button highlight */}
                <div className="w-full py-3 app-accent-bg rounded-xl font-bold text-xs mt-2 flex items-center justify-center space-x-2 shadow-md">
                  <WorldIdIcon className="w-4 h-4" />
                  <span>Authorizing with World ID Selfie Check...</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: ONCHAIN ACTIVITY */}
          {activeTab === "activity" && (
            <div className="p-4 space-y-3 animate-count-up text-left">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold app-text">Onchain History (Base L2)</h3>
                <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  Live Finality
                </span>
              </div>
              <div className="app-surface p-3 rounded-2xl text-xs space-y-2.5 border border-black/5 dark:border-white/5">
                <div className="flex justify-between items-center pb-2 border-b border-black/5 dark:border-white/5">
                  <div>
                    <p className="font-bold app-text">Sent to alex.smithfam</p>
                    <p className="text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center space-x-1">
                      <WorldIdIcon className="w-2.5 h-2.5" />
                      <span>World ID Selfie Check • Verified</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold app-text">-$25.00 USDC</p>
                    <p className="text-[9px] app-muted">0.00 Gas</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-black/5 dark:border-white/5">
                  <div>
                    <p className="font-bold app-text">Weekly Auto-Allowance</p>
                    <p className="text-[9px] app-muted">Smart Contract Relay</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-emerald-600 dark:text-emerald-400">+$50.00 USDC</p>
                    <p className="text-[9px] app-muted">Completed</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold app-text">Uniswap V3 Swap</p>
                    <p className="text-[9px] app-muted">0.08 ETH for 250 USDC</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-emerald-600 dark:text-emerald-400">+0.15 ETH</p>
                    <p className="text-[9px] app-muted">Base L2</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Nav Bar (Active tab tracks PWA flow loop, non-clickable) */}
        <div className="absolute bottom-0 w-full h-15 app-surface border-t border-black/5 dark:border-white/5 rounded-b-[2.5rem] flex justify-around items-center px-4 py-1.5 z-20 shadow-lg">
          <div
            className={`flex flex-col items-center space-y-0.5 transition-all ${
              activeTab === "home" ? "app-accent font-bold scale-105" : "app-muted opacity-60"
            }`}
          >
            <div className="p-0.5">
              <Shield className="w-4 h-4" />
            </div>
            <span className="text-[9px]">Home</span>
          </div>
          <div
            className={`flex flex-col items-center space-y-0.5 transition-all ${
              activeTab === "send" ? "app-accent font-bold scale-105" : "app-muted opacity-60"
            }`}
          >
            <div className="p-0.5">
              <Send className="w-4 h-4" />
            </div>
            <span className="text-[9px]">Send</span>
          </div>
          <div
            className={`flex flex-col items-center space-y-0.5 transition-all ${
              activeTab === "manage" ? "app-accent font-bold scale-105" : "app-muted opacity-60"
            }`}
          >
            <div className="p-0.5">
              <Users className="w-4 h-4" />
            </div>
            <span className="text-[9px]">Manage</span>
          </div>
          <div
            className={`flex flex-col items-center space-y-0.5 transition-all ${
              activeTab === "activity" ? "app-accent font-bold scale-105" : "app-muted opacity-60"
            }`}
          >
            <div className="p-0.5">
              <RefreshCw className="w-4 h-4" />
            </div>
            <span className="text-[9px]">Activity</span>
          </div>
        </div>
      </div>
    </div>
  );
}

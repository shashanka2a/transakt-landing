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
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  Fingerprint,
  Check,
  Zap,
  ArrowRight,
  Clock
} from "lucide-react";
import { TxLogo, EthereumIcon, UniswapIcon } from "./Icons";

interface MockPhoneProps {
  isDark?: boolean;
}

export function MockPhone({ isDark = false }: MockPhoneProps) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"home" | "send" | "manage" | "activity">("home");
  const [selectedNode, setSelectedNode] = useState<string | null>("alex");
  
  // Dynamic action animation cycle state
  const [animStep, setAnimStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [balance, setBalance] = useState("1,420.50");
  const [isBalanceGlowing, setIsBalanceGlowing] = useState(false);
  const [showFaceIdHUD, setShowFaceIdHUD] = useState(false);
  const [liveNotification, setLiveNotification] = useState<{
    title: string;
    sub: string;
    type: "allowance" | "passkey" | "tx";
  } | null>({
    title: "Allowance Received",
    sub: "+$50.00 USDC to alex.smithfam",
    type: "allowance",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Automated action loop when not manually interacting
  useEffect(() => {
    if (!mounted || isPaused) return;

    const interval = setInterval(() => {
      setAnimStep((prev) => {
        const next = (prev + 1) % 3;

        if (next === 0) {
          // Action 0: Allowance & Balance bump
          setBalance("1,470.50");
          setIsBalanceGlowing(true);
          setShowFaceIdHUD(false);
          setLiveNotification({
            title: "Allowance Dispatched",
            sub: "+$50.00 USDC auto-credited (alex.smithfam)",
            type: "allowance",
          });
          setTimeout(() => setIsBalanceGlowing(false), 1800);
        } else if (next === 1) {
          // Action 1: Biometric FaceID Passkey Scan
          setShowFaceIdHUD(true);
          setLiveNotification({
            title: "Passkey Biometrics Verified",
            sub: "Hardware Enclave Signed • $0.00 Gas",
            type: "passkey",
          });
          setTimeout(() => {
            setShowFaceIdHUD(false);
          }, 2400);
        } else if (next === 2) {
          // Action 2: Transaction Relay
          setShowFaceIdHUD(false);
          setLiveNotification({
            title: "Batched Transaction Relayed",
            sub: "Base L2 • Instant Finality",
            type: "tx",
          });
          setBalance("1,420.50");
        }

        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [mounted, isPaused]);

  return (
    <div
      className="relative w-full max-w-[340px] sm:max-w-[380px] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Floating Status HUD Pill 1: Top-Right */}
      <div className="absolute -top-6 -right-4 sm:-right-8 z-30 animate-float pointer-events-none hidden xs:flex items-center space-x-2 px-3.5 py-1.5 rounded-full app-surface border border-black/10 dark:border-white/10 shadow-lg backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] font-bold app-text tracking-tight">Base L2 • Gas Sponsored</span>
      </div>

      {/* Floating Status HUD Pill 2: Bottom-Left */}
      <div className="absolute -bottom-6 -left-4 sm:-left-8 z-30 animate-float-delayed pointer-events-none hidden xs:flex items-center space-x-2 px-3.5 py-1.5 rounded-full app-surface border border-black/10 dark:border-white/10 shadow-lg backdrop-blur-md">
        <Fingerprint className="w-3.5 h-3.5 text-emerald-500" />
        <span className="text-[11px] font-bold app-text tracking-tight">Passkey Biometrics Active</span>
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
        {/* Dynamic Island / Active Notification Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-40 transition-all duration-300">
          <div className="h-6 px-3 bg-black text-white rounded-full flex items-center justify-between space-x-2 shadow-md">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-[9px] font-bold tracking-tight text-neutral-200">
              {animStep === 0 && "⚡ Auto-Allowance"}
              {animStep === 1 && "🛡️ FaceID Verified"}
              {animStep === 2 && "🟢 Paymaster L2"}
            </span>
          </div>
        </div>

        {/* Live Notification Dropdown Banner */}
        {liveNotification && (
          <div
            className={`absolute top-10 inset-x-3 z-30 app-surface rounded-2xl p-2.5 border border-black/10 dark:border-white/10 shadow-xl transition-all duration-500 transform ${
              mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  {liveNotification.type === "allowance" && <TrendingUp className="w-3.5 h-3.5" />}
                  {liveNotification.type === "passkey" && <Fingerprint className="w-3.5 h-3.5" />}
                  {liveNotification.type === "tx" && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-[10px] font-bold app-text truncate leading-tight">
                    {liveNotification.title}
                  </p>
                  <p className="text-[9px] app-muted truncate leading-tight">
                    {liveNotification.sub}
                  </p>
                </div>
              </div>
              <span className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 app-muted shrink-0">
                NOW
              </span>
            </div>
          </div>
        )}

        {/* Status Bar */}
        <div className="absolute top-0 w-full h-8 flex justify-between items-center px-6 z-20 text-[11px] font-medium app-text opacity-75 pt-3">
          <span>9:41</span>
          <div className="flex space-x-1.5 items-center">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
            </svg>
          </div>
        </div>

        {/* Biometric Passkey FaceID Scan Overlay Animation */}
        {showFaceIdHUD && (
          <div className="absolute inset-0 z-50 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center animate-count-up">
            <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
              <div className="absolute inset-0 rounded-3xl border-2 border-emerald-400 animate-biometric-pulse"></div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Fingerprint className="w-8 h-8" />
              </div>
            </div>
            <h4 className="text-white font-extrabold text-sm tracking-tight mb-1">
              Biometric Authorization
            </h4>
            <p className="text-neutral-300 text-xs font-medium">
              Signed with TouchID / FaceID
            </p>
            <div className="mt-3 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Zero Seed Phrase Needed</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="px-5 pt-20 pb-2 flex justify-between items-center z-10">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg app-accent-bg flex items-center justify-center shadow-xs">
              <TxLogo className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm tracking-tight app-text">smithfam.eth</span>
          </div>
          <div className="w-8 h-8 rounded-full app-surface flex items-center justify-center cursor-pointer shadow-xs hover:scale-105 transition-transform">
            <Menu className="w-4 h-4 app-text" />
          </div>
        </div>

        {/* Main Content Area based on activeTab */}
        <div className="flex-1 overflow-y-auto no-scrollbar pb-20 px-1">
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
                      isBalanceGlowing
                        ? "text-emerald-500 scale-105"
                        : mounted
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                  >
                    {balance.split(".")[0]}
                    <span className="app-muted text-3xl font-semibold">
                      .{balance.split(".")[1]}
                    </span>
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

              {/* Quick Actions */}
              <div className="px-4 grid grid-cols-4 gap-2.5 my-3">
                {[
                  { icon: Send, label: "Send", tab: "send" as const },
                  { icon: Download, label: "Request", tab: "send" as const },
                  { icon: Users, label: "Manage", tab: "manage" as const },
                  { icon: RefreshCw, label: "Swap", tab: "activity" as const },
                ].map((action, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(action.tab)}
                    className="flex flex-col items-center justify-center space-y-1 group transition-all"
                  >
                    <div className="w-11 h-11 rounded-2xl app-surface flex items-center justify-center shadow-sm group-hover:scale-110 active:scale-95 transition-transform border border-black/5 dark:border-white/5">
                      <action.icon className="w-4 h-4 app-text group-hover:app-accent transition-colors" />
                    </div>
                    <span className="text-[10px] font-semibold app-muted group-hover:app-text transition-colors">
                      {action.label}
                    </span>
                  </button>
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
                  <div
                    onClick={() => setSelectedNode(selectedNode === "alex" ? null : "alex")}
                    className={`min-w-[145px] app-surface rounded-2xl p-3 shadow-sm flex flex-col relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md ${
                      selectedNode === "alex" ? "ring-2 ring-emerald-500" : ""
                    }`}
                  >
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
                          transition: "width 1s ease-out 0.5s",
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[8px] app-muted font-medium">
                      <span>$32.50 spent</span>
                      <span>$17.50 left</span>
                    </div>
                  </div>

                  {/* Node 2: Mom */}
                  <div
                    onClick={() => setSelectedNode(selectedNode === "mom" ? null : "mom")}
                    className={`min-w-[145px] app-surface rounded-2xl p-3 shadow-sm flex flex-col relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md ${
                      selectedNode === "mom" ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
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
                      <span>2FA Biometric</span>
                    </div>
                  </div>

                  {/* Node 3: Vault */}
                  <div
                    onClick={() => setSelectedNode(selectedNode === "vault" ? null : "vault")}
                    className={`min-w-[145px] app-surface rounded-2xl p-3 shadow-sm flex flex-col relative overflow-hidden cursor-pointer transition-all duration-300 opacity-80 hover:opacity-100 ${
                      selectedNode === "vault" ? "ring-2 ring-amber-500" : ""
                    }`}
                  >
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
                      <div
                        className="bg-amber-500 h-1.5 rounded-full"
                        style={{
                          width: mounted ? "85%" : "0%",
                          transition: "width 1s ease-out 0.5s",
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[8px] app-muted font-medium">
                      <span>$12,400 locked</span>
                      <span>180 days</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="px-4 mb-2">
                <div className="flex justify-between items-center mb-2.5">
                  <h3 className="text-xs font-bold app-text uppercase tracking-wider">Recent Activity</h3>
                  <button
                    onClick={() => setActiveTab("activity")}
                    className="text-[10px] font-semibold app-accent hover:underline"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-2">
                  {/* Tx 1 */}
                  <div className="app-surface p-2 rounded-xl flex items-center justify-between border border-black/5 dark:border-white/5">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center relative">
                        <Send className="w-3.5 h-3.5" />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white dark:bg-black rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800">
                          <Check className="w-2 h-2 text-emerald-500 stroke-[3]" />
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold app-text">Allowance to alex</p>
                        <p className="text-[9px] app-muted">Today, 10:24 AM</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">+$50.00 USDC</p>
                      <p className="text-[9px] app-muted">Gasless Relay</p>
                    </div>
                  </div>

                  {/* Tx 2 */}
                  <div className="app-surface p-2 rounded-xl flex items-center justify-between border border-black/5 dark:border-white/5">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-xl bg-rose-100 dark:bg-rose-950/40 flex items-center justify-center relative">
                        <UniswapIcon className="w-3.5 h-3.5" />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white dark:bg-black rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800">
                          <RefreshCw className="w-2 h-2 text-gray-500" />
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold app-text">Swap USDC for ETH</p>
                        <p className="text-[9px] app-muted">Yesterday, 4:30 PM</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold app-text">+0.15 ETH</p>
                      <p className="text-[9px] app-muted">Uniswap V3</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "send" && (
            <div className="p-4 space-y-3">
              <h3 className="text-sm font-bold app-text">Instant Gasless Send</h3>
              <div className="app-surface p-4 rounded-2xl border border-black/5 dark:border-white/5 space-y-3">
                <label className="text-[10px] font-bold app-muted uppercase">Recipient ENS Subname</label>
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
                <button
                  onClick={() => {
                    setShowFaceIdHUD(true);
                    setTimeout(() => {
                      setShowFaceIdHUD(false);
                      setActiveTab("home");
                    }, 1800);
                  }}
                  className="w-full py-3 app-accent-bg rounded-xl font-bold text-xs mt-2 flex items-center justify-center space-x-1.5 shadow-md active:scale-98 transition-all"
                >
                  <Fingerprint className="w-4 h-4" />
                  <span>Sign with FaceID Passkey</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === "manage" && (
            <div className="p-4 space-y-3">
              <h3 className="text-sm font-bold app-text">Family Permissions</h3>
              <div className="app-surface p-3 rounded-2xl border border-black/5 dark:border-white/5 space-y-2.5">
                <div className="flex justify-between items-center text-xs font-semibold app-text">
                  <span>Daily Spend Ceiling</span>
                  <span className="app-accent font-bold">$100 / day</span>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold app-text">
                  <span>DeFi Protocol Access</span>
                  <span className="text-emerald-500 font-bold">Enabled</span>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold app-text">
                  <span>Social Guardian Quorum</span>
                  <span className="font-bold">2 of 3</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "activity" && (
            <div className="p-4 space-y-3">
              <h3 className="text-sm font-bold app-text">Onchain History</h3>
              <div className="app-surface p-3 rounded-xl text-xs space-y-2.5 border border-black/5 dark:border-white/5">
                <div className="flex justify-between font-semibold app-text">
                  <span>Weekly Allowance Drop</span>
                  <span className="text-emerald-500 font-bold">+$50.00 USDC</span>
                </div>
                <div className="flex justify-between font-semibold app-text">
                  <span>Uniswap V3 Swap</span>
                  <span className="text-emerald-500 font-bold">+0.15 ETH</span>
                </div>
                <div className="flex justify-between font-semibold app-text">
                  <span>Subname Minted (alex)</span>
                  <span className="text-blue-500 font-bold">Gasless L2</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Nav Bar */}
        <div className="absolute bottom-0 w-full h-16 app-surface border-t border-black/5 dark:border-white/5 rounded-b-[2.5rem] flex justify-around items-center px-4 py-2 z-20 shadow-lg">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center space-y-0.5 transition-all ${
              activeTab === "home" ? "app-accent font-bold scale-105" : "app-muted"
            }`}
          >
            <div className="p-0.5">
              <Shield className="w-4 h-4" />
            </div>
            <span className="text-[9px]">Home</span>
          </button>
          <button
            onClick={() => setActiveTab("send")}
            className={`flex flex-col items-center space-y-0.5 transition-all ${
              activeTab === "send" ? "app-accent font-bold scale-105" : "app-muted"
            }`}
          >
            <div className="p-0.5">
              <Send className="w-4 h-4" />
            </div>
            <span className="text-[9px]">Send</span>
          </button>
          <button
            onClick={() => setActiveTab("manage")}
            className={`flex flex-col items-center space-y-0.5 transition-all ${
              activeTab === "manage" ? "app-accent font-bold scale-105" : "app-muted"
            }`}
          >
            <div className="p-0.5">
              <Users className="w-4 h-4" />
            </div>
            <span className="text-[9px]">Manage</span>
          </button>
          <button
            onClick={() => setActiveTab("activity")}
            className={`flex flex-col items-center space-y-0.5 transition-all ${
              activeTab === "activity" ? "app-accent font-bold scale-105" : "app-muted"
            }`}
          >
            <div className="p-0.5">
              <RefreshCw className="w-4 h-4" />
            </div>
            <span className="text-[9px]">Activity</span>
          </button>
        </div>
      </div>
    </div>
  );
}

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
  Sparkles
} from "lucide-react";
import { TxLogo, EthereumIcon, UniswapIcon } from "./Icons";

interface MockPhoneProps {
  isDark?: boolean;
}

export function MockPhone({ isDark = false }: MockPhoneProps) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"home" | "send" | "manage" | "activity">("home");
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`relative w-full max-w-[340px] sm:max-w-[380px] aspect-[1/2.05] rounded-[2.75rem] border-[10px] overflow-hidden shadow-2xl transition-all duration-500 select-none
      ${
        isDark
          ? "border-neutral-800 bg-[#18140F] shadow-[0_25px_60px_rgba(0,255,135,0.12)]"
          : "border-white bg-[#F0EBE0] shadow-[0_25px_60px_rgba(26,92,58,0.12)]"
      }
      flex flex-col font-sans`}
    >
      {/* Dynamic Island / Speaker notch */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 mr-2"></div>
        <div className="w-2 h-2 rounded-full bg-neutral-800/80"></div>
      </div>

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

      {/* Header */}
      <div className="px-5 pt-12 pb-3 flex justify-between items-center z-10">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg app-accent-bg flex items-center justify-center">
            <TxLogo className="w-4 h-4" />
          </div>
          <span className="font-bold text-sm tracking-tight app-text">smithfam.eth</span>
        </div>
        <div className="w-8 h-8 rounded-full app-surface flex items-center justify-center cursor-pointer shadow-xs hover:scale-105 transition-transform">
          <Menu className="w-4 h-4 app-text" />
        </div>
      </div>

      {/* Main Content Area based on activeTab */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24 px-1">
        {activeTab === "home" && (
          <>
            {/* Balance Hero */}
            <div className="px-5 py-4 flex flex-col items-center">
              <p className="app-muted text-[11px] font-semibold uppercase tracking-wider mb-1">
                Family Treasury
              </p>
              <div className="flex items-start space-x-1.5">
                <span className="text-2xl font-medium app-muted mt-2">$</span>
                <span
                  className={`text-[2.75rem] font-black tracking-tight app-text transition-all duration-700 ${
                    mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  1,420<span className="app-muted text-3xl font-semibold">.50</span>
                </span>
              </div>
              <div className="mt-2.5 flex items-center space-x-2 app-surface px-3 py-1.5 rounded-full border border-black/5 dark:border-white/5 shadow-xs">
                <EthereumIcon className="w-3.5 h-3.5 app-muted" />
                <span className="text-xs font-semibold app-text">0.45 ETH</span>
                <span className="text-xs font-bold text-emerald-500 ml-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-0.5" /> +4.2%
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="px-4 grid grid-cols-4 gap-2.5 my-4">
              {[
                { icon: Send, label: "Send", tab: "send" as const },
                { icon: Download, label: "Request", tab: "send" as const },
                { icon: Users, label: "Manage", tab: "manage" as const },
                { icon: RefreshCw, label: "Swap", tab: "activity" as const },
              ].map((action, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(action.tab)}
                  className={`flex flex-col items-center justify-center space-y-1.5 group transition-all duration-500 delay-${
                    i * 100
                  } ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <div className="w-12 h-12 rounded-2xl app-surface flex items-center justify-center shadow-sm group-hover:scale-110 active:scale-95 transition-transform border border-black/5 dark:border-white/5">
                    <action.icon className="w-5 h-5 app-text group-hover:app-accent transition-colors" />
                  </div>
                  <span className="text-[10px] font-semibold app-muted group-hover:app-text transition-colors">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Family Nodes */}
            <div className="pl-4 mb-6">
              <div className="flex justify-between items-center pr-4 mb-2.5">
                <h3 className="text-xs font-bold app-text uppercase tracking-wider">Family Nodes</h3>
                <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">3 connected</span>
              </div>
              <div className="flex space-x-3 overflow-x-auto no-scrollbar pr-4 pb-2">
                {/* Node 1: Alex */}
                <div
                  onClick={() => setSelectedNode(selectedNode === "alex" ? null : "alex")}
                  className={`min-w-[145px] app-surface rounded-2xl p-3.5 shadow-sm flex flex-col relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md ${
                    selectedNode === "alex" ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                  <div className="flex justify-between items-start mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold text-xs">
                      AS
                    </div>
                    <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-sm bg-green-500/10 text-green-600 dark:text-green-400">
                      ACTIVE
                    </span>
                  </div>
                  <p className="text-xs font-bold app-text truncate w-full mb-0.5">alex.smithfam</p>
                  <p className="text-[10px] app-muted mb-2 font-medium">Allowance: $50/wk</p>

                  <div className="w-full bg-black/5 dark:bg-white/10 rounded-full h-1.5 mb-1 overflow-hidden">
                    <div
                      className="bg-blue-500 h-1.5 rounded-full"
                      style={{
                        width: mounted ? "45%" : "0%",
                        transition: "width 1s ease-out 0.5s",
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[8px] app-muted font-medium">
                    <span>$22.50 spent</span>
                    <span>$27.50 left</span>
                  </div>
                </div>

                {/* Node 2: Mom */}
                <div
                  onClick={() => setSelectedNode(selectedNode === "mom" ? null : "mom")}
                  className={`min-w-[145px] app-surface rounded-2xl p-3.5 shadow-sm flex flex-col relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md ${
                    selectedNode === "mom" ? "ring-2 ring-purple-500" : ""
                  }`}
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-500"></div>
                  <div className="flex justify-between items-start mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 flex items-center justify-center font-bold text-xs">
                      MS
                    </div>
                    <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-sm bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      GUARDIAN
                    </span>
                  </div>
                  <p className="text-xs font-bold app-text truncate w-full mb-0.5">mom.smithfam</p>
                  <p className="text-[10px] app-muted mb-2 font-medium">Co-signer (2/2)</p>
                  <div className="w-full bg-black/5 dark:bg-white/10 rounded-full h-1.5 mb-1 overflow-hidden">
                    <div className="bg-purple-500 h-1.5 rounded-full w-full"></div>
                  </div>
                  <div className="flex justify-between text-[8px] app-muted font-medium">
                    <span>Full Access</span>
                    <span>2FA Biometric</span>
                  </div>
                </div>

                {/* Node 3: Vault */}
                <div
                  onClick={() => setSelectedNode(selectedNode === "vault" ? null : "vault")}
                  className={`min-w-[145px] app-surface rounded-2xl p-3.5 shadow-sm flex flex-col relative overflow-hidden cursor-pointer transition-all duration-300 opacity-80 hover:opacity-100 ${
                    selectedNode === "vault" ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500"></div>
                  <div className="flex justify-between items-start mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 flex items-center justify-center font-bold text-xs">
                      <Lock size={12} />
                    </div>
                    <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-sm bg-orange-500/10 text-orange-600 dark:text-orange-400">
                      TIMELOCKED
                    </span>
                  </div>
                  <p className="text-xs font-bold app-text truncate w-full mb-0.5">vault.smithfam</p>
                  <p className="text-[10px] app-muted mb-2 font-medium">College Savings</p>
                  <div className="w-full bg-black/5 dark:bg-white/10 rounded-full h-1.5 mb-1 overflow-hidden">
                    <div
                      className="bg-orange-500 h-1.5 rounded-full"
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
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xs font-bold app-text uppercase tracking-wider">Recent Activity</h3>
                <button
                  onClick={() => setActiveTab("activity")}
                  className="text-[10px] font-semibold app-accent hover:underline"
                >
                  View All
                </button>
              </div>

              <div className="space-y-2.5">
                {/* Tx 1 */}
                <div className="app-surface p-2.5 rounded-xl flex items-center justify-between border border-black/5 dark:border-white/5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-950/40 flex items-center justify-center relative">
                      <UniswapIcon className="w-4 h-4" />
                      <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-white dark:bg-black rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800">
                        <RefreshCw className="w-2 h-2 text-gray-500" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold app-text">Swap USDC for ETH</p>
                      <p className="text-[9px] app-muted">Today, 10:24 AM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">+0.15 ETH</p>
                    <p className="text-[9px] app-muted">Uniswap V3</p>
                  </div>
                </div>

                {/* Tx 2 */}
                <div className="app-surface p-2.5 rounded-xl flex items-center justify-between border border-black/5 dark:border-white/5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center relative">
                      AS
                      <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-white dark:bg-black rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800">
                        <Send className="w-2 h-2 text-gray-500" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold app-text">Sent to alex</p>
                      <p className="text-[9px] app-muted">Yesterday, 4:30 PM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold app-text">-$50.00</p>
                    <p className="text-[9px] app-muted">Gasless Relay</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "send" && (
          <div className="p-4 space-y-4">
            <h3 className="text-sm font-bold app-text">Instant Gasless Send</h3>
            <div className="app-surface p-4 rounded-2xl border border-black/5 dark:border-white/5 space-y-3">
              <label className="text-[10px] font-bold app-muted uppercase">Recipient ENS</label>
              <div className="flex items-center bg-black/5 dark:bg-white/5 p-2.5 rounded-xl">
                <input
                  type="text"
                  readOnly
                  value="alex.smithfam.eth"
                  className="bg-transparent text-xs font-semibold app-text w-full outline-none"
                />
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <label className="text-[10px] font-bold app-muted uppercase">Amount (USDC)</label>
              <div className="text-2xl font-black app-text">$25.00</div>
              <button
                onClick={() => setActiveTab("home")}
                className="w-full py-2.5 app-accent-bg rounded-xl font-bold text-xs mt-2"
              >
                Confirm Biometric Passkey
              </button>
            </div>
          </div>
        )}

        {activeTab === "manage" && (
          <div className="p-4 space-y-3">
            <h3 className="text-sm font-bold app-text">Family Permissions</h3>
            <div className="app-surface p-3 rounded-2xl border border-black/5 dark:border-white/5 space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold app-text">
                <span>Daily Spend Threshold</span>
                <span className="app-accent">$100/day</span>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold app-text">
                <span>World ID ZK Auth</span>
                <span className="text-emerald-500">Enabled</span>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold app-text">
                <span>Guardian Quorum</span>
                <span>2 of 3</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "activity" && (
          <div className="p-4 space-y-3">
            <h3 className="text-sm font-bold app-text">Onchain History</h3>
            <div className="app-surface p-3 rounded-xl text-xs space-y-2 border border-black/5 dark:border-white/5">
              <div className="flex justify-between font-semibold app-text">
                <span>Uniswap V3 Swap</span>
                <span className="text-emerald-500">+0.15 ETH</span>
              </div>
              <div className="flex justify-between font-semibold app-text">
                <span>Weekly Auto-Allowance</span>
                <span>-$50.00</span>
              </div>
              <div className="flex justify-between font-semibold app-text">
                <span>Subname Claimed (alex)</span>
                <span className="text-blue-500">Gasless (L2)</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Nav Bar */}
      <div className="absolute bottom-0 w-full h-18 app-surface border-t border-black/5 dark:border-white/5 rounded-b-[2.5rem] flex justify-around items-center px-4 py-2 z-20 shadow-lg">
        <button
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center space-y-0.5 transition-all ${
            activeTab === "home" ? "app-accent font-bold scale-105" : "app-muted"
          }`}
        >
          <div className="p-1">
            <Shield className="w-5 h-5" />
          </div>
          <span className="text-[9px]">Home</span>
        </button>
        <button
          onClick={() => setActiveTab("send")}
          className={`flex flex-col items-center space-y-0.5 transition-all ${
            activeTab === "send" ? "app-accent font-bold scale-105" : "app-muted"
          }`}
        >
          <div className="p-1">
            <Send className="w-5 h-5" />
          </div>
          <span className="text-[9px]">Send</span>
        </button>
        <button
          onClick={() => setActiveTab("manage")}
          className={`flex flex-col items-center space-y-0.5 transition-all ${
            activeTab === "manage" ? "app-accent font-bold scale-105" : "app-muted"
          }`}
        >
          <div className="p-1">
            <Users className="w-5 h-5" />
          </div>
          <span className="text-[9px]">Manage</span>
        </button>
        <button
          onClick={() => setActiveTab("activity")}
          className={`flex flex-col items-center space-y-0.5 transition-all ${
            activeTab === "activity" ? "app-accent font-bold scale-105" : "app-muted"
          }`}
        >
          <div className="p-1">
            <RefreshCw className="w-5 h-5" />
          </div>
          <span className="text-[9px]">Activity</span>
        </button>
      </div>
    </div>
  );
}

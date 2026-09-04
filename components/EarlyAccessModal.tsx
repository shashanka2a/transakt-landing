"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, Sparkles, Shield, Mail } from "lucide-react";
import { TxLogo } from "./Icons";

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [email, setEmail] = useState("");
  const [ensName, setEnsName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail("");
    setEnsName("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-count-up">
      <div className="relative w-full max-w-lg app-surface rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 app-muted hover:app-text transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl app-accent-bg flex items-center justify-center shadow-sm">
                <TxLogo className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold app-text">Get Early Access</h3>
                <p className="text-xs app-muted">Join the Transakt private beta cohort</p>
              </div>
            </div>

            <p className="text-sm app-muted mb-6">
              Be among the first families to claim your root ENS hub and experience gasless, seedless Web3 treasury management.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold app-muted uppercase tracking-wider block mb-1.5">
                  Email Address *
                </label>
                <div className="flex items-center app-surface rounded-xl p-3 border border-black/10 dark:border-white/10 focus-within:ring-2 ring-emerald-500">
                  <Mail className="w-4 h-4 app-muted mr-2.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="parent@family.com"
                    className="bg-transparent text-sm font-medium app-text w-full outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold app-muted uppercase tracking-wider block mb-1.5">
                  Desired Family ENS (Optional)
                </label>
                <div className="flex items-center app-surface rounded-xl p-3 border border-black/10 dark:border-white/10 focus-within:ring-2 ring-emerald-500">
                  <input
                    type="text"
                    value={ensName}
                    onChange={(e) => setEnsName(e.target.value)}
                    placeholder="myfamily"
                    className="bg-transparent text-sm font-medium app-text w-full outline-none"
                  />
                  <span className="text-xs font-bold text-neutral-400">.eth</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 app-accent-bg rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-md hover:opacity-90 active:scale-98 transition-all"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Reserve Priority Spot</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[11px] app-muted pt-2">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                <span>Zero spam guarantee. Invite codes dispatched weekly.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold app-text mb-2">You&apos;re on the List!</h3>
            <p className="text-sm app-muted max-w-sm mx-auto mb-6">
              We&apos;ve reserved your priority spot. Look out for an activation link sent to <span className="font-semibold app-text">{email}</span>.
            </p>
            <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 mb-6 inline-block">
              <span className="text-xs font-bold app-muted uppercase tracking-wider block">Queue Position</span>
              <span className="text-2xl font-black app-accent">#418</span>
            </div>
            <div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 app-surface rounded-xl font-bold text-sm app-text border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { ShieldAlert, Key, Cpu, Fingerprint, Lock, Layers } from "lucide-react";

export function SecuritySection() {
  return (
    <section id="security" className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full app-surface border border-black/5 dark:border-white/5 mb-4 text-xs font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
          <span>ZERO-COMPROMISE ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold app-text tracking-tight mb-4">
          Institutional Security. <br className="hidden sm:block" />
          Consumer Simplicity.
        </h2>
        <p className="text-base sm:text-lg app-muted">
          Transakt eliminates traditional single-point-of-failure vulnerabilities through multi-party computation, biometric enclave signing, and decentralized ENS registries.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Security Pillar 1 */}
        <div className="app-surface p-8 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col justify-between hover:shadow-lg transition-all">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
              <Fingerprint className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold app-text mb-3">Hardware Enclave Isolation</h3>
            <p className="text-sm app-muted leading-relaxed">
              Passkey credentials never leave your device&apos;s Secure Enclave or TPM. Transactions are signed locally with biometric authorization, immune to phishing and keyloggers.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 text-xs font-semibold app-accent">
            FIDO2 / WebAuthn Certified
          </div>
        </div>

        {/* Security Pillar 2 */}
        <div className="app-surface p-8 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col justify-between hover:shadow-lg transition-all">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold app-text mb-3">CCIP-Read ENS Resolution</h3>
            <p className="text-sm app-muted leading-relaxed">
              Family subnames are anchored with ERC-3668 CCIP-read gateways. Sub-identities are resolution-compatible across all major Ethereum wallets, DEXes, and Layer 2s.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 text-xs font-semibold text-blue-600 dark:text-blue-400">
            EIP-3668 & ENS Standard
          </div>
        </div>

        {/* Security Pillar 3 */}
        <div className="app-surface p-8 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col justify-between hover:shadow-lg transition-all">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold app-text mb-3">Zero-Knowledge Step-Up</h3>
            <p className="text-sm app-muted leading-relaxed">
              Verify transactions exceeding your safety threshold with World ID Orb proofs. Zero biometric data is stored on-chain or off-chain—only a zk-SNARK proof of humanness.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 text-xs font-semibold text-purple-600 dark:text-purple-400">
            Privacy-Preserving ZK-Proofs
          </div>
        </div>
      </div>
    </section>
  );
}

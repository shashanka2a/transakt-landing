"use client";

import React from "react";
import { TxLogo } from "./Icons";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 pt-16 pb-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {/* Brand Column */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl app-accent-bg flex items-center justify-center">
              <TxLogo className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-xl app-text tracking-tight">Transakt</span>
          </div>
          <p className="text-sm app-muted max-w-xs leading-relaxed">
            The next-generation non-custodial family treasury and ENS identity portal for the decentralized web.
          </p>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>All Systems Operational (Base L2)</span>
          </div>
        </div>

        {/* Product */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider app-text">Product</h4>
          <ul className="space-y-2 text-sm app-muted font-medium">
            <li>
              <a href="#features" className="hover:app-text transition-colors">
                Passkeys
              </a>
            </li>
            <li>
              <a href="#subnames" className="hover:app-text transition-colors">
                ENS Subnames
              </a>
            </li>
            <li>
              <a href="#security" className="hover:app-text transition-colors">
                ZK Step-Up
              </a>
            </li>
            <li>
              <a href="#" className="hover:app-text transition-colors">
                PWA Mobile App
              </a>
            </li>
          </ul>
        </div>

        {/* Developers */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider app-text">Protocol</h4>
          <ul className="space-y-2 text-sm app-muted font-medium">
            <li>
              <a href="#" className="hover:app-text transition-colors flex items-center space-x-1">
                <span>CCIP Gateways</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:app-text transition-colors flex items-center space-x-1">
                <span>ERC-4337 Paymasters</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:app-text transition-colors">
                Smart Contracts
              </a>
            </li>
            <li>
              <a href="#" className="hover:app-text transition-colors">
                Audit Reports
              </a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider app-text">Community</h4>
          <ul className="space-y-2 text-sm app-muted font-medium">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:app-text transition-colors"
              >
                Twitter / X
              </a>
            </li>
            <li>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="hover:app-text transition-colors"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:app-text transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="hover:app-text transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium app-muted">
        <div>© {new Date().getFullYear()} Transakt Protocol. Built with ENS and Account Abstraction.</div>
        <div className="flex space-x-6">
          <a href="#" className="hover:app-text transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:app-text transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:app-text transition-colors">
            Brand Assets
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, ArrowRight, Menu, X, Shield, Sparkles } from "lucide-react";
import { TxLogo } from "./Icons";

interface NavbarProps {
  onOpenEarlyAccess: () => void;
}

export function Navbar({ onOpenEarlyAccess }: NavbarProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav bg-[#F0EBE0]/85 dark:bg-[#18140F]/85 border-b border-black/5 dark:border-white/5 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl app-accent-bg flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
            <TxLogo className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight app-text leading-tight">Transakt</span>
            <span className="text-[10px] font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
              Family ENS PWA
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium app-muted">
          <a href="#features" className="hover:app-text transition-colors">
            Features
          </a>
          <a href="#subnames" className="hover:app-text transition-colors">
            Subnames
          </a>
          <a href="#security" className="hover:app-text transition-colors">
            Security
          </a>
          <a href="#how-it-works" className="hover:app-text transition-colors">
            How It Works
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full app-surface hover:scale-105 active:scale-95 transition-all shadow-sm focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {mounted ? (
              isDark ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-800" />
              )
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={onOpenEarlyAccess}
            className="hidden sm:inline-flex items-center space-x-2 app-accent-bg px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-sm"
          >
            <span>Get Early Access</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl app-surface app-text focus:outline-none"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden app-surface border-b border-black/5 dark:border-white/5 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-medium app-text text-base">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:app-accent transition-colors"
            >
              Features
            </a>
            <a
              href="#subnames"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:app-accent transition-colors"
            >
              Subnames
            </a>
            <a
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:app-accent transition-colors"
            >
              Security
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:app-accent transition-colors"
            >
              How It Works
            </a>
          </div>

          <div className="pt-4 border-t border-black/5 dark:border-white/5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEarlyAccess();
              }}
              className="w-full flex items-center justify-center space-x-2 app-accent-bg py-3 rounded-xl font-bold text-sm shadow-md"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

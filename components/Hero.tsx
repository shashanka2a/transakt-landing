"use client";

import React from "react";
import { Smartphone, BookOpen, CheckCircle2, ShieldCheck } from "lucide-react";
import { MockPhone } from "./MockPhone";
import { useTheme } from "next-themes";

interface HeroProps {
  onOpenEarlyAccess: () => void;
}

export function Hero({ onOpenEarlyAccess }: HeroProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section className="pt-28 sm:pt-36 pb-20 md:pb-28 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
        {/* Left Hero Content */}
        <div className="flex-1 text-center lg:text-left pt-2 lg:pt-0">
          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight app-text leading-[1.08] mb-6">
            Crypto for the <br className="hidden sm:block" />
            <span className="app-accent">Whole Family.</span> <br />
            Finally Simple.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl app-muted max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-normal">
            No seed phrases. Claim your family ENS identity, issue gasless subnames, and authorize transfers securely with World ID Selfie Check.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-3.5 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <button
              onClick={onOpenEarlyAccess}
              className="w-full sm:w-auto px-8 py-4 app-accent-bg rounded-full font-bold text-base sm:text-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center space-x-2.5 shadow-md"
            >
              <Smartphone className="w-5 h-5" />
              <span>Launch App (PWA)</span>
            </button>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 app-surface rounded-full font-bold text-base sm:text-lg app-text hover:bg-black/5 dark:hover:bg-white/5 transition-colors border border-black/5 dark:border-white/5 flex items-center justify-center space-x-2"
            >
              <BookOpen className="w-4 h-4 app-muted" />
              <span>Explore Architecture</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-10 pt-8 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-6 app-muted text-xs sm:text-sm font-semibold">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 app-accent" />
              <span>Zero seed phrases</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 app-accent" />
              <span>ENS Native (L2 Subnames)</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 app-accent" />
              <span>World ID Selfie Check</span>
            </div>
          </div>
        </div>

        {/* Right Dynamic Animated Phone Mockup */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative py-4">
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/15 dark:bg-emerald-400/20 blur-3xl rounded-full pointer-events-none"></div>
          <MockPhone isDark={isDark} />
        </div>
      </div>
    </section>
  );
}

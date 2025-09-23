/* eslint-disable react/no-unescaped-entities */
import { Button } from "./ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { AppFlowIllustration } from "./AppFlowIllustration";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20" />
      
      {/* Floating orbs - reduced and more subtle */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            {/* Pre-launch badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 mb-8">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Launching soon - Early access available
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-gray-900">
                One checkout.
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Every currency.
              </span>
            </h1>

            {/* Value proposition */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              The payment platform built for the future. Accept cards, crypto, and manage bookings 
              <strong className="text-gray-900"> in one beautiful interface.</strong>
            </p>

            {/* Trust indicators - realistic for pre-launch */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-10 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>5-minute setup</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>Enterprise security</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Join Early Access
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-gray-500">
                Be among the first • No commitment required
              </p>
            </div>

            {/* Early adopter benefits */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Early access benefits:</h3>
              <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span>Lifetime 25% discount</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span>Feature input & feedback</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  <span>Custom onboarding</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - App flow illustration */}
          <div className="relative">
            <AppFlowIllustration />
            
            {/* Floating testimonial */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-gray-200 p-4 max-w-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-medium text-sm">AK</span>
                </div>
                <div>
                  <p className="text-sm text-gray-700 mb-1">"Finally, a checkout that doesn't scare customers away!"</p>
                  <p className="text-xs text-gray-500">Alex K., Beta Tester</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
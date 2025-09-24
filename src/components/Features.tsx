/* eslint-disable react/no-unescaped-entities */
import { CreditCard, Zap, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Reveal } from "./ui/Reveal";

const features = [
  {
    icon: CreditCard,
    title: "Accept Everything",
    description: "Cards, crypto (BTC, ETH, USDC), digital wallets, and bank transfers. Your customers pay how they want.",
    benefits: ["50+ payment methods", "Auto currency conversion", "Instant settlements"]
  },
  {
    icon: Zap,
    title: "All-in-One Platform",
    description: "Payments, bookings, subscriptions, and analytics. Stop juggling multiple tools and platforms.",
    benefits: ["Unified dashboard", "Booking calendar", "Subscription billing"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with fraud protection, PCI compliance, and 99.9% uptime guaranteed.",
    benefits: ["PCI DSS Level 1", "Real-time fraud detection", "SOC 2 compliant"]
  }
];

export function Features({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-gray-900">Everything you need.</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nothing you don't.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for modern businesses that want to focus on growth, not payment complexity.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {features.map((feature, index) => (
            <Reveal key={index} className="text-center group" delay={index * 80}>
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                {feature.description}
              </p>
              
              {/* Benefits list */}
              <ul className="space-y-2 text-sm text-gray-500">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Crypto support section - simplified */}
        <Reveal className="text-center bg-white rounded-2xl p-12 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Built-in crypto support
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to accept Bitcoin, Ethereum, stablecoins, and major cryptocurrencies with automatic conversion.
          </p>
          
          {/* Crypto icons */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center">
                <span className="text-white font-bold">₿</span>
              </div>
              <span className="font-medium text-gray-700">Bitcoin</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold">Ξ</span>
              </div>
              <span className="font-medium text-gray-700">Ethereum</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">$</span>
              </div>
              <span className="font-medium text-gray-700">USDC</span>
            </div>
          </div>

          <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
            See planned integrations →
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
/* eslint-disable react/no-unescaped-entities */
import { Utensils, Scissors, Video, Building2 } from "lucide-react";
import { Card } from "./ui/card";
import { Reveal } from "./ui/utils";

const useCases = [
  {
    icon: Utensils,
    title: "Restaurants",
    description: "Accept payments for dine-in, takeout, and delivery. Manage reservations and process tips seamlessly.",
    features: ["QR code payments", "Table reservations", "Tip processing", "Multi-location support"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Scissors,
    title: "Salons & Spas",
    description: "Book appointments, process payments, and manage client relationships all in one platform.",
    features: ["Appointment booking", "Service packages", "Client profiles", "Recurring payments"],
    gradient: "from-pink-500 to-purple-500"
  },
  {
    icon: Video,
    title: "Content Creators",
    description: "Monetize your content with subscriptions, donations, and merchandise sales across all platforms.",
    features: ["Subscription billing", "Crypto donations", "Merchandise sales", "Global payments"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Building2,
    title: "Small Businesses",
    description: "Everything you need to accept payments online and in-person, from startups to established SMBs.",
    features: ["Point of sale", "Online checkout", "Invoicing", "Analytics dashboard"],
    gradient: "from-green-500 to-emerald-500"
  }
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Built for every
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              type of business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a local business or global enterprise, 
            Transakt adapts to your unique payment needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <Reveal key={index} delay={index * 80}>
              <Card className="relative p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden hover:-translate-y-1">
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${useCase.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hover background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Decorative gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent mb-2">
              150+
            </div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
              $10B+
            </div>
            <div className="text-gray-600">Processed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-gray-600">Businesses</div>
          </div>
        </div>
      </div>
    </section>
  );
}
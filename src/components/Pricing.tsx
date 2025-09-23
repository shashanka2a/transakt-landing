import { CheckCircle, CreditCard, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "For small businesses starting with payments",
    features: [
      "Up to 1,000 transactions/month",
      "No setup fee",
      "Basic analytics",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$79",
    period: "/month",
    description: "For growing businesses scaling payments",
    features: [
      "Up to 10,000 transactions/month",
      "Priority support",
      "Advanced analytics",
      "Crypto payments",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For high-volume businesses",
    features: [
      "Unlimited transactions",
      "Dedicated account manager",
      "Custom integrations",
      "SLA and uptime guarantees",
    ],
    highlighted: false,
  },
];

export function Pricing({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your business. No hidden fees, ever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-blue-500 bg-blue-50/30"
                  : "border-gray-200"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    : ""
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="flex items-start gap-3">
            <CreditCard className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900">Multiple payment methods</h4>
              <p className="text-gray-600">
                Accept cards, crypto, and digital wallets with automatic currency conversion.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900">Enterprise-grade security</h4>
              <p className="text-gray-600">
                PCI compliant, real-time fraud detection, and 99.9% uptime.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900">No hidden fees</h4>
              <p className="text-gray-600">
                What you see is what you pay. No surprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Reveal } from "./ui/utils";

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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your business. No hidden fees, ever.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 80}>
              <div
                className={`${
                  plan.highlighted
                    ? "relative rounded-2xl p-[1px] bg-gradient-to-r from-purple-500 to-blue-500"
                    : "rounded-2xl border border-gray-200"
                } h-full transition-transform hover:-translate-y-1`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`rounded-2xl ${plan.highlighted ? "bg-white" : "bg-white"} p-8 flex flex-col h-full`}>
                  <div className="mb-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  </div>

                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-500 ml-1 align-baseline">{plan.period}</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Button
                      className={`w-full transition-transform hover:-translate-y-0.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700`}
                    >
                      {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        
      </div>
    </section>
  );
}
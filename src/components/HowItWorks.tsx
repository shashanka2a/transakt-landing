import { UserPlus, Settings, Zap } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in under 2 minutes and get instant access to our payment platform.",
    step: "01"
  },
  {
    icon: Settings,
    title: "Configure",
    description: "Set up your payment methods, currencies, and business preferences with our simple setup wizard.",
    step: "02"
  },
  {
    icon: Zap,
    title: "Go Live",
    description: "Start accepting payments immediately with our plug-and-play integration or custom API.",
    step: "03"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Get started in
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              3 simple steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From setup to your first payment in minutes, not weeks. 
            Our streamlined onboarding gets you up and running fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 font-bold text-sm mb-6">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Building Today
            <Zap className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
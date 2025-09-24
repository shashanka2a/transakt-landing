"use client";
import { useState, useEffect } from "react";
import { CreditCard, Smartphone, CheckCircle, ArrowRight } from "lucide-react";

export function AppFlowIllustration() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Customer selects payment",
      icon: CreditCard,
      description: "Cards, crypto, or digital wallets",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Secure processing",
      icon: Smartphone,
      description: "Bank-level encryption",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Instant confirmation",
      icon: CheckCircle,
      description: "Payment completed",
      color: "from-green-500 to-green-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-xl">
      {/* Mock browser window */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-0.5">
        {/* Browser header */}
        <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <div className="ml-4 bg-white rounded px-3 py-1 text-sm text-gray-600 border border-gray-200 flex-1">
              checkout.trasakt.online
            </div>
          </div>
        </div>

        {/* Checkout interface */}
        <div className="p-6 bg-white">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete your order</h3>
            <p className="text-gray-600">Choose your preferred payment method</p>
          </div>

          {/* Payment methods grid */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className={`p-4 border-2 rounded-lg transition-all duration-300 cursor-pointer ${
              currentStep === 0 ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}>
              <CreditCard className="w-6 h-6 mx-auto mb-2 text-gray-600" />
              <div className="text-xs text-center text-gray-600">Cards</div>
            </div>
            
            <div className={`p-4 border-2 rounded-lg transition-all duration-300 cursor-pointer ${
              currentStep === 0 ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-gray-300'
            }`}>
              <div className="w-6 h-6 mx-auto mb-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">₿</span>
              </div>
              <div className="text-xs text-center text-gray-600">Crypto</div>
            </div>
            
            <div className={`p-4 border-2 rounded-lg transition-all duration-300 cursor-pointer ${
              currentStep === 0 ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'
            }`}>
              <Smartphone className="w-6 h-6 mx-auto mb-2 text-gray-600" />
              <div className="text-xs text-center text-gray-600">Wallets</div>
            </div>
          </div>

          {/* Current step indicator */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 transition-colors duration-300 hover:bg-gray-100">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${steps[currentStep].color} flex items-center justify-center`}>
                {(() => {
                  const IconComponent = steps[currentStep].icon;
                  return <IconComponent className="w-5 h-5 text-white" />;
                })()}
              </div>
              <div>
                <div className="font-medium text-gray-900">{steps[currentStep].title}</div>
                <div className="text-sm text-gray-600">{steps[currentStep].description}</div>
              </div>
              {currentStep < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
              )}
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Order summary */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-900">$99.00</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Processing fee</span>
              <span className="text-gray-900">$2.97</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between items-center font-semibold">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">$101.97</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating features */}
      <div className="absolute -top-2 -right-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span>Secure SSL</span>
        </div>
      </div>
      
      <div className="absolute -bottom-2 -left-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <span>Real-time</span>
        </div>
      </div>
    </div>
  );
}
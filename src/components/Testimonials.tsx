/* eslint-disable react/no-unescaped-entities */
import { Star } from "lucide-react";
import { Card } from "./ui/card";
import { Reveal } from "./ui/Reveal";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Local Bistro",
    content: "Transakt transformed our payment process. We went from losing customers due to payment issues to processing crypto payments seamlessly. Revenue increased 40% in the first quarter.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Owner, Elite Barber Shop",
    content: "The booking integration is incredible. Our customers can book and pay in advance, and we've reduced no-shows by 70%. The dashboard gives us insights we never had before.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Emma Thompson",
    role: "Content Creator",
    content: "As a content creator, accepting crypto donations was always complicated. Transakt made it simple, and now I can focus on creating instead of managing payments.",
    rating: 5,
    avatar: "ET"
  },
  {
    name: "David Park",
    role: "CEO, TechStart Inc",
    content: "We needed a payment solution that could scale with our rapid growth. Transakt's API is robust, documentation is excellent, and support team is incredibly responsive.",
    rating: 5,
    avatar: "DP"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Loved by businesses
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of businesses that trust Transakt to power their payments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 80}>
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-8">Trusted by industry leaders</p>
          <div className="flex justify-center items-center gap-12 opacity-40">
            <div className="font-bold text-xl text-gray-600">STRIPE</div>
            <div className="font-bold text-xl text-gray-600">VISA</div>
            <div className="font-bold text-xl text-gray-600">MASTERCARD</div>
            <div className="font-bold text-xl text-gray-600">PAYPAL</div>
          </div>
        </div>
      </div>
    </section>
  );
}
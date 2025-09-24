export function FAQ({ id }: { id?: string }) {
  const faqs = [
    { q: "Does Transakt support crypto payments?", a: "Yes. Bitcoin, Ethereum, and stablecoins with automatic conversion." },
    { q: "How long does setup take?", a: "Most teams get a working checkout in under 5 minutes." },
    { q: "Is there a free trial?", a: "Early access users get a 25% lifetime discount and trial access." },
    { q: "How does pricing compare to Stripe and PayPal?", a: "Transparent pricing with no hidden fees. See the pricing section for details." },
  ];

  return (
    <section id={id} className="py-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about Transakt.</p>
        </div>
        <div className="divide-y divide-gray-200 bg-white rounded-2xl border border-gray-200">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="list-none cursor-pointer px-6 py-5 flex items-center justify-between">
                <span className="font-medium text-gray-900">{f.q}</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}



export function Comparison({ id }: { id?: string }) {
  const rows = [
    {
      feature: "Checkout conversion",
      transakt: "Optimized UX, scroll/hover polish",
      stripe: "Great, dev-centric",
      paypal: "Familiar, but dated flow",
      whop: "Ecom/membership focused",
    },
    {
      feature: "Payment methods",
      transakt: "Cards, crypto, wallets",
      stripe: "Cards, wallets",
      paypal: "PayPal, cards",
      whop: "Cards, wallets",
    },
    {
      feature: "Crypto support",
      transakt: "Built-in",
      stripe: "Limited/third-party",
      paypal: "Limited regions",
      whop: "Third-party",
    },
    {
      feature: "Pricing transparency",
      transakt: "Simple, no hidden fees",
      stripe: "Tiered + add-ons",
      paypal: "Varies by country",
      whop: "Platform fees",
    },
    {
      feature: "Developer experience",
      transakt: "Modern API + fast start",
      stripe: "Excellent SDKs/docs",
      paypal: "OK",
      whop: "Product-led",
    },
  ];

  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Transakt vs Stripe, PayPal, Whop</h2>
          <p className="text-lg text-gray-600">Why teams choose Transakt for modern checkout and crypto support.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="min-w-full text-left">
            <thead className="bg-gray-50/70 text-gray-700">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold">Feature</th>
                <th className="px-6 py-4 text-sm font-semibold">Transakt</th>
                <th className="px-6 py-4 text-sm font-semibold">Stripe</th>
                <th className="px-6 py-4 text-sm font-semibold">PayPal</th>
                <th className="px-6 py-4 text-sm font-semibold">Whop</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((r) => (
                <tr key={r.feature} className="hover:bg-gray-50/60">
                  <td className="px-6 py-4 text-gray-800 font-medium">{r.feature}</td>
                  <td className="px-6 py-4 text-gray-900">{r.transakt}</td>
                  <td className="px-6 py-4 text-gray-600">{r.stripe}</td>
                  <td className="px-6 py-4 text-gray-600">{r.paypal}</td>
                  <td className="px-6 py-4 text-gray-600">{r.whop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}



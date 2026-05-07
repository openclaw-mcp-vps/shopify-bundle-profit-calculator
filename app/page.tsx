export default function Home() {
  const faqs = [
    {
      q: 'How does it connect to my Shopify store?',
      a: 'You provide your Shopify store URL and a read-only API key. We fetch your bundle products and cost data securely — no write access needed.'
    },
    {
      q: 'What counts as a bundle for the calculator?',
      a: 'Any product with multiple variants or products grouped via Shopify collections, metafields, or bundle apps. We detect them automatically.'
    },
    {
      q: 'Is my store data stored anywhere?',
      a: 'Calculation history is saved to your account only. We never share or sell your product or cost data.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Bundle Analytics
        </span>
        <h1 className="text-4xl font-bold text-white mb-5 leading-tight">
          Calculate Real Profit Margins<br />on Shopify Product Bundles
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Stop guessing. See the true margin on every bundle — accounting for individual item costs, shipping weights, and discount stacking.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to try</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { icon: '📦', label: 'Bundle Cost Breakdown', desc: 'Per-item cost analysis across every bundle' },
          { icon: '⚖️', label: 'Shipping Weight Impact', desc: 'See how weight affects your real margin' },
          { icon: '📉', label: 'Discount Stacking', desc: 'Catch margin bleed from layered discounts' }
        ].map(f => (
          <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="text-white font-semibold text-sm mb-1">{f.label}</div>
            <div className="text-[#8b949e] text-xs">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited bundle calculations',
              'Shopify API integration',
              'Shipping weight margin impact',
              'Discount stacking detection',
              'Calculation history & export'
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started — $12/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(f => (
            <div key={f.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{f.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        © {new Date().getFullYear()} Bundle Profit Calculator · Built for Shopify store owners
      </footer>
    </main>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopify Bundle Profit Calculator',
  description: 'Calculate real profit margins on Shopify product bundles. Analyze item costs, shipping weights, and bundle discounts to see your true margins.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b3ce8459-11b6-4784-a156-62051d8fc00c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}

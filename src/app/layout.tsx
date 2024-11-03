import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - DOG',
    default: 'Dynamic OG',
  },
  description:
    'Dynamic OG Images for everyone | Create unique OG images',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const beam = process.env.NEXT_BEAM_ANALYTICS_ID
  const docsAi = process.env.NEXT_DOCS_AI_ID
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-stone-50 antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        {children}
        <script src="https://beamanalytics.b-cdn.net/beam.min.js" data-token={beam} async></script>
        <script src="https://docsai.app/embed.min.js" project-id={docsAi} version-number="2" async></script>
      </body>
    </html>
  )
}

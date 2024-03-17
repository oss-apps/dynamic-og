import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import Sidebar from '@/components/ui/Sidebar'

export const metadata: Metadata = {
  title: {
    template: '%s - DOG',
    default: 'Dynamic OG',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
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

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className='flex gap-2'>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Sidebar />
      <div className='px-3 py-8 w-full'>
        {children}
      </div>
    </section>
  )
}

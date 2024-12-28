import './globals.css'
import '@/styles/loading-spinner.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layouts/header/page'
import { Providers } from '@/providers'
import { SmoothScroll } from '@/components/ui/smooth-scroll'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "St Peter's Pharmacy",
  description: 'Your trusted healthcare partner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="lenis lenis-smooth">
      <body className={`${inter.className} bg-white`}>
        <Providers>
          <Header />
          <SmoothScroll />
          <main data-lenis-prevent>{children}</main>
        </Providers>
      </body>
    </html>
  )
}

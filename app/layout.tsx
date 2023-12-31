import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import './globals.css'
import { Roboto } from 'next/font/google'
import 'tw-elements-react/dist/css/tw-elements-react.min.css'
import GoogleAnalytics from '@/components/google-analytics/GoogleAnalytics'
import { Analytics } from '@vercel/analytics/react'
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

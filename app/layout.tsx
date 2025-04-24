import './globals.css'
import type { Metadata } from 'next'
import { PageTransition } from '@/components/PageTransition'
import { Navbar } from '@/components/Navbar'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Gopalakrishnan | Portfolio',
  description: 'Personal portfolio of Gopalakrishnan - Web Developer & Designer.',
  icons: {
    icon: "/images/profile.jpg"
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="p:domain_verify" content="7eb8a7284db489b206f0a7b0befd8d9d"/>
      </head>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
          <SmoothScrollProvider>
            <Navbar />
            <PageTransition>{children}</PageTransition>
          </SmoothScrollProvider>
      </body>
    </html>
  )
}

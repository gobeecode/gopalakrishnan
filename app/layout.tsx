import './globals.css'
import type { Metadata } from 'next'
import { PageTransition } from '@/components/PageTransition'
import { Navbar } from '@/components/Navbar'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'

export const metadata: Metadata = {
  title: 'Gopalakrishnan | Portfolio',
  description: 'Personal portfolio of Gopalakrishnan - Web Developer & Designer.',
  icons: {
    icon: "/profile.svg"
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-[#0e0e10] dark:text-white transition-colors duration-300">
          <SmoothScrollProvider>
            <Navbar />
            <PageTransition>{children}</PageTransition>
          </SmoothScrollProvider>
      </body>
    </html>
  )
}

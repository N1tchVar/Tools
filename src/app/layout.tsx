import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { site } from '@/config/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  keywords: site.keywords,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className='relative mx-auto mb-16 max-w-4xl px-8 py-24'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}

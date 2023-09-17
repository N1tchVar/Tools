import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { site } from '@/config/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  openGraph: {
    title: 'Tools | N1tch',
    description: 'A collection of tools created by N1tch.',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/nlogify.appspot.com/o/images%2FTools.png?alt=media&token=ba955d57-b70d-4c74-9888-0d6260008ebc',
        width: 800,
        height: 600,
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/nlogify.appspot.com/o/images%2FTools.png?alt=media&token=ba955d57-b70d-4c74-9888-0d6260008ebc',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
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

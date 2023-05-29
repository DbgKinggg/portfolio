import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

const title = 'Samuel Chen - Full-Stack Developer'
const description =
  'This is Samuel Chen, a Full-Stack Developer based in Melbourne, Australia. I do a little bit of Frontend, a little bit of Backend and a little bit of web3 things!'
const url = 'https://samuelchen.me/'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    type: 'website',
  },
  twitter: {
    title,
    description,
    url,
    domain: 'samuelchen.me',
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

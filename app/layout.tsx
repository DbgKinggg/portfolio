import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Samuel Chen - Full-Stack Developer',
  description: 'This is Samuel Chen, a Full-Stack Developer based in Melbourne, Australia. I do a little bit of Frontend, a little bit of Backend and a little bit of web3 things!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

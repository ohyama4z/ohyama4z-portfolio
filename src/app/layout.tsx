import { Inter } from 'next/font/google'
import { Header } from '@/src/components/header'
import '@/styles/_main.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ohyama4z portfolio'
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

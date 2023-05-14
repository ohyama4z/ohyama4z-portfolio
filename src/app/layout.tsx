import { Noto_Sans_JP } from 'next/font/google'
import '@/styles/_main.scss'

const noteSansJP = Noto_Sans_JP({subsets: ['latin']})

export const metadata = {
  title: 'ohyama4z portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={noteSansJP.className}>{children}</body>
    </html>
  )
}

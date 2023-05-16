import localFont from 'next/font/local'
import '@/styles/_main.scss'

const localFontNoteSansJP = localFont({
  src: '../fonts/NotoSansJP-VariableFont_wght.ttf',
  display: 'swap',
})

export const metadata = {
  title: 'ohyama4z portfolio',
  icons: {
    icon: '/icon.jpg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={localFontNoteSansJP.className}>{children}</body>
    </html>
  )
}

import localFont from 'next/font/local'
import '@/styles/_main.scss'

const localFontSansJP = localFont({
  src: '../../public/NotoSansJP-VariableFont_wght.ttf',
  display: 'swap',
})

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
      <body className={localFontSansJP.className}>{children}</body>
    </html>
  )
}

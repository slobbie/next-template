import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '로그인',
  description: '로그인 페이지',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

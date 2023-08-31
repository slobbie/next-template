import type { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: '회원가입',
  description: '회원 가입 페이지',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
          {children}
      </body>
    </html>
  )
}

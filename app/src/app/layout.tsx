import GlobalPopup from '@/common/components/popup/GlobalPopup'
import type { Metadata } from 'next'
import RecoilProviders from '@/common/utils/RecoilProviders'
import styles from '@/styles/index.module.scss'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <RecoilProviders>
          <div className={styles.wrapper}>
            <div className={styles.content}>{children}</div>
          </div>
          <GlobalPopup />
        </RecoilProviders>
      </body>
    </html>
  )
}

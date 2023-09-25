import React from 'react'
import styles from '@/common/components/popup/style/bottomSheetList.module.scss'
import TypoCommon from '@/common/components/typography/TypoCommon'

interface SelectBottomSheetProps {
  id?: string
  listTitle: string
  children: React.ReactNode
  selectItem?: (item: string, id?: string) => void
}

// 바텀시트 커스텀
const BottomSheetCustom = (props: SelectBottomSheetProps) => {
  const { id, listTitle, children, selectItem } = props

  return (
    <div className={styles.bottomSheetDim}>
      <div className={styles.bottomSheetBox}>
        <div className={styles.listBox}>
          <div className={styles.topBox}>
            <TypoCommon typographyType="t6">{listTitle}</TypoCommon>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default BottomSheetCustom

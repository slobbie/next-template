import React from 'react'
import styles from '@/common/components/bottomSheet/bottomSheetList.module.scss'
import TypoCommon from '@/common/components/typography/TypoCommon'

interface dataInterface {
  id: string
  value: string
}

interface SelectBottomSheetProps {
  id: string
  listTitle: string
  data: dataInterface[]
  selectItem: (item: string, id?: string) => void
}

// 바텀시트
const BottomSheetList = (props: SelectBottomSheetProps) => {
  const {id, listTitle, data, selectItem} = props

  return (
    <div className={styles.bottomSheetDim} onClick={() => selectItem('')}>
      <div className={styles.bottomSheetBox}>
         <div className={styles.listBox}>
          <div className={styles.topBox}>
             <TypoCommon typographyType='t4'>{listTitle}</TypoCommon>
          </div>
           {data.map((item, index) => {
             return (
               <div
                 id={item.id}
                 key={index}
                 className={styles.listItem}
                 onClick={(event) => {
                   event.stopPropagation()
                   selectItem(item.value, id)
                 }}
               >
                 <TypoCommon typographyType='st1'>{item.value}</TypoCommon>
               </div>
             )
           })}
         </div>
      </div>
    </div>
  )
}

export default BottomSheetList

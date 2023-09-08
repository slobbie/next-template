import React, { Ref, forwardRef, useState } from 'react'
import styles from '@/common/components/select/selectBottomSheet.module.scss'
import Image from 'next/image'
import arrowDown from '@/public/icon/arrowDown.svg'
import TypoCommon from '@/common/components/typography/TypoCommon'

interface dataInterface {
  id: string
  value: string
}

interface SelectBottomSheetProps {
  id: string
  title: string
  listTitle: string
  data: dataInterface[]
  isActive: boolean
  selectItem: (item: string, id?: string) => void
}
/** 바텀시트 설렉트 */
const SelectBottomSheet = forwardRef(function SelectBottomSheet
  (props: SelectBottomSheetProps, forwardRef: Ref<HTMLDivElement>){
  const {id, title, listTitle, data, isActive, selectItem} = props

  return (
   <>
     <div className={styles.select_box_wrap}>
        <label className={styles.select_label} htmlFor={id}>{title}</label>
        <div ref={forwardRef} id={id} className={styles.selectBottomSheet_wrap}>
          <div className={styles.selectedItem}>
            <span className={styles.selected_span}>
              {title}
            </span>
            <div className={styles.iconBox} onClick={() => selectItem('')}>
              <Image className={styles.arrowIcon} src={arrowDown} alt='아래 방향 화살표' />
            </div>
          </div>
        </div>
     </div>
      {
        isActive ?
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
        :
        null
      }
   </>
  )
})

export default SelectBottomSheet

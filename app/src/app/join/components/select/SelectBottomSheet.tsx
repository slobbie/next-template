import React, { Ref, forwardRef } from 'react'
import styles from '@/join/components/select/selectBottomSheet.module.scss'
import Image from 'next/image'
import arrowDown from '@/public/icon/arrowDown.svg'
import TypoCommon from '@/common/components/typography/TypoCommon'


interface SelectBottomSheetProps {
  id: string
  title: string
  selectedValue?: string
  selectItem: (item: string, id?: string) => void
}
/** 바텀시트 설렉트 */
const SelectBottomSheet = forwardRef(function SelectBottomSheet
  (props: SelectBottomSheetProps, forwardRef: Ref<HTMLDivElement>){
  const {id, title, selectItem, selectedValue} = props
  return (
   <>
     <div className={styles.select_box_wrap}>
        <label className={styles.select_label} htmlFor={id}>{title}</label>
        <div ref={forwardRef} id={id} className={styles.selectBottomSheet_wrap}>
          <div className={styles.selectedItem}>
            <span className={styles.selected_span}>
              {selectedValue ? selectedValue : title}
            </span>
            <div className={styles.iconBox} onClick={() => selectItem('')}>
              <Image className={styles.arrowIcon} src={arrowDown} alt='아래 방향 화살표' />
            </div>
          </div>
        </div>
     </div>
   </>
  )
})

export default SelectBottomSheet

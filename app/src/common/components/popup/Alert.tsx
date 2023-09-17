"use client"
import React from 'react'
import styles from '@/common/components/popup/alert.module.scss'
import TypoCommon from '@/common/components/typography/TypoCommon'
import ButtonCommon from '@/common/components/button/ButtonCommon'
import usePopup from '@/hooks/usePopup'

interface AlertInterface {
  massage: string
}

// 기본 확인 팝업
const Alert = ({
  massage
}: AlertInterface) => {
  const popup = usePopup()
  return (
    <div className={styles.alertDim}>
      <div className={styles.alertBox}>
        <div className={styles.alertContent}>
          <div className={styles.top}>
            <TypoCommon typographyType='st1'>
              {massage}
            </TypoCommon>
          </div>
          <div className={styles.btnBox}>
            <ButtonCommon onClick={() => popup.popupHide({
              isPopup: false,
            })}>
              확인
            </ButtonCommon>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert

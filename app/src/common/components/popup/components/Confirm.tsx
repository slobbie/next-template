'use client'
import React from 'react'
import styles from '@/common/components/popup/style/confirm.module.scss'
import TypoCommon from '@/common/components/typography/TypoCommon'
import ButtonCommon from '@/common/components/button/ButtonCommon'
import usePopup from '@/hooks/usePopup'
import { confirmInterface } from '@/common/components/popup/interface/popup.interface'

// 기본 확인 취소 팝업
const Confirm = ({
  massage,
  confirmLabel,
  cancelLabel,
  confirmEvent,
  cancelEvent,
}: confirmInterface) => {
  const popup = usePopup()

  // 확인 이벤트 핸들러
  const confirmEventHandler = () => {
    if (confirmEvent) {
      confirmEvent()
    }
    popup.popupHide()
  }

  // 취소 이벤트 핸들러
  const cancelEventHandler = () => {
    if (cancelEvent) {
      cancelEvent()
    }
    popup.popupHide()
  }

  return (
    <div className={styles.confirmDim}>
      <div className={styles.confirmBox}>
        <div className={styles.confirmContent}>
          <div className={styles.top}>
            <TypoCommon typographyType="st1">{massage}</TypoCommon>
          </div>
          <div className={styles.btnBox}>
            <ButtonCommon
              backgroundColor="gray300"
              color="gray600"
              onClick={cancelEventHandler}
            >
              {cancelLabel ? cancelLabel : '취소'}
            </ButtonCommon>
            <ButtonCommon onClick={confirmEventHandler}>
              {confirmLabel ? confirmLabel : '확인'}
            </ButtonCommon>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm

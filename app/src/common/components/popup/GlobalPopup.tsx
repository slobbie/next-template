"use client"
import React from 'react'
import Alert from '@/common/components/popup/Alert'
import { useRecoilValue } from 'recoil'
import { popupProps } from '@/recoil/popupAtom'
import Confirm from '@/common/components/popup/Confirm'



// 전역 팝업
const GlobalPopup = () => {
  const {type, massage, isPopup, confirmLabel, cancelLabel, confirmEvent, cancelEvent} = useRecoilValue(popupProps)


  const renderComponent = {
    alert: <Alert massage={massage} confirmLabel={confirmLabel} confirmEvent={confirmEvent} />,
    confirm: <Confirm massage={massage} confirmLabel={confirmLabel} confirmEvent={confirmEvent} cancelEvent={cancelEvent} cancelLabel={cancelLabel}/>
  }

  const Component = () => {
    return isPopup as boolean ? renderComponent[type] : null
  }

  return <Component />
}

export default GlobalPopup

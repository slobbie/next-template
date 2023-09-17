"use client"
import React from 'react'
import Alert from '@/common/components/popup/Alert'
import { useRecoilValue } from 'recoil'
import { popupProps } from '@/recoil/popupAtom'



// 전역 팝업
const GlobalPopup = () => {
  const {type, massage , isPopup} = useRecoilValue(popupProps)



  const renderComponent = {
    alert: <Alert massage={massage} />
  }

  const Component = () => {
    return isPopup as boolean ? renderComponent[type] : null
  }

  return <Component />
}

export default GlobalPopup

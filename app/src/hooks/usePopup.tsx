import { popupProps } from '@/recoil/popupAtom'
import React from 'react'
import { useSetRecoilState } from 'recoil'

type Type = 'alert'

interface showPopupProps {
  type: Type,
  massage: string
  isPopup?: boolean
}

interface hidePopupProps {
  isPopup: boolean
}

// 팝업 컨트롤 hooks
const usePopup = () => {
  const setPopupProp =  useSetRecoilState(popupProps)

  // 팝업 호출
  const popupShow= ({
    type,
    massage,
  }: showPopupProps) => {
    setPopupProp({
      isPopup: true,
      type: type,
      massage: massage
    })
  }

  // 팝업 닫기
  const popupHide= ({
    isPopup
  }: hidePopupProps) => {
    setPopupProp({
      isPopup: false,
      type: 'alert',
      massage: ''
    })
  }

  return {
    popupShow,
    popupHide
  }
}

export default usePopup

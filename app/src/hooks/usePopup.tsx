import {
  alertInterface,
  confirmInterface,
} from '@/common/components/popup/interface/popup.interface'
import { popupProps } from '@/recoil/popupAtom'
import { useSetRecoilState } from 'recoil'

// 팝업 컨트롤 hooks
const usePopup = () => {
  const setPopupProp = useSetRecoilState(popupProps)

  // 팝업 호출
  const alertShow = ({
    massage,
    confirmLabel,
    confirmEvent,
  }: alertInterface) => {
    setPopupProp({
      type: 'alert',
      isPopup: true,
      massage,
      confirmLabel: confirmLabel || '',
      confirmEvent: confirmEvent || (() => {}),
    })
  }

  // 팝업 호출
  const confirmShow = ({
    massage,
    confirmLabel,
    cancelLabel,
    confirmEvent,
    cancelEvent,
  }: confirmInterface) => {
    setPopupProp({
      type: 'confirm',
      isPopup: true,
      massage,
      confirmLabel: confirmLabel || '',
      confirmEvent: confirmEvent || (() => {}),
      cancelLabel: cancelLabel || '',
      cancelEvent: cancelEvent || (() => {}),
    })
  }

  // 팝업 닫기
  const popupHide = () => {
    setPopupProp({
      isPopup: false,
      type: 'alert',
      massage: '',
      confirmLabel: '',
      confirmEvent: () => {},
      cancelLabel: '',
      cancelEvent: () => {},
    })
  }

  return {
    alertShow,
    confirmShow,
    popupHide,
  }
}

export default usePopup

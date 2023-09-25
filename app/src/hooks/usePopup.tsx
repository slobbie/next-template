import {
  alertInterface,
  confirmInterface,
} from '@/common/components/popup/interface/popup.interface'
import {
  BottomSheetCustomInterface,
  BottomSheetListInterface,
  bottomSheetProps,
  popupProps,
} from '@/recoil/popupAtom'
import { useSetRecoilState } from 'recoil'

// 팝업 컨트롤 hooks
const usePopup = () => {
  const setPopupProp = useSetRecoilState(popupProps)
  const setBottomSheet = useSetRecoilState(bottomSheetProps)
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

  // 바텀 시트 팝업 호출
  const bottomSheetListShow = ({
    id,
    listTitle,
    data,
    selectItem,
  }: BottomSheetListInterface) => {
    setBottomSheet({
      id: id,
      listTitle: listTitle,
      type: 'bottomSheetList',
      data: data,
      selectItem: selectItem,
    })
    setPopupProp({
      type: 'bottomSheetList',
      isPopup: true,
      massage: '',
    })
  }

  // 바텀시트 커스텀 팝업 호출
  const bottomSheetCustomShow = ({
    id,
    listTitle,
    children,
  }: BottomSheetCustomInterface) => {
    setBottomSheet({
      id: id as string,
      listTitle: listTitle,
      type: 'bottomSheetCustom',
      children: children,
    })
    setPopupProp({
      type: 'bottomSheetCustom',
      isPopup: true,
      massage: '',
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
    bottomSheetListShow,
    bottomSheetCustomShow,
  }
}

export default usePopup

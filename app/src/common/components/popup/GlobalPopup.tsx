'use client'
import React from 'react'
import Alert from '@/common/components/popup/components/Alert'
import { useRecoilValue } from 'recoil'
import { bottomSheetProps, dataInterface, popupProps } from '@/recoil/popupAtom'
import Confirm from '@/common/components/popup/components/Confirm'
import BottomSheetList from '@/common/components/popup/components/BottomSheetList'
import BottomSheetCustom from '@/common/components/popup/components/BottomSheetCustom'

// 전역 팝업
const GlobalPopup = () => {
  const {
    type,
    massage,
    isPopup,
    confirmLabel,
    cancelLabel,
    confirmEvent,
    cancelEvent,
  } = useRecoilValue(popupProps)

  const bottomSheet = useRecoilValue(bottomSheetProps)

  const renderComponent = {
    alert: (
      <Alert
        massage={massage}
        confirmLabel={confirmLabel}
        confirmEvent={confirmEvent}
      />
    ),
    confirm: (
      <Confirm
        massage={massage}
        confirmLabel={confirmLabel}
        confirmEvent={confirmEvent}
        cancelEvent={cancelEvent}
        cancelLabel={cancelLabel}
      />
    ),
    bottomSheetList: (
      <BottomSheetList
        id={bottomSheet.id}
        data={bottomSheet.data as dataInterface[]}
        listTitle={bottomSheet.listTitle}
        selectItem={
          bottomSheet.selectItem as (item: string, id?: string) => void
        }
      />
    ),
    bottomSheetCustom: (
      <BottomSheetCustom
        id={bottomSheet.id}
        listTitle={bottomSheet.listTitle}
        children={bottomSheet.children}
      />
    ),
  }

  const Component = () => {
    return (isPopup as boolean) ? renderComponent[type] : null
  }

  return <Component />
}

export default GlobalPopup

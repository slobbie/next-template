import { atom } from 'recoil'

type Type = 'alert' | 'confirm' | BottomSheetType
type BottomSheetType = 'bottomSheetList' | 'bottomSheetCustom'

interface PopupInterface {
  isPopup?: boolean
  type: Type
  massage: string
  confirmLabel?: string
  confirmEvent?: () => void
  cancelLabel?: string
  cancelEvent?: () => void
}

export interface dataInterface {
  id: string
  value: string
}

export interface BottomSheetListInterface {
  type: BottomSheetType
  id: string
  listTitle: string
  data?: dataInterface[]
  children?: React.ReactNode
  selectItem?: (item: string, id?: string) => void
}

export interface BottomSheetCustomInterface {
  type: BottomSheetType
  id?: string
  listTitle: string
  children?: React.ReactNode
}

export const popupProps = atom<PopupInterface>({
  key: 'popupPropsAtom',
  default: {
    isPopup: false,
    type: 'alert',
    massage: '',
    confirmLabel: '',
    confirmEvent: () => {},
    cancelLabel: '',
    cancelEvent: () => {},
  },
})

export const bottomSheetProps = atom<BottomSheetListInterface>({
  key: 'bottomSheetAtom',
  default: {
    type: 'bottomSheetList',
    id: '',
    listTitle: '',
    data: [],
    selectItem: () => {},
    children: '',
  },
})

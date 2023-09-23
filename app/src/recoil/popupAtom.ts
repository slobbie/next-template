import { atom } from 'recoil'

type Type = 'alert' | 'confirm'

interface popupInterface {
  isPopup?: boolean
  type: Type
  massage: string
  confirmLabel?: string
  confirmEvent?: () => void
  cancelLabel?: string
  cancelEvent?: () => void
}

export const popupProps = atom<popupInterface>({
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

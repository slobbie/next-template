import { atom } from 'recoil'

type Type = 'alert' | 'confirm'

interface PopupInterface {
  isPopup?: boolean
  type: Type
  massage: string
  confirmLabel?: string
  confirmEvent?: () => void
  cancelLabel?: string
  cancelEvent?: () => void
}

const popupProps = atom<PopupInterface>({
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

export default popupProps

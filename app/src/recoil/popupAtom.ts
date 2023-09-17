import { atom } from 'recoil';
type Type = 'alert' | 'confirm'

interface popupInterface {
  isPopup?: boolean
  type: Type,
  massage: string
  confirmLabel?: string
  confirmEvent?: () => void
  cancelLabel?: string
  cancelEvent?: () => void
}

export const isPopup = atom<boolean>({
  key: 'isPopup',
  default: false,
});


export const popupProps = atom<popupInterface>({
  key: 'popupProps',
  default: {
    isPopup: false,
    type: 'alert',
    massage: '',
    confirmLabel: '',
    confirmEvent: () => {},
    cancelLabel: '',
    cancelEvent: () => {}
  },
});

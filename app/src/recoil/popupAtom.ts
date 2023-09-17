import { atom } from 'recoil';
type Type = 'alert'

interface popupInterface {
  isPopup?: boolean
  type: Type,
  massage: string
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
    massage: ''
  },
});

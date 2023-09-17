export interface alertInterface {
  massage: string
  confirmLabel?: string
  confirmEvent?: () => void
}


export interface confirmInterface extends alertInterface  {
  cancelLabel?: string
  cancelEvent?: () => void
}

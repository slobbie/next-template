// 멤버 인풋 상태 인터페이스
export interface memberInfoInterface {
  mbrNm: string
  mbrPhoneNum: string
  phoneCom: string
  ssNum: string
  ssNumBack: string
}

// 인풋 활성화 여부 인터페이스
export interface inputToggleInterface {
  mbrNm: boolean
  mbrPhoneNum: boolean
  phoneCom: boolean
  ssNum: boolean
  ssNumBack: boolean
}

import services from '@/common/constants/services'
import { httpHandler } from '@/common/utils/httpHandler'

export interface getAgreeList {
  agreeRq: string
  agreeContent: string
  agreeTitle: string
  agreeSeq: number
}

// 약관 동의 정보 리스트
export const getAgreeList = async () => {
  const res = await httpHandler.get<getAgreeList[]>(services.url.agree)
  return res as getAgreeList[]
}

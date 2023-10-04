export interface getAgreeList {
  agreeRq: string
  agreeContent: string
  agreeTitle: string
  agreeSeq: number
}

// 약관 동의 정보 리스트
export const getAgreeList = async () => {
  const res = await fetch('http://localhost:3005/api/v1/agree')
  const agreeList = (await res.json()) as getAgreeList[]
  return agreeList
}

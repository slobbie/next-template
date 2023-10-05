import services from '@/common/constants/services'

// type fetchType = 'no-store' | 'force-cache'

type fetchType = 'ssg' | 'ssr' | 'isr'

export const httpHandler = {
  /**
   * fetch get 업무 수행
   * @param path
   * @param pFetchType 'ssg' | 'ssr' | 'isr'
   * @param revalidate number : isr 일시 필수 값
   * @returns Promise<T>
   */
  async get<T>(
    path: string,
    pFetchType: fetchType = 'ssg',
    revalidate?: number,
  ): Promise<T | null> {
    let fetchType: object = {}
    if (pFetchType === 'ssg') {
      fetchType = { cache: 'no-store' }
    } else if (pFetchType === 'ssr') {
      fetchType = { cache: 'force-cache' }
    } else if (pFetchType === 'isr' && revalidate !== undefined) {
      fetchType = { next: { revalidate: revalidate } }
    }
    try {
      const req = await fetch(services.api.host + services.api.version + path, {
        method: services.api.method.get,
        ...fetchType,
      })
      const res = await req.json()
      if (res.code === services.code.success) {
        return res.contents
      } else if (res.code === services.code.fail) {
        console.log(`fail ${path} api`)
      }
    } catch (error) {
      throw new Error(`error ${path} api`)
    }
    return null
  },
  /**
   * fetch post 업무 수행
   * @param path string
   * @param pReq object
   * @returns Promise<T>
   */
  async post<T>(path: string, pReq: object): Promise<T | null> {
    try {
      const req = await fetch(services.api.host + services.api.version + path, {
        method: services.api.method.post,
        headers: {
          'Content-Type': services.api.contentType,
        },
        body: JSON.stringify(pReq),
      })
      const res = await req.json()
      if (res.code === services.code.success) {
        return res.contents
      } else if (res.code === services.code.fail) {
        console.log(`fail ${path} api`)
      }
    } catch (error) {
      throw new Error(`error ${path} api`)
    }
    return null
  },
}

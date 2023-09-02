'use client'
import Container from "@/common/components/container/Container"
import TypoCommon from "@/common/components/typography/TypoCommon"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

/** 인트로 페이지 */
export default function intro() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/join')
    }, 2000)
  }, [])

  return (
    <section style={{ height: '100vh'}}>
      <Container
        position='flex-col'
        alignContent='center'
        justifyContent='center'
      >
        <TypoCommon typographyType='t1'>
         Fast Bank
        </TypoCommon>
      </Container>
    </section>

  )
}

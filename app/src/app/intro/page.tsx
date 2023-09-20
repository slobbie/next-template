'use client'
import Container from "@/common/components/container/Container"
import TypoCommon from "@/common/components/typography/TypoCommon"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Lottie from "react-lottie-player"
import IntroLogo from '@/public/icon/introLogo.json'
import styles from '@/app/intro/intro.module.scss'

/** 인트로 페이지 */
export default function intro() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/join')
    }, 1500)
  }, [])

  return (
    <section style={{ height: '100vh'}}>
      <Container
        position='flex-col'
        alignContent='center'
        justifyContent='center'
      >
        <TypoCommon typographyType='t1'>
         Fast
        </TypoCommon>
        <Lottie
          className={styles.intro_logo}
          play
          animationData={IntroLogo}
          loop={false}
          />
      </Container>
    </section>

  )
}

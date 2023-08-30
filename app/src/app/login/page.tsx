'use client'
import Image from 'next/image'
import ButtonCommon from '@/common/components/button/ButtonCommon'
import loginStyles from '@/styles/login.module.scss'
import TypoCommon from '@/common/components/typography/TypoCommon'
import Container from '@/common/components/container/Container'
import Space from '@/common/components/space/Space'
import Lottie from "react-lottie-player";
import bankJson from '../../../public/icon/bankIcon.json'
import {useRouter} from 'next/navigation'
export default function Login() {
  const router = useRouter()
  return (
    <main className={loginStyles.wrapper}>
      <Container
        position='flex-col'
      >
        <Lottie
          loop
          animationData={bankJson}
          play
          style={{ width: 200, height: 200 }}
        />
        <Space bottom={50} />
        <TypoCommon
          typographyType='t1'
          textAlign='center'
        >
          패스트 뱅크는 <br/>
          가입 후에 이용 가능해요
        </TypoCommon>
        <Space bottom={50} />
        <ButtonCommon onClick={() => router.push('/join')}>
            가입 시작하기
        </ButtonCommon>
      </Container>
    </main>
  )
}

// 'use client'
import Image from 'next/image'
import ButtonCommon from '@/common/components/button/ButtonCommon'
import loginStyles from '@/styles/login.module.scss'
import TypoCommon from '@/common/components/typography/TypoCommon'
import Container from '@/common/components/container/Container'
import Space from '@/common/components/space/Space'
// import Lottie from "react-lottie-player";
import bankJson from '@/public/icon/bankGif.gif'
import Link from 'next/link'
import { Suspense } from 'react'

export default function Login() {
  // const router = useRouter()
  return (
    <main className={loginStyles.wrapper}>
      <Container
        position='flex-col'
      >
        <Image src={bankJson} alt='로고 gif 이미지' />
        <Space bottom={50} />
        <TypoCommon
          typographyType='t1'
          textAlign='center'
        >
          패스트 뱅크는 <br/>
          가입 후에 이용 가능해요
        </TypoCommon>
        <Space bottom={50} />
        <ButtonCommon>
          <Link href={'/join'}>
            가입 시작하기
          </Link>
        </ButtonCommon>
      </Container>
    </main>
  )
}

'use client'
import React from 'react'
import joinCommonStyles from '@/join/style/join.module.scss'
import TypoCommon from '@/common/components/typography/TypoCommon'
import Container from '@/common/components/container/Container'
import Space from '@/common/components/space/Space'
import completeJson from '@/public/icon/complete.json'
import completeBgJson from '@/public/icon/completeBg.json'
import Lottie from 'react-lottie-player'
import style from '@/join/certified/complete/complete.module.scss'
import ButtonCommon from '@/common/components/button/ButtonCommon'
import { useRouter } from 'next/navigation'

// 회원가입 완료 페이지
const Complete = () => {
  const router = useRouter()
  return (
        <Container
          position='flex-col'
          justifyContent='flex-start'
          alignContent='center'
        >
          <Space bottom={40} />
          <TypoCommon typographyType='t5'>
            회원가입이 완료되었어요
          </TypoCommon>
          <Space bottom={5} />
          <TypoCommon typographyType='t5'>
            비밀번호를 설정해주세요
          </TypoCommon>
          <Lottie
            className={style.completeBgIcon}
            play
            animationData={completeBgJson}
            loop={false}
            speed={1}
          />
          <Lottie
            className={style.completeIcon}
            play
            animationData={completeJson}
            loop={false}
          />
          <ButtonCommon onClick={() => router.push('/join/settingCertified')}>
            비밀번호 설정
          </ButtonCommon>
        </Container>
  )
}

export default Complete

"use client"
import TypoCommon from '@/common/components/typography/TypoCommon'
import React, { useState } from 'react'
import styles from '@/join/style/join.module.scss'
import Container from '@/common/components/container/Container'
import Space from '@/common/components/space/Space'
import InputLabelAnimation from '@/common/components/input/InputLabelAnimation'
import ButtonCommon from '@/common/components/button/ButtonCommon'
import certifiedStyle from '@/join/style/certified.module.scss'
import usePopup from '@/hooks/usePopup'
import { useRouter } from 'next/navigation'

// 회원 가입 인증
const Certified = () => {
  const popup = usePopup()
  const router = useRouter()
  const [checkNum, setCheckNum] = useState<string>('')
  const [title, setTitle] = useState<string>(`문자로 받은 인증번호  6자리를 입력해주세요.`)
  const [btnLabel, setBtnLabel] = useState<string>('인증하기')

  // 팝업 핸들러
  const showPopup = () => {
    popup.confirmShow({
      massage: '확인 취소 팝업',
      confirmLabel: '인증번호 다시받기',
      cancelLabel: '이전정보 확인하기',
      confirmEvent: () => {
        console.log('확인 이벤트')
      },
      cancelEvent: () => {
        router.push('/join')
      }
    })
  }

  // 인증 번호 온체인지 이벤트
  const onChangeCheckNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckNum(e.target.value)
  }

  // 인증 완료 이벤트 핸들러
  const completeEvent = () => {
    setTitle('인증에 성공하셨어요. 가입하기를 누르시면 가입완료가 되어요')
    setBtnLabel('가입완료')
    router.push('/join/certified/complete')
    // setTitle('인증번호가 틀렸습니다. 인증을 다시 시도해주세요.')
  }

  return (
    <div className={styles.wrapper}>
      <div className={certifiedStyle.content}>
        <Container
            position='flex-col'
            justifyContent='flex-start'
            alignContent='flex-start'
          >
            <Space bottom={40} />
            <TypoCommon typographyType="t5">
              {title}
              {/* 문자로 받은<br/> 인증번호  6자리를 입력해주세요. */}
            </TypoCommon>
            <Space bottom={40} />
            <div className={certifiedStyle.input_box}>
              <InputLabelAnimation
                label='인증번호'
                id='checkNum'
                maxLength={6}
                type='text'
                text={checkNum}
                onChange={(e) => onChangeCheckNum(e)}
              />
              <Space bottom={20} />
              <ButtonCommon size='S' color='gray600' backgroundColor='gray300'
                onClick={showPopup}
              >
                <TypoCommon typographyType="st5">
                  문자 다시 받기
                </TypoCommon>
              </ButtonCommon>
            </div>
            <div className={certifiedStyle.bottomBtnBox}>
              <ButtonCommon
                  onClick={completeEvent}
                >
                  <TypoCommon color='gray100' typographyType="st5">
                   {btnLabel}
                </TypoCommon>
              </ButtonCommon>
            </div>
          </Container>
      </div>
    </div>
  )
}

export default Certified

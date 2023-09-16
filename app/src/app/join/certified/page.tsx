import TypoCommon from '@/common/components/typography/TypoCommon'
import React from 'react'
import styles from '@/join/style/join.module.scss'
import Container from '@/common/components/container/Container'
import Space from '@/common/components/space/Space'
import InputLabelAnimation from '@/common/components/input/InputLabelAnimation'
import ButtonCommon from '@/common/components/button/ButtonCommon'
import certifiedStyle from '@/join/style/certified.module.scss'

// 회원 가입 인증
const Certified = () => {
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
              문자로 받은<br/> 인증번호  6자리를 입력해주세요.
            </TypoCommon>
            <Space bottom={40} />
            <div className={certifiedStyle.input_box}>
              <InputLabelAnimation
                label='인증번호'
                id='ssNum'
                maxLength={6}
                type='text'
                text={''}
              />
              <Space bottom={20} />
              <ButtonCommon size='S' color='gray600' backgroundColor='gray300' >
                <TypoCommon typographyType="st5">
                  문자 다시 받기
                </TypoCommon>
              </ButtonCommon>
            </div>
          </Container>
      </div>
    </div>
  )
}

export default Certified

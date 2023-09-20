import Container from '@/common/components/container/Container'
import React from 'react'
import styles from '@/join/style/join.module.scss'
import certifiedStyle from '@/join/style/certified.module.scss'
import TypoCommon from '@/common/components/typography/TypoCommon'
import completeStyle from '@/join/settingCertified/settingCertified.module.scss'
import Dot from '@/common/components/dot/Dot'
import Space from '@/common/components/space/Space'
import Image from 'next/image'
import arrowIcon from '@/public/icon/arrowLeft.svg'

// 2차 비밀번호 설정 페이지
const SettingCertified = () => {
  const arr = [...Array(9).keys()];
  return (
    <div className={styles.wrapper}>
      <div className={certifiedStyle.content}>
        <Container
          position='flex-col'
          justifyContent='flex-start'
          alignContent='center'
        >
          <Space bottom={40} />
          <TypoCommon typographyType='t5'>
            비밀 번호를 설정해주세요
          </TypoCommon>
          <div className={completeStyle.pwdBox}>
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </div>
          <div className={completeStyle.bottomBox}>
            {arr.map((item, i) => {
              return (
                <div key={i} className={completeStyle.numItem}>
                  <TypoCommon typographyType='t4'>
                    {item}
                  </TypoCommon>
                </div>
              )
            })}
              <div className={completeStyle.numItem}>
                  <TypoCommon typographyType='t4'>
                    9
                  </TypoCommon>
                </div>
                <div className={completeStyle.numItem}>
                  <Image className={completeStyle.ArrowIcon} src={arrowIcon} alt='지우기 버튼' />
                </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default SettingCertified

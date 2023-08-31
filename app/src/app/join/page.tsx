'use client'
import Container from '@/common/components/container/Container'
import InputCommon from '@/common/components/input/InputCommon'
import React, { useState } from 'react'
import styles from '@/app/join/style/join.module.scss'
import InputLabelAnimation from '@/common/components/input/InputLabelAnimation'

/** 회원 가입 페이지 */
const Join = () => {
  const [text, setText] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Container
          position='flex-col'
          justifyContent='center'
        >
          <InputLabelAnimation id='input' onChange={(e) => onChange(e)} text={text} />
          {/* <InputCommon /> */}
        </Container>
      </div>
    </div>
  )
}

export default Join

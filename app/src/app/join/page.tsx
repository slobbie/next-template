'use client'
import Container from '@/common/components/container/Container'
import InputCommon from '@/common/components/input/InputCommon'
import React, { useRef, useState } from 'react'
import styles from '@/app/join/style/join.module.scss'
import InputLabelAnimation from '@/common/components/input/InputLabelAnimation'
import TypoCommon from '@/common/components/typography/TypoCommon'
import Space from '@/common/components/space/Space'

/** 회원 가입 페이지 */
const Join = () => {
  const [mbrNm, setMbrNm] = useState<string>('')
  const [mbrPhoneNum, setMbrPhoneNum] = useState<string>('')
  const [isPhoneCom, setIsPhoneCom] = useState<boolean>(false)
  const [phoneCom, setPhoneCom] = useState<string>('')
  const [isMbrNm, setIsMbrNm] = useState(false)
  const [isSSNum, setIsSsNum] = useState(false)
  const mbrNmInputRef = useRef<HTMLInputElement>(null)
  const phoneComInputRef = useRef<HTMLInputElement>(null)
  const ssNumInputRef = useRef<HTMLInputElement>(null)

  const [title, setTitle] = useState<string>('휴대폰 번호를 알려주세요')

  const [ssNum, setSsNum] = useState('')


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch(e.target.id) {
      case 'mbrNm':
        setMbrNm(e.target.value)
        break
      case 'mbrPhoneNum':
        setMbrPhoneNum(e.target.value)
        break
      case 'phoneCom':
        setPhoneCom(e.target.value)
        break
      case 'ssNum':
        setSsNum(e.target.value)
    }
  }

  const [ttt, setTTT] = useState(styles['inputBox'])
  const [sss, setSSS] = useState(styles['inputBox'])

  const currentStyle = (pId: string) => {
    switch(pId) {
      case 'mbrPhoneNum':
        return setTTT(styles['boxDown'])
      case 'phoneCom':
        setTTT(styles['boxDown2'])
        setSSS(styles['boxDown'])
        return
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      switch(e.currentTarget.id) {
        case 'mbrPhoneNum':
          setIsPhoneCom(true)
          setTimeout(() => {
            phoneComInputRef.current?.focus()
          }, 20)
          currentStyle(e.currentTarget.id)
          setTitle('어떤 통신사를 쓰고 있나요?')
          break
        case 'phoneCom':
          setIsMbrNm(true)
          setTimeout(() => {
            mbrNmInputRef.current?.focus()
          }, 20)
          currentStyle(e.currentTarget.id)
          setTitle('이름을 알려주세요')
          break
        case 'mbrNm':
            setIsSsNum(true)
            setTimeout(() => {
              ssNumInputRef.current?.focus()
            }, 20)
            currentStyle(e.currentTarget.id)
            setTitle('주민등록 번호를 알려주세요')
            break

      }
    }
  }




  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Container
          position='flex-col'
          justifyContent='flex-start'
          alignContent='flex-start'
        >
          <Space bottom={40} />
          <TypoCommon
            typographyType='t1'
            textAlign='left'
          >
            {title}
          </TypoCommon>
          <Space bottom={80} />
          {
            isSSNum &&
            <div className={styles.inputBox}>
              <InputLabelAnimation
                ref={ssNumInputRef}
                label='주민등록번호'
                id='mbrNm'
                text={ssNum}
                onKeyDown={(e) => onKeyDown(e)}
                onChange={(e) => onChange(e)}
                />
            </div>
          }
          {
            isMbrNm &&
            <div className={styles.inputBox}>
              <InputLabelAnimation
                ref={mbrNmInputRef}
                label='이름'
                id='mbrNm'
                text={mbrNm}
                onKeyDown={(e) => onKeyDown(e)}
                onChange={(e) => onChange(e)}
                />
            </div>
          }
           {
            isPhoneCom &&
            <div className={sss}>
              <InputLabelAnimation
                ref={phoneComInputRef}
                label='통신사'
                id='phoneCom'
                text={phoneCom}
                onKeyDown={(e) => onKeyDown(e)}
                onChange={(e) => onChange(e)}
                />
            </div>
          }
          <div className={ttt}>
            <InputLabelAnimation
              // id='mbrNm'
              id='mbrPhoneNum'
              onKeyDown={(e) => onKeyDown(e)}
              label='핸드폰 번호'
              onChange={(e) => onChange(e)}
              text={mbrPhoneNum}
              />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Join

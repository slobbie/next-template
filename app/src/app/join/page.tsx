'use client'
import Container from '@/common/components/container/Container'
import React, {useRef, useState } from 'react'
import styles from '@/app/join/style/join.module.scss'
import InputLabelAnimation from '@/common/components/input/InputLabelAnimation'
import TypoCommon from '@/common/components/typography/TypoCommon'
import Space from '@/common/components/space/Space'
import ButtonCommon from '@/common/components/button/ButtonCommon'
import clearIcon from '@/public/icon/clear.svg'
import SelectCommon from '@/common/components/select/SelectBottomSheet'
interface memberInfoInterface {
  mbrNm: string
  mbrPhoneNum: string
  phoneCom: string
  ssNum: string
}

interface inputToggleInterface {
  mbrNm: boolean
  mbrPhoneNum: boolean
  phoneCom: boolean
  ssNum: boolean
}

/** 회원 가입 페이지 */
const Join = () => {
  const mbrNmInputRef = useRef<HTMLInputElement>(null) // 멤버이름 ref
  const phoneComInputRef = useRef<HTMLInputElement>(null) // 통신사 ref
  const ssNumInputRef = useRef<HTMLInputElement>(null) // 주민번호 ref
  // 상단 타이틀 상태
  const [title, setTitle] = useState<string>('휴대폰 번호를 알려주세요')

  // 회원가입 인풋 상태 관리
  const [memberInfo, setMemberInfo] = useState<memberInfoInterface>({
    mbrNm: '',
    mbrPhoneNum: '',
    phoneCom: '',
    ssNum: '',
  })

  // 회원가입 인풋 상태 관리
  const [trigger, setTrigger] = useState<inputToggleInterface>(
    {
      mbrNm: false,
      mbrPhoneNum: false,
      phoneCom: false,
      ssNum: false,
  })

  // 셀렉트 박스 토글 상태
  const [isActive, setIsActive] = useState<boolean>(false)

  // 핸드폰 번호 인풋 스타일
  const [mbrPhoneNumStyle, setMbrPhoneNumStyle] = useState(styles['inputBox'])
  // 통신사 인풋 스타일
  const [phoneComStyle, setPhoneComStyle] = useState(styles['inputBox'])
  // 이름 인풋 스타일
  const [mbrNmStyle, setMbrNmStyle] = useState(styles['inputBox'])

  // 인풋 온체인지 이벤트
  const onChangeMemberInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberInfo((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value
      }
    })
  }

  const restInput = (id: string) => {
    setMemberInfo((prev) => {
      return {
        ...prev,
        [id]: ''
      }
    })
  }

  // 인풋 스타일 이벤트
  const currentStyle = (pId: string) => {
    switch(pId) {
      case 'mbrPhoneNum':
        return setMbrPhoneNumStyle(styles['boxDown'])
      case 'phoneCom':
        setMbrPhoneNumStyle(styles['boxDown2'])
        setPhoneComStyle(styles['boxDown'])
        return
        case 'mbrNm':
        setMbrPhoneNumStyle(styles['boxDown3'])
        setPhoneComStyle(styles['boxDown2'])
        setMbrNmStyle(styles['boxDown'])
        return

    }
  }

  // 엔터 이벤트 콜벡
  const keyDownCallback = (pId: string, pRef?: React.RefObject<HTMLInputElement> | null) => {
    setTrigger((prev) => {
      return {
        ...prev,
        [pId]: true
      }
    })
    if (pRef) {
      setTimeout(() => {
        pRef?.current?.focus()
      }, 20)
    }
    currentStyle(pId)
  }

  // 엔터 이벤트
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const inputId = e.currentTarget.id
      switch(inputId) {
        case 'mbrPhoneNum':
            keyDownCallback(inputId, phoneComInputRef)
            setTitle('어떤 통신사를 쓰고 있나요?')
          break
        // case 'phoneCom':
        //     keyDownCallback(inputId, mbrNmInputRef)
        //     setTitle('이름을 알려주세요')
        //   break
        case 'mbrNm':
            keyDownCallback(inputId, ssNumInputRef)
            setTitle('주민등록 번호를 알려주세요')
            break
        case 'ssNum':
            keyDownCallback(inputId)
            setTitle('입력하신 정보가맞으신가요?')
          break
      }
    }
  }

  const ssNumData = [
    {
      id: '',
      value: 'SKT'
    },
    {
      id: '',
      value: 'KT'
    },
    {
      id: '',
      value: 'LG U+'
    },
    {
      id: '',
      value: 'SKT 알뜰폰'
    },
    {
      id: '',
      value: 'KT 알뜰폰'
    },
    {
      id: '',
      value: 'LG U+ 알뜰폰'
    },
  ]

  // 통신사 셀렉트
  const onSelectItemHandler = (selectItem: string, pId?: string) => {
    setMemberInfo((prev) => {
      return {
        ...prev,
        [pId as string]: selectItem
      }
    })
    keyDownCallback(pId as string, mbrNmInputRef)
    setTitle('이름을 알려주세요')
    setIsActive((prev) => !prev)
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
            typographyType='t5'
            textAlign='left'
          >
            {title}
          </TypoCommon>
          <Space bottom={80} />
          {
            trigger.mbrNm &&
            <div className={styles.inputBox}>
              <InputLabelAnimation
                ref={ssNumInputRef}
                label='주민등록번호'
                id='ssNum'
                text={memberInfo.ssNum}
                onKeyDown={(e) => onKeyDown(e)}
                onChange={(e) => onChangeMemberInfo(e)}
                />
            </div>
          }
          {
            trigger.phoneCom &&
            <div className={mbrNmStyle}>
              <InputLabelAnimation
                ref={mbrNmInputRef}
                label='이름'
                id='mbrNm'
                text={memberInfo.mbrNm}
                onKeyDown={(e) => onKeyDown(e)}
                onChange={(e) => onChangeMemberInfo(e)}
                />
            </div>
          }
           {
            trigger.mbrPhoneNum &&
            <div style={{
              position: 'relative',
              top: -12
            }} className={phoneComStyle}>
              <SelectCommon
                id='phoneCom'
                ref={phoneComInputRef}
                title='통신사'
                listTitle='통신사를 선택해주세요'
                data={ssNumData}
                isActive={isActive}
                selectItem={onSelectItemHandler}
              />
            </div>
          }
          <div className={mbrPhoneNumStyle}>
            <InputLabelAnimation
              id='mbrPhoneNum'
              onKeyDown={(e) => onKeyDown(e)}
              label='핸드폰 번호'
              onChange={(e) => onChangeMemberInfo(e)}
              text={memberInfo.mbrPhoneNum}
              icon={clearIcon}
              iconCallback={() => restInput('mbrPhoneNum')}
              />
          </div>
          {trigger.ssNum &&
           <div className={styles.buttonBox}>
              <ButtonCommon>
                다음
              </ButtonCommon>
            </div>
          }
        </Container>
      </div>
    </div>
  )
}

export default Join

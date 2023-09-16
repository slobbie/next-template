'use client'
import Container from '@/common/components/container/Container'
import React, {useRef, useState } from 'react'
import styles from '@/app/join/style/join.module.scss'
import InputLabelAnimation from '@/common/components/input/InputLabelAnimation'
import TypoCommon from '@/common/components/typography/TypoCommon'
import Space from '@/common/components/space/Space'
import ButtonCommon from '@/common/components/button/ButtonCommon'
import clearIcon from '@/public/icon/clear.svg'
import Dot from '@/common/components/dot/Dot'
import { inputToggleInterface, memberInfoInterface } from '@/join/interface/join.interface'
import BottomSheetCustom from '@/common/components/bottomSheet/BottomSheetCustom'
import CheckBox from '@/common/components/checkBox/CheckBox'
import BottomSheetList from '@/common/components/bottomSheet/BottomSheetList'
import SelectBottomSheet from '@/join/components/select/SelectBottomSheet'


/** 회원 가입 페이지 */
const Join = () => {
  const mbrNmInputRef = useRef<HTMLInputElement>(null) // 멤버이름 ref
  const phoneComInputRef = useRef<HTMLInputElement>(null) // 통신사 ref
  const ssNumInputRef = useRef<HTMLInputElement>(null) // 주민번호 ref
  const ssNumBackInputRef = useRef<HTMLInputElement>(null) // 주민번호 ref
  // 상단 타이틀 상태
  const [title, setTitle] = useState<string>('휴대폰 번호를 알려주세요')

  // 회원가입 인풋 상태 관리
  const [memberInfo, setMemberInfo] = useState<memberInfoInterface>({
    mbrNm: '',
    mbrPhoneNum: '',
    phoneCom: '',
    ssNum: '',
    ssNumBack: ''
  })

  const [errorLog, setErrorLog] = useState<string>('')

  // 회원가입 인풋 상태 관리
  const [trigger, setTrigger] = useState<inputToggleInterface>(
    {
      mbrNm: false,
      mbrPhoneNum: false,
      phoneCom: false,
      ssNum: false,
      ssNumBack: false
  })

  // 통신사 셀렉트 박스 토글 상태
  const [isSsNumActive, setIsSsNumActive] = useState<boolean>(false)
  // 약관 동의 바텀시트 상태
  const [isAgreeActive, setIsAgreeActive] = useState<boolean>(false)
  // 핸드폰 번호 인풋 스타일
  const [mbrPhoneNumStyle, setMbrPhoneNumStyle] = useState(styles['inputBox'])
  // 통신사 인풋 스타일
  const [phoneComStyle, setPhoneComStyle] = useState(styles['inputBox'])
  // 이름 인풋 스타일
  const [mbrNmStyle, setMbrNmStyle] = useState(styles['inputBox'])

  // 인풋 온체인지 이벤트
  const onChangeMemberInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
      const regex: RegExp = /^[0-9]*$/;

      if ((e.target.id === 'ssNum'  || e.target.id === 'ssNumBack' || e.target.id === 'mbrPhoneNum') && (!regex.test(e.target.value))) {
        return
      } else {
        setMemberInfo((prev) => {
          return {
            ...prev,
            [e.target.id]: e.target.value
          }
        })
      }
  }

  // input 리셋 이벤트 함수
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
        setPhoneComStyle(styles['boxDown26'])
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

  // TODO: 엔터 이벤트때 인풋 유효성 검사 로직을 넣어서 하단에 에러 로그 넣어주기
  // 엔터 이벤트
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const inputId = e.currentTarget.id
      switch(inputId) {
        case 'mbrPhoneNum':
            keyDownCallback(inputId, phoneComInputRef)
            setTitle('어떤 통신사를 쓰고 있나요?')
            setIsSsNumActive(true)
          break
        case 'mbrNm':
            keyDownCallback(inputId, ssNumInputRef)
            setTitle('주민등록 번호를 알려주세요')
            break
        case 'ssNumBack':
            keyDownCallback(inputId)
            setTitle('입력하신 정보가맞으신가요?')
          break
        case 'ssNum':
            keyDownCallback(inputId, ssNumBackInputRef)
          break
      }
      inputValid(inputId, e.currentTarget.value)
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

  // 통신사 바텀시트
  const showSsNumBottomSheet = () => {
    setIsSsNumActive((prev) => !prev)
  }

  // 약관동의 바텀시트
  const showAgreeBottomSheet = () => {
    setTitle(`${memberInfo.mbrNm}님 정보가 맞나요?`)
    setIsAgreeActive((prev) => !prev)
  }

  // 통신사 셀렉트
  const onSelectItemHandler = (selectItem: string, pId?: string) => {
    setMemberInfo((prev) => {
      return {
        ...prev,
        [pId as string]: selectItem
      }
    })
    currentStyle(pId as string)
    keyDownCallback(pId as string, mbrNmInputRef)
    setIsSsNumActive((prev) => !prev)
    setTitle('이름을 알려주세요')
  }

  // 버튼 비활성 체크 함수
  const nextStepValid = (pValue: memberInfoInterface) => {
    const {mbrNm, mbrPhoneNum, phoneCom, ssNum, ssNumBack} = pValue;
    const isMbrNm = mbrNm === '' || mbrNm.length < 1;
    const isMbrPhoneNum = mbrPhoneNum === '' || mbrPhoneNum.length < 10;
    const isPhoneCom = phoneCom === '';
    const isSsNum = ssNum === '' || ssNum.length < 6;
    const isSsNumBack = ssNumBack === '' || ssNumBack.length < 1;

    return isMbrNm || isMbrPhoneNum || isPhoneCom || isSsNum || isSsNumBack;
  }

  // 버튼 활성화 여부 상태
  const isButtonDisabled = nextStepValid(memberInfo);

  // 주민번호 점표시
  const dots = Array(6).fill(null).map((_, index) => (
    <Dot key={index} />
  ));

  // 사용자 인풋 유효성 검사
  const inputValid = (pInputId: string, pValue: string) => {
    const isMbrNm = pValue === '' || pValue.length < 1;
    const isMbrPhoneNum = pValue === '' || pValue.length < 10;
    const isPhoneCom = pValue === '';
    const isSsNum = pValue === '' || pValue.length < 6;
    const isSsNumBack = pValue === '' || pValue.length < 1;
    if (pInputId === 'mbrNm' && isMbrNm) {
      setErrorLog('이름을 확인해주세요.')
      return
    }
    else if (pInputId === 'mbrPhoneNum' && isMbrPhoneNum) {
      setErrorLog('핸드폰 번호를 확인해주세요.')
      return
    }
    else if (pInputId === 'phoneCom' && isPhoneCom) {
      setErrorLog('통신사 정보를 확인해주세요.')
      return
    }
    else if (pInputId === 'ssNum' && isSsNum) {
      setErrorLog('주민등록 번호를 확인해주세요.')
      return
    }
    else if (pInputId === 'ssNumBack' && isSsNumBack) {
      setErrorLog('주민등록 번호를 확인해주세요.')
      return
    }
     else {
      setErrorLog('')
    }
  }

  const joinNextStepHandler = () => {
    console.log('핸드폰 인증으로 이동')
    setIsAgreeActive((prev) => !prev)
  }

  return (
    <>
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
            <Space bottom={60} />
            {
              trigger.mbrNm &&
              <div className={styles.ssNumBox}>
                <div className={styles.inputRow}>
                  <InputLabelAnimation
                    ref={ssNumInputRef}
                    label='주민등록번호'
                    id='ssNum'
                    maxLength={6}
                    type='text'
                    text={memberInfo.ssNum}
                    onKeyDown={(e) => onKeyDown(e)}
                    onChange={(e) => onChangeMemberInfo(e)}
                  />
                </div>
                <div className={styles.inputRow}>
                 <div className={styles.inputDotBox}>
                   <div className={styles.inputDotBoxRow}>
                      <InputLabelAnimation
                        id='ssNumBack'
                        type='text'
                        maxLength={1}
                        ref={ssNumBackInputRef}
                        text={memberInfo.ssNumBack}
                        onKeyDown={(e) => onKeyDown(e)}
                        onChange={(e) => onChangeMemberInfo(e)}
                      />
                   </div>
                    {dots}
                 </div>
                </div>
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
                  icon={clearIcon}
                  iconCallback={() => restInput('mbrNm')}
                  />
              </div>
            }
             {
              trigger.mbrPhoneNum &&
              <div
                className={phoneComStyle}>
                  <SelectBottomSheet
                    id='phoneCom'
                    ref={phoneComInputRef}
                    title='통신사'
                    selectedValue={memberInfo.phoneCom}
                    selectItem={showSsNumBottomSheet}
                  />
              </div>
            }
            <div className={mbrPhoneNumStyle}>
              <InputLabelAnimation
                id='mbrPhoneNum'
                onKeyDown={(e) => {
                  onKeyDown(e)
                }}
                label='핸드폰 번호'
                type='text'
                onChange={(e) => onChangeMemberInfo(e)}
                text={memberInfo.mbrPhoneNum}
                icon={clearIcon}
                iconCallback={() => restInput('mbrPhoneNum')}
                />
            </div>
            {errorLog.length > 0 &&
              <div className={styles.errorLogBox}>
                <TypoCommon
                  typographyType='st2'
                  textAlign='left'
                  color='red500'
                >
                {errorLog}
                </TypoCommon>
                <Space top={10} />
              </div>
              }
            {(trigger.ssNumBack && errorLog.length <= 0) &&
             <div className={styles.buttonBox}>
                <ButtonCommon
                  onClick={showAgreeBottomSheet}
                  disabled={isButtonDisabled}
                >
                  다음
                </ButtonCommon>
              </div>
            }
          </Container>
        </div>
      </div>
      {isSsNumActive &&
        <BottomSheetList
          id='phoneCom'
          data={ssNumData}
          listTitle='통신사를 선택해주세요'
          selectItem={onSelectItemHandler}
        />
      }
      {isAgreeActive &&
        <BottomSheetCustom
        id=''
        listTitle='패스트 뱅크를 쓰려면 동의가 필요해요'
        selectItem={showAgreeBottomSheet}
        >
          <div className={styles.agreeBox}>
            <CheckBox id="필수약관" label='필수약관'/>
           <div className={styles.bottomBtnBox}>
              <ButtonCommon onClick={joinNextStepHandler}>
               동의
              </ButtonCommon>
           </div>
          </div>
        </BottomSheetCustom>
      }
    </>
  )
}

export default Join

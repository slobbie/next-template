import React from 'react'
import styles from '@/common/components/checkBox/checkBox.module.scss'
import Image, { StaticImageData } from 'next/image'

interface dataInterface {
  id: string
  value: string
}

interface CheckBoxInterface {
  id: string
  label: string
  isButton?: boolean
  buttonIcon?: StaticImageData
}

// 체크박스
const CheckBox = ({
  id,
  label,
  isButton,
  buttonIcon
}:CheckBoxInterface) => {
  return (
    <div className={styles.checkBoxWrap}>
      <input id={id} type='checkbox'></input>
      <label htmlFor=''>{label}</label>
      {isButton &&
        <button>
          <Image
            src={buttonIcon as StaticImageData}
            alt='체크박스 버튼 이미지'
          />
        </button>
      }
    </div>
  )
}

export default CheckBox

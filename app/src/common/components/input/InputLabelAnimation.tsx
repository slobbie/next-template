import React, { InputHTMLAttributes, Ref, forwardRef } from 'react'
import styles from '@/common/components/input/InputLabelAnimation.module.scss'

interface InputLabelNonBorderProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string
  id: string
  label: string
}

/** 라벨 애니메이션 인풋 */
const InputLabelAnimation = forwardRef( function InputLabelNonBorder
  (props: InputLabelNonBorderProps, forwardRef: Ref<HTMLInputElement>){
    const {text, id, label, ...rest} = props
  return (
    <div className={styles.wrap}>
        <p className={styles.p}>
          <input ref={forwardRef} id={id} {...rest} value={text} autoComplete='' required />
          <label htmlFor={id}>{label}</label>
        </p>
    </div>
  )
})

export default InputLabelAnimation

import React, { InputHTMLAttributes, Ref, forwardRef } from 'react'
import styles from '@/common/components/input/InputLabelAnimation.module.scss'

interface InputLabelNonBorderProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string
  id: string
}
/** 라벨 애니메이션 인풋 */
const InputLabelAnimation = forwardRef( function InputLabelNonBorder
  (props: InputLabelNonBorderProps, forwardRef: Ref<HTMLInputElement>){
    const {text, id, ...rest} = props
  return (
    <div className={styles.wrap}>
        <p className={styles.p}>
          <input id={id} {...rest} value={text} autoComplete='' required />
          <label htmlFor={id} >통신사</label>
        </p>
    </div>
  )
})

export default InputLabelAnimation

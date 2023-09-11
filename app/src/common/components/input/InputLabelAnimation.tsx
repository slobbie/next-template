import React, { InputHTMLAttributes, Ref, forwardRef } from 'react'
import styles from '@/common/components/input/InputLabelAnimation.module.scss'
import Image, { StaticImageData } from 'next/image'


interface InputLabelNonBorderProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string
  id: string
  label?: string
  icon?: StaticImageData
  iconCallback?: () => void
}

/** 라벨 애니메이션 인풋 */
const InputLabelAnimation = forwardRef( function InputLabelNonBorder
  (props: InputLabelNonBorderProps, forwardRef: Ref<HTMLInputElement>){
  const {text, id, label, iconCallback, icon, alt, ...rest} = props
  return (
    <div className={styles.wrap}>
        <p className={styles.p}>
          <input ref={forwardRef} id={id} {...rest} value={text} autoComplete='' required />
          {label && <label htmlFor={id}>{label}</label>}
        </p>
        {icon && text &&
            <div className={styles.iconBox}  onClick={iconCallback}>
              <Image className={styles.icon} src={icon} alt={id} />
            </div>
          }
    </div>
  )
})

export default InputLabelAnimation

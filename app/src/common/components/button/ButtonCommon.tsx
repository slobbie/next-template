import React, { ButtonHTMLAttributes, Ref, forwardRef, useMemo } from 'react'
import styles from '@/common/components/button/ButtonCommon.module.scss'

type size = 'S' | 'M' | 'L'

interface ButtonCommonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: size
  children?: React.ReactNode
}

/**
 * 기본 버튼
 */
const ButtonCommon = forwardRef(function ButtonCommon
  (props: ButtonCommonProps, forwardRef: Ref<HTMLButtonElement>){

  const {size = 'M', children, ...rest} = props

  return (
    <button
      ref={forwardRef}
      className={`${styles.button} ${styles[size]}`}
      {...rest}
    >
      {children}
    </button>
  )
})

export default ButtonCommon

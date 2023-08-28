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

  const buttonStyle = useMemo(() => {
    return (size: size) => {
      switch (size) {
        case 'S':
          return styles.s
        case 'M':
          return styles.m
        case 'L':
          return styles.l
      }
    }
  }, [])


  return (
    <button
      ref={forwardRef}
      className={`${styles.button} ${buttonStyle(size)}`}
      {...rest}
    >
      {children}
    </button>
  )
})

export default ButtonCommon

import React, { ButtonHTMLAttributes, Ref, forwardRef, useMemo } from 'react'
import styles from '@/common/components/button/ButtonCommon.module.scss'
import colors from '@/styles/colors.module.scss'

type size = 'S' | 'M' | 'L'

interface ButtonCommonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: size
  color?: string
  backgroundColor?: string
  children?: React.ReactNode
}

/**
 * 기본 버튼
 */
const ButtonCommon = forwardRef(function ButtonCommon
  (props: ButtonCommonProps, forwardRef: Ref<HTMLButtonElement>){

  const {size = 'M', color, backgroundColor, children, ...rest} = props

  const styleMemo = useMemo(() =>
  ({
     color: color ? colors[color as string] : colors['gray100'],
     backgroundColor: backgroundColor? colors[backgroundColor as string] : colors['primary-color']
  }), [color])


  return (
    <button
      ref={forwardRef}
      style={styleMemo}
      className={`${styles.button} ${styles[size]}`}
      {...rest}
    >
      {children}
    </button>
  )
})

export default ButtonCommon

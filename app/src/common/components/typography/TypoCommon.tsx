import React, { useMemo } from 'react'
import colors from '@/styles/colors.module.scss'
import styles from '@/common/components/typography/TypoCommon.module.scss'

export const typography = {
  t1: 't1',
  t2: 't2',
  t3: 't3',
  t4: 't4',
  t5: 't5',
  t6: 't6',
  t7: 't7',
  t8: 't8',
  t9: 't9',
  st1: 'st1',
  st2: 'st2',
  st3: 'st3',
  st4: 'st4',
  st5: 'st5',
  st6: 'st6',
} as const

export type typographyType = typeof typography[keyof typeof typography]
export type colorType = typeof colors[keyof typeof colors]

export const fontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
} as const

export type fontWeightType = typeof fontWeight[keyof typeof fontWeight]

interface TypoCommonProps {
  children: React.ReactNode
  typographyType: typographyType
  fontWeight?: fontWeightType
  color?: colorType
  textAlign?: 'center' | 'start' | 'end' | 'left' | 'right' | 'center'
}

/**
 * 기본 단위로 사용되는 텍스트
 */
const TypoCommon = ({
  children,
  typographyType,
  fontWeight = '500',
  color = colors['gray600'],
  textAlign = 'left'
}: TypoCommonProps) => {

  const styleMemo = useMemo(() =>
  ({
    color: color,
    fontWeight: fontWeight,
    textAlign: textAlign
  }), [fontWeight, color, textAlign])

  return (
    <span
      className={`${styles.typography} ${styles[typographyType]}`}
      style={styleMemo}
    >
      {children}
    </span>
  )
}

export default TypoCommon

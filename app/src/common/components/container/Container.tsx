import React, { useMemo } from 'react'
import styles from '@/common/components/container/Container.module.scss'

type positionType = 'flex-row'| 'flex-col'
type justifyContent = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
type alignContent =  'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'stretch'

interface ContainerProps  {
  children: React.ReactNode
  position: positionType
  justifyContent?: justifyContent
  alignContent?: alignContent
}

/**
 * 기본 컨테이터 레이아웃 요소
 *
 * @type 가로 배치 : justifyContent = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
 *
 * @type 세로 배치 : alignContent =  'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'stretch'
 */
const Container = ({
    children,
    position,
    justifyContent = 'center',
    alignContent = 'center',
}: ContainerProps) => {

  const styleMemo = useMemo<React.CSSProperties>(() =>
  ({
    justifyContent: justifyContent,
    alignItems: alignContent
  }), [justifyContent, alignContent])

  return (
    <div
      className={styles[position]}
      style={styleMemo}
    >
      {children}
    </div>
  )
}

export default Container

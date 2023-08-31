import React from 'react'
import styles from '@/common/components/input/InputCommon.module.scss'

interface InputCommonProps {

}

/** 기본 인풋 요소 */
const InputCommon = ({}: InputCommonProps) => {
  return (
    <input className={styles.inputCommonStyle} />
  )
}

export default InputCommon

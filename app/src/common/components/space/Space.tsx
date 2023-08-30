import React, { useMemo } from 'react'

interface SpaceProps {
  top?: number
  right?: number
  left?: number
  bottom?: number
}

const Space = (props: SpaceProps) => {
  const {top, bottom, right, left} = props

  const spaceStyle = useMemo(() => ({
    marginTop: top ? top + 'px' : 0,
    marginBottom: bottom ? bottom + 'px' : 0,
    marginRight: right ? right + 'px' : 0,
    marginLeft: left ? left + 'px' : 0
  }), [top, bottom, right, left])

  return (
    <div style={spaceStyle}>
    </div>
  )
}

export default Space

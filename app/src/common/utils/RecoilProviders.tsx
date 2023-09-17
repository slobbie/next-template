"use client"
import React from 'react'
import { RecoilRoot } from 'recoil';


interface RecoilProvidersInterface {
  children: React.ReactNode
}

const RecoilProviders = ({
  children
}: RecoilProvidersInterface) => {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  )
}

export default RecoilProviders

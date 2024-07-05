import React, { ReactNode } from 'react'
import HeaderComponent from './header/Header'
import FooterComponent from './footer/Footer'

export type LayoutProps = {
    children: ReactNode;
  }; 

const layout = ({children}: LayoutProps) => {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  )
}

export default layout

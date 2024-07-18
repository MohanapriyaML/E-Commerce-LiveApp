import React, { ReactNode } from 'react'
import HeaderComponent from './header/Header'
import FooterComponent from './footer/Footer'

export type LayoutProps = {
    children: ReactNode;
  }; 

const HomePageLayout = ({children}: LayoutProps) => {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  )
}

export default HomePageLayout

"use client";
import React, { ReactNode } from 'react';

import useCollection from '@/service/api';
import FooterComponent from './footer/Footer';
import HeaderComponent from './header/Header';

export type LayoutProps = {
  children: ReactNode;
};

const HomePageLayout: React.FC<LayoutProps> = ({ children }) => {
  const { collection }:any = useCollection();
  
  const headerLogo = collection.length > 0 ? collection[0].attributes.header : null;

  console.log('Header Logo', headerLogo);

  return (
    <>
      <HeaderComponent headerData={headerLogo} />
      {children}
      <FooterComponent />
    </>
  );
};

export default HomePageLayout;

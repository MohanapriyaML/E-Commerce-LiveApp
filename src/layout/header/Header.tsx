"use client";
import React from "react";
import { MenuIcons, MenusItems, Warrper } from "./Header.styled";
import UiImage from 'genpixels_ui_components/src/ui-components/image/UiImage'

const HeaderComponent = ({ headerData }: any) => {
  console.log('headerData', headerData);

  if (!headerData) {
    return null;
  }

  const { NavMenu, NavIcon, image } = headerData;
  console.log('logo', image);
  console.log('Menu', NavMenu);
  console.log('Icon', NavIcon);

  const imagedata = image?.data?.[0]?.attributes?.url;
  const {Home,Shop, About, Contact} = NavMenu;

  return (
    <Warrper>
      <UiImage src={imagedata} height={41} width={185} alt="logo"></UiImage>
      <MenusItems href='#'>
        <li>{Home}</li>
        <li>{About}</li>
        <li>{Shop}</li>
        <li>{Contact}</li>
      </MenusItems>
      <MenuIcons>
        <li>Icon1</li>
        <li>Icon2</li>
        <li>Icon3</li>
        <li>Icon4</li>
      </MenuIcons>
    </Warrper>
  );
};

export default HeaderComponent;

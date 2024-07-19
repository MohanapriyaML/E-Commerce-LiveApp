"use client";
import React from "react";
import {  MenuIcons, MenusItems, Warrper } from "./Header.styled";

const HeaderComponent = ({ headerData }:any) => {
  console.log('headerData', headerData);
  
  if (!headerData) {
    return null;
  }

  const { logo } = headerData;
  console.log('logo', logo);

  return (
    <Warrper>
      <MenusItems href='#'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
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

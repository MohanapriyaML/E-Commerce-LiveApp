"use client";
import React from "react";
import { LogoImage, MenuIcons, MenusItems, Warrper } from "./Header.styled";

const HeaderComponent = () => {
  return (
    <Warrper>
      <LogoImage src="images/Logo.png" alt="no logo" />
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

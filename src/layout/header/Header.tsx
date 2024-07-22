"use client";
import React, { useState } from "react";
import { LogoImage, MenuIcon, NavIcons, NavItems, Wrapper } from "./Header.styled";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartBold } from "react-icons/pi";
import Link from "next/link";

const HeaderComponent = ({ headerData }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  if (!headerData) {
    return null;
  }

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const { NavMenu, NavIcon, image } = headerData;
  const imagedata = image?.data?.[0]?.attributes?.url;

  const navItems = [
    { name: NavMenu.Home, href: "#" },
    { name: NavMenu.Shop, href: "#" },
    { name: NavMenu.About, href: "#" },
    { name: NavMenu.Contact, href: "#" },
  ];

  const navIcons = [
    { show: NavIcon.UserIcon, icon: <FaRegUser /> },
    { show: NavIcon.SearchIcon, icon: <IoSearch /> },
    { show: NavIcon.FavoriteIcon, icon: <FaRegHeart /> },
    { show: NavIcon.Cart, icon: <PiShoppingCartBold /> },
  ];

  return (
    <Wrapper>
      <LogoImage src={imagedata} alt="logo" />
      <NavItems isMobile={isMobile}>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </NavItems>
      <NavIcons isMobile={isMobile}>
        {navIcons.map(
          (item, index) => item.show && <li key={index}>{item.icon}</li>
        )}
      </NavIcons>
      <MenuIcon onClick={toggleMenu} />
    </Wrapper>
  );
};

export default HeaderComponent;

import Link from "next/link";
import styled from "styled-components";

export const Warrper = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px 10px 40px;
`;

export const LogoImage = styled.img`
  height: 100%;
  padding: 15px 40px;
`;

export const MenusItems = styled(Link)`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration:none;
  color:black;
`;

export const MenuIcons = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

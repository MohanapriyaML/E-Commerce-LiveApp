import breakpoints from "@/themes/breakpoints";
import { IoMenu } from "react-icons/io5";
import styled from "styled-components";
import { theme } from "@/themes/theme";


export type MenuProps = {
  isMobile?: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px 10px 40px;
  ${breakpoints.xs}{
   padding:0 100px 10px 10px;
  }
  ${breakpoints.sm}{
    padding:0 100px 10px 20px;
   }
  ${breakpoints.md}{
    padding: 0 100px 10px 30px; 
  }
  ${breakpoints.lg}{
    padding: 0 100px 10px 40px; 
  }
`;

export const LogoImage = styled("img")`
  height: 41px;
  width:185px;
  ${breakpoints.xs}{
    height:30px;
    width:150px;
  }
  ${breakpoints.sm}{
    height:35px;
    width:165px;
  }
  ${breakpoints.md}{
    height: 41px;
    width:185px;
  }
`;

export const NavItems = styled('div') <MenuProps>`
  display:flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
    a{
      text-decoration:none;
      color:${theme.colors.black};
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
    ${breakpoints.xs}{
      display: ${({ isMobile }) => (isMobile ? "block" : "none")};
      position:absolute;
      z-index:999;
      top:70px;
      background:${theme.colors.white};
      width:390px;
      left:0;
      a{
       font-size:16px;
       line-height: 44px;
       padding-left:4%;
      }
    }
    ${breakpoints.md}{
      display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
      position:static;
      top:0px;
      background:none;
      width:0px;
      a{
       font-size:16px;
      }
    }
    ${breakpoints.xl}{
      a{
       font-size:18px;
      }
    }
`;

export const NavIcons = styled.ul<MenuProps>`
  display: flex;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;
  li{
    font-size:20px;
    color:${theme.colors.black};
    cursor:pointer;
  }
  ${breakpoints.xs}{
    display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
    position:absolute;
    z-index:999;
    top:240px;
    padding-top:10px;
    background:${theme.colors.white};
    left:0;
    width:390px;
    li{
       font-size:16px;
       line-height: 44px;
       padding-left:4%;
       margin-bottom:20px;
    }
  }
  ${breakpoints.md}{
    display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
    position:static;
    top:0px;
    background:none;
    padding-left:250px;
    li{
       font-size:20px;
       margin-top:10px;
    }
  }
  ${breakpoints.xl}{
    padding-left:245px;
    li{
     font-size:20px;
    }
  }
`;

export const MenuIcon = styled(IoMenu)`
  ${breakpoints.xs} {
    display: block;
    position: absolute;
    right: 5%;
    font-size:25px;
  }
  ${breakpoints.md} {
    display: none;
    position:none;
  }
`;

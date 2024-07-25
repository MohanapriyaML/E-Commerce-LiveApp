import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import UiTypography from 'genpixels_ui_components/src/ui-components/typography/UiTypography'
import styled from "styled-components";

export const Footerwrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  ${breakpoints.xs} {
    grid-template-columns: 1fr;

  }
  ${breakpoints.md} {
    grid-template-columns: 1fr 1fr;
    column-gap:200px;
  }
  ${breakpoints.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    column-gap:0px;
  }
`
export const Maindiv = styled.div`
  padding: 20px 0px;
  img {
    margin-bottom: 70px;
  }
  .main-text{
    font-weight:600 !important;
    margin-top:20px !important;
  }
  .title-text{
    margin-bottom: 70px !important;
    color:${theme.colors.lightgrey} !important;
    font-size:14px !important;
    line-height:24px !important;
  }
  .button-text{
    font-weight:500 !important;
    border-bottom: 1.5px solid ${theme.colors.black} !important;
    margin-top:15px;
  }
  li {
    margin-top: 15px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    display:flex;
    gap:10px;
    input{
        border: none;
        border-bottom: 1.5px solid ${theme.colors.black};
        outline: none;
        padding: 5px 0;
        width: 100%;
        margin-top:10px;
    }
    ::placeholder {
    color:${theme.colors.lightgrey};
  }
  }
  ${breakpoints.xs}{
    img{
      margin-bottom:30px;
    }
    .title-text{
    margin-bottom:0px !important;
    }
  }
  ${breakpoints.md}{
    img{
      margin-bottom:40px;
    }
    .title-text{
    margin-bottom:30px !important;
    }
  }
`;
export const BottomFotter = styled('div')`
    margin-top:20px;
    ${breakpoints.xs}{
      margin-top:10px;
    }
    ${breakpoints.md}{
     margin-top:20px;
   }
`
export const TypoPara = styled(UiTypography)`
   font-size:14px !important;
   font-weight:400;
   line-height:24px;
   ${breakpoints.xs}{
     font-size:12px !important;
   }
   ${breakpoints.md}{
    font-size:14px !important;
  }
`
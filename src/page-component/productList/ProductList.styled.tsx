import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import UiButton from "genpixels_ui_components/src/ui-components/button/UiButton";
import UiTypography from "genpixels_ui_components/src/ui-components/typography/UiTypography";
import { BsViewList } from "react-icons/bs";
import { HiMiniSquares2X2, HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import styled from "styled-components";

export const FilterDiv = styled("div")`
   background:${theme.colors.lightpink};
   height:70px;
   margin-bottom:50px;
   display:flex;
   align-items:center;
   justify-content:space-between;
   ${breakpoints.xs}{
      flex-direction:column;
      height:100px;
      padding:15px;
   }
   ${breakpoints.sm}{
    flex-direction:row;
    height:70px;
    padding:0px;
   }
`
export const MaindDiv = styled("div")`
    display:flex;
    gap:10px;
`
export const SubDiv = styled("div")`
    display:flex;
    gap:10px;
    padding-right:6%;
    ${breakpoints.xs}{
      padding-left:5%;  
    }
    ${breakpoints.sm}{
        padding-right:6%;
        padding-left:0;
    }
`
export const TablePage = styled.span`
    border-left:2px solid ${theme.colors.lightgrey};
    margin-left:20px;
    padding: 3px 0 0 20px;
    font-size:14px;
    ${breakpoints.xs}{
        margin-left:10px;
     }
     ${breakpoints.lg}{
      margin-left:20px;
     }
`
export const TypoFilter = styled(UiTypography)`
    font-size:18px;
`
export const AdjustIcon = styled(HiOutlineAdjustmentsHorizontal)`
    font-size:23px;
    color:#000; 
`
export const MiniSquareIcon = styled(HiMiniSquares2X2)`
    font-size:23px;
    color:#000;
    margin:0px 0px 0px 20px; 
    ${breakpoints.xs}{
        margin:0px 0px 0px 10px;;
     }
     ${breakpoints.lg}{
      margin:0px 0px 0px 20px;
     }
`
export const ListViewIcon = styled(BsViewList)`
    font-size:23px;
    color:#000;
    margin:0px 0px 0px 20px; 
    ${breakpoints.xs}{
        margin:0px 0px 0px 10px;
     }
     ${breakpoints.lg}{
      margin:0px 0px 0px 20px;
     } 
`
export const ShowDiv = styled.div`
    font-size:16px;
    span{
        background:${theme.colors.white};
        color:${theme.colors.lightgrey};
        padding:10px;
        margin-left:10px;
    }
`
export const ShortByDiv = styled.div`
    font-size:16px;
    span{
        background:${theme.colors.white};
        color:${theme.colors.lightgrey};
        padding: 10px 50px 10px 20px;
        margin-left:10px;
    }
`

export const PaginationButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const PaginationButton = styled(UiButton)`
    padding: 10px 15px;
    margin: 0 5px;
    background-color: ${theme.colors.lightpink};
    color:${theme.colors.black};
    border: none;
    cursor: pointer;
    border-radius: 7px;
    font-size:12px;
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
    &:hover{
        background-color: ${theme.colors.lightpink};
        color:${theme.colors.black};
    }
`;

export const NumberButton = styled.span<{ active: boolean }>`
    padding: 10px 15px;
    margin: 0 5px;
    cursor: pointer;
    color: ${({ active }) => (active ? `${theme.colors.white}` : `${theme.colors.black}`)};
    background-color: ${({ active }) => (active ? `${theme.colors.brown}` : `${theme.colors.lightpink}`)};
    border-radius: 7px;
`;
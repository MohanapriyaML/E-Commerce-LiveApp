import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import UiButton from "genpixels_ui_components/src/ui-components/button/UiButton";
import UiTypography from "genpixels_ui_components/src/ui-components/typography/UiTypography";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    column-gap: 20px;
    ${breakpoints.xs}{
        flex-direction: column;
    }
    ${breakpoints.lg}{
        flex-direction: row;
    }
`

export const TableDiv = styled.div`
    width: 70%;
` 
export const CartDiv = styled.div`
    width: 30%;
    ${breakpoints.xs}{
        width: 100%;
    }
    ${breakpoints.lg}{
        width: 30%;
    }
`

export const SubDiv = styled.div`
    margin: 70px 0px;
`
export const TableData = styled.td`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.lightgrey};
    display: flex;
    align-items: center;
    text-align: center;
    padding: 12px 15px;
    img{
       height: 70px;
       width: 70px;
       margin-right: 10px;
       border-radius: 10px;
    }
    
`
export const SubData = styled.td`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    padding-left: 30px;
`
export const SubTableData = styled.td`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.lightgrey};
    padding-left: 10px;
    text-align: center;
`
export const QuantityControl = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${theme.colors.grey};
    button{
       border: none;
       padding: 15px;
       cursor: pointer;
       background: none;
       font-size: 20px;
       color: ${theme.colors.black};
    }
`;


export const MainTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 1em;
    text-align: left;
`;

export const TableHeadMain = styled.thead`
    text-align: center;
    background-color: ${theme.colors.lightpink};
`

export const TableHead = styled.th`
    font-family: Poppins;
    font-weight: 500;
    font-size: 16px;
    padding: 12px 15px;
    border-bottom: 1px solid ${theme.colors.lightpink};
    border-top: 1px solid ${theme.colors.lightpink};
`

export const DeleteIcon = styled(MdDelete)`
    font-size: 25px;
    margin-left: 50px;
    color: ${theme.colors.sandle};
`

export const CartTotalMain = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: ${theme.colors.lightpink};
    margin-top: 70px;
    height: 400px;
    padding: 0 15%;
`

export const TotalTypo = styled(UiTypography)`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: Poppins;
    font-weight: 600;
    font-size: 25px;
    padding-top: 25px;
`
export const ParaTypo = styled(UiTypography)`
    display: flex;
    text-align: center;
    justify-content: space-between;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    padding-top: 40px;
    span{
        color: ${theme.colors.lightgrey};
        font-weight: 400;
    }
`
export const ParaSubTypo = styled(UiTypography)`
    display: flex;
    text-align: center;
    justify-content: space-between;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    padding-top: 40px;
    span{
        font-size: 22px;
        color: ${theme.colors.sandle};
    }
`
export const CheckButton = styled(UiButton)`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid ${theme.colors.black};
    background: none;
    color: ${theme.colors.black};
    border-radius: 15px;
    width: 60%;
    padding: 15px 0;
    position: relative;
    top: 60px;
`

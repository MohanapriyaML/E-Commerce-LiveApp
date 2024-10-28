import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import UiButton from "genpixels_ui_components/src/ui-components/button/UiButton";
import UiTypography from "genpixels_ui_components/src/ui-components/typography/UiTypography";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    column-gap: 20px;
    ${breakpoints.xs} {
        flex-direction: column;
        padding: 0 2%;
    }
    ${breakpoints.lg} {
        flex-direction: row;
        padding: 0 6%;
    }
`;

export const TableDiv = styled.div`
    width: 100%;
    ${breakpoints.lg} {
        width: 70%;
    }
`;

export const CartDiv = styled.div`
    width: 100%;
    ${breakpoints.lg} {
        width: 30%;
    }
`;

export const SubDiv = styled.div`
    margin: 70px 0px;
    ${breakpoints.xs}{
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        width: 375px;
        margin: 30px 0px;
    }
    ${breakpoints.sm}{
        border: none;
        width: 100%;
        margin: 70px 0px;
        box-shadow: none;
        border-radius: 0;
    }
`;

export const MainTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 1em;
    text-align: left;

    @media (max-width: 390px) {
        display: block;
        > tbody > tr {
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;
            background-color: ${theme.colors.white};
            padding: 15px;
            border-radius: 10px;
            
        }
    }
`;

export const TableHeadMain = styled.thead`
    text-align: center;
    background-color: ${theme.colors.lightpink};

    @media (max-width: 390px) {
        display: none; /* Hide table header on mobile */
    }
`;

export const TableHead = styled.th`
    font-family: Poppins;
    font-weight: 500;
    font-size: 16px;
    padding: 12px 15px;
    border-bottom: 1px solid ${theme.colors.lightpink};
    border-top: 1px solid ${theme.colors.lightpink};
`;

export const TableData = styled.td`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.lightgrey};
    display: flex;
    align-items: center;
    padding: 12px 15px;

    img {
        height: 70px;
        width: 70px;
        margin-right: 10px;
        border-radius: 10px;
    }
    ${breakpoints.xs}{
        flex-direction: row;
        padding: 8px 0;
        margin-top: -50px;
        font-size: 10px;
        img{
          margin-top: 50px;
        }
    }
    ${breakpoints.sm}{
        font-size: 16px;
        text-align: center;
        margin-top: 0px;
        flex-direction: row;
        padding: 12px 15px;
        img{
          margin-top: 0px;
        }
    }
`;

export const SubTableData = styled.td`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.lightgrey};
    text-align: center;
    padding-left: 10px;
    ${breakpoints.xs}{
        margin-top: -50px;
        margin-left: 35px;
        font-size: 10px;
    }
    ${breakpoints.sm}{
        margin-top: 50px;
        margin-left: 0px;
        font-size: 16px;
    }
`;

export const SubData = styled.td`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    padding-left: 30px;
    ${breakpoints.xs}{
       visibility: hidden;
    }
    ${breakpoints.sm}{
        visibility: visible;
     }
`;

export const QuantityControl = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${theme.colors.grey};

    button {
        border: none;
        padding: 15px;
        cursor: pointer;
        background: none;
        font-size: 20px;
        color: ${theme.colors.black};
    }
    ${breakpoints.xs}{
        margin-top: 10px;
        width: 150px;
        position: relative;
        left: 80px;
        button{
            padding: 0px;
        }
    }
    ${breakpoints.sm}{
        margin-top: 0px;
        width: 100%;
        position: static;
        left: 0%;
        top: 0%;
        button{
            padding: 15px;
        }
    }
`;

export const DeleteIcon = styled(MdDelete)`
    font-size: 25px;
    color: ${theme.colors.sandle};
    margin-left: 50px;
    ${breakpoints.xs}{
        margin-left: 75px;
        margin-top: -50px;
        font-size: 20px;
    }
    ${breakpoints.sm}{
        margin-left: 50px;
        margin-top: 0px;
        font-size: 25px;
    }
`;

export const CartTotalMain = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: ${theme.colors.lightpink};
    margin-top: 70px;
    height: 400px;
    padding: 0 15%;
`;

export const TotalTypo = styled(UiTypography)`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: Poppins;
    font-weight: 600;
    font-size: 25px;
    padding-top: 25px;
`;

export const ParaTypo = styled(UiTypography)`
    display: flex;
    text-align: center;
    justify-content: space-between;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    padding-top: 40px;

    span {
        color: ${theme.colors.lightgrey};
        font-weight: 400;
    }
`;

export const ParaSubTypo = styled(UiTypography)`
    display: flex;
    text-align: center;
    justify-content: space-between;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    padding-top: 40px;

    span {
        font-size: 22px;
        color: ${theme.colors.sandle};
    }
`;

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
`;
import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import UiTypography from "genpixels_ui_components/src/ui-components/typography/UiTypography";
import { GiTrophyCup } from "react-icons/gi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";
import styled from "styled-components";

export const MainDiv = styled.div`
    background-color: ${theme.colors.lightpink};
    margin-top: 100px;
    width: 100%;
`
export const DisplayDiv = styled.div`
    display: flex;
    justify-content: space-between;
    ${breakpoints.xs}{
       flex-direction: column;
    }
    ${breakpoints.sm}{
        flex-wrap: wrap;
    }
    ${breakpoints.lg}{
        flex-direction: row;
     }
`
export const SubDiv = styled.div`
    display: flex;
    column-gap: 20px;
    padding: 5% 0;
`
export const IconStyle = styled(GiTrophyCup)`
    color: ${theme.colors.alterblack};
    font-size: 40px;
`
export const IconWarrenty = styled(SiTicktick)`
    color: ${theme.colors.alterblack};
    font-size: 40px;
`
export const IconShipping = styled(LiaShippingFastSolid)`
    color: ${theme.colors.alterblack};
    font-size: 40px;
`
export const IconCustomer = styled(RiCustomerService2Fill)`
    color: ${theme.colors.alterblack};
    font-size: 40px;
`
export const ParaTypo  = styled(UiTypography)`
    color: ${theme.colors.alterblack};
    font-family: Poppins;
    font-weight: 700;
    font-size: 20px;
`
export const AdditonalTypo  = styled(UiTypography)`
    color: ${theme.colors.mediumgray};
    font-family: Poppins;
    font-weight: 400;
    font-size: 16px;
    display: flex;
`
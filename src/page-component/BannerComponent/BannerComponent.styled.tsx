import styled from "styled-components";
import UiButton from "genpixels_ui_components/src/ui-components/button/UiButton";
import UiTypography from "genpixels_ui_components/src/ui-components/typography/UiTypography";
import breakpoints from "@/themes/breakpoints";

export const SubDiv = styled.div`
  background-color: #FFF3E3;
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 5px;
  ${breakpoints.xs} {
  top: 60px;
  line-height: 20px;
  height: 133px;
  width: 180px;
  padding: 10px;
  right: 3%;
  }
  ${breakpoints.md} {
  top:150px;
  line-height: 30px;
  height: 200px;
  width: 300px;
  padding: 10px;
  right: 10%;
  }
  ${breakpoints.lg} {
  top: 180px;
  line-height: 33px;
  height: 270px;
  width: 380px;
  padding: 10px;
  right: 11%;
  }
  ${breakpoints.xl} {
  top: 265px;
  line-height: 33px;
  height: 363px;
  width: 550px;
  padding: 30px;
  right: 12%;
  }
  ${breakpoints['2xl']} {
  top: 300px;
  right: 13%;
  }
`;
export const NewTypography = styled(UiTypography)`
  font-weight: 600 !important;
  ${breakpoints.xs} {
  font-size: 10px;
  line-height: 10px;
  }
  ${breakpoints.md} {
  font-size: 12px;
  line-height: 15px;
  }
  ${breakpoints.lg} {
  font-size: 16px;
  line-height: 20px;
  }
  ${breakpoints.xl} {

  }
`;
export const OurTypography = styled(UiTypography)`
  font-weight: 700 !important;
  color: #B88E2F!important;
  ${breakpoints.xs} {
  line-height: 18px;
  font-size: 19px;
   width: 160px;
  }
  ${breakpoints.md} {
  line-height: 35px;
  font-size: 32px;
  width: 260px;
  }
  ${breakpoints.lg} {
  line-height: 50px;
  font-size: 42px;
   width: 340px;
  }
  ${breakpoints.xl} {
   line-height: 60px;
   font-size: 45px;
   width: 360px;
  }
`;
export const LoTypography = styled(UiTypography)`
  font-weight: 500 !important;
  ${breakpoints.xs} {
  font-size: 8px;
  line-height: 11px;
  }
  ${breakpoints.md} {
  font-size: 10px;
  line-height: 15px;
  }
  ${breakpoints.lg} {
  font-size: 13px;
  line-height: 25px;
  }
  ${breakpoints.xl} {
   font-size: 16px;
  }
`;

export const StyledButton = styled(UiButton)`
  background-color: #B88E2F !important;
  color: #FFFFFF;
  font-weight: 700 !important;
  border: none;
  border-radius: 0 !important;
  ${breakpoints.xs} {
  height: 20px;
  top: 0px;
  font-size: 7px !important;
  width: 80px;
  }
  ${breakpoints.md} {
  height: 30px;
  top: 0px;
  font-size: 9px !important;
  width: 100px;
  }
  ${breakpoints.lg} {
  height: 50px;
  top: 0px;
  font-size: 12px !important;
  width: 150px;
  }
  ${breakpoints.xl} {
   width: 190px;
   height: 60px;
   top: 30px;
  }

`;
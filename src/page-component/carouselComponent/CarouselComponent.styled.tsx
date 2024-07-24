import breakpoints from "@/themes/breakpoints";
import { theme } from "@/themes/theme";
import UiButton from "genpixels_ui_components/src/ui-components/button/UiButton";
import UiTypography from "genpixels_ui_components/src/ui-components/typography/UiTypography";
import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${theme.colors.pink};
  display: flex;
  height: 100%;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  ${breakpoints.xs} {
    top: 0px;
    padding-bottom: 0px;
    flex-direction: column;
  }
  ${breakpoints.md} {
    padding-top: 15px;
    flex-direction: column;
  }
  ${breakpoints.lg} {
    padding-top: 25px;
    padding-bottom: 15px;
    flex-direction: row;
  }
  ${breakpoints.xl} {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 5px;
  width: 400px;
  height: 151px;
  margin-top: 130px;
  margin-left: 80px;

  ${breakpoints.xs} {
    width: 250px;
    height: 91px;
    margin-top: 50px;
    margin-left: 65px;
  }
  ${breakpoints.md} {
    width: 400px;
    height: 200px;
    margin-top: 50px;
    margin-left: 120px;
  }
    ${breakpoints.lg} { 
     width: 200px;
    height: 200px;
    margin-top: 50px;
    margin-left: 30px;
    }
    ${breakpoints.xl} { 
     width: 350px;
    height: 200px;
    margin-top: 50px;
    margin-left: 60px;
    }
`;
export const HeadTypography = styled(UiTypography)`
  font-weight: 700 !important;
  ${breakpoints.xs} {
    line-height: 20px;
    font-size: 19px;
    width: 200px;
  }
  ${breakpoints.md} {
    line-height: 40px;
    font-size: 35px;
    width: 350px;
  }
  ${breakpoints.lg} {
    line-height: 35px;
    font-size: 32px;
    width: 350px;
  }
  ${breakpoints.xl} {
    line-height: 45px;
    font-size: 40px;
    width: 400px;
  }
`;
export const DescTypography = styled(UiTypography)`
  font-weight: 500 !important;
  color:${theme.colors.darkgrey} !important;
  ${breakpoints.xs} {
    font-size: 8px;
    line-height: 15px;
  }
  ${breakpoints.md} {
    font-size: 16px;
    line-height: 30px;
  }
  ${breakpoints.lg} {
    font-size: 13px;
    line-height: 20px;
  }
  ${breakpoints.xl} {
    font-size: 16px;
     line-height: 25px;
  }
`;
export const ButtonStyled = styled(UiButton)`
  background-color: ${theme.colors.sandle} !important;
  color: ${theme.colors.white};
  font-weight: 700 !important;
  border: none;
  border-radius: 0 !important;
  ${breakpoints.xs} {
    height: 30px;
    top: 0px;
    font-size: 7px !important;
    width: 100px;
  }
  ${breakpoints.md} {
    height: 50px;
    top: 10px;
    font-size: 12px !important;
    width: 150px;
  }
  ${breakpoints.lg} {
    height: 50px;
    top: 10px;
    font-size: 12px !important;
    width: 150px;
  }
  ${breakpoints.xl} {
    width: 150px;
    height: 40px;
    top: 15px;
  }
`;
export const ImageDiv = styled.div`
  position: relative;
  padding-right: 100px;
  padding-left: 130px;
  .rectangle-Img {
    height: 100%;
    width: 75%;
  }
  ${breakpoints.xs} {
    padding-right: 0px;
    padding-left: 65px;
    margin-top: 50px;
    .rectangle-Img {
      height: 100%;
      width: 80%;
    }
  }
  ${breakpoints.md} {
    padding-right: 0px;
    padding-left: 120px;
    margin-top: 70px;
  }
  ${breakpoints.lg} {
    padding-left: 0px;
    margin-top: 40px;
    left: 150px;
     .rectangle-Img {
    height: 100%;
    width: 75%;
  }
  }
  ${breakpoints.xl} {
    left: 200px;
     .rectangle-Img {
    height: 100%;
    width: 85%;
  }
  }
`;
export const SubPart = styled.div`
  display: flex;
  position: absolute;
  bottom: 25px;
  left: 150px;
  ${breakpoints.xs} {
    bottom: 15px;
    left: 80px;
  }
  ${breakpoints.md} {
    bottom: 30px;
    left: 150px;
  }
  ${breakpoints.lg} {
    bottom: 25px;
    left: 20px;
  }
`;
export const ChildDiv = styled.div`
  background-color: ${theme.colors.lightwhite};
  display: flex;
  flex-direction: column;
  line-height: 25px;
  height: 90px;
  padding: 15px;
  ${breakpoints.md} {
    line-height: 45px;
    height: 170px;
    padding: 55px;
  }
    ${breakpoints.lg} {
    line-height: 25px;
    height: 90px;
    padding: 15px;
  }
`;
export const BedTypography = styled(UiTypography)`
  font-size: 15px;
  ${breakpoints.md} {
    font-size: 22px;
    margin-top: 0px !important;
  }
    ${breakpoints.lg} {
    font-size: 15px;
    margin-top: 0px !important;
  }
`;
export const InnerTypography = styled(UiTypography)`
  font-weight: 600 !important;
  font-size: 20px;
  line-height: 28px;
  ${breakpoints.md} {
    font-size: 22px;
    line-height: 38px;
  }
     ${breakpoints.lg} {
    font-size: 20px;
    line-height: 28px;
  }
`;
export const ArrowDiv = styled.div`
  background-color: ${theme.colors.sandle} !important;
  height: 30px;
  width: 30px;
  position: relative;
  top: 60px;
  padding: 5px;

  .arrow-icon {
    color: white;
    margin-top: 2px;
    margin-left: 2px;
  }
  ${breakpoints.md} {
    height: 50px;
    width: 50px;
    top: 120px;
    padding: 15px;
  }
    ${breakpoints.lg} {
    height: 30px;
    width: 30px;
    top: 60px;
    padding: 5px;
  }
`;
export const CarouselDiv = styled.div`
position: relative; 
  .carouselImage{
  height:100%;
  width:100%;
  }
  ${breakpoints.xs} {
   width: 300px;
    margin-top: 30px;
    margin-left: 45px;
    padding-bottom: 30px;
  }
    ${breakpoints.md} {
    width: 515px;
    margin-top: 40px;
    margin-left: 120px;
    padding-bottom: 30px;
  }
    ${breakpoints.lg} {
    width: 300px;
    margin-top: 40px;
    margin-left: 70px;
    padding-bottom: 0px;
  }
     ${breakpoints.xl} {
    margin-top: 40px;
    margin-left: 250px;
     }
`;

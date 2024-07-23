import breakpoints from "@/themes/breakpoints";
import UiButton from "genpixels_ui_components/src/ui-components/button/UiButton";
import UiTypography from "genpixels_ui_components/src/ui-components/typography/UiTypography";
import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #fcf8f3;
  display: flex;
  height: 100%;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  ${breakpoints.xs} {
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: column;
  }
  ${breakpoints.md} {
    padding-top: 15px;
    padding-bottom: 15px;
    flex-direction: row;
  }
  ${breakpoints.lg} {
    padding-top: 20px;
    padding-bottom: 20px;
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
  margin-left: 60px;
`;
export const HeadTypography = styled(UiTypography)`
  font-weight: 700 !important;
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
    line-height: 40px;
    font-size: 35px;
    width: 360px;
  }
`;
export const DescTypography = styled(UiTypography)`
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
export const ButtonStyled = styled(UiButton)`
  background-color: #b88e2f !important;
  color: #ffffff;
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
    width: 150px;
    height: 40px;
    top: 15px;
  }
`;
export const ImageDiv = styled.div`
  position: relative;
  .rectangle-Img {
    height: 100%;
    width: 75%;
  }
`;
export const SubPart = styled.div`
  display: flex;
  position: absolute;
  bottom: 25px;
  left: 20px;
`;
export const ChildDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.72);
  display: flex;
  flex-direction: column;
  line-height: 25px;
  height: 90px;
  padding: 15px;
`;
export const BedTypography = styled(UiTypography)`
  font-size: 15px;
`;
export const InnerTypography = styled(UiTypography)`
  font-weight: 600 !important;
  font-size: 20px;
  line-height: 28px;
`;
export const ArrowDiv = styled.div`
  background-color: #b88e2f !important;
  height: 30px;
  width: 30px;
  position: relative;
  top: 60px;
  padding: 5px;


  .arrow-icon{
  color: white;
  margin-top: 2px;
  margin-left: 2px;
  }
`;
export const CarouselDiv = styled.div`
    z-index:999;
`;

import styled from "styled-components";
import breakpoints from "@/themes/breakpoints";
import UiTypography from "genpixels_ui_components/src/ui-components/typography/UiTypography";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  box-sizing: border-box;
  row-gap: 80px;

  ${breakpoints.md} {
    grid-template-columns: 1fr 1fr;
  }

  ${breakpoints.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${breakpoints.xl} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 0px;
  }
`;

export const HdUiTypography = styled(UiTypography)`
  text-align: center;
  font-size: 32px;
  font-weight: bold !important;
  line-height: 48px;
  margin-top: 20px !important;
  margin-bottom: 20px !important;
  ${breakpoints.xs} {
    font-size: 24px;
    line-height: 36px;
  }

  ${breakpoints.sm} {
    font-size: 28px;
    line-height: 40px;
  }

  ${breakpoints.md} {
    font-size: 32px;
    line-height: 48px;
  }
`;
export const DesUiTypography = styled(UiTypography)`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 40px !important;
  ${breakpoints.xs} {
    margin-left: 20px;
    font-size: 16px;
    line-height: 24px;
  }

  ${breakpoints.sm} {
    font-size: 18px;
    line-height: 28px;
  }
  ${breakpoints.md} {
    font-size: 20px;
    line-height: 30px;
  }
`;
export const BrowserItem = styled.div`
  text-align: center;
  width: 100%;
`;

export const Titletypo = styled(UiTypography)`
  font-size: 100px;
  font-weight: 600 !important;
  line-height: 36px;
  margin-top: 20px;
  margin-bottom:20px !important;
  color: black;
  display: flex;
  text-align: center;
  justify-content: center;

  ${breakpoints.xs} {
    font-size: 18px;
    line-height: 28px;
  }

  ${breakpoints.sm} {
    font-size: 20px;
    line-height: 30px;
  }

  ${breakpoints.md} {
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 50px;
  }

  ${breakpoints.lg} {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const ImageUi = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top:20px !important;

  ${breakpoints.xs} {
    margin: auto;
  }

  ${breakpoints.lg} {
    object-fit: cover;
  }
  ${breakpoints.xl} {
    width: 350px;
    height: 450px;
    object-fit: contain;
  }
`;

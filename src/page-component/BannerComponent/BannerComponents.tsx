/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  LoTypography,
  NewTypography,
  OurTypography,
  StyledButton,
  SubDiv,
} from "./BannerComponent.styled";

const BannerComponent = ({ bannerData }: any) => {
  const bgImage =
    bannerData?.[0]?.productImage?.[0]?.bannerImage?.data?.[0]?.attributes;
  const buttonText = bannerData?.[0]?.button?.text;

  return (
    <>
      <div>
        <img src={bgImage?.url} alt="No" height={"100%"} width={"100%"} />
        <SubDiv>
          <NewTypography>{bannerData?.[0]?.heading}</NewTypography>
          <OurTypography>{bannerData?.[0]?.subHeading}</OurTypography>
          <LoTypography>{bannerData?.[0]?.description}</LoTypography>
          <div>
            <StyledButton variant={"contained"}>{buttonText}</StyledButton>
          </div>
        </SubDiv>
      </div>
    </>
  );
};

export default BannerComponent;

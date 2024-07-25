/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  ArrowDiv,
  BedTypography,
  ButtonStyled,
  CarouselDiv,
  ChildDiv,
  ContentDiv,
  DescTypography,
  HeadTypography,
  ImageDiv,
  InnerTypography,
  MainContainer,
  SubPart,
} from "./CarouselComponent.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./helper-component/carousel/Carousel";
import { FaArrowRightLong } from "react-icons/fa6";

const CarouselComponent = ({ bannerData }: any) => {
  const rectangleImage =
    bannerData?.[2]?.productImage?.[0]?.bannerImage?.data?.[0]?.attributes;
  const carouselImages = [
    bannerData?.[2]?.productImage?.[1]?.bannerImage?.data?.[0]?.attributes,
    bannerData?.[2]?.productImage?.[2]?.bannerImage?.data?.[0]?.attributes,
    bannerData?.[2]?.productImage?.[3]?.bannerImage?.data?.[0]?.attributes,
  ];
  const buttonText = bannerData?.[2]?.button?.text;

  return (
    <>
      <MainContainer className="body-gap">
        <ContentDiv>
          <HeadTypography>{bannerData?.[2]?.heading}</HeadTypography>
          <DescTypography>{bannerData?.[2]?.description}</DescTypography>
          <div>
            <ButtonStyled variant={"contained"}>{buttonText}</ButtonStyled>
          </div>
        </ContentDiv>
        <ImageDiv>
          <img
            src={rectangleImage?.url}
            alt="rectangleImage"
            className="rectangle-Img"
          />
          <SubPart>
            <ChildDiv>
              <BedTypography>01 --- Bed Room</BedTypography>
              <InnerTypography>Inner Peace</InnerTypography>
            </ChildDiv>
            <ArrowDiv>
              <FaArrowRightLong className="arrow-icon" />
            </ArrowDiv>
          </SubPart>
        </ImageDiv>

        <CarouselDiv>
          <div>
            <Carousel>
              {carouselImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={image?.url}
                    alt={`CarouselImage-${index}`}
                    className="carouselImage"
                  />
                </div>
              ))}
            </Carousel>
            </div>
        </CarouselDiv>
      </MainContainer>
    </>
  );
};

export default CarouselComponent;

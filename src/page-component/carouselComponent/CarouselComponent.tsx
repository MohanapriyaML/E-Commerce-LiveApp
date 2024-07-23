/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ArrowDiv, BedTypography, ButtonStyled, CarouselDiv, ChildDiv, ContentDiv, DescTypography, HeadTypography, ImageDiv, InnerTypography, MainContainer, SubPart } from './CarouselComponent.styled';
import UiTypography from 'genpixels_ui_components/src/ui-components/typography/UiTypography';
import UiButton from 'genpixels_ui_components/src/ui-components/button/UiButton';
import { FaArrowRightLong } from "react-icons/fa6";

const CarouselComponent = ({ bannerData }: any) => {

  const rectangleImage = bannerData?.[2]?.productImage?.[0]?.bannerImage?.data?.[0]?.attributes;
  const CarouselFirst = bannerData?.[2]?.productImage?.[1]?.bannerImage?.data?.[0]?.attributes;
  const CarouselSec = bannerData?.[2]?.productImage?.[2]?.bannerImage?.data?.[0]?.attributes;
  const CarouselThird = bannerData?.[2]?.productImage?.[3]?.bannerImage?.data?.[0]?.attributes;
  const buttonText = bannerData?.[2]?.button?.text; 
  return (
    <>
      <MainContainer>
       <ContentDiv>
        <HeadTypography>{bannerData?.[2]?.heading}</HeadTypography>
        <DescTypography>{bannerData?.[2]?.description}</DescTypography>
         <div>
          <ButtonStyled variant={"contained"}>{buttonText}</ButtonStyled> 
          </div>
       </ContentDiv>
       <ImageDiv>
        <img src={rectangleImage?.url} alt='rectangleImage' className='rectangle-Img'/>
        <SubPart>
        <ChildDiv>
          <BedTypography>01 --- Bed Room</BedTypography>
          <InnerTypography>Inner Peace</InnerTypography>
        </ChildDiv>
        <ArrowDiv>
       <FaArrowRightLong className='arrow-icon'/>
        </ArrowDiv>
        </SubPart>
       </ImageDiv>
       <CarouselDiv>
       <img src={CarouselFirst?.url} alt='CarouselFirst' height={'80%'} width={'60%'}/>
       {/* <img src={CarouselSec?.url} alt='CarouselSec' height={'20%'} width={'20%'}/> */}
       {/* <img src={CarouselThird?.url} alt='CarouselThird' height={'20%'} width={'20%'}/> */}
       
       </CarouselDiv>
      </MainContainer>

    </>
  )
}

export default CarouselComponent;
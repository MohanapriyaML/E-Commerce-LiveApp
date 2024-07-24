import React from "react";
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import styled from "styled-components";

const NextArrow = (props : any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {/* <FaArrowRightLong /> */}
    </div>
  );
};

const DotsContainer = styled.div`
  position: absolute;
  bottom: -20px;
  left: -10px;
  display: flex;
  align-items: center;
  color: #B88E2F!important;
  .slick-dots li button:before {
    font-size: 12px;
  }
  .slick-dots li.slick-active button:before {
    color: #B88E2F!important;
  }
`;

const CarouselContainer = styled.div`
  position: relative;

  .slick-next {
    right: 10px;
    z-index: 1;
    background-color: #B88E2F;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #B88E2F !important;
  }
`;

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <></>,
    appendDots: (dots : any) => <DotsContainer>{dots}</DotsContainer>,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>{children}</Slider>
    </CarouselContainer>
  );
};

export default Carousel;

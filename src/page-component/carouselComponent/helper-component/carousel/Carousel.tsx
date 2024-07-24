import React from "react";
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import { CarouselContainer, DotsContainer } from "./Carousel.styled";

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {/* <FaArrowRightLong /> */}
    </div>
  );
};

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
    appendDots: (dots: any) => <DotsContainer>{dots}</DotsContainer>,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>{children}</Slider>
    </CarouselContainer>
  );
};

export default Carousel;

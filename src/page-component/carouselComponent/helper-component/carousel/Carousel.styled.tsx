import { styled } from "styled-components";

export const DotsContainer = styled.div`
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

export const CarouselContainer = styled.div`
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

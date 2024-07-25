import React from "react";
import { FaShareAlt, FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import {
  Container,
  ProductItem,
  StyledImageWrapper,
  StyledImage,
  ProductName,
  Price,
  CardTypo,
  Subtypo,
  OfferLabel,
  Buttons,
  HoverOverlay,
  HoverButton,
  HoverTag,
  TagsContainer,
  HeadTypo,
} from "./Products.styled";

const ProductsList = ({ bannerData }: any) => {
  const products = bannerData?.[3]?.productImage;

  return (
    <div className="body-gap">
        <HeadTypo variant='h3'>{bannerData?.[3]?.heading}</HeadTypo>
      <Container>
        {products && products.map((product : any, index : any) => {
          const productImage = product.bannerImage?.data?.[0]?.attributes.url;
          return (
            <ProductItem key={index}>
              <StyledImageWrapper>
                <StyledImage src={productImage} alt={product.text} />
                {product.offer && <OfferLabel offerType={product.offer}>{product.offer}</OfferLabel>}
                <HoverOverlay>
                  <HoverButton>Add to Cart</HoverButton>
                  <TagsContainer>
                    <HoverTag>
                      <FaShareAlt /> Share
                    </HoverTag>
                    <HoverTag>
                      <MdCompareArrows /> Compare
                    </HoverTag>
                    <HoverTag>
                      <FaRegHeart /> Like
                    </HoverTag>
                  </TagsContainer>
                </HoverOverlay>
              </StyledImageWrapper>
              <ProductName>
                <CardTypo variant='h6'>{product.text}</CardTypo>
                <Subtypo><p>{product.subText}</p></Subtypo>
                <Price>{product.price}</Price>
              </ProductName>
            </ProductItem>
          );
        })}
      </Container>
      <Buttons>
        <button>Show more</button>
      </Buttons>
    </div>
  );
};

export default ProductsList;

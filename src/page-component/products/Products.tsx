import React from 'react';
import { FaShareAlt, FaRegHeart } from 'react-icons/fa';
import { MdCompareArrows } from 'react-icons/md';
import {
  Headings,
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
  TagsContainer
} from './Products.styled';

const ProductsList = ({ bannerData }: any) => {
  console.log('bannerData', bannerData);

  const products = bannerData?.[3]?.productImage;

  return (
    <div className="body-gap">
      <Headings>
        {bannerData?.[3]?.heading}
      </Headings>
      <Container>
        {products && products.map((product : any, index : any) => {
          const productImage = product.bannerImage?.data?.[0]?.attributes.url;
          return (
            <ProductItem key={index}>
              <StyledImageWrapper>
                <StyledImage src={productImage} alt={product.text} />
                {product.offer && <OfferLabel>{product.offer}</OfferLabel>}
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
                <CardTypo>{product.text}</CardTypo>
                <Subtypo>{product.subText}</Subtypo>
              </ProductName>
              <Price>{product.price}</Price>
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

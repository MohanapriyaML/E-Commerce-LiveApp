import React, { useState } from "react";
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
  ButtonLink,
} from "./Products.styled";
import UiButton from "genpixels_ui_components/src/ui-components/button/UiButton";


const ProductsList = ({ bannerData }: any) => {
  const products = bannerData?.[3]?.productImage;
  const button = bannerData?.[3]?.button?.text;
  const [visibleProducts, setVisibleProducts] = useState(8);

  const showMoreProducts = () => {
    setVisibleProducts(products.length);
  };


  return (
    <div className="body-gap">
      <HeadTypo variant='h3'>{bannerData?.[3]?.heading}</HeadTypo>
      <Container>
        {products.slice(0, visibleProducts).map((product: any, index: any) => {
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
      {visibleProducts <= products.length && (
        <Buttons>
          <ButtonLink href='/product'>
            <UiButton variant={"text"}>{button}</UiButton>
          </ButtonLink>
        </Buttons>
      )}
    </div>
  );
};

export default ProductsList;

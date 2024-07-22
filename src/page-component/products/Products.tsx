import React from 'react';
import { FaShareAlt, FaRegHeart, FaRegCopy } from 'react-icons/fa';
import { Headings, Container, ProductItem, StyledImageWrapper, StyledImage, ProductName, Price, CardTypo, Subtypo, OfferLabel, Buttons, HoverOverlay, HoverButton, HoverTag, TagsContainer } from './Products.styled';
import { MdCompareArrows } from 'react-icons/md';

interface Products {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  imageUrl: string;
  offer?: string;
}

const ProductsList = () => {
  const products: Products[] = [
    { id: 1, title: 'Syltherine', subtitle: 'Stylish cafe chair', price: 'Rp 2.500.000', imageUrl: '/images/2.1.png', offer: '-30%' },
    { id: 2, title: 'Leviosa', subtitle: 'Stylish cafe chair', price: 'Rp 2.500.000', imageUrl: '/images/2.2.png' },
    { id: 3, title: 'Lolito', subtitle: 'Luxury big sofa', price: 'Rp 7.000.000', imageUrl: '/images/2.3.png', offer: '-50%' },
    { id: 4, title: 'Respira', subtitle: 'Outdoor bar table and stool', price: 'Rp 500.000', imageUrl: '/images/2.4.png', offer: 'New' },
    { id: 5, title: 'Grifo', subtitle: 'Night lamp', price: 'Rp 1.500.000', imageUrl: '/images/2.5.png' },
    { id: 6, title: 'Muggo', subtitle: 'Small mug', price: 'Rp 150.000', imageUrl: '/images/2.6.png', offer: 'New' },
    { id: 7, title: 'Pingky', subtitle: 'Cute bed set', price: 'Rp 7.000.000', imageUrl: '/images/2.7.png', offer: '-50%' },
    { id: 8, title: 'Potty', subtitle: 'Minimalist flower pot', price: 'Rp 500.000', imageUrl: '/images/2.8.png', offer: 'New' },
  ];

  return (
    <>
      <Headings>
        <h1><b>Our Products</b></h1>
      </Headings>

      <Container>
        {products.map((product) => (
          <ProductItem key={product.id}>

            <StyledImageWrapper>
              <StyledImage src={product.imageUrl} alt={product.title}/>

              {product.offer && <OfferLabel offerType={product.offer}>{product.offer}</OfferLabel>}

              <HoverOverlay>
                            <HoverButton>Add to Cart</HoverButton>

                  <TagsContainer>

                        <HoverTag>
                                <FaShareAlt/>Share
                        </HoverTag>

                        <HoverTag>
                                <MdCompareArrows/>Compare
                        </HoverTag>

                        <HoverTag>
                                <FaRegHeart/>Like
                        </HoverTag>

                </TagsContainer>

              </HoverOverlay>

            </StyledImageWrapper>


            <div>
              <ProductName>
                <CardTypo>{product.title}</CardTypo>
                <Subtypo>{product.subtitle}</Subtypo>


          </ProductName>
            </div>
             <Price>{product.price}</Price>
          </ProductItem>
        ))}
      </Container>

      <Buttons>
        <button>Show more</button>
      </Buttons>
      
    </>
  );
};

export default ProductsList;

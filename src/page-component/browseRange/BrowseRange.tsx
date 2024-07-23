import React from 'react';
import { BrowserItem, Container, Headings, ImageUi, Titletypo } from './BrowseRange.styled';
import { CardTypo } from '../products/Products.styled';

const BrowseList = ({ bannerData }:any) => {
  console.log('bannerData', bannerData);

  const products = bannerData?.[1]?.productImage;

  return (
    <div className="body-gap">
      <BrowserItem>
        <Headings>
          <div> <h1>{bannerData?.[1]?.heading}</h1></div>
          <p>{bannerData?.[1]?.description}</p>
        </Headings>
        <Container>
          {products && products.map((product : any, index : any) => {
            const productImage = product.bannerImage?.data?.[0]?.attributes.url;
            return (
              <div key={index}>
                <ImageUi src={productImage} alt={product.text} />
                <Titletypo>{product.text}</Titletypo>
              </div>
            );
          })}
        </Container>
      </BrowserItem>
    </div>
  );
};

export default BrowseList;

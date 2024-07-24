import React from "react";
import {
  BrowserItem,
  Container,
  DesUiTypography,
  HdUiTypography,
  ImageUi,
  Titletypo,
} from "./BrowseRange.styled";
import UiTypography from "genpixels_ui_components/src/ui-components/typography/UiTypography";

const BrowseList = ({ bannerData }: any) => {
  const products = bannerData?.[1]?.productImage;

  return (
    <div className="body-gap">
      <BrowserItem>
        <div>
          {" "}
          <HdUiTypography>{bannerData?.[1]?.heading}</HdUiTypography>
        </div>
        <DesUiTypography>{bannerData?.[1]?.description}</DesUiTypography>
        <Container>
          {products &&
            products.map((product: any, index: any) => {
              const productImage =
                product.bannerImage?.data?.[0]?.attributes.url;
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

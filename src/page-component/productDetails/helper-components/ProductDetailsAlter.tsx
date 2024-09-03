import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useState } from "react";
import { BottomImage, BrandTypography, ButtonAdd, ButtonCart, ButtonCompare, ButtonContainer, ButtonCount, ButtonLess, Colon, ColorContainer, ColorDiv, ColorTypography, ContentContainer, DescrptionSec, DescrptionSub, DetailItem, DetailTypo, FlexContainer, HeadContainer, IconLink, IconsContainer, InsideImage, Label, MainImageContainer, MiddleImage, PriceTypography, ProductDetailsContainer, ProductImage, ProductImageContainer, ProductTypo, RatingStar, ShareContainer, SideImageContainer, SizeContainer, SizeTypo, SizeTypography, StyledHr, SubContainer, Tab, TabList, TabPanelContainer, TabPanels, Tabs, TopImage, Value } from "./ProductDetailsAlter.styled";

const ProductDetailsAlter = () => {
  const [count, setCount] = useState(1);
  const [activeTab, setActiveTab] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const tags = ["Sofa", "Chair", "Home", "Shop"];

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const productDetail = () => (
    <HeadContainer>
   
      <SubContainer>
        <ProductTypo>Asgaard sofa</ProductTypo>
        <BrandTypography>
          <PriceTypography>Rs. 250,000.00</PriceTypography>
        </BrandTypography>
        <FlexContainer>
          <RatingStar>
            <img src="/images/Star.png" alt="star" />
            <img src="/images/Star.png" alt="star" />
            <img src="/images/Star.png" alt="star" />
            <img src="/images/Star.png" alt="star" />
            <img src="/images/Star.png" alt="star" />
          </RatingStar>
          <p>5 Customer Reviews</p>
        </FlexContainer>
        <ContentContainer>
          <p>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
        </ContentContainer>
        <SizeTypography>Size</SizeTypography>
        <SizeContainer>
          <SizeTypo className="size-L">L</SizeTypo>
          <SizeTypo>XL</SizeTypo>
          <SizeTypo>XS</SizeTypo>
        </SizeContainer>
        <ColorTypography>Color</ColorTypography>
        <ColorContainer>
          <ColorDiv className="color-blue"></ColorDiv>
          <ColorDiv className="color-black"></ColorDiv>
          <ColorDiv className="color-grey"></ColorDiv>
        </ColorContainer>
        <ButtonContainer>
          <ButtonLess onClick={decrement} variant={"text"}>
            -
          </ButtonLess>
          <ButtonCount variant={"text"}>{count}</ButtonCount>
          <ButtonAdd onClick={increment} variant={"text"}>
            +
          </ButtonAdd>
          <ButtonCart variant={"text"}>Add to Cart</ButtonCart>
          <ButtonCompare bgcolor={""} textcolor={"black"} variant={"text"}>
            + Compare
          </ButtonCompare>
        </ButtonContainer>
        <StyledHr />
        <ProductDetailsContainer>
          <DetailItem>
            <Label>
              SKU <Colon>:</Colon>
            </Label>
            <Value>{"SS001"}</Value>
          </DetailItem>
          <DetailItem>
            <Label>
              Category <Colon>:</Colon>
            </Label>
            <Value>{"Sofas"}</Value>
          </DetailItem>
          <DetailItem>
            <Label>
              Tags <Colon>:</Colon>
            </Label>
            <Value>{tags.join(", ")}</Value>
          </DetailItem>
          <ShareContainer>
            <Label>
              Share <Colon>:</Colon>
            </Label>
            <IconsContainer>
              <IconLink href="#">
                <FaFacebook />
              </IconLink>
              <IconLink href="#">
                <IoLogoLinkedin />
              </IconLink>
              <IconLink href="#">
                <AiFillTwitterCircle />
              </IconLink>
            </IconsContainer>
          </ShareContainer>
        </ProductDetailsContainer>
      </SubContainer>
      <SideImageContainer>
        <TopImage>
          <img src="/images/2.6.png" alt="No img" />
        </TopImage>
        <InsideImage>
          <img src="/images/2.6.png" alt="img Front" />
        </InsideImage>
        <MiddleImage>
          <img src="/images/2.6.png" alt="img Back" />
        </MiddleImage>
        <BottomImage>
          <img src="/images/2.6.png" alt="img Inside" />
        </BottomImage>
      </SideImageContainer>
      <MainImageContainer>
        <img src="/images/2.6.png" alt="No image" />
      </MainImageContainer>
    </HeadContainer>
  );

  const productTabs = () => (
    <Tabs>
      <TabList>
        <Tab active={activeTab === 1} onClick={() => handleTabChange(1)}>
          Description
        </Tab>
        <Tab active={activeTab === 2} onClick={() => handleTabChange(2)}>
          Additional Information
        </Tab>
        <Tab active={activeTab === 3} onClick={() => handleTabChange(3)}>
          Reviews [5]
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanelContainer active={activeTab === 1}>
          {/* <DetailTypo>Description</DetailTypo> */}
          <DescrptionSub>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </DescrptionSub>
          <DescrptionSec>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </DescrptionSec>
        </TabPanelContainer>
        <TabPanelContainer active={activeTab === 2}>
          <DetailTypo>Additional Information</DetailTypo>
          <DescrptionSub>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </DescrptionSub>
          <DescrptionSec>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </DescrptionSec>
        </TabPanelContainer>
        <TabPanelContainer active={activeTab === 3}>
          <DetailTypo>Review</DetailTypo>
          <DescrptionSub>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </DescrptionSub>
          <DescrptionSec>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </DescrptionSec>
        </TabPanelContainer>
      </TabPanels>
    </Tabs>
  );
 
const productImage = () => (
    <ProductImageContainer>
      <ProductImage src="/images/1.3.png" alt="product-image" />
      <ProductImage src="/images/1.2.png" alt="product-image" />
    </ProductImageContainer>
  );
  
  return (
    <>
      {productDetail()}
      {productTabs()}
      {productImage()}
    </>
  );
};

export default ProductDetailsAlter;

import breakpoints from "@/themes/breakpoints";
import UiButton from "genpixels_ui_components/src/ui-components/button/UiButton";
import UiLinks from "genpixels_ui_components/src/ui-components/link/UiLinks";
import UiTypography from "genpixels_ui_components/src/ui-components/typography/UiTypography";
import { styled } from "styled-components";

interface TabPanelProps {
    active: boolean;
  }
export const HeadContainer = styled.div`
  display: flex;
  margin-top: 50px;
  margin-left: 30px;

  ${breakpoints.xs} {
    flex-direction: column;
  }
  ${breakpoints.lg} {
    flex-direction: row; 
  }
`;

export const MainImageContainer = styled.div`
  ${breakpoints.xs} {
    height: 260px;
    background-color: #f9f1e7;
    width: 330px;
    margin-left: 40px;
    margin-right: 10px;
    padding-top: 0px;

    img {
      height: 230px;
      width: 300px;
      margin-left: 15px;
      margin-top: 16px;
    }
  }

  ${breakpoints.md} {
    height: 360px;
    width: 450px;
    margin-left: 100px;
    margin-right: 0px;
    padding-top: 0px;

    img {
      height: 300px;
      width: 400px;
        margin-left: 25px;
        margin-top: 25px;
    }
  }

  ${breakpoints.lg} {
    margin-left: 30px;
    height: 520px;
    width: 450px;

    img {
      height: 350px;
      width: 350px;
        margin-left: 15px;
        margin-top: 80px;
    }
  }

  ${breakpoints.xl} {
    margin-left: 40px;
    width: 450px;
    height: 500px;
    border-radius: 3px;
    background-color: #f9f1e7;

    img {
      height: 391px;
      width: 420px;
      margin-left: 15px;
      margin-top: 50px;
    }
  }
`;
export const SideImageContainer = styled.div`
  display: flex;
  gap: 0px;
  margin-left: 40px;
  ${breakpoints.xs} {
    position: absolute;
    margin-top: 250px;
    margin-left: 0px;
    gap: 20px;
  }

  ${breakpoints.md} {
    position: absolute;
    margin-top: 350px;
    margin-left: 100px;
    gap: 30px;
  }

  ${breakpoints.lg} {
    flex-direction: column;
    position: static;
    margin-top: -40px;
    margin-left: 0px;
  }
      ${breakpoints.xl} {

    margin-left: 40px;
  }
`;
export const TopImage = styled.div`
  ${breakpoints.xs} {
     border-radius: 10px;
    border: none;
    background-color: #f9f1e7;
    padding: 5px;
    width: 85px;
    height: 85px;
    margin-top: 40px;

    img {
      height: 60px;
      width: 65px;
      margin-left: 5px;
      margin-top: 8px;
    }
  }

  ${breakpoints.lg} {
    border-radius: 10px;
    border: none;
    background-color: #f9f1e7;
    padding: 5px;
    width: 85px;
    height: 85px;
    margin-top: 40px;

    img {
      height: 60px;
      width: 65px;
      margin-left: 5px;
      margin-top: 8px;
    }
  }
`;

export const InsideImage = styled.div`
  ${breakpoints.xs} {
    border-radius: 10px;
    border: none;
    background-color: #f9f1e7;
    padding: 5px;
    width: 85px;
    height: 85px;
    margin-top: 40px;

    img {
      height: 60px;
      width: 65px;
      margin-left: 5px;
      margin-top: 8px;
    }
  }


  ${breakpoints.lg} {
    border-radius: 10px;
    border: none;
    background-color: #f9f1e7;
    padding: 5px;
    width: 85px;
    height: 85px;
    margin-top: 40px;

    img {
      height: 60px;
      width: 65px;
      margin-left: 5px;
      margin-top: 8px;
    }
  }
`;

export const MiddleImage = styled.div`
  ${breakpoints.xs} {
     border-radius: 10px;
    border: none;
    background-color: #f9f1e7;
    padding: 5px;
    width: 85px;
    height: 85px;
    margin-top: 40px;

    img {
      height: 60px;
      width: 65px;
      margin-left: 5px;
      margin-top: 8px;
    }
  }


  ${breakpoints.lg} {
    border-radius: 10px;
    border: none;
    background-color: #f9f1e7;
    padding: 5px;
    width: 85px;
    height: 85px;
    margin-top: 40px;

    img {
      height: 60px;
      width: 65px;
      margin-left: 5px;
      margin-top: 8px;
    }
  }
`;

export const BottomImage = styled.div`
  ${breakpoints.xs} {
     border-radius: 10px;
    border: none;
    background-color: #f9f1e7;
    padding: 5px;
    width: 85px;
    height: 85px;
    margin-top: 40px;

    img {
      height: 60px;
      width: 65px;
      margin-left: 5px;
      margin-top: 8px;
    }
  }


  ${breakpoints.lg} {
    border-radius: 10px;
    border: none;
    background-color: #f9f1e7;
    padding: 5px;
    width: 85px;
    height: 85px;
    margin-top: 40px;

    img {
      height: 60px;
      width: 65px;
      margin-left: 5px;
      margin-top: 8px;
    }
  }
`;

export const SubContainer = styled.div`
  margin-top: 10px;
  margin-left: 100px;
  ${breakpoints.xs} {
    margin-top: 180px;
    margin-left: 50px;
  }
  ${breakpoints.md} {
    margin-left: 100px;
  }
  ${breakpoints.lg} {
    margin-left: 100px;
    margin-top: 10px;
  }
      ${breakpoints.xl} {
    margin-left: 100px;
    margin-top: 10px;
  }
`;
export const ProductTypo = styled(UiTypography)`
  font-size: 35px;
  font-weight: 400;
  line-height: 45px;

  ${breakpoints.xs} {
    font-size: 35px;
    font-weight: 400;
    line-height: 15px;
  }
  ${breakpoints.md} {
    margin-left: -20px;
  }
  ${breakpoints.lg} {
    margin-left: 0px;
  }
`;


export const BrandTypography = styled.div`
  font-family: "Inter";
  font-weight: 300;
  font-size: 13px;
  margin-top: 5px;

  ${breakpoints.xs} {
    margin-top: 20px;
    font-size: 12px;
  }

  ${breakpoints.lg} {
    margin-top: 5px;
    font-size: 18px;
    margin-left: 0px;
  }

  ${breakpoints.xl} {
    font-size: 15px;
  }
`;

export const PriceTypography = styled(UiTypography)`
  color: #9f9f9f;
  font-weight: 500;
  margin-top: 10px;
  font-size: 25px;
  line-height: 33px;

  ${breakpoints.xs} {
    font-size: 16px;
    font-weight: 600;
    margin-left: -30px;
  }

  ${breakpoints.md} {
    font-size: 30px;
    font-weight: 500;
    margin-left: -25px;
  }

  ${breakpoints.lg} {
    font-size: 20px;
    margin-left: 0px;
    margin-right: 20px;
  }

  ${breakpoints.xl} {
    font-size: 22px;
    font-weight: 600;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  p {
    margin-top: 5px;
    font-size: 13px;
    margin-left: -20px;
    color: #9f9f9f;
  }
`;
export const RatingStar = styled.div`
  margin-top: 10px;
  border-right: 2px solid #9f9f9f;
  padding-right: 20px;

  img {
    height: 20px;
    width: 20px;
    margin-left: 5px;
  }

  ${breakpoints.xs} {
    margin-left: -39px;
  }
  ${breakpoints.lg} {
    margin-left: -5px;
  }
`;

export const ContentContainer = styled.div`
  width: 400px;
  font-size: 13px;
  margin-top: 5px;
  line-height: 20px;
  ${breakpoints.xs} {
    margin-left: -30px;
  }
  ${breakpoints.lg} {
    margin-left: 0px;
  }
`;

export const SizeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
  width: 120px;
  gap: 15px;

  .size-L {
    background-color: #b88e2f;
  }

  ${breakpoints.xs} {
    margin-left: -35px;
    margin-right: 27px;
  }

  ${breakpoints.md} {
    margin-left: -25px;
    margin-right: 36px;
  }

  ${breakpoints.lg} {
    margin-left: 0px;
    margin-right: 26px;
  }
`;

export const SizeTypo = styled(UiTypography)`
  justify-content: center;
  text-align: center;
  padding-top: 5px;
  background-color: #f9f1e7;
  font-weight: 300;
  font-size: 13px;
  border-radius: 8px;
  color: black;
  height: 30px;
`;

export const SizeTypography = styled(UiTypography)`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  position: relative;
  top: 10px;
  color: #9f9f9f;

  ${breakpoints.xs} {
    margin-left: -30px;
  }

  ${breakpoints.md} {
    margin-left: -25px;
  }

  ${breakpoints.lg} {
    margin-left: 0px;
  }
`;

export const ColorTypography = styled(UiTypography)`
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  position: relative;
  top: 19px;
  color: #9f9f9f;

  ${breakpoints.xs} {
    margin-left: -30px;
  }

  ${breakpoints.md} {
    margin-left: -25px;
  }

  ${breakpoints.lg} {
    margin-left: 0px;
  }
`;
export const ColorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 30px;
  width: 120px;
  gap: 15px;
  .color-blue {
    background-color: #816dfa;
  }
  .color-black {
    background-color: #000000;
  }
  .color-grey {
    background-color: #b88e2f;
  }
  ${breakpoints.xs} {
    margin-left: -35px;
    margin-right: 27px;
  }

  ${breakpoints.md} {
    margin-left: -25px;
    margin-right: 36px;
  }

  ${breakpoints.lg} {
    margin-left: 0px;
    margin-right: 26px;
  }
`;

export const ColorDiv = styled.div`
  justify-content: center;
  text-align: center;
  padding-top: 5px;
  border-radius: 50%;
  height: 30px;
`;
export const ButtonContainer = styled.div`
  padding: 5px;
  
  ${breakpoints.xs} {
    margin-top: 15px;
    margin-left: -40px;
  }

  ${breakpoints.md} {
    margin-top: 15px;
    margin-left: -30px;
  }

  ${breakpoints.lg} {
    margin-top: 30px;
    margin-left: 0px;
  }
`;

export const ButtonLess = styled(UiButton)`
  padding: 5px;
  width: 50px;
  height: 45px;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 10px 0px 0px 10px;
  font-size: 20px;
  border-right: none;

  ${breakpoints.xs} {
    width: 30px;
  }
`;

export const ButtonCount = styled(UiButton)`
  padding: 5px;
  width: 50px;
  height: 45px;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 0px 0 0 0px;
  border-right: none;
  border-left: none;
  font-size: 20px;

  ${breakpoints.xs} {
    width: 30px;
  }
`;

export const ButtonAdd = styled(UiButton)`
  padding: 5px;
  width: 50px;
  height: 45px;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 0px 10px 10px 0px;
  border-left: none;
  font-size: 20px;

  ${breakpoints.xs} {
    width: 30px;
  }
`;

export const ButtonCart = styled(UiButton)`
  color: black;
  border: 1px solid #000000;
  height: 45px;
  width: 150px;
  margin-left: 30px;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  ${breakpoints.xs} {
    margin-left: 10px;
    width: 130px;
    margin-top: 0px;
  }
${breakpoints.md} {
    margin-left: 25px;
}
  ${breakpoints.lg} {
    margin-left: 10px;
    width: 130px;
  }
  ${breakpoints.xl} {
    margin-left: 20px;
    margin-top: 0px;
    width: 140px;
  }
`;
export const ButtonCompare = styled(UiButton)<{
  bgcolor: string;
  textcolor: string;
}>`
  background: ${({ bgcolor }) => bgcolor || "white"};
  color: ${({ textcolor }) => textcolor || "black"};
  border: none;
  height: 45px;
  border: 1px solid #000000;
  width: 150px;
  margin-left: 30px;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  ${breakpoints.xs} {
    margin-left: 0px;
    width: 130px;   
    margin-top: 20px;
  }
     ${breakpoints.md} {
    margin-left: 25px;
    width: 130px;
    margin-top: 0px;
  }
  ${breakpoints.lg} {
    margin-left: 0px;
    width: 130px;
    margin-top: 20px;
  }
  ${breakpoints.xl} {
    margin-left: 20px;
    margin-top: 0px;
    width: 140px;
  }
`;


export const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  background: #ddd;
  margin: 20px 0;
  width: 100%;
  margin-top: 50px;
  ${breakpoints.xs} { 
  margin-top: 30px;
  }
 ${breakpoints.xl} { 
 border: 0;
  height: 1px;
  background: #ddd;
  margin: 20px 0;
  width: 100%;
  margin-top: 50px;
 }
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  line-height: 25px;
  ${breakpoints.xs} { 
  margin-top: 30px;
  margin-left: -30px;
  }
${breakpoints.lg} { 
  margin-left: 0px;
  }
  ${breakpoints.xl} { 
   margin-top: 50px;
    }
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled(UiTypography)`
  font-weight: bold;
  margin-right: 5px;
  color: #9f9f9f;
  align-items: center;
`;

export const Value = styled(UiTypography)`
  align-items: center;
  color: #9f9f9f;
`;
export const Colon = styled("span")`
  color: #9f9f9f;
`;
export const ShareContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const IconLink = styled(UiLinks)`
  color: inherit;
  text-decoration: none;
  font-size: 1.5em;
`;

///Tabs

export const Tabs = styled.div`

  
`;


export const TabList = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  border-top: 2px solid #D9D9D9;
    ${breakpoints.xs} {  
      margin-left: 35px;
      gap: 10px;
     }
       ${breakpoints.md} {  
      margin-left: 0px;
      gap: 0px;
     }
`;


export const Tab = styled.div <{active:boolean}>`
  padding: 10px 20px;
  font-weight: 500;
  font-size: 24px;
  margin-top: 30px;
  cursor: pointer; 
  background-color: ${(props) => (props.active ? 'none' : 'transparent')};
  border-bottom: ${(props) => (props.active ? 'none' : '#9F9F9F')};
  color: ${(props) => (props.active ? 'black' : '#9F9F9F')};
  transition: background-color 0.3s;

  &:hover {
    background-color: transparent;
  }
     ${breakpoints.xs} {  
     padding: 0px 0px;
     font-size: 15px;
     }
    ${breakpoints.md} {  
     padding: 10px 20px;
     font-size: 24px;
     }
`;


export const TabPanels = styled.div`
  padding: 10px;
  
`;

export const TabPanelContainer = styled.div<TabPanelProps>`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  width: 70%;
  position : relative;
  left: 15%;
  padding: 20px 0;
  

  ${breakpoints.xs} {
    width: 100%;
    left: 5%;
    padding: 20px 0;
    display: ${(props) => (props.active ? "flex" : "none")};
  }
  
  ${breakpoints.lg} {
    width: 70%;
    left: 15%;
    padding: 20px 0;
    display: ${(props) => (props.active ? "flex" : "none")};
  }
`;


export const DetailTypo = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;


export const DescriptionLink = styled.a`
  color: #007bff;
  text-decoration: none;
`;

export const DescrptionSub = styled.p`
  font-size: 16px;
  color: #9F9F9F;
  line-height: 24px;
  
`;

export const DescrptionSec = styled.div`
  margin-top: 20px;
  color: #9F9F9F;
  font-size: 16px;
  line-height: 24px;
`;

export const DescrptionTrd = styled.div`
  margin-top: 10px;
`;

export const DescrptionFrth = styled.div`
  margin-top: 10px;
`;
//Product image 

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  ${breakpoints.xs} { 
  flex-direction: column;
  gap : 30px;
  position : relative;
  left: 7%;
  }
  ${breakpoints.md} { 

  }
 ${breakpoints.lg} { 
  flex-direction: row;
  gap : 0px;
  left: 0;
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0 10px;
`;
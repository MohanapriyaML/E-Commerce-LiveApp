import styled from "styled-components";
import UiTypography from 'genpixels_ui_components/src/ui-components/typography/UiTypography';
import breakpoints from "@/themes/breakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 0 7%;
  box-sizing: border-box;
  row-gap: 80px;
  
  ${breakpoints.sm} 
  {
    grid-template-columns: 1fr;
  }

  ${breakpoints.md} 
  {
    grid-template-columns: 1fr 1fr;
    row-gap: 80px;
   
  }

  ${breakpoints.lg} 
  {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    
  }

  ${breakpoints.xl}
   {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
`;

export const Headings = styled.div`
  text-align: center;

  h1 {
    font-size: 32px;
    font-weight:bold;
    line-height: 48px;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 40px;
  }

  ${breakpoints.xs} 
  {
    h1 {
      font-size: 24px;
      line-height: 36px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  ${breakpoints.sm} 
  {
    h1 {
      font-size: 28px;
      line-height: 40px;
    }

    p {
      font-size: 18px;
      line-height: 28px;
    }
  }

  ${breakpoints.md} 
  {
    h1 {
      font-size: 32px;
      line-height: 48px;
    }

    p {
      font-size: 20px;
      line-height: 30px;
    }
  }

  ${breakpoints.lg} 
  {
    h1 {
      font-size: 32px;
      line-height: 48px;
    }

    p {
      font-size: 20px;
      line-height: 30px;
    }
  }

  ${breakpoints.xl}
   {
    h1 {
      font-size: 32px;
      line-height: 48px;
    }

    p {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

export const BrowserItem = styled.div`
  text-align: center;
  width: 100%;
`;

export const Titletypo = styled(UiTypography)`
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  margin-top:20px;
  color: black;
  display: flex;
  text-align: center;
  justify-content: center;

  ${breakpoints.xs} 
  {
    font-size: 18px;
    line-height: 28px;
  }

  ${breakpoints.sm} 
  {
    font-size: 20px;
    line-height: 30px;
  }

  ${breakpoints.md} 
  {
    font-size: 22px;
    line-height: 32px;
    margin-bottom:50px;
  }

  ${breakpoints.lg}
   {
    font-size: 24px;
    line-height: 36px;
  }

  ${breakpoints.xl}
   {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const ImageUi = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;

  ${breakpoints.xs}
   {
    object-fit: cover;
    margin: auto;
  }
  ${breakpoints.sm} 
  {
    object-fit: cover;
  }
  ${breakpoints.md} 
  {
    object-fit: cover;
  }
  ${breakpoints.lg} 
  {
    object-fit: cover;
  }
  ${breakpoints.xl}
   {
    paddig:0 7%
    object-fit: cover;
    margin: auto;
  }
`;

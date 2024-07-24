import styled from 'styled-components';
import breakpoints from '@/themes/breakpoints';
import { theme } from '@/themes/theme';
import UiTypography from 'genpixels_ui_components/src/ui-components/typography/UiTypography';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  box-sizing: border-box;
  cursor: pointer;

  ${breakpoints.xs} 
  {
    grid-template-columns: 1fr;
  }

  ${breakpoints.sm}
   {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${breakpoints.md} 
  {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  ${breakpoints.lg} 
  {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }

  ${breakpoints.xl} 
  {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
`;

export const Buttons = styled.div`
  margin-bottom:70px;
  button
   {
    background: ${theme.colors.white};
    color: rgba(184, 142, 47, 1);
    border:1px solid ${theme.colors.sandle};
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    width: 245px;
    height: 48px;
    margin: 40px auto 0;
    display: block;
    cursor: pointer;
  }
`;

export const Headings = styled.div`
  text-align: center;
  font-size: 35px;
  margin-bottom: 40px;
  margin-top:80px;
  font-weight:bold;
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;

export const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  background: ${theme.colors.lightblack};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:1px;
  opacity: 0;
  transition: opacity 0.3s;
`;

export const ProductItem = styled.div`
  position: relative;
  border-radius: none;
  overflow: hidden;
  padding: 0;
  margin: 0;

  &:hover ${HoverOverlay} 
  {
    opacity: 1;
  }

  ${breakpoints.lg} 
  {
    margin: 0 5%;
  }
`;

export const StyledImage = styled.img`
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
    object-fit: cover;
    margin: auto;
  }
`;

export const OfferLabel = styled.div<{ offerType?: string }>`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  border-radius: 50%;
  font-size: 0.9em;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${({ offerType }) =>
    offerType === 'New'
      ? 'rgba(46, 193, 172, 1)'
      : (offerType === '-30%' || offerType === '-50%')
      ? 'rgba(233, 113, 113, 1)'
      : 'rgba(233, 113, 113, 1)'};
`;

export const HoverButton = styled.button`
  background: rgba(255, 255, 255, 1);
  margin-top:180px;
  color: rgba(184, 142, 47, 1);
  font-size: 16px;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

export const HoverTag = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom:220px;
  margin-top:20px;
  gap: 20px;
`;

export const CardTypo = styled(UiTypography)`
  font-weight: 600 !important;
  display: flex;
  line-height: 28.8px;
  margin-bottom: 5px;
  margin-left: 15px !important;
`;

export const Subtypo = styled('p')`
  color: ${theme.colors.mediumgray};
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 15px;
`;

export const Price = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 5px;
  margin-left: 15px;
`;

export const ProductDetails = styled.div`
  background-color: rgba(244, 245, 247, 1);
  padding: 10px;
  box-sizing: border-box;
`;

export const ProductName = styled.div`
  background:#F4F5F7;
  font-weight: normal;
  margin-top: -5px;
  padding:10px;
  strong {
    font-weight: bold;
  }
`;

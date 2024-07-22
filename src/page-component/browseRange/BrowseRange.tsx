import React from 'react';
import Image from 'next/image';
import { BrowserItem, Container, Headings, ImageUi, Titletypo } from './BrowseRange.styled';
import { CardTypo } from '../products/Products.styled';

interface BrowseRange {
  id: number;
  title: string;
  imageUrl: string;
}

const Browser: BrowseRange[] = [
  { id: 1, title: 'Dining',  imageUrl: '/images/1.1.png' },
  { id: 2, title: 'Living', imageUrl: '/images/1.2.png' },
  { id: 3, title: 'Bedroom', imageUrl: '/images/1.3.png' },
];

const BrowseList = () => {
  return (
 <>
      <Headings>
      <h1>Browse The Range</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Headings>

      <Container>
          {Browser.map((browse) => 
          (
              <BrowserItem key={browse.id}>
                  <ImageUi src={browse.imageUrl} alt={browse.title}/>
                  <Titletypo>{browse.title}</Titletypo>
              </BrowserItem>
          )
          )
          }
      </Container>
   </>
  );
};


export default BrowseList;
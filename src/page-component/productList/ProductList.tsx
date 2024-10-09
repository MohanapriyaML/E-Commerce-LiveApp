import React, { useState } from 'react';
import {
    CardTypo,
    Container,
    HoverButton,
    HoverOverlay,
    HoverTag,
    OfferLabel,
    Price,
    ProductItem,
    ProductName,
    StyledImage,
    StyledImageWrapper,
    Subtypo,
    TagsContainer
} from '../products/Products.styled';
import { FaShareAlt, FaRegHeart } from 'react-icons/fa';
import { MdCompareArrows } from 'react-icons/md';
import { PaginationButtons, PaginationButton, NumberButton, FilterDiv, AdjustIcon, MaindDiv, TypoFilter, MiniSquareIcon, ListViewIcon, TablePage, SubDiv, ShowDiv, ShortByDiv } from './ProductList.styled';

const ProductListPage = ({ bannerData }: any) => {
    console.log('productspage', bannerData);
    const products = bannerData?.[3]?.productImage || [];
    const [currentPage, setCurrentpage] = useState(1);
    const itemperpage = 16;

    const totalPages = Math.ceil(products.length / itemperpage);
    const startPage = (currentPage - 1) * itemperpage;
    const endPage = startPage + itemperpage;
    const currentProducts = products.slice(startPage, endPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentpage(pageNumber);
    };
    const pageNumbers = [...Array(totalPages).keys()];

    return (
        <>
            <FilterDiv>
                <MaindDiv className='body-gap'>
                    <AdjustIcon />
                    <div>
                        <TypoFilter>Filter</TypoFilter>
                    </div>
                    <MiniSquareIcon />
                    <ListViewIcon />
                    <TablePage>
                        Page {startPage}-{endPage} of {products.length}
                    </TablePage>
                </MaindDiv>
                <SubDiv>
                    <ShowDiv>Show <span>{endPage}</span></ShowDiv>
                    <ShortByDiv>short by <span>Default</span></ShortByDiv>
                </SubDiv>
            </FilterDiv>
            <Container className='body-gap'>
                {currentProducts.map((product: any, index: any) => {
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
            <div>
                <PaginationButtons>
                    {currentPage > 1 && (
                        <PaginationButton
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            variant='text'

                        >
                            Previous
                        </PaginationButton>
                    )}

                    {pageNumbers.map((pageIndex) => (
                        <NumberButton
                            key={pageIndex}
                            onClick={() => handlePageChange(pageIndex + 1)}
                            active={pageIndex + 1 === currentPage}
                        >
                            {pageIndex + 1}
                        </NumberButton>
                    ))}

                    {currentPage < totalPages && (
                        <PaginationButton
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            variant='text'
                        >
                            Next
                        </PaginationButton>
                    )}
                </PaginationButtons>
            </div>
        </>
    );
};

export default ProductListPage;

"use client";
import React from 'react';
import ProductListPage from '@/page-component/productList/ProductList';
import useCollection from '@/service/api';

const ProductList = () => {
    const { collection } = useCollection();

    const bodyData = collection.length > 0 ? collection[0].attributes.body : null;
    console.log("Body Data", bodyData);

    return (
        <ProductListPage bannerData={bodyData} />
    );
};

export default ProductList;

"use client";
import React from "react";

import Products from "../products/Products";
import BrowseList from "../browseRange/BrowseRange";
import useCollection from "@/service/api";
import BannerComponent from "../BannerComponent/BannerComponents";
import CarouselComponent from "../carouselComponent/CarouselComponent";
import ProductDetails from "../productDetails/helper-components/ProductDetails";
import ProductDetailsAlter from "../productDetails/helper-components/ProductDetailsAlter";
import Cartpage from "../cartpage/Cartpage";

type ComponentMapType = {
  [key: number]: React.JSX.Element;
};

const componentMap = (bodyData: any): ComponentMapType => ({
  1: <BannerComponent bannerData={bodyData} />,
  2: <BrowseList bannerData={bodyData}/>,
  3: <CarouselComponent bannerData={bodyData} />,
  4: <Products bannerData={bodyData}/>,
});
const Homepage = () => {
  const { collection } = useCollection();

  const bodyData = collection.length > 0 ? collection[0].attributes.body : null;
  console.log("Body Data", bodyData);
  return (
    <>
    <Cartpage/>
    <ProductDetails/>
    <ProductDetailsAlter/> 
      {collection.length > 0 ? (
        collection.map((item, itemIndex) => (
          <React.Fragment key={itemIndex}>
            {item.attributes?.body?.map((bodyItem, bodyIndex) => (
              <React.Fragment key={bodyIndex}>
                {componentMap(bodyData)[bodyItem.template_Id as number] || (
                  <div>Unknown template</div>
                )}
              </React.Fragment>
            )) || <div>No body content available</div>}
          </React.Fragment>
        ))
      ) : (
        <div>No collection data available</div>
      )}
    </>
  );
};

export default Homepage;

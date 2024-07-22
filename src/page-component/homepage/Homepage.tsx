"use client";
import React from "react";
import ComponentOne from "../component1/Component";
import Component3 from "../component3/component3";

import { CollectionItem } from "./types";
import Products from "../products/Products";
import BrowseList from "../browseRange/BrowseRange";
import useCollection from "@/service/api";

const componentMap: { [key: number]: JSX.Element } = {
  1: <ComponentOne />,
  2: <BrowseList />,
  3: <Component3 />,
  4: <Products />,
};



const Homepage = () => {
  const { collection, loading, error } = useCollection();

  return (
    <>
      {/* {collection.map((item, itemIndex) => (
        <React.Fragment key={itemIndex}>
          {item.attributes?.body?.map((bodyItem, bodyIndex) => (
            <React.Fragment key={bodyIndex}>
              <h2>Template ID: {bodyItem.template_Id}</h2>
              {componentMap[bodyItem.template_Id] || (
                <div>Unknown template</div>
              )}
            </React.Fragment>
          )) || <div>No body content available</div>}
        </React.Fragment>
      ))} */}

      <BrowseList />
      <Products/>
    </>
  );
};

export default Homepage;

"use client";
import React from "react";
import ComponentOne from "../component1/Component";
import ComponentTwo from "../component2/Component2";
import Component3 from "../component3/component3";
import Component4 from "../component4/component4";
import { CollectionItem } from "./types";

const componentMap: { [key: number]: JSX.Element } = {
  1: <ComponentOne />,
  2: <ComponentTwo />,
  3: <Component3 />,
  4: <Component4 />,
};

interface HomepageProps {
  collection: CollectionItem[];
}

const Homepage: React.FC<HomepageProps> = ({ collection }) => {
  return (
    <>
      {collection.map((item, itemIndex) => (
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
      ))}
    </>
  );
};

export default Homepage;

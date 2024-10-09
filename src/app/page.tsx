"use client";
import Homepage from "@/page-component/homepage/Homepage";
import { CollectionItem } from "@/page-component/homepage/types";
import useCollection from "@/service/api";
import React, { useEffect, useState } from "react";


const Home: React.FC = () => {
  const [collection, setCollection] = useState<CollectionItem[]>([]);
  const itemId = 5;

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await fetch(
          `http://e-commerce-gen.com/v1/e-commerces/${itemId}?populate[header][populate]=logo,Na[…].bannerImage,button&populate[footer][populate]=footer,image`
        );

        const data = await response.json();
        setCollection(data.data ? [data.data] : []);
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };

    fetchCollection();
  }, []);

  console.log('collection', collection);

  return (
    <>
      <Homepage />
    </>
  );
};

export default Home;

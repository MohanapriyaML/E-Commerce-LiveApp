"use client";
import Homepage from "@/page-component/homepage/Homepage";
import { CollectionItem } from "@/page-component/homepage/types";
import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [collection, setCollection] = useState<CollectionItem[]>([]);
  const itemId = 97;

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await fetch(
          `http://localhost:1337/api/e-commerces/${itemId}?populate=*`
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

  return <Homepage collection={collection} />;
};

export default Home;

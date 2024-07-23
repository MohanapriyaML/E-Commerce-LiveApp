import { useEffect, useState } from "react";
import { CollectionItem } from "@/page-component/homepage/types";

const useCollection = () => {
  const [collection, setCollection] = useState<CollectionItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const itemId = 5;
console.log('collection',collection);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await fetch(
          `https://strong-bee-4932a093ba.strapiapp.com/api/e-commerces/${itemId}?populate[header][populate]=logo,NavMenu,NavIcon,image&populate[body][populate]=productImage.bannerImage,button&populate[footer][populate]=footer,image`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCollection(data.data ? [data.data] : []);
      } catch (error: any) {
        setError("Error fetching collection: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCollection();
  }, [itemId]);

  return { collection, loading, error };
};

export default useCollection;

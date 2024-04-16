import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/queries";
import { StyledProductList } from "./ProductList.styles";
import { ProductGridItem } from "./ProductGridItem";

interface ProductItem {
  id: string;
  name: string;
  description: string;
  variants: any[];
  price: number;
  featuredAsset: any;
}

const ProductList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleBuy = (productId: string) => {
    console.log('Buy clicked for product ID:', productId);
  };

  return (
    <StyledProductList>
      {data.products.items.map((productItem: ProductItem) => (
        <ProductGridItem 
          key={productItem.id} 
          productItem={productItem} 
          handleBuy={handleBuy} 
        />
      ))}
    </StyledProductList>
  );
}

export default ProductList;
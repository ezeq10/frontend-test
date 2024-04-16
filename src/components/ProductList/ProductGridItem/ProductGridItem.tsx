import React from 'react';
import { BuyButton } from '../BuyButton';

interface ProductGridItemProps {
  key: string;
  productItem: ProductItem;
  handleBuy: (productId: string) => void
}

interface ProductItem {
  id: string;
  name: string;
  description: string;
  variants: any[];
  price: number;
  featuredAsset: any;
}

const ProductGridItem = ({ productItem, handleBuy }: ProductGridItemProps) => {
  return ( 
    <>
      <img src={productItem.featuredAsset.preview} alt={productItem.featuredAsset.name} />
      <p>{productItem.description}</p>
      <p>${(productItem.variants.length) ? productItem.variants[0].price : 'No price available.'}</p>
      <BuyButton onClick={() => handleBuy(productItem.id)}>Buy</BuyButton>  
    </>
  )
};

export default ProductGridItem;


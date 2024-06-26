import { StyledProductGridItem, StyledProductImage, StyledProductPriceWrapper } from './ProductGridItem.styles';
import { BuyButton } from '../BuyButton';
import { ProductItem } from '../../../interfaces';
interface ProductGridItemProps {
  key: string;
  productItem: ProductItem;
  handleBuy: (productId: string) => void
}

const ProductGridItem = ({ productItem, handleBuy }: ProductGridItemProps) => {
  return ( 
    <StyledProductGridItem>
      <StyledProductImage src={productItem.featuredAsset?.preview} alt={productItem.featuredAsset?.name} />
      <p>{productItem.description}</p>
      {(productItem.variants.length) ? (
        <StyledProductPriceWrapper>
          <span>${ productItem.variants[0].price}</span>
          <BuyButton onClick={() => handleBuy(productItem.variants[0].id)}>Buy</BuyButton>  
        </StyledProductPriceWrapper>
      ):(
        <div>No price available.</div>
      )}
    </StyledProductGridItem>
  )
};

export default ProductGridItem;


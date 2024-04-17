import React, { useContext } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/queries";
import { ADD_ITEM_TO_ORDER } from "../../graphql/mutations";
import { StyledProductList } from "./ProductList.styles";
import { ProductGridItem } from "./ProductGridItem";
import { OrderSubtotalContext } from "../../context/OrderSubtotalContext";
import { ProductItem } from "../../interfaces";

const ProductList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [ addItemToOrderMutation ] = useMutation(ADD_ITEM_TO_ORDER);
  const context = useContext(OrderSubtotalContext);

  if (!context) {
    throw new Error('OrderSubtotalContext not found!');
  }

  const { updateSubtotal } = context;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleBuy = (productVariantId: string) => {
    addItemToOrderMutation({
      variables: {
        productVariantId,
        quantity: 1
      }
    }).then((response) => {
      console.log('Item added to order:', response.data);
      updateSubtotal(response.data?.addItemToOrder?.subTotal ?? 0);
    }).catch((error) => {
      console.error('Error adding item to order:', error);
      throw new Error('Error adding item to order');
    });
  };
  
  return (
    <StyledProductList data-testid="product-list">
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
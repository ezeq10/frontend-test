import { gql } from "@apollo/client";
import { 
  ORDER_FRAGMENT, 
  ORDER_MODIFICATION_ERROR_FRAGMENT,
  ORDER_LIMIT_ERROR_FRAGMENT,
  NEGATIVE_QUANTITY_ERROR_FRAGMENT,
  INSUFFICIENT_STOCK_ERROR_FRAGMENT
} from "./fragments";

export const ADD_ITEM_TO_ORDER = gql`
  ${ORDER_FRAGMENT}
  ${ORDER_MODIFICATION_ERROR_FRAGMENT}
  ${ORDER_LIMIT_ERROR_FRAGMENT}
  ${NEGATIVE_QUANTITY_ERROR_FRAGMENT}
  ${INSUFFICIENT_STOCK_ERROR_FRAGMENT}

  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ... on Order {
        ...OrderFragment
      }
      ... on OrderModificationError {
        ...OrderModificationErrorFragment
      }
      ... on OrderLimitError {
        ...OrderLimitErrorFragment
      }
      ... on NegativeQuantityError {
        ...NegativeQuantityErrorFragment
      }
      ... on InsufficientStockError {
        ...InsufficientStockErrorFragment
      }
    }
  }
`;

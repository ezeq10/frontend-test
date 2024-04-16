import { gql } from "@apollo/client";

export const ADD_ITEM_TO_ORDER = gql`
  fragment OrderFragment on Order {
    id
    createdAt
    code
    currencyCode
    subTotal
    subTotalWithTax
    total
    totalWithTax
  }

  fragment OrderModificationErrorFragment on OrderModificationError {
    message
  }

  fragment OrderLimitErrorFragment on OrderLimitError {
    message
  }
  
  fragment NegativeQuantityErrorFragment on NegativeQuantityError {
    message
  }
  
  fragment InsufficientStockErrorFragment on InsufficientStockError {
    message
  }

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

import { gql } from "@apollo/client";

export const ORDER_FRAGMENT = gql`
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
`;  

export const ORDER_MODIFICATION_ERROR_FRAGMENT = gql` 
  fragment OrderModificationErrorFragment on OrderModificationError {
    message
  }
`;  

export const ORDER_LIMIT_ERROR_FRAGMENT = gql` 
  fragment OrderLimitErrorFragment on OrderLimitError {
    message
  }
`;  

export const NEGATIVE_QUANTITY_ERROR_FRAGMENT = gql` 
  fragment NegativeQuantityErrorFragment on NegativeQuantityError {
    message
  }
`;  

export const INSUFFICIENT_STOCK_ERROR_FRAGMENT = gql` 
  fragment InsufficientStockErrorFragment on InsufficientStockError {
    message
  }
`;
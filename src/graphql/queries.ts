import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts($options: ProductListOptions) {
    products(options: $options) {
      items {
        id
        name
        description
        variants {
          productId
          price
        }
        featuredAsset {
          name
          type
          fileSize
          preview
        }
      }
    }
  }
`;



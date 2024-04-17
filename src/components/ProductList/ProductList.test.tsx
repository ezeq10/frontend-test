import { getByTestId, getByText, render, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import ProductList from "./ProductList";
import { GET_PRODUCTS } from "../../graphql/queries";

const mockProducts = {
  products: {
    items: [
      { id: "1", name: "Product 1", description: "Description 1", variants: [], price: 10, featuredAsset: null },
      { id: "2", name: "Product 2", description: "Description 2", variants: [], price: 20, featuredAsset: null }
    ]
  }
};

const mocks = [
  {
    request: {
      query: GET_PRODUCTS
    },
    result: {
      data: mockProducts
    }
  }
];

describe("ProductList Component", () => {
  it("renders loading state initially", async () => {
    const { getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  it("renders products when data is loaded", async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );
    
    await waitFor(() => {
      expect(getByText(/Description 1/i)).toBeInTheDocument();
      expect(getByText(/Description 2/i)).toBeInTheDocument();
    });
  });
});

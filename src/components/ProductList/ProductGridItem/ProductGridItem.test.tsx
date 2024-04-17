import { render, fireEvent } from '@testing-library/react';
import ProductGridItem from './ProductGridItem';

describe('ProductGridItem component', () => {
  const mockProductItem = {
    id: '1',
    name: 'Product 1',
    description: 'Description of product 1',
    variants: [{ id: 'variant1', price: 10 }],
    price: 10,
    featuredAsset: { preview: 'preview-url', name: 'Product 1' }
  };

  test('renders product grid item with correct description', () => {
    const { getByText } = render(
      <ProductGridItem 
        key={mockProductItem.id} 
        productItem={mockProductItem} 
        handleBuy={() => {}} 
      />
    );
    const descriptionElement = getByText('Description of product 1');
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders product price and BuyButton when variants exist', () => {
    const { getByText } = render(
      <ProductGridItem 
        key={mockProductItem.id} 
        productItem={mockProductItem} 
        handleBuy={() => {}} 
      />
    );
    const priceElement = getByText('$10');
    expect(priceElement).toBeInTheDocument();
    const buyButtonElement = getByText('Buy');
    expect(buyButtonElement).toBeInTheDocument();
  });

  test('calls handleBuy when BuyButton is clicked', () => {
    const handleBuyMock = jest.fn();
    const { getByText } = render(
      <ProductGridItem 
        key={mockProductItem.id}
        productItem={mockProductItem} 
        handleBuy={handleBuyMock} 
      />
    );
    const buyButtonElement = getByText('Buy');
    fireEvent.click(buyButtonElement);
    expect(handleBuyMock).toHaveBeenCalledWith('variant1');
  });

  test('displays "No price available." when variants array is empty', () => {
    const productItemWithoutVariants = { ...mockProductItem, variants: [] };
    const { getByText } = render(
      <ProductGridItem 
        key={mockProductItem.id}
        productItem={productItemWithoutVariants} 
        handleBuy={() => {}} 
      />
    );
    const noPriceAvailableElement = getByText('No price available.');
    expect(noPriceAvailableElement).toBeInTheDocument();
  });
});

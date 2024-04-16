import { render } from '@testing-library/react';
import Header from './Header';
import { OrderSubtotalContext } from '../../context/OrderSubtotalContext';

// Mock the OrderSubtotalContext
const mockContextValue = {
  subtotal: 10,
  updateSubtotal: () => {},
};

// Wrap the Header component with the OrderSubtotalContext provider
const renderWithContext = () => {
  return render(
    <OrderSubtotalContext.Provider value={mockContextValue}>
      <Header />
    </OrderSubtotalContext.Provider>
  );
};

describe('Header component', () => {
  test('renders logo and subtotal', () => {
    const { getByAltText, getByText } = renderWithContext();
    
    // Check if the logo is rendered
    const logoElement = getByAltText('logo');
    expect(logoElement).toBeInTheDocument();

    // Check if the subtotal is rendered
    const subtotalElement = getByText('$ 10');
    expect(subtotalElement).toBeInTheDocument();
  });
});

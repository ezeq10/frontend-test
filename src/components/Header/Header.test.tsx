import { render } from '@testing-library/react';
import Header from './Header';

// Mock OrderSubtotalContext
const mockContextValue = {
  subtotal: 50
};

// Mock useContext hook to return mock context value
jest.mock('../../context/OrderSubtotalContext', () => ({
  OrderSubtotalContext: {
    Consumer: ({ children }: { children: any }) => children(mockContextValue)
  }
}));

describe('Header Component', () => {
  it('renders with the correct logo and subtotal', () => {
    const { getByAltText, getByText } = render(<Header />);
    
    // Check logo
    const logoElement = getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement.getAttribute('src')).toEqual('https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png');

    // Check if the subtotal is rendered with the correct value
    const subtotalElement = getByText('$ 50');
    expect(subtotalElement).toBeInTheDocument();
  });
});

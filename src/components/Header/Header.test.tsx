import { render } from '@testing-library/react';
import Header from './Header';
import { OrderSubtotalContext } from '../../context/OrderSubtotalContext';

describe('Header Component', () => {
  it('renders with initial subtotal value of 0', () => {
    const { getByText } = render(
      <OrderSubtotalContext.Provider value={{ subtotal: 0, updateSubtotal: () => {} }}>
        <Header />
      </OrderSubtotalContext.Provider>
    );

    const subtotalElement = getByText('$ 0');
    expect(subtotalElement).toBeInTheDocument();
  });

  it('renders with updated subtotal value', () => {
    const { getByText, rerender } = render(
      <OrderSubtotalContext.Provider value={{ subtotal: 0, updateSubtotal: () => {} }}>
        <Header />
      </OrderSubtotalContext.Provider>
    );

    // Check initial subtotal value
    let subtotalElement = getByText('$ 0');
    expect(subtotalElement).toBeInTheDocument();

    // Update subtotal value
    rerender(
      <OrderSubtotalContext.Provider value={{ subtotal: 50, updateSubtotal: () => {} }}>
        <Header />
      </OrderSubtotalContext.Provider>
    );

    // Check updated subtotal value
    subtotalElement = getByText('$ 50');
    expect(subtotalElement).toBeInTheDocument();
  });

  it('renders with default logo', () => {
    const { getByAltText } = render(
      <OrderSubtotalContext.Provider value={{ subtotal: 0, updateSubtotal: () => {} }}>
        <Header />
      </OrderSubtotalContext.Provider>
    );

    const logoElement = getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement.getAttribute('src')).toEqual('https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png');
  });
});

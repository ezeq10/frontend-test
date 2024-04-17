import { render, fireEvent } from '@testing-library/react';
import BuyButton from './BuyButton';

describe('BuyButton component', () => {
  test('renders button with correct text', () => {
    const { getByText } = render(<BuyButton onClick={() => {}} />);
    const buttonElement = getByText('Buy');
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<BuyButton onClick={onClickMock} />);
    const buttonElement = getByText('Buy');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});

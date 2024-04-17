import { ReactNode, createContext, useContext } from 'react';
import useStateWithStorage from '../hooks/useStateWithStorage';

interface OrderSubtotalContextType {
  subtotal: number;
  updateSubtotal: (newSubtotal: number) => void;
}

interface OrderSubtotalContextProps {
  children: ReactNode;
}

// Create the context
export const OrderSubtotalContext = createContext<OrderSubtotalContextType>({
  subtotal: 0, // Default value for subtotal
  updateSubtotal: () => {}, // Default function for updateSubtotal
});

// Custom hook to consume the theme context
export const useOrderSubtotalContext = () => {
  const context = useContext(OrderSubtotalContext);
  if (!context) {
    throw new Error('OrderSubtotalContext not found!');
  }
  return context;
};

// Create the provider
export const OrderSubtotalProvider = ({children}: OrderSubtotalContextProps) => {
  const [subtotal, setSubtotal] = useStateWithStorage<number>('Subtotal', 0);

  const updateSubtotal = (newSubtotal: number) => {
    setSubtotal(newSubtotal);
  };

  return (
    <OrderSubtotalContext.Provider value={{ subtotal, updateSubtotal }}>
      {children}
    </OrderSubtotalContext.Provider>
  );
};
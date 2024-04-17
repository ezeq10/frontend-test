import { ReactNode, createContext } from 'react';
import useStateWithStorage from '../hooks/useStateWithStorage';

interface OrderSubtotalContextType {
  subtotal: number;
  updateSubtotal: (newSubtotal: number) => void;
}

interface OrderSubtotalContextProps {
  children: ReactNode;
}

// Create the context
const OrderSubtotalContext = createContext<OrderSubtotalContextType>({
  subtotal: 0, // Default value for subtotal
  updateSubtotal: () => {}, // Default function for updateSubtotal
});

// Create the provider
const OrderSubtotalProvider = ({children}: OrderSubtotalContextProps) => {
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

export { OrderSubtotalProvider, OrderSubtotalContext };

import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { OrderSubtotalProvider } from './context/OrderSubtotalContext';

const App: React.FC = () => {
  return (
    <OrderSubtotalProvider>
      <Header></Header>
      <div>
        <ProductList></ProductList>
      </div>
    </OrderSubtotalProvider>
  );
}

export default App;

import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';

// contex
import ApiContexProvider from './contex/ApiContexProvider';
import CartContexProvider from './contex/CartContexProvider';

const App = () => {
  return (
    <div>
      <ApiContexProvider>
       <CartContexProvider>
        <Routes>
            <Route path='/' element={<Products/>} />
            <Route path='/product/:productId' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
       </CartContexProvider>
      </ApiContexProvider>
    </div>
  );
};

export default App;
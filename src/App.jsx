import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { persistor } from './redux/store';
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/home';
import Products from './pages/products/products';
import Cart from './components/cart/cart';
import Detail from './pages/details/details';
import Checkout from './pages/checkout/checkout';
import Wishlist from './components/wishlist/wishlist'
import { PersistGate } from 'redux-persist/integration/react';



const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
    <div className='app'>
      <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<Detail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        </Routes>
    </div>
    </Provider>
    </PersistGate>
  )
}

export default App

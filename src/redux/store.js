import { configureStore } from '@reduxjs/toolkit';
import { persistStore , persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './slices/CartSlice';
import productReducer from './slices/ProductSlice';
import wishlistReducer from './slices/wishlistSlice';

const persistConfig = {
  key: 'cart', 
  storage,
};

const persistedCart = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCart,
    products: productReducer,
    wishlist: wishlistReducer
  }
});

export const persistor = persistStore(store);
export default store;

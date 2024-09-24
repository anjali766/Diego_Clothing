import { createSlice } from '@reduxjs/toolkit';
import productData from '../../data/productData.json';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: productData
  },
  reducers: {}
});

export default productSlice.reducer;

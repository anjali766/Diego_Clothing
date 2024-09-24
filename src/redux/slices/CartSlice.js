import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const exist = state.items.find(item => item.id === action.payload.id);
      if (exist) {
        exist.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
    quantityUpdate: (state, action) => {
      const { id, quantity } = action.payload;
      const finditem = state.items.find(item => item.id === id);
      if (finditem) {
        finditem.quantity = quantity;
      }
    }
  }
});

export const { addItem, removeItem, clearCart, quantityUpdate } = cartSlice.actions;
export default cartSlice.reducer;

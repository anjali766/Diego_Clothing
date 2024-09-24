import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState:{
        items: []
    },
    reducers: {
        wishlistAdd: (state,action) => {
            const exist = state.items.find(item => item.id === action.payload.id);
            if(!exist){
                state.items.push(action.payload);
            }
        },
        wishlistRemove: (state,action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        WishlistClear: (state,action) => {
            state.items = [];
        }
    }
});

export const { wishlistAdd , wishlistRemove, WishlistClear} = wishlistSlice.actions;
export default wishlistSlice.reducer;
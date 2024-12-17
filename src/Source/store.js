import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialState = {
  cartItem: [],
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItem.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItem.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItem.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    deleteProduct: (state, action) => {
      state.cartItem = state.cartItem.filter(item => item.id !== action.payload.id);
    }
  }
});


export const { addToCart, increaseQuantity, decreaseQuantity, deleteProduct } = cartSlice.actions;


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;

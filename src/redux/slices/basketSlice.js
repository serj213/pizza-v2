import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => obj.price + sum, 0);
    },

    removeProduct(state, action) {
      state.items = state.items.filter((obj) => (obj.id = !action.payload));
    },

    clearProduct(state) {
      state.items = [];
    },
  },
});

export const { addProduct, removeProduct, clearProduct } = basketSlice.actions;

export default basketSlice.reducer;

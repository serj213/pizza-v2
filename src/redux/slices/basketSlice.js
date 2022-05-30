import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct(state, action) {
      const findObj = state.items.find((obj) => obj.id === action.payload.id);

      if (findObj) {
        console.log(findObj);
        findObj.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },

    onMinusCount(state, action) {
      const findObj = state.items.find((obj) => obj.id === action.payload);

      if (findObj) {
        findObj.count--;
        state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
      }
    },

    removeProduct(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },

    clearProduct(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const { addProduct, onMinusCount, removeProduct, clearProduct } = basketSlice.actions;

export default basketSlice.reducer;

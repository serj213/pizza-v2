import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { basketCartProps } from '../../Components/BasketCart';

interface basketSliceState {
  items: basketCartProps[];
  totalPrice: number;
  totalCount: number;
}

const initialState: basketSliceState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<string>) {
      const findObj = state.items.find((obj) => obj.id === action.payload);

      if (findObj) {
        findObj.count++;
      }
      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },

    onMinusCount(state, action: PayloadAction<string>) {
      const findObj = state.items.find((obj) => obj.id === action.payload);

      if (findObj) {
        findObj.count--;
        state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
      }
    },

    removeProduct(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
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

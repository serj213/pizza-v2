import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const calculateSlice = createSlice({
  name: 'calculate',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.count -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { decrementByAmount, incrementByAmount } = calculateSlice.actions;

export default calculateSlice.reducer;

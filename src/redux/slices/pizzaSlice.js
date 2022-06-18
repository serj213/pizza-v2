import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzasStatus', async (params) => {
  const { category, sort, order, limit, currentPage } = params;
  const { data } = await axios.get(
    `https://6287dd3f7864d2883e8e1808.mockapi.io/serj/pizzas${category}&page=${currentPage}&limit=${limit}&sortby=${sort}&order=${order}`,
  );

  // console.log([fetchPizzas.fulfilled]);
  return data;
});

const initialState = {
  items: [],
  status: 'loading', // loading | success | rejected
};

const PizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.items = [];
    },

    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },

    [fetchPizzas.rejected]: (state) => {
      state.items = [];
      state.status = 'rejected';
    },
  },
});

export const { setItems } = PizzaSlice.actions;

export default PizzaSlice.reducer;

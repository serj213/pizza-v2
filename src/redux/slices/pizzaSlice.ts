import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export type paramsFilterUrl = {
  category: string;
  sort: string;
  order: string;
  limit: number;
  currentPage: number;
};

export type pizzaType = {
  category: number;
  id: string;
  name: string;
  img: string;
  price: number;
  rating: number;
  size: number[];
  types: number[];
};

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzasStatus',
  async (params: paramsFilterUrl) => {
    const { category, sort, order, limit, currentPage } = params;
    const { data } = await axios.get(
      `https://6287dd3f7864d2883e8e1808.mockapi.io/serj/pizzas${category}&page=${currentPage}&limit=${limit}&sortby=${sort}&order=${order}`,
    );
    return data;
  },
);

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  REJECTED = 'rejected',
}

interface pizzaSliceType {
  items: pizzaType[];
  status: string;
}

const initialState: pizzaSliceType = {
  items: [],
  status: Status.LOADING,
};

const PizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<pizzaType[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.items = [];
      state.status = Status.REJECTED;
    });
  },
});

export const { setItems } = PizzaSlice.actions;

export default PizzaSlice.reducer;

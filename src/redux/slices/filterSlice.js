import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoria: {
    name: 'Все',
    categorId: 0,
  },
  sortBy: {
    name: 'Популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categoria = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const { setCategory, setSortBy } = filterSlice.actions;

export default filterSlice.reducer;

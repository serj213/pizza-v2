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
  currentPage: 1,
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

    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },

    getParamsUrl(state, action) {
      state.categoria.categorId = action.payload.categoria
        ? Number(action.payload.categoria)
        : state.categoria.categorId;
      state.sortBy = action.payload.sortBy;
      state.currentPage = Number(action.payload.currentPage);
    },
  },
});

export const { setCategory, setSortBy, setCurrentPage, getParamsUrl } = filterSlice.actions;

export default filterSlice.reducer;

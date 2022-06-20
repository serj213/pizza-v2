import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type categoria = {
  name: string;
  categorId: number;
};

export type sort = {
  name: string;
  sortProperty: string;
};

type getParamsUrlType = {
  categorId: number;
  categoria: string;
  sortBy: sort;
  currentPage: number;
};

interface filterSliceType {
  categoria: categoria;
  sortBy: sort;
  currentPage: number;
}

const initialState: filterSliceType = {
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
    setCategory(state, action: PayloadAction<any>) {
      state.categoria = action.payload;
    },
    setSortBy(state, action: PayloadAction<sort>) {
      state.sortBy = action.payload;
    },

    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },

    getParamsUrl(state, action: PayloadAction<any>) {
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

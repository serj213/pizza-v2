import { configureStore } from '@reduxjs/toolkit';

import filterSlice from './slices/filterSlice';
import basketSlice from './slices/basketSlice';

export const store = configureStore({
  reducer: {
    filters: filterSlice,
    basket: basketSlice,
  },
});

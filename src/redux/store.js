import { configureStore } from '@reduxjs/toolkit';

import calculateSlice from './slices/calculateSlice';

export const store = configureStore({
  reducer: { calculate: calculateSlice },
});

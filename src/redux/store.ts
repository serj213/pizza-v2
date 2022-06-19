import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filterSlice from './slices/filterSlice';
import basketSlice from './slices/basketSlice';
import pizzaSlice from './slices/pizzaSlice';

export const store = configureStore({
  reducer: {
    filters: filterSlice,
    basket: basketSlice,
    pizzas: pizzaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

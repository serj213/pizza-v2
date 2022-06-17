import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "./slices/filterSlice";
import basketSlice from "./slices/basketSlice";
import pizzaSlice from "./slices/pizzaSlice";

export const store = configureStore({
  reducer: {
    filters: filterSlice,
    basket: basketSlice,
    pizzas: pizzaSlice,
  },
});

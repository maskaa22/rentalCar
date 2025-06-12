import { configureStore } from "@reduxjs/toolkit";
import CarsReducer from "./cars/slice";
import BrandsReducer from "./brands/slice";
import FilterReducer from "./filters/slice";

export const store = configureStore({
  reducer: {
    cars: CarsReducer,
    brands: BrandsReducer,
    filters: FilterReducer,
  },
});

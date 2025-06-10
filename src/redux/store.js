import { configureStore } from "@reduxjs/toolkit";
import CarsReducer from './cars/slice'

export const store = configureStore({
    reducer: {
        cars: CarsReducer
    }
})
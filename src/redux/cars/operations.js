import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async ({ page = 1, signal, filters = {}, resetList = false }, thunkAPI) => {
    try {
      const params = {
        page,
        limit: 12,
        ...filters
      }

      if (filters.price) {
        params.rentalPrice = filters.price;
      }

      // await delay(500); 
      
      const response = await api.get("/cars", { params, signal });

      return {
        cars: response.data.cars,
        page: response.data.page,
        totalPages: response.data.totalPages,
        resetList: resetList,
      };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchOneCar = createAsyncThunk(
  "car/fetchAll",
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`/cars/${id}`);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

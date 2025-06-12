import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async ({ page = 1, signal, filters = {}, resetList = false }, thunkAPI) => {
    try {
      const params = {
        page,
        limit: 12,
        ...filters
      }
      
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

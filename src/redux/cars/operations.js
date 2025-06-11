import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async ({ page, signal }, thunkAPI) => {
    try {
      const response = await api.get("/cars", { params: { page }, signal });

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

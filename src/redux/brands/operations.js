import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../cars/operations";

export const fetchBrands = createAsyncThunk(
  "brands/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/brands");

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

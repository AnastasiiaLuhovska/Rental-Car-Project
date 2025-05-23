import { createSlice } from "@reduxjs/toolkit";
import { getBrands, getCars } from "./operations.ts";
import type { Return } from "../../types/types.ts";

interface Initial {
  brands: string[];
  error: null | string | undefined;
  cars: Return | null;
  isLoading: boolean;
}

const initialState: Initial = {
  brands: [],
  error: null,
  cars: null,
  isLoading: false,
};
const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.error = null;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
export const carsReducer = slice.reducer;

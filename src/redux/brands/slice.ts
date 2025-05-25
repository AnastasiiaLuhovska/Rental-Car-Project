import { createSlice } from "@reduxjs/toolkit";
import { getBrands } from "./operations.ts";

interface Initial {
  brands: string[];
  error: null | string | undefined;
}

const initialState: Initial = {
  brands: [],
  error: null,
};
const slice = createSlice({
  name: "brands",
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
      });
  },
});
export const brandsReducer = slice.reducer;

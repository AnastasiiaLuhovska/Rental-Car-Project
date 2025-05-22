import { createSlice } from "@reduxjs/toolkit";
import { getBrands } from "./operations.ts";

interface Initial {
  brands: string[];
}

const initialState: Initial = {
  brands: [],
};
const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
    });
  },
});
export const carsReducer = slice.reducer;

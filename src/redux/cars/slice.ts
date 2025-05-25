import { createSlice } from "@reduxjs/toolkit";
import { getCarById, getCars } from "./operations.ts";
import type { QueryValues, Car } from "../../types/types.ts";

interface Initial {
  error: null | string | undefined;
  cars: Car[] | [];
  isLoading: boolean;
  query: QueryValues;
  page: number;
  carById: null | Car;
  totalPages: number;
  like: string[] | null;
}

const initialState: Initial = {
  error: null,
  cars: [],
  isLoading: false,
  query: {
    brandOption: "",
    maxMileage: "",
    minMileage: "",
    priceOption: "",
  },
  page: 1,
  carById: null,
  totalPages: 1,
  like: null,
};
const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page += action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
      state.cars = [];
      state.page = 1;
    },
    addLike: (state, action) => {
      if (!state.like) {
        return action.payload;
      }
      return [...state.like, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.cars = [...state.cars, ...action.payload.cars];
        state.totalPages = action.payload.totalPages;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getCarById.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.carById = action.payload;
      })
      .addCase(getCarById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
export const carsReducer = slice.reducer;
export const { setPage, setQuery, addLike } = slice.actions;

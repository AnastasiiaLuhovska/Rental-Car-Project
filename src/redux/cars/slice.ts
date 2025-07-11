import { createSlice } from "@reduxjs/toolkit";
import { getCarById, getCars } from "./operations.ts";
import type { Car } from "../../types/types.ts";

interface Initial {
  error: null | string | undefined;
  cars: Car[];
  isLoading: boolean;
  page: number;
  carById: null | Car;
  totalPages: number;
  like: string[];
}

const initialState: Initial = {
  error: null,
  cars: [],
  isLoading: false,
  page: 1,
  carById: null,
  totalPages: 1,
  like: [],
};
const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page += action.payload;
    },
    addLike: (state, action) => {
      state.like = [...state.like, action.payload];
    },
    deleteLike: (state, action) => {
      state.like = state.like.filter((like) => like !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.page > 1
          ? (state.cars = [...state.cars, ...action.payload.cars])
          : (state.cars = [...action.payload.cars]);
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
export const { setPage, addLike, deleteLike } = slice.actions;

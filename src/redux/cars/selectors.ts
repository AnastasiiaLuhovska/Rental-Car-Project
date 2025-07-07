import type { RootState } from "../store.ts";

export const selectCars = (state: RootState) => state.cars.cars;
export const selectCarById = (state: RootState) => state.cars.carById;
export const selectLoading = (state: RootState) => state.cars.isLoading;
export const selectTotalPages = (state: RootState) => state.cars.totalPages;
export const selectPage = (state: RootState) => state.cars.page;
export const selectLike = (state: RootState) => state.cars.like;

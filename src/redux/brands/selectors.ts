import type { RootState } from "../store.ts";

export const selectBrands = (state: RootState) => state.cars.brands;
export const selectCars = (state: RootState) => state.cars.cars;

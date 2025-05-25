import type { RootState } from "../store.ts";

export const selectCars = (state: RootState) => state.cars.cars;
export const selectCarById = (state: RootState) => state.cars.carById;

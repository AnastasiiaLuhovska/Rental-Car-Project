import type { RootState } from "../store.ts";

export const selectCars = (state: RootState) => state.cars.cars;

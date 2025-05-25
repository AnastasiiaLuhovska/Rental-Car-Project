import type { RootState } from "../store.ts";

export const selectBrands = (state: RootState) => state.brands.brands;

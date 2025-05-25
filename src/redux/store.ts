import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/slice.ts";
import { brandsReducer } from "./brands/slice.ts";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    brands: brandsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

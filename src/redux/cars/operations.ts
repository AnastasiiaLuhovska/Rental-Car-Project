import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Return } from "../../types/types.ts";
import type { RootState } from "../store.ts";
import instance from "../../api/api.ts";

export const getCars = createAsyncThunk<
  Return,
  undefined,
  { rejectValue: string; state: RootState }
>("cars/getCars", async (_, thunkAPI) => {
  try {
    const values = thunkAPI.getState().cars.query;
    const { data } = await instance.get("/cars", {
      params: {
        ...(values !== undefined && {
          ...(values.brandOption && { brand: values.brandOption }),
          ...(values.priceOption && { rentalPrice: values.priceOption }),
          ...(values.minMileage && { minMileage: values.minMileage }),
          ...(values.maxMileage && { maxMileage: values.maxMileage }),
        }),
        limit: "12",
        page: thunkAPI.getState().cars.page.toString(),
      },
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("Something wnt wrong");
  }
});

import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { QueryValues, Return } from "../../types/types.ts";

const instance = axios.create({
  baseURL: "https://car-rental-api.goit.global",
});

export const getBrands = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>("cars/getBrands", async (_, thunkAPI) => {
  try {
    const { data } = await instance.get("/brands");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("Something went wrong :(");
  }
});

export const getCars = createAsyncThunk<
  Return,
  QueryValues | undefined,
  { rejectValue: string }
>("cars/getCars", async (values, thunkAPI) => {
  try {
    const { data } = await instance.get("/cars", {
      params: {
        ...(values !== undefined && {
          ...(values.brandOption && { brand: values.brandOption }),
          ...(values.priceOption && { rentalPrice: values.priceOption }),
          ...(values.minMileage && { minMileage: values.minMileage }),
          ...(values.maxMileage && { maxMileage: values.maxMileage }),
        }),
        limit: "12",
        page: "1",
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

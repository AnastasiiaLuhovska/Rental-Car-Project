import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "https://car-rental-api.goit.global",
});

export const getBrands = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>("getBrands", async (_, thunkAPI) => {
  try {
    const { data } = await instance.get("/brands");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      thunkAPI.rejectWithValue(error.message);
    }
    thunkAPI.rejectWithValue("Something went wrong :(");
  }
});

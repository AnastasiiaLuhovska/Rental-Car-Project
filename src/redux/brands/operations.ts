import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/api.ts";

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

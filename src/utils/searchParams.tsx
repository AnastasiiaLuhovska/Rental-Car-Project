import type { QueryValues } from "../types/types.ts";
import type { Location } from "react-router-dom";

export const getParams = (location: Location) => {
  const searchParams = new URLSearchParams(location.search);

  const queryValues: QueryValues = {
    brandOption: searchParams.get("brandOption") || "",
    maxMileage: searchParams.get("maxMileage") || "",
    minMileage: searchParams.get("minMileage") || "",
    priceOption: searchParams.get("priceOption") || "",
  };
  return queryValues;
};

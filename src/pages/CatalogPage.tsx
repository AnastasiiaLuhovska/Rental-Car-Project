import { type FC, useEffect } from "react";
import FilterBar from "../components/FilterBar/FilterBar.tsx";
import Catalog from "../components/Catalog/Catalog.tsx";
import { getCars } from "../redux/brands/operations.ts";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store.ts";

const CatalogPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <>
      <FilterBar />
      <Catalog />
    </>
  );
};

export default CatalogPage;

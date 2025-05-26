import { type FC } from "react";
import FilterBar from "../components/FilterBar/FilterBar.tsx";
import Catalog from "../components/Catalog/Catalog.tsx";
import s from "./CatalogPage.module.css";
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton.tsx";
import { useSelector } from "react-redux";
import {
  selectCars,
  selectLoading,
  selectPage,
  selectTotalPages,
} from "../redux/cars/selectors.ts";

const CatalogPage: FC = () => {
  const isLoading = useSelector(selectLoading);
  const allCars = useSelector(selectCars);
  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectPage);

  return (
    <div className="container">
      <div className={s.wrapper}>
        <FilterBar />
        <Catalog />
        {!isLoading &&
          allCars?.length > 0 &&
          totalPages > 1 &&
          page < totalPages && <LoadMoreButton />}
      </div>
    </div>
  );
};

export default CatalogPage;

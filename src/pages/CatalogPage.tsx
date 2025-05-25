import { type FC } from "react";
import FilterBar from "../components/FilterBar/FilterBar.tsx";
import Catalog from "../components/Catalog/Catalog.tsx";

import s from "./CatalogPage.module.css";
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton.tsx";
const CatalogPage: FC = () => {
  return (
    <div className={s.wrapper}>
      <FilterBar />
      <Catalog />
      <LoadMoreButton />
    </div>
  );
};

export default CatalogPage;

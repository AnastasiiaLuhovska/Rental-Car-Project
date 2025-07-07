import s from "./LoadMoreButton.module.css";
import { type FC } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store.ts";
import { getCars } from "../../redux/cars/operations.ts";
import { setPage } from "../../redux/cars/slice.ts";
import { getParams } from "../../utils/searchParams.tsx";
import { useLocation } from "react-router";

const LoadMoreButton: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  const handleClick = () => {
    dispatch(setPage(1));
    dispatch(getCars(getParams(location)));
  };
  return (
    <button onClick={handleClick} className={s.button}>
      Load more
    </button>
  );
};

export default LoadMoreButton;

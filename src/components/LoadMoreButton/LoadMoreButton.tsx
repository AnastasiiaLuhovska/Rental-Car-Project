import s from "./LoadMoreButton.module.css";
import { type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store.ts";
import { getCars } from "../../redux/cars/operations.ts";
import { setPage } from "../../redux/cars/slice.ts";
import { selectQuery } from "../../redux/cars/selectors.ts";

const LoadMoreButton: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const query = useSelector(selectQuery);

  const handleClick = () => {
    dispatch(setPage(1));
    dispatch(getCars(query));
  };
  return (
    <button onClick={handleClick} className={s.button}>
      Load more
    </button>
  );
};

export default LoadMoreButton;

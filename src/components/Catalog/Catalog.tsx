import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectLike } from "../../redux/cars/selectors.ts";
import CarItem from "../CarItem/CarItem.tsx";
import s from "./Catalog.module.css";
import type { AppDispatch } from "../../redux/store.ts";
import { useEffect } from "react";
import { getCars } from "../../redux/cars/operations.ts";
import type { Car } from "../../types/types.ts";

// import { useLocation } from "react-router";

const Catalog = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const location = useLocation();

  useEffect(() => {
    dispatch(getCars());
  }, []);

  const allCars = useSelector(selectCars);
  const like = useSelector(selectLike);

  if (!allCars?.length)
    return <div className={s.notFound}>We didnt find anything...</div>;

  return (
    <ul className={s.list}>
      {allCars.map((car: Car) => {
        return like && like.includes(car.id) ? (
          <CarItem key={car.id} car={car} like />
        ) : (
          <CarItem key={car.id} car={car} />
        );
      })}
    </ul>
  );
};

export default Catalog;

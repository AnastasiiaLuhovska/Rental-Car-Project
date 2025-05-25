import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors.ts";
import CarItem from "../CarItem/CarItem.tsx";
import s from "./Catalog.module.css";
import type { AppDispatch } from "../../redux/store.ts";
import { useEffect } from "react";
import { getCars } from "../../redux/cars/operations.ts";
const Catalog = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCars());
  }, []);

  const allCars = useSelector(selectCars);
  console.log(allCars);
  if (!allCars.length) return;

  return (
    <ul className={s.list}>
      {allCars.map((car) => {
        return <CarItem key={car.id} car={car} />;
      })}
    </ul>
  );
};

export default Catalog;

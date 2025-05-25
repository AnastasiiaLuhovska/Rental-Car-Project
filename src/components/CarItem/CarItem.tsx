import type { Car } from "../../types/types.ts";
import type { FC } from "react";
import s from "./CarItem.module.css";
import { Link } from "react-router";

interface CarItemProps {
  car: Car;
}
const CarItem: FC<CarItemProps> = ({ car }) => {
  const {
    id,
    year,
    brand,
    model,
    type,
    img,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;
  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <img className={s.img} src={img} alt={id} />
        <div className={s.parWrap}>
          <div className={s.par}>
            <p>
              {brand} <span className={s.span}>{model}</span>, {year}
            </p>
          </div>
          <p>${rentalPrice}</p>
        </div>

        <p className={s.description}>
          {address} | {rentalCompany} | {type} | {mileage} km
        </p>
      </div>
      <Link to={`/catalog/${id}`} className={s.button}>
        Read more
      </Link>
    </li>
  );
};

export default CarItem;

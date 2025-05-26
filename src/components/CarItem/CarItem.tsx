import type { Car } from "../../types/types.ts";
import { type FC, useState } from "react";
import s from "./CarItem.module.css";
import { Link } from "react-router";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addLike, deleteLike } from "../../redux/cars/slice.ts";
import { FaHeart } from "react-icons/fa";

interface CarItemProps {
  car: Car;
  like?: boolean;
}

const CarItem: FC<CarItemProps> = ({ car, like }) => {
  const [isLiked, addIsLiked] = useState<boolean>(false);
  const dispatch = useDispatch();
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

  const handleClick = () => {
    addIsLiked(!isLiked);
    isLiked ? dispatch(addLike(car.id)) : dispatch(deleteLike(car.id));
  };
  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <img className={s.img} src={img} alt={id} />
        <button onClick={handleClick}>
          {like ? (
            <FaHeart className={s.svgLike} />
          ) : (
            <FaRegHeart className={s.svg} />
          )}
        </button>
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

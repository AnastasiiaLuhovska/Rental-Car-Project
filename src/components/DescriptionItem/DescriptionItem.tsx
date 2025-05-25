import type { FC } from "react";
import type { Car } from "../../types/types.ts";
import CarOrderForm from "../CarOrderForm/CarOrderForm.tsx";
import s from "./DescriptionItem.module.css";

interface CarParams {
  car: Car;
}

const DescriptionItem: FC<CarParams> = ({ car }) => {
  const {
    accessories,
    address,
    brand,
    description,
    engineSize,
    fuelConsumption,
    functionalities,
    id,
    img,
    mileage,
    model,
    rentalConditions,
    rentalPrice,
    type,
    year,
  } = car;

  return (
    <div className={s.mainWrapper}>
      <div className="car-image-wrapper">
        <img src={img} alt={brand} className={s.img} />
        <CarOrderForm />
      </div>

      <div className={s.wrapper}>
        <div className="car-info-block">
          <p className={s.carName}>
            {brand} {model}, {year} <span className={s.carId}>id: {id}</span>
          </p>
          <p className={s.carLocation}>
            <span className="location"> {address}</span>
            <span className="separator">·</span>
            <span className="mileage">Mileage: {mileage} km</span>
          </p>
          <p className={s.price}>${rentalPrice}</p>
          <p className={s.desc}>{description}</p>
        </div>

        <div className="rental-conditions-block">
          <p className={s.title}>Rental Conditions:</p>
          <ul className={s.list}>
            {rentalConditions.map((condition: string) => (
              <li className={s.li}>{condition}</li>
            ))}
          </ul>
        </div>

        <div className="car-specifications-block">
          <p className={s.title}>Car Specifications:</p>
          <ul className={s.list}>
            <li className={s.li}>
              <span>Year:</span> {year}
            </li>
            <li className={s.li}>
              <span>Type:</span> {type}
            </li>
            <li className={s.li}>
              <span>Fuel Consumption:</span> {fuelConsumption}
            </li>
            <li className={s.li}>
              <span>Engine Size:</span> {engineSize}
            </li>
          </ul>
        </div>

        <div className="accessories-block">
          <p className={s.title}>Accessories and functionalities:</p>
          <ul className={s.list}>
            {accessories.map((accessory: string) => (
              <li className={s.li}>{accessory}</li>
            ))}
            {functionalities.map((functionality: string) => (
              <li>{functionality}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescriptionItem;

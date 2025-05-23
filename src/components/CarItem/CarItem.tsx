import type { Car } from "../../types/types.ts";
import type { FC } from "react";

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
    <li>
      <img src={img} alt={id} />
      <p>
        {brand} <span>{model}</span>, {year}
      </p>
      <p>${rentalPrice}</p>
      <p>
        {address}| {rentalCompany}| {type}| {mileage}
      </p>
    </li>
  );
};

export default CarItem;

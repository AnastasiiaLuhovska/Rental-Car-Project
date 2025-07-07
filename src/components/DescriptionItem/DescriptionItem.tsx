import type { FC } from "react";
import type { Car } from "../../types/types.ts";
import CarOrderForm from "../CarOrderForm/CarOrderForm.tsx";
import s from "./DescriptionItem.module.css";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/cars/selectors.ts";
import Loader from "../Loader/Loader.tsx";
import DescriptionCarInfo from "./DescriptionCarInfo.tsx";
import Media from "react-media";

interface CarParams {
  car: Car;
}

const DescriptionItem: FC<CarParams> = ({ car }) => {
  const isLoading = useSelector(selectLoading);
  const { brand, img } = car;

  return isLoading ? (
    <Loader />
  ) : (
    <div className={s.mainWrapper}>
      <div className="car-image-wrapper">
        <img src={img} alt={brand} className={s.img} />
        <Media query="(min-width: 1440px)">
          {(matches) => matches && <CarOrderForm />}
        </Media>
      </div>
      <DescriptionCarInfo car={car} />
      <Media query="(max-width: 1439px)">
        {(matches) => matches && <CarOrderForm />}
      </Media>
    </div>
  );
};

export default DescriptionItem;

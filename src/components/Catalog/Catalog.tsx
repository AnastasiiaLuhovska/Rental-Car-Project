import { useSelector } from "react-redux";
import { selectCars } from "../../redux/brands/selectors.ts";
import CarItem from "../CarItem/CarItem.tsx";

const Catalog = () => {
  const allCars = useSelector(selectCars);

  if (allCars === null) return;

  return (
    <ul>
      {allCars.cars.map((car) => {
        return <CarItem key={car.id} car={car} />;
      })}
    </ul>
  );
};

export default Catalog;

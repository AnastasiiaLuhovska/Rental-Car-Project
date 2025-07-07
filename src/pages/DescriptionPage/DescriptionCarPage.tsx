import { type FC, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router";
import DescriptionItem from "../../components/DescriptionItem/DescriptionItem.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store.ts";
import { getCarById } from "../../redux/cars/operations.ts";
import { selectCarById } from "../../redux/cars/selectors.ts";
import s from "./DescriptionCarPage.module.css";

const DescriptionPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const { id } = useParams();

  if (id === undefined) return;

  useEffect(() => {
    dispatch(getCarById(id));
  }, []);

  const carById = useSelector(selectCarById);

  if (carById === null) return;

  return (
    <div className="container">
      <Link to={location.state} className={s.buttonGoBack}>
        Go back
      </Link>
      <DescriptionItem car={carById} />
    </div>
  );
};

export default DescriptionPage;

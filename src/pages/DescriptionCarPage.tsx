import { type FC, useEffect } from "react";
import { useParams } from "react-router";

import DescriptionItem from "../components/DescriptionItem/DescriptionItem.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../redux/store.ts";
import { getCarById } from "../redux/cars/operations.ts";
import { selectCarById } from "../redux/cars/selectors.ts";

const DescriptionPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  if (id === undefined) return;

  useEffect(() => {
    dispatch(getCarById(id));
  }, []);

  const carById = useSelector(selectCarById);

  if (carById === null) return;

  return (
    <div className="container">
      <DescriptionItem car={carById} />
    </div>
  );
};

export default DescriptionPage;

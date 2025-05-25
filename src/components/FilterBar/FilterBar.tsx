import { type FC } from "react";
import { Field, Form, Formik, type FormikHelpers } from "formik";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store.ts";
import { selectBrands } from "../../redux/brands/selectors.ts";
import type { QueryValues } from "../../types/types.ts";
import { getBrands } from "../../redux/brands/operations.ts";
import { useEffect } from "react";
import s from "./FilterBar.module.css";
import { getCars } from "../../redux/cars/operations.ts";
import { setQuery } from "../../redux/cars/slice.ts";

const FilterBar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const brands = useSelector(selectBrands);

  const initialValues: QueryValues = {
    brandOption: "",
    priceOption: "",
    maxMileage: "",
    minMileage: "",
  };

  const handleSubmit = (values: QueryValues) => {
    dispatch(setQuery(values));
    dispatch(getCars(values));
  };

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  const pricesArr: number[] = [];

  for (let i = 10; i <= 200; i += 10) {
    pricesArr.push(i);
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.wrapper}>
          <label className={s.label}>
            Car brand
            <Field className={s.field} as="select" name="brandOption">
              <option value="">Choose a brand</option>
              {brands.map((brand, idx) => (
                <option key={idx} value={brand}>
                  {brand}
                </option>
              ))}
            </Field>
          </label>

          <label className={s.label}>
            Price/ 1 hour
            <Field as="select" className={s.field} name="priceOption">
              <option value="">Choose a price</option>
              {pricesArr.map((price, idx) => (
                <option key={idx} value={price}>
                  {price}
                </option>
              ))}
            </Field>
          </label>

          <label className={s.label}>
            Сar mileage / km
            <div className={s.fieldWrapper}>
              <Field
                className={s.fieldMin}
                type="number"
                name="minMileage"
                placeholder="From"
              ></Field>
              <Field
                className={s.fieldMax}
                type="number"
                name="maxMileage"
                placeholder="To"
              ></Field>
            </div>
          </label>

          <button className={s.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default FilterBar;

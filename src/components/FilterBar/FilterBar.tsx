import { type FC } from "react";
import { Field, Form, Formik, type FormikHelpers } from "formik";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store.ts";
import { selectBrands } from "../../redux/brands/selectors.ts";
import type { QueryValues } from "../../types/types.ts";
import { getBrands, getCars } from "../../redux/brands/operations.ts";
import { useEffect } from "react";

const FilterBar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const brands = useSelector(selectBrands);

  const initialValues: QueryValues = {
    brandOption: "",
    priceOption: "",
    maxMileage: "",
    minMileage: "",
  };

  const handleSubmit = (
    values: QueryValues,
    actions: FormikHelpers<QueryValues>,
  ) => {
    dispatch(getCars(values));
    actions.resetForm();
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
        <Form>
          <label>
            Car brand
            <Field as="select" name="brandOption">
              <option value="">Choose a brand</option>
              {brands.map((brand, idx) => (
                <option key={idx} value={brand}>
                  {brand}
                </option>
              ))}
            </Field>
          </label>

          <label>
            Price/ 1 hour
            <Field as="select" name="priceOption">
              <option value="">Choose a price</option>
              {pricesArr.map((price, idx) => (
                <option key={idx} value={price}>
                  {price}
                </option>
              ))}
            </Field>
          </label>

          <label>
            Сar mileage / km
            <Field type="number" name="minMileage" placeholder="From"></Field>
            <Field type="number" name="maxMileage" placeholder="To"></Field>
          </label>

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>
  );
};

export default FilterBar;

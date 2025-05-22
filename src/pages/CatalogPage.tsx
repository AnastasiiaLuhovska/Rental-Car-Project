import { type FC, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../redux/brands/operations.ts";
import type { AppDispatch } from "../redux/store.ts";
import { selectBrands } from "../redux/brands/selectors.ts";

interface Initial {
  brandOption: string;
}

const CatalogPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const brands = useSelector(selectBrands);

  const initialValues: Initial = {
    brandOption: "",
  };
  const handleSubmit = () => {};

  useEffect(() => {
    dispatch(getBrands());
  }, []);
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field as="select" name="brandOption">
            <option value="">Choose a brand</option>
            {brands.map((brand, idx) => (
              <option key={idx} value={brand}>
                {brand}
              </option>
            ))}
          </Field>
        </Form>
      </Formik>
    </>
  );
};

export default CatalogPage;

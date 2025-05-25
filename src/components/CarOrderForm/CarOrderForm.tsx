import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage, type FormikHelpers } from "formik";
import type { BookingFormValues } from "../../types/types.ts";
import s from "./CarOrderForm.module.css";
import { toast } from "react-hot-toast";

const CarOrderForm = () => {
  const BookingSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    bookingDate: Yup.string(),
    comment: Yup.string().max(500, "Comment is too long!"),
  });

  const initialValues: BookingFormValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const handleSubmit = (
    values: BookingFormValues,
    actions: FormikHelpers<BookingFormValues>,
  ) => {
    console.log(values);
    actions.resetForm();
    toast.success("Booking data was sent successfully");
  };

  return (
    <div className={s.wrapper}>
      <p className={s.heading}>Book your car now</p>
      <p className={s.p}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <Field
            name="name"
            type="text"
            placeholder="Name*"
            className={s.formInput}
          />
          <ErrorMessage name="name" component="p" className={s.errorMessage} />

          <Field
            name="email"
            type="email"
            placeholder="Email*"
            className={s.formInput}
          />
          <ErrorMessage name="email" component="p" className={s.errorMessage} />
          <Field
            name="date"
            type="text"
            placeholder="Booking date"
            className={s.formInput}
          />
          <ErrorMessage
            name="bookingDate"
            component="p"
            className={s.errorMessage}
          />

          <Field
            name="comment"
            as="textarea"
            placeholder="Comment"
            className={s.formTextarea}
          />

          <ErrorMessage
            name="comment"
            component="p"
            className={s.errorMessage}
          />
          <button className={s.button}>Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CarOrderForm;

import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from "yup"
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(3)
        .max(50, "Must be less than 50")
        .required("Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Required"),
    password: Yup.string()
        .min(8)
        .max(50, "Must be less than 50")
        .required("Required"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={RegisterSchema}
        onSubmit={(values, {resetForm}) => {
          dispatch(register(values));
          resetForm();
        }}
        >
        <Form>
          <div>
            <div className={css["register-cont"]}>
              <label htmlFor={nameId}>Username</label>
              <Field type="text" name="name" id={nameId} className={css["input"]}/>
            </div>
            <ErrorMessage name='name' component="div"/>
            <div>
              <label htmlFor={emailId}>Email</label>
              <Field type="text" name="email" id={emailId} className={css["input"]}/>
            </div>
            <ErrorMessage name='email' component="div"/>
            <div>
              <label htmlFor={passwordId}>Password</label>
              <Field type="password" name="password" id={passwordId} className={css["input"]}/>
            </div>
            <ErrorMessage name='password' component="div"/>
          </div>
          <button type="submit" className={css["btn-sub"]}>Register</button>
        </Form>
    </Formik>
  );
};
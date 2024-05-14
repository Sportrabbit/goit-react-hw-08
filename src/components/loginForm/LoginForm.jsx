import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from "yup";
import css from './LoginForm.module.css';
import { useId } from 'react';

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .max(50, "Must be less than 50")
        .required("Required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  return (
    <Formik
    initialValues={{ email:"", password:""}}
    validationSchema={loginSchema}
        onSubmit={(values, {resetForm}) => {
            dispatch(logIn(values));
            resetForm();
        }}
    >
        <Form>
            <div>
                <div className={css["form-cont"]}>
                    <label className={css.label}>Email</label>
                    <Field 
                    type="email"
                    id={emailId}
                    name="email"
                    className={css["field"]}
                    />
                </div>
                <ErrorMessage name='email' component="div" />
            </div>
            <div>
                <div>
                <label className={css.label}>Password</label>
                <Field 
                    type="password"
                    id={passwordId}
                    name="password"
                    className={css["field"]}
                />
                </div>
                <ErrorMessage name='password' component="div" />
            </div>
            <button type="submit" className={css["btn-sub"]}>Log In</button>
        </Form>
    </Formik>
  );
};
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { useId } from "react";
import toast from "react-hot-toast";


const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
        .min(3)
        .max(50, "Must be less than 50")
        .required("Required"),
    number: Yup.string()
        .min(3)
        .max(50, "Must be less than 50")
        .required("Required"),
});
    
const ContactForm = () => {
    const dispatch = useDispatch();

    const nameId = useId();
    const numberId = useId();

    return (
        <div>
            <Formik
            initialValues={{name:"", number:""}}
            validationSchema={FeedbackSchema}
            onSubmit={(values, { resetForm }) => {
                dispatch(addContact(values));
                toast.success("Contact added successfully!");
                resetForm();
            }}
            >
                <Form className={css["form"]}>
                        <div className={css["input-container"]}>
                            <label htmlFor={nameId} className={css["form-label"]}>
                                Name
                            </label>
                            <Field
                            name="name"
                            id={nameId}
                            type="text"
                            className={css["input-field"]}
                            />
                            <ErrorMessage name="name" as="span"/>
                        </div>
                        <div className={css["input-container"]}>
                            <label htmlFor={numberId} className={css["form-label"]}>
                                Number
                            </label>
                            <Field
                            name="number"
                            id={numberId}
                            type="number"
                            className={css["input-field"]}
                            />
                            <ErrorMessage name="number" as="span"/>
                        </div>
                    <button type="submit" className={css["btn-sub"]}>
                        Add contact
                    </button>
                </Form>
            </Formik>
        </div>
    );
}

export default ContactForm;
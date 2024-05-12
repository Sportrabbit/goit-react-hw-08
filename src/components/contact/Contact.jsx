import css from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ id, name, number }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    };
    
    return (
        <div className={css["container-contact"]}>
            <div className={css["contacts"]}>
                <p>
                    <FaUser /> {name}
                </p>
                <p>
                    <FaPhone /> {number}
                </p>
            </div>
            <button onClick={handleDelete} className={css["btn-del"]}>
                Delete
            </button>
        </div>
    );
}
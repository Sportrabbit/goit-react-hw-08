import css from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ id, name, number }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    };
    
    return (
        <div className={css["container-contact"]}>
            <div className={css["contacts"]}>
                <div>
                    <FaUser /> {name}
                </div>
                <div>
                    <FaPhone /> {number}
                </div>
            </div>
            <button onClick={handleDelete} className={css["btn-del"]}>
                Delete
            </button>
        </div>
    );
}
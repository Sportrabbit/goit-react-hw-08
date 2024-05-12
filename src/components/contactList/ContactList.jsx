import css from "./ContactList.module.css";
import Contact from "../contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    return (
        <div className={css["container-contacts"]}>
            {contacts.map(({ id, number, name }) => (
                <Contact
                key={id}
                name={name}
                id={id}
                number={number}
                />
            ))}
        </div>
    );
};

export default ContactList;
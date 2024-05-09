import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';

import css from "./ContactsPage.module.css";

export default function ContactsPage() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <div className={css["contact-cont"]}>
        <h1>PhoneBook</h1>
        <ContactForm />
        <SearchBox/>
        <ContactList />
      </div>
    );
  }
  
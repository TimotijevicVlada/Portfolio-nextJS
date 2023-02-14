import React from 'react';
import css from "./Contact.module.scss";

//components
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    return (
        <div className={css.container}>
            <div className={css.contactWrapper}>
                <h1>Contact me</h1>
                <ContactForm />
            </div>
            <div className={css.mapWrapper}>RIGHT SIDE</div>
        </div>
    )
}

export default Contact;
import React from 'react';
import css from "./Contact.module.scss";

//assets
import UserIcon from "../../svg/about.svg";
import EmailIcon from "../../svg/contact.svg";
import PhoneIcon from "../../svg/phone.svg";
import LocationIcon from "../../svg/location.svg";

//components
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    return (
        <div className={css.container}>
            <div className={css.contactWrapper}>
                <div className={css.contactInner}>
                    <h1>Contact me</h1>
                    <p className={css.subHeader}>
                        {"If you have any request or question, don't hesistate to contact me using bellow form either."}
                    </p>
                    <ContactForm />
                </div>
            </div>
            <div className={css.mapWrapper}>
                <div className={css.contactInfo}>
                    <div className={css.infoItem}>
                        <UserIcon />
                        <h3>Timotijevic Vladimir</h3>
                    </div>
                    <div className={css.infoItem}>
                        <EmailIcon />
                        <h3>timotijevicvlada@gmail.com</h3>
                    </div>
                    <div className={css.infoItem}>
                        <PhoneIcon />
                        <h3>+381631188180</h3>
                    </div>
                    <div className={css.infoItem}>
                        <LocationIcon />
                        <h3>Belgrade, Serbia</h3>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45290.012978549545!2d20.386836722913525!3d44.808813966017375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f72cc82aa5b%3A0x453f3a4dc09e0b2!2z0IjRg9GA0LjRmNCwINCT0LDQs9Cw0YDQuNC90LAgMTQ0LCDQkdC10L7Qs9GA0LDQtA!5e0!3m2!1ssr!2srs!4v1676579386113!5m2!1ssr!2srs" style={{ border: 0 }} loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Contact;
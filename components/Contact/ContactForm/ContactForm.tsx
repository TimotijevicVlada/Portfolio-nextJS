import React, { useState, useRef, useEffect } from 'react';
import css from "./ContactForm.module.scss";
import emailjs from "emailjs-com";

//assets
import ExclamationMark from "svg/exclamation_mark.svg";
import CheckMark from "svg/check-mark.svg";

//types
import { DataProps } from '@/types/contact';

const ContactForm = () => {

    const formRef = useRef() as any;

    const [data, setData] = useState<DataProps>({ name: "", email: "", subject: "", description: "" });
    const [errors, setErrors] = useState<DataProps>({ name: "", email: "", subject: "", description: "" });
    const [changeError, setChangeError] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    useEffect(() => {
        if (!changeError) return;
        let tempErr = errors as DataProps;
        if (data.name.trim()) tempErr = { ...tempErr, name: "" }
        if (data.email.trim()) tempErr = { ...tempErr, email: "" }
        if (data.subject.trim()) tempErr = { ...tempErr, subject: "" }
        if (data.description.trim()) tempErr = { ...tempErr, description: "" }
        setErrors(tempErr);
        setChangeError(false);
    }, [changeError])

    const handleErrors = () => {
        let tempErorrs = {} as DataProps;
        if (!data.name.trim()) tempErorrs = { ...tempErorrs, name: "Name is required" }
        if (!data.email.trim()) tempErorrs = { ...tempErorrs, email: "Email is required" }
        if (!data.subject.trim()) tempErorrs = { ...tempErorrs, subject: "Subject is required" }
        if (!data.description.trim()) tempErorrs = { ...tempErorrs, description: "Description is required" }
        setErrors(tempErorrs);
        const checkErrors = Object.values(tempErorrs);
        return !!checkErrors.length;
    }

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hasErrors = handleErrors();
        console.log("HAS ERRORS", hasErrors);
        if (hasErrors) return;
        emailjs.sendForm("service_n58a1zi", "template_95entcp", formRef.current, "user_jWZd2H9LGZAs9mcY4SUYH")
            .then((result) => {
                setMessageSent(true);
                const timeout = setTimeout(() => {
                    setMessageSent(false);
                }, 3000)
                return () => clearTimeout(timeout)
            },
                (error) => {
                    console.log(error.text);
                }
            );
        setData({ name: "", email: "", subject: "", description: "" });
    };

    return (
        <form className={css.form} onSubmit={handleSubmit} ref={formRef}>
            <div className={css.personalInfoWrapper}>
                <div className={css.nameWrapper}>
                    <input
                        type="text"
                        name="user_name"
                        placeholder='Name'
                        value={data.name}
                        onChange={(e) => {
                            setData((prev) => ({ ...prev, name: e.target.value }));
                            if (errors.name) setChangeError(true);
                        }}
                    />
                    {errors.name && <p className={css.error}>{errors.name}</p>}
                    {errors.name && <ExclamationMark className={css.exclamationMark} />}
                </div>
                <div className={css.emailWrapper}>
                    <input
                        type="text"
                        name="user_email"
                        placeholder='Email'
                        value={data.email}
                        onChange={(e) => {
                            setData((prev) => ({ ...prev, email: e.target.value }));
                            if (errors.email) setChangeError(true);
                        }}
                    />
                    {errors.email && <p className={css.error}>{errors.email}</p>}
                    {errors.email && <ExclamationMark className={css.exclamationMark} />}
                </div>
            </div>
            <div className={css.subjectWrapper}>
                <input
                    type="text"
                    name="user_subject"
                    placeholder='Subject'
                    value={data.subject}
                    onChange={(e) => {
                        setData((prev) => ({ ...prev, subject: e.target.value }));
                        if (errors.subject) setChangeError(true);
                    }}
                />
                {errors.subject && <p className={css.error}>{errors.subject}</p>}
                {errors.subject && <ExclamationMark className={css.exclamationMark} />}
            </div>
            <div className={css.textareaWrapper}>
                <textarea
                    name="user_msg"
                    placeholder=' Write your comment...'
                    value={data.description}
                    onChange={(e) => {
                        setData((prev) => ({ ...prev, description: e.target.value }));
                        if (errors.description) setChangeError(true);
                    }}
                />
                {errors.description && <p className={css.error}>{errors.description}</p>}
                {errors.description && <ExclamationMark className={css.exclamationMark} />}
            </div>
            <div className={css.buttonWrapper}>
                <button type='submit'>Send</button>
            </div>
            {messageSent &&
                <div className={css.messageSent}>
                    <CheckMark />
                    Sent
                </div>
            }
        </form>
    )
}

export default ContactForm;
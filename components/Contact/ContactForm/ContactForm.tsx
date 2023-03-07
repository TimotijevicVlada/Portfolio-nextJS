import React, { useState, useRef, useEffect } from 'react';
import css from "./ContactForm.module.scss";
import emailjs from "emailjs-com";

//types
import { DataProps } from '@/types/contact';

//mui
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionRight(props: TransitionProps) {
    return <Slide {...props} direction="right" />;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactForm = () => {

    const formRef = useRef() as any;

    const [data, setData] = useState<DataProps>({ name: "", email: "", subject: "", description: "" });
    const [errors, setErrors] = useState<DataProps>({ name: "", email: "", subject: "", description: "" });
    const [changeError, setChangeError] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const [errorSnackbar, setErrorSnackbar] = useState(false);
    const [transition, setTransition] = useState<React.ComponentType<TransitionProps> | undefined>(undefined);

    const handleClick = (Transition: React.ComponentType<TransitionProps>) => () => {
        setTransition(() => Transition);
    };

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
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email))) {
            tempErorrs = { ...tempErorrs, email: "Email is incorrect" }
        } else if (!data.email.trim()) {
            tempErorrs = { ...tempErorrs, email: "Email is required" }
        }
        if (!data.subject.trim()) tempErorrs = { ...tempErorrs, subject: "Subject is required" }
        if (!data.description.trim()) tempErorrs = { ...tempErorrs, description: "Description is required" }
        setErrors(tempErorrs);
        const checkErrors = Object.values(tempErorrs);
        if (!!checkErrors.length) {
            handleClick(TransitionRight);
            setErrorSnackbar(true);
        }
        return !!checkErrors.length;
    }

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hasErrors = handleErrors();
        if (hasErrors) return;
        emailjs.sendForm("service_n58a1zi", "template_95entcp", formRef.current, "user_jWZd2H9LGZAs9mcY4SUYH")
            .then((result) => {
                setMessageSent(true);
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
            </div>
            <div className={css.buttonWrapper}>
                <button type='submit'>Send</button>
            </div>
            <Snackbar
                open={errorSnackbar}
                onClose={() => setErrorSnackbar(false)}
                TransitionComponent={transition}
                autoHideDuration={4000}
            >
                <Alert
                    onClose={() => setErrorSnackbar(false)}
                    severity="error"
                    sx={{ width: '100%' }}
                >
                    All inputs are required
                </Alert>
            </Snackbar>

            <Snackbar
                open={messageSent}
                onClose={() => setMessageSent(false)}
                TransitionComponent={transition}
                autoHideDuration={4000}
            >
                <Alert
                    onClose={() => setMessageSent(false)}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    Message successfully sent
                </Alert>
            </Snackbar>
        </form>
    )
}

export default ContactForm;
import React from 'react';
import css from "./Contact.module.scss";

const Contact = () => {
    return (
        <div className={css.container}>
            <div className={css.contactWrapper}>
                <form>
                    <div className={css.personalInfoWrapper}>
                        <div className={css.nameWrapper}>
                            <input
                                type="text"
                                placeholder='Name'
                            />
                        </div>
                        <div className={css.emailWrapper}>
                            <input
                                type="text"
                                placeholder='Email'
                            />
                        </div>
                    </div>
                    <div className={css.subjectWrapper}>
                        <input
                            type="text"
                            placeholder='Subject'
                        />
                    </div>
                    <div className={css.textareaWrapper}>
                        <textarea
                            placeholder=' Write your comment...'
                        />
                    </div>
                    <div className={css.buttonWrapper}>
                        <button type='submit'>Send</button>
                    </div>
                </form>
            </div>
            <div className={css.mapWrapper}>RIGHT SIDE</div>
        </div>
    )
}

export default Contact;
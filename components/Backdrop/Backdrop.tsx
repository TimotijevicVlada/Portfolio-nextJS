import React from 'react';
import css from "./Backdrop.module.scss";

//types
import { BackdropProps } from '@/types/backdrop';

const Backdrop: React.FC<BackdropProps> = ({ children, closeAction }) => {
    return (
        <div className={css.backdrop} onClick={closeAction}>
            {children}
        </div>
    )
}

export default Backdrop;
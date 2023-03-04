import React from 'react';
import css from "./Backdrop.module.scss";

//mui
import Fade from '@mui/material/Fade';

//types
import { BackdropProps } from '@/types/backdrop';

const Backdrop: React.FC<BackdropProps> = ({ children, closeAction }) => {
    return (
        <Fade in={true}>
            <div className={css.backdrop} onClick={closeAction}>
                {children}
            </div>
        </Fade>

    )
}

export default Backdrop;
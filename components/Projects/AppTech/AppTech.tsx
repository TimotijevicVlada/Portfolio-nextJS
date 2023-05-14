import React from 'react';
import css from "./AppTech.module.scss";

//types
import { AppTechProps } from '@/types/projects';

const AppTech: React.FC<AppTechProps> = ({ children, name, index }) => {

    return (
        <div
            className={css.icon}
            style={{ animationDelay: `${index / 10}s` }}
        >
            {children}
            <span>{name}</span>
        </div>
    )
}

export default AppTech
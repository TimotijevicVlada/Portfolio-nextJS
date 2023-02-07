import React, { useState } from 'react';
import css from "./HeaderIcon.module.scss";

//types
import { HeaderIconProps } from '@/types/header';

const HeaderIcon: React.FC<HeaderIconProps> = ({ item }) => {


    return (
        <div className={css.container}>
            <span>{item.name}</span>
            {item.icon}
        </div>
    )
}

export default HeaderIcon;